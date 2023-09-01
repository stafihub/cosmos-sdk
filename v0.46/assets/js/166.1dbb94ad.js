(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{810:function(e,a,t){"use strict";t.r(a);var o=t(1),l=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),t("h2",{attrs:{id:"authorization-and-grant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authorization-and-grant"}},[e._v("#")]),e._v(" Authorization and Grant")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("x/authz")]),e._v(" module defines interfaces and messages grant authorizations to perform actions\non behalf of one account to other accounts. The design is defined in the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-030-authz-module.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR 030"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("A "),t("em",[e._v("grant")]),e._v(" is an allowance to execute a Msg by the grantee on behalf of the granter.\nAuthorization is an interface that must be implemented by a concrete authorization logic to validate and execute grants. Authorizations are extensible and can be defined for any Msg service method even outside of the module where the Msg method is defined. See the "),t("code",[e._v("SendAuthorization")]),e._v(" example in the next section for more details.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" The authz module is different from the "),t("RouterLink",{attrs:{to:"/modules/modules/auth/"}},[e._v("auth (authentication)")]),e._v(" module that is responsible for specifying the base transaction and account types.")],1),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBBdXRob3JpemF0aW9uIGludGVyZmFjZSB7Cglwcm90by5NZXNzYWdlCgoJLy8gTXNnVHlwZVVSTCByZXR1cm5zIHRoZSBmdWxseS1xdWFsaWZpZWQgTXNnIHNlcnZpY2UgbWV0aG9kIFVSTCAoYXMgZGVzY3JpYmVkIGluIEFEUiAwMzEpLAoJLy8gd2hpY2ggd2lsbCBwcm9jZXNzIGFuZCBhY2NlcHQgb3IgcmVqZWN0IGEgcmVxdWVzdC4KCU1zZ1R5cGVVUkwoKSBzdHJpbmcKCgkvLyBBY2NlcHQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgZ3JhbnQgcGVybWl0cyB0aGUgcHJvdmlkZWQgc2RrLk1zZyB0byBiZSBwZXJmb3JtZWQsCgkvLyBhbmQgaWYgc28gcHJvdmlkZXMgYW4gdXBncmFkZWQgYXV0aG9yaXphdGlvbiBpbnN0YW5jZS4KCUFjY2VwdChjdHggc2RrLkNvbnRleHQsIG1zZyBzZGsuTXNnKSAoQWNjZXB0UmVzcG9uc2UsIGVycm9yKQoKCS8vIFZhbGlkYXRlQmFzaWMgZG9lcyBhIHNpbXBsZSB2YWxpZGF0aW9uIGNoZWNrIHRoYXQKCS8vIGRvZXNuJ3QgcmVxdWlyZSBhY2Nlc3MgdG8gYW55IG90aGVyIGluZm9ybWF0aW9uLgoJVmFsaWRhdGVCYXNpYygpIGVycm9yCn0="}})],1),e._v(" "),t("h2",{attrs:{id:"built-in-authorizations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#built-in-authorizations"}},[e._v("#")]),e._v(" Built-in Authorizations")]),e._v(" "),t("p",[e._v("The Cosmos SDK "),t("code",[e._v("x/authz")]),e._v(" module comes with following authorization types:")]),e._v(" "),t("h3",{attrs:{id:"genericauthorization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genericauthorization"}},[e._v("#")]),e._v(" GenericAuthorization")]),e._v(" "),t("p",[t("code",[e._v("GenericAuthorization")]),e._v(" implements the "),t("code",[e._v("Authorization")]),e._v(" interface that gives unrestricted permission to execute the provided Msg on behalf of granter's account.")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gR2VuZXJpY0F1dGhvcml6YXRpb24gZ2l2ZXMgdGhlIGdyYW50ZWUgdW5yZXN0cmljdGVkIHBlcm1pc3Npb25zIHRvIGV4ZWN1dGUKLy8gdGhlIHByb3ZpZGVkIG1ldGhvZCBvbiBiZWhhbGYgb2YgdGhlIGdyYW50ZXIncyBhY2NvdW50LgptZXNzYWdlIEdlbmVyaWNBdXRob3JpemF0aW9uIHsKICBvcHRpb24gKGNvc21vc19wcm90by5pbXBsZW1lbnRzX2ludGVyZmFjZSkgPSAmcXVvdDtBdXRob3JpemF0aW9uJnF1b3Q7OwoKICAvLyBNc2csIGlkZW50aWZpZWQgYnkgaXQncyB0eXBlIFVSTCwgdG8gZ3JhbnQgdW5yZXN0cmljdGVkIHBlcm1pc3Npb25zIHRvIGV4ZWN1dGUKICBzdHJpbmcgbXNnID0gMTsKfQ=="}})],1),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTXNnVHlwZVVSTCBpbXBsZW1lbnRzIEF1dGhvcml6YXRpb24uTXNnVHlwZVVSTC4KZnVuYyAoYSBHZW5lcmljQXV0aG9yaXphdGlvbikgTXNnVHlwZVVSTCgpIHN0cmluZyB7CglyZXR1cm4gYS5Nc2cKfQoKLy8gQWNjZXB0IGltcGxlbWVudHMgQXV0aG9yaXphdGlvbi5BY2NlcHQuCmZ1bmMgKGEgR2VuZXJpY0F1dGhvcml6YXRpb24pIEFjY2VwdChjdHggc2RrLkNvbnRleHQsIG1zZyBzZGsuTXNnKSAoQWNjZXB0UmVzcG9uc2UsIGVycm9yKSB7CglyZXR1cm4gQWNjZXB0UmVzcG9uc2V7QWNjZXB0OiB0cnVlfSwgbmlsCn0KCi8vIFZhbGlkYXRlQmFzaWMgaW1wbGVtZW50cyBBdXRob3JpemF0aW9uLlZhbGlkYXRlQmFzaWMuCmZ1bmMgKGEgR2VuZXJpY0F1dGhvcml6YXRpb24pIFZhbGlkYXRlQmFzaWMoKSBlcnJvciB7CglyZXR1cm4gbmlsCn0="}})],1),e._v(" "),t("ul",[t("li",[t("code",[e._v("msg")]),e._v(" stores Msg type URL.")])]),e._v(" "),t("h3",{attrs:{id:"sendauthorization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sendauthorization"}},[e._v("#")]),e._v(" SendAuthorization")]),e._v(" "),t("p",[t("code",[e._v("SendAuthorization")]),e._v(" implements the "),t("code",[e._v("Authorization")]),e._v(" interface for the "),t("code",[e._v("cosmos.bank.v1beta1.MsgSend")]),e._v(" Msg. It takes a (positive) "),t("code",[e._v("SpendLimit")]),e._v(" that specifies the maximum amount of tokens the grantee can spend. The "),t("code",[e._v("SpendLimit")]),e._v(" is updated as the tokens are spent.")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gU2VuZEF1dGhvcml6YXRpb24gYWxsb3dzIHRoZSBncmFudGVlIHRvIHNwZW5kIHVwIHRvIHNwZW5kX2xpbWl0IGNvaW5zIGZyb20KLy8gdGhlIGdyYW50ZXIncyBhY2NvdW50LgovLwovLyBTaW5jZTogY29zbW9zLXNkayAwLjQzCm1lc3NhZ2UgU2VuZEF1dGhvcml6YXRpb24gewogIG9wdGlvbiAoY29zbW9zX3Byb3RvLmltcGxlbWVudHNfaW50ZXJmYWNlKSA9ICZxdW90O0F1dGhvcml6YXRpb24mcXVvdDs7CgogIHJlcGVhdGVkIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBzcGVuZF9saW1pdCA9IDEKICAgICAgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsIChnb2dvcHJvdG8uY2FzdHJlcGVhdGVkKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnMmcXVvdDtdOwp9"}})],1),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQWNjZXB0IGltcGxlbWVudHMgQXV0aG9yaXphdGlvbi5BY2NlcHQuCmZ1bmMgKGEgU2VuZEF1dGhvcml6YXRpb24pIEFjY2VwdChjdHggc2RrLkNvbnRleHQsIG1zZyBzZGsuTXNnKSAoYXV0aHouQWNjZXB0UmVzcG9uc2UsIGVycm9yKSB7CgltU2VuZCwgb2sgOj0gbXNnLigqTXNnU2VuZCkKCWlmICFvayB7CgkJcmV0dXJuIGF1dGh6LkFjY2VwdFJlc3BvbnNle30sIHNka2Vycm9ycy5FcnJJbnZhbGlkVHlwZS5XcmFwKCZxdW90O3R5cGUgbWlzbWF0Y2gmcXVvdDspCgl9CglsaW1pdExlZnQsIGlzTmVnYXRpdmUgOj0gYS5TcGVuZExpbWl0LlNhZmVTdWIobVNlbmQuQW1vdW50Li4uKQoJaWYgaXNOZWdhdGl2ZSB7CgkJcmV0dXJuIGF1dGh6LkFjY2VwdFJlc3BvbnNle30sIHNka2Vycm9ycy5FcnJJbnN1ZmZpY2llbnRGdW5kcy5XcmFwZigmcXVvdDtyZXF1ZXN0ZWQgYW1vdW50IGlzIG1vcmUgdGhhbiBzcGVuZCBsaW1pdCZxdW90OykKCX0KCWlmIGxpbWl0TGVmdC5Jc1plcm8oKSB7CgkJcmV0dXJuIGF1dGh6LkFjY2VwdFJlc3BvbnNle0FjY2VwdDogdHJ1ZSwgRGVsZXRlOiB0cnVlfSwgbmlsCgl9CgoJcmV0dXJuIGF1dGh6LkFjY2VwdFJlc3BvbnNle0FjY2VwdDogdHJ1ZSwgRGVsZXRlOiBmYWxzZSwgVXBkYXRlZDogJmFtcDtTZW5kQXV0aG9yaXphdGlvbntTcGVuZExpbWl0OiBsaW1pdExlZnR9fSwgbmlsCn0="}})],1),e._v(" "),t("ul",[t("li",[t("code",[e._v("spend_limit")]),e._v(" keeps track of how many coins are left in the authorization.")])]),e._v(" "),t("h3",{attrs:{id:"stakeauthorization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stakeauthorization"}},[e._v("#")]),e._v(" StakeAuthorization")]),e._v(" "),t("p",[t("code",[e._v("StakeAuthorization")]),e._v(" implements the "),t("code",[e._v("Authorization")]),e._v(" interface for messages in the "),t("a",{attrs:{href:"https://docs.cosmos.network/v0.44/modules/staking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("staking module"),t("OutboundLink")],1),e._v(". It takes an "),t("code",[e._v("AuthorizationType")]),e._v(" to specify whether you want to authorise delegating, undelegating or redelegating (i.e. these have to be authorised seperately). It also takes a required "),t("code",[e._v("MaxTokens")]),e._v(" that keeps track of a limit to the amount of tokens that can be delegated/undelegated/redelegated. If left empty, the amount is unlimited. Additionally, this Msg takes an "),t("code",[e._v("AllowList")]),e._v(" or a "),t("code",[e._v("DenyList")]),e._v(", which allows you to select which validators you allow or deny grantees to stake with.")]),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gU3Rha2VBdXRob3JpemF0aW9uIGRlZmluZXMgYXV0aG9yaXphdGlvbiBmb3IgZGVsZWdhdGUvdW5kZWxlZ2F0ZS9yZWRlbGVnYXRlLgovLwovLyBTaW5jZTogY29zbW9zLXNkayAwLjQzCm1lc3NhZ2UgU3Rha2VBdXRob3JpemF0aW9uIHsKICBvcHRpb24gKGNvc21vc19wcm90by5pbXBsZW1lbnRzX2ludGVyZmFjZSkgPSAmcXVvdDtBdXRob3JpemF0aW9uJnF1b3Q7OwoKICAvLyBtYXhfdG9rZW5zIHNwZWNpZmllcyB0aGUgbWF4aW11bSBhbW91bnQgb2YgdG9rZW5zIGNhbiBiZSBkZWxlZ2F0ZSB0byBhIHZhbGlkYXRvci4gSWYgaXQgaXMKICAvLyBlbXB0eSwgdGhlcmUgaXMgbm8gc3BlbmQgbGltaXQgYW5kIGFueSBhbW91bnQgb2YgY29pbnMgY2FuIGJlIGRlbGVnYXRlZC4KICBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gbWF4X3Rva2VucyA9IDEgWyhnb2dvcHJvdG8uY2FzdHJlcGVhdGVkKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbiZxdW90O107CiAgLy8gdmFsaWRhdG9ycyBpcyB0aGUgb25lb2YgdGhhdCByZXByZXNlbnRzIGVpdGhlciBhbGxvd19saXN0IG9yIGRlbnlfbGlzdAogIG9uZW9mIHZhbGlkYXRvcnMgewogICAgLy8gYWxsb3dfbGlzdCBzcGVjaWZpZXMgbGlzdCBvZiB2YWxpZGF0b3IgYWRkcmVzc2VzIHRvIHdob20gZ3JhbnRlZSBjYW4gZGVsZWdhdGUgdG9rZW5zIG9uIGJlaGFsZiBvZiBncmFudGVyJ3MKICAgIC8vIGFjY291bnQuCiAgICBWYWxpZGF0b3JzIGFsbG93X2xpc3QgPSAyOwogICAgLy8gZGVueV9saXN0IHNwZWNpZmllcyBsaXN0IG9mIHZhbGlkYXRvciBhZGRyZXNzZXMgdG8gd2hvbSBncmFudGVlIGNhbiBub3QgZGVsZWdhdGUgdG9rZW5zLgogICAgVmFsaWRhdG9ycyBkZW55X2xpc3QgPSAzOwogIH0KICAvLyBWYWxpZGF0b3JzIGRlZmluZXMgbGlzdCBvZiB2YWxpZGF0b3IgYWRkcmVzc2VzLgogIG1lc3NhZ2UgVmFsaWRhdG9ycyB7CiAgICByZXBlYXRlZCBzdHJpbmcgYWRkcmVzcyA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKICB9CiAgLy8gYXV0aG9yaXphdGlvbl90eXBlIGRlZmluZXMgb25lIG9mIEF1dGhvcml6YXRpb25UeXBlLgogIEF1dGhvcml6YXRpb25UeXBlIGF1dGhvcml6YXRpb25fdHlwZSA9IDQ7Cn0="}})],1),e._v(" "),t("p",[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3U3Rha2VBdXRob3JpemF0aW9uIGNyZWF0ZXMgYSBuZXcgU3Rha2VBdXRob3JpemF0aW9uIG9iamVjdC4KZnVuYyBOZXdTdGFrZUF1dGhvcml6YXRpb24oYWxsb3dlZCBbXXNkay5WYWxBZGRyZXNzLCBkZW5pZWQgW11zZGsuVmFsQWRkcmVzcywgYXV0aHpUeXBlIEF1dGhvcml6YXRpb25UeXBlLCBhbW91bnQgKnNkay5Db2luKSAoKlN0YWtlQXV0aG9yaXphdGlvbiwgZXJyb3IpIHsKCWFsbG93ZWRWYWxpZGF0b3JzLCBkZW5pZWRWYWxpZGF0b3JzLCBlcnIgOj0gdmFsaWRhdGVBbGxvd0FuZERlbnlWYWxpZGF0b3JzKGFsbG93ZWQsIGRlbmllZCkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIGVycgoJfQoKCWEgOj0gU3Rha2VBdXRob3JpemF0aW9ue30KCWlmIGFsbG93ZWRWYWxpZGF0b3JzICE9IG5pbCB7CgkJYS5WYWxpZGF0b3JzID0gJmFtcDtTdGFrZUF1dGhvcml6YXRpb25fQWxsb3dMaXN0e0FsbG93TGlzdDogJmFtcDtTdGFrZUF1dGhvcml6YXRpb25fVmFsaWRhdG9yc3tBZGRyZXNzOiBhbGxvd2VkVmFsaWRhdG9yc319Cgl9IGVsc2UgewoJCWEuVmFsaWRhdG9ycyA9ICZhbXA7U3Rha2VBdXRob3JpemF0aW9uX0RlbnlMaXN0e0RlbnlMaXN0OiAmYW1wO1N0YWtlQXV0aG9yaXphdGlvbl9WYWxpZGF0b3Jze0FkZHJlc3M6IGRlbmllZFZhbGlkYXRvcnN9fQoJfQoKCWlmIGFtb3VudCAhPSBuaWwgewoJCWEuTWF4VG9rZW5zID0gYW1vdW50Cgl9CglhLkF1dGhvcml6YXRpb25UeXBlID0gYXV0aHpUeXBlCgoJcmV0dXJuICZhbXA7YSwgbmlsCn0="}})],1),e._v(" "),t("h2",{attrs:{id:"gas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gas"}},[e._v("#")]),e._v(" Gas")]),e._v(" "),t("p",[e._v("In order to prevent DoS attacks, granting "),t("code",[e._v("StakeAuthorization")]),e._v("s with "),t("code",[e._v("x/authz")]),e._v(" incurs gas. "),t("code",[e._v("StakeAuthorization")]),e._v(" allows you to authorize another account to delegate, undelegate, or redelegate to validators. The authorizer can define a list of validators they allow or deny delegations to. The Cosmos SDK iterates over these lists and charge 10 gas for each validator in both of the lists.")]),e._v(" "),t("p",[e._v("Since the state maintaining a list for granter, grantee pair with same expiration, we are iterating over the list to remove the grant (incase of any revoke of paritcular "),t("code",[e._v("msgType")]),e._v(") from the list and we are charging 20 gas per iteration.")])])}),[],!1,null,null,null);a.default=l.exports}}]);