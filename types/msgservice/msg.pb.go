// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cosmos/msg/v1/msg.proto

package msgservice

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	descriptorpb "google.golang.org/protobuf/types/descriptorpb"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

var E_Service = &proto.ExtensionDesc{
	ExtendedType:  (*descriptorpb.ServiceOptions)(nil),
	ExtensionType: (*bool)(nil),
	Field:         11110001,
	Name:          "cosmos.msg.v1.service",
	Tag:           "varint,11110001,opt,name=service",
	Filename:      "cosmos/msg/v1/msg.proto",
}

var E_Signer = &proto.ExtensionDesc{
	ExtendedType:  (*descriptorpb.MessageOptions)(nil),
	ExtensionType: ([]string)(nil),
	Field:         11110000,
	Name:          "cosmos.msg.v1.signer",
	Tag:           "bytes,11110000,rep,name=signer",
	Filename:      "cosmos/msg/v1/msg.proto",
}

func init() {
	proto.RegisterExtension(E_Service)
	proto.RegisterExtension(E_Signer)
}

func init() { proto.RegisterFile("cosmos/msg/v1/msg.proto", fileDescriptor_5c08b83ea858d203) }

var fileDescriptor_5c08b83ea858d203 = []byte{
	// 217 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4f, 0xce, 0x2f, 0xce,
	0xcd, 0x2f, 0xd6, 0xcf, 0x2d, 0x4e, 0xd7, 0x2f, 0x33, 0x04, 0x51, 0x7a, 0x05, 0x45, 0xf9, 0x25,
	0xf9, 0x42, 0xbc, 0x10, 0x09, 0x3d, 0x90, 0x48, 0x99, 0xa1, 0x94, 0x42, 0x7a, 0x7e, 0x7e, 0x7a,
	0x4e, 0xaa, 0x3e, 0x58, 0x32, 0xa9, 0x34, 0x4d, 0x3f, 0x25, 0xb5, 0x38, 0xb9, 0x28, 0xb3, 0xa0,
	0x24, 0xbf, 0x08, 0xa2, 0xc1, 0xca, 0x86, 0x8b, 0xbd, 0x38, 0xb5, 0xa8, 0x2c, 0x33, 0x39, 0x55,
	0x48, 0x5e, 0x0f, 0xa2, 0x5a, 0x0f, 0xa6, 0x5a, 0x2f, 0x18, 0x22, 0xe3, 0x5f, 0x50, 0x92, 0x99,
	0x9f, 0x57, 0x2c, 0xf1, 0xb1, 0x67, 0x19, 0xab, 0x02, 0xa3, 0x06, 0x47, 0x10, 0x4c, 0x8b, 0x95,
	0x15, 0x17, 0x5b, 0x71, 0x66, 0x7a, 0x5e, 0x6a, 0x11, 0x16, 0xcd, 0xbe, 0xa9, 0xc5, 0xc5, 0x89,
	0xe9, 0x70, 0xcd, 0x1f, 0x40, 0x9a, 0x99, 0x35, 0x38, 0x83, 0xa0, 0x3a, 0x9c, 0xdc, 0x4f, 0x3c,
	0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6, 0x09, 0x8f, 0xe5, 0x18, 0x2e,
	0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0x4a, 0x37, 0x3d, 0xb3, 0x24, 0xa3, 0x34, 0x49,
	0x2f, 0x39, 0x3f, 0x57, 0x1f, 0xea, 0x51, 0x08, 0xa5, 0x5b, 0x9c, 0x92, 0xad, 0x5f, 0x52, 0x59,
	0x90, 0x0a, 0xf6, 0x39, 0xd4, 0x11, 0x49, 0x6c, 0x60, 0x2b, 0x8d, 0x01, 0x01, 0x00, 0x00, 0xff,
	0xff, 0x27, 0xda, 0xca, 0x33, 0x15, 0x01, 0x00, 0x00,
}
