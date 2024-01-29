// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.7.1 with parameter "ts_nocheck=false,target=ts"
// @generated from file option-message.proto (package test, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Used in custom-options.test.ts
 *
 * @generated from message test.OptionMessage
 */
export class OptionMessage extends Message<OptionMessage> {
  /**
   * @generated from field: int32 foo = 1;
   */
  foo = 0;

  /**
   * @generated from field: string bar = 2;
   */
  bar = "";

  /**
   * @generated from field: repeated string many = 4;
   */
  many: string[] = [];

  constructor(data?: PartialMessage<OptionMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "test.OptionMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "foo", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "bar", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "many", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptionMessage {
    return new OptionMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptionMessage {
    return new OptionMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptionMessage {
    return new OptionMessage().fromJsonString(jsonString, options);
  }

  static equals(a: OptionMessage | PlainMessage<OptionMessage> | undefined, b: OptionMessage | PlainMessage<OptionMessage> | undefined): boolean {
    return proto3.util.equals(OptionMessage, a, b);
  }
}

