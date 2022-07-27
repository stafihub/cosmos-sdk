package cli_test

import (
	"context"
	"fmt"
	"io"

	abci "github.com/tendermint/tendermint/abci/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/bank/client/cli"
	"github.com/cosmos/cosmos-sdk/x/bank/types"
)

func (s *CLITestSuite) TestSendTxCmd() {
	accounts := s.createKeyringAccounts(1)
	cmd := cli.NewSendTxCmd()
	cmd.SetOutput(io.Discard)

	extraArgs := []string{
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("photon", sdk.NewInt(10))).String()),
		fmt.Sprintf("--%s=test-chain", flags.FlagChainID),
	}

	testCases := []struct {
		name      string
		ctxGen    func() client.Context
		from, to  sdk.AccAddress
		amount    sdk.Coins
		extraArgs []string
		expectErr bool
	}{
		{
			"valid transaction",
			func() client.Context {
				return s.baseCtx
			},
			accounts[0].address,
			accounts[0].address,
			sdk.NewCoins(
				sdk.NewCoin("stake", sdk.NewInt(10)),
				sdk.NewCoin("photon", sdk.NewInt(40)),
			),
			extraArgs,
			false,
		},
		{
			"invalid to address",
			func() client.Context {
				return s.baseCtx
			},
			accounts[0].address,
			sdk.AccAddress{},
			sdk.NewCoins(
				sdk.NewCoin("stake", sdk.NewInt(10)),
				sdk.NewCoin("photon", sdk.NewInt(40)),
			),
			extraArgs,
			true,
		},
		{
			"invalid coins",
			func() client.Context {
				return s.baseCtx
			},
			accounts[0].address,
			accounts[0].address,
			nil,
			extraArgs,
			true,
		},
	}

	for _, tc := range testCases {
		tc := tc
		s.Run(tc.name, func() {
			ctx := svrcmd.CreateExecuteContext(context.Background())

			cmd.SetContext(ctx)
			cmd.SetArgs(append([]string{tc.from.String(), tc.to.String(), tc.amount.String()}, tc.extraArgs...))

			s.Require().NoError(client.SetCmdClientContextHandler(tc.ctxGen(), cmd))

			err := cmd.Execute()
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err)
			}
		})
	}
}

func (s *CLITestSuite) TestMultiSendTxCmd() {
	accounts := s.createKeyringAccounts(3)

	cmd := cli.NewMultiSendTxCmd()
	cmd.SetOutput(io.Discard)

	extraArgs := []string{
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
		fmt.Sprintf("--%s=true", flags.FlagSkipConfirmation),
		fmt.Sprintf("--%s=%s", flags.FlagBroadcastMode, flags.BroadcastSync),
		fmt.Sprintf("--%s=%s", flags.FlagFees, sdk.NewCoins(sdk.NewCoin("photon", sdk.NewInt(10))).String()),
		fmt.Sprintf("--%s=test-chain", flags.FlagChainID),
	}

	testCases := []struct {
		name      string
		ctxGen    func() client.Context
		from      string
		to        []string
		amount    sdk.Coins
		extraArgs []string
		expectErr bool
	}{
		{
			"valid transaction",
			func() client.Context {
				return s.baseCtx
			},
			accounts[0].address.String(),
			[]string{
				accounts[1].address.String(),
				accounts[2].address.String(),
			},
			sdk.NewCoins(
				sdk.NewCoin("stake", sdk.NewInt(10)),
				sdk.NewCoin("photon", sdk.NewInt(40)),
			),
			extraArgs,
			false,
		},
		{
			"invalid from address",
			func() client.Context {
				return s.baseCtx
			},
			"foo",
			[]string{
				accounts[1].address.String(),
				accounts[2].address.String(),
			},
			sdk.NewCoins(
				sdk.NewCoin("stake", sdk.NewInt(10)),
				sdk.NewCoin("photon", sdk.NewInt(40)),
			),
			extraArgs,
			true,
		},
		{
			"invalid recipients",
			func() client.Context {
				return s.baseCtx
			},
			accounts[0].address.String(),
			[]string{
				accounts[1].address.String(),
				"bar",
			},
			sdk.NewCoins(
				sdk.NewCoin("stake", sdk.NewInt(10)),
				sdk.NewCoin("photon", sdk.NewInt(40)),
			),
			extraArgs,
			true,
		},
		{
			"invalid amount",
			func() client.Context {
				return s.baseCtx
			},
			accounts[0].address.String(),
			[]string{
				accounts[1].address.String(),
				accounts[2].address.String(),
			},
			nil,
			extraArgs,
			true,
		},
	}

	for _, tc := range testCases {
		tc := tc
		s.Run(tc.name, func() {
			ctx := svrcmd.CreateExecuteContext(context.Background())

			var args []string
			args = append(args, tc.from)
			args = append(args, tc.to...)
			args = append(args, tc.amount.String())
			args = append(args, tc.extraArgs...)

			cmd.SetContext(ctx)
			cmd.SetArgs(args)

			s.Require().NoError(client.SetCmdClientContextHandler(tc.ctxGen(), cmd))

			err := cmd.Execute()
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err)
			}
		})
	}
}

