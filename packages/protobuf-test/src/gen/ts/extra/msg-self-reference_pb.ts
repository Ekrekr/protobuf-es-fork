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
// @generated from file extra/msg-self-reference.proto (package spec, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message spec.SelfReferencingMessage
 */
export class SelfReferencingMessage extends Message<SelfReferencingMessage> {
  /**
   * @generated from field: spec.SelfReferencingMessage self = 1;
   */
  self?: SelfReferencingMessage;

  /**
   * @generated from field: repeated spec.SelfReferencingMessage self_list = 2;
   */
  selfList: SelfReferencingMessage[] = [];

  /**
   * @generated from field: map<string, spec.SelfReferencingMessage> self_map = 3;
   */
  selfMap: { [key: string]: SelfReferencingMessage } = {};

  constructor(data?: PartialMessage<SelfReferencingMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "spec.SelfReferencingMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "self", kind: "message", T: SelfReferencingMessage },
    { no: 2, name: "self_list", kind: "message", T: SelfReferencingMessage, repeated: true },
    { no: 3, name: "self_map", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: SelfReferencingMessage} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SelfReferencingMessage {
    return new SelfReferencingMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SelfReferencingMessage {
    return new SelfReferencingMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SelfReferencingMessage {
    return new SelfReferencingMessage().fromJsonString(jsonString, options);
  }

  static equals(a: SelfReferencingMessage | PlainMessage<SelfReferencingMessage> | undefined, b: SelfReferencingMessage | PlainMessage<SelfReferencingMessage> | undefined): boolean {
    return proto3.util.equals(SelfReferencingMessage, a, b);
  }
}