func (s *CLITestSuite) TestGetBalancesCmd() {
	accounts := s.createKeyringAccounts(1)

	cmd := cli.GetBalancesCmd()
	cmd.SetOutput(io.Discard)

	testCases := []struct {
		name      string
		ctxGen    func() client.Context
		args      []string
		expectErr bool
	}{
		{
			"valid query",
			func() client.Context {
				return s.baseCtx
			},
			[]string{
				accounts[0].address.String(),
			},
			false,
		},
		{
			"valid query with denom",
			func() client.Context {
				bz, _ := s.encCfg.Codec.Marshal(&types.QueryBalanceResponse{
					Balance: &sdk.Coin{},
				})
				c := newMockTendermintRPC(abci.ResponseQuery{
					Value: bz,
				})
				return s.baseCtx.WithClient(c)
			},
			[]string{
				accounts[0].address.String(),
				fmt.Sprintf("--%s=photon", cli.FlagDenom),
			},
			false,
		},
		{
			"invalid address",
			func() client.Context {
				return s.baseCtx
			},
			[]string{
				"foo",
			},
			true,
		},
		{
			"invalid denom",
			func() client.Context {
				c := newMockTendermintRPC(abci.ResponseQuery{
					Code: 1,
				})
				return s.baseCtx.WithClient(c)
			},
			[]string{
				accounts[0].address.String(),
				fmt.Sprintf("--%s=foo", cli.FlagDenom),
			},
			true,
		},
	}

	for _, tc := range testCases {
		tc := tc

		s.Run(tc.name, func() {
			ctx := svrcmd.CreateExecuteContext(context.Background())

			cmd.SetContext(ctx)
			cmd.SetArgs(tc.args)

			s.Require().NoError(client.SetCmdClientContextHandler(tc.ctxGen(), cmd))

			err := cmd.Execute()
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err)
			}
		})
	}
}

func (s *CLITestSuite) TestGetCmdDenomsMetadata() {
	cmd := cli.GetCmdDenomsMetadata()
	cmd.SetOutput(io.Discard)

	testCases := []struct {
		name      string
		ctxGen    func() client.Context
		args      []string
		expectErr bool
	}{
		{
			"valid query",
			func() client.Context {
				return s.baseCtx
			},
			[]string{},
			false,
		},
		{
			"valid query with denom",
			func() client.Context {
				return s.baseCtx
			},
			[]string{
				fmt.Sprintf("--%s=photon", cli.FlagDenom),
			},
			false,
		},
		{
			"invalid query with denom",
			func() client.Context {
				c := newMockTendermintRPC(abci.ResponseQuery{
					Code: 1,
				})
				return s.baseCtx.WithClient(c)
			},
			[]string{
				fmt.Sprintf("--%s=foo", cli.FlagDenom),
			},
			true,
		},
	}

	for _, tc := range testCases {
		tc := tc

		s.Run(tc.name, func() {
			ctx := svrcmd.CreateExecuteContext(context.Background())

			cmd.SetContext(ctx)
			cmd.SetArgs(tc.args)

			s.Require().NoError(client.SetCmdClientContextHandler(tc.ctxGen(), cmd))

			err := cmd.Execute()
			if tc.expectErr {
				s.Require().Error(err)
			} else {
				s.Require().NoError(err)
			}
		})
	}
}
