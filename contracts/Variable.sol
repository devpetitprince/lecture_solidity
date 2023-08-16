// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Variable {
    //base
    uint private _defaultValue;
    uint public defaultValue;
    uint constant CONSTANT_VALUE = 12345678;
    uint immutable IMMUTABLE_VALUE;

    constructor() {
        IMMUTABLE_VALUE = 123;
    }

    address public defaultAddressValue;
    address public addressValue = address(1);

    bytes32 public defaultByteValue;
    bytes32 public byteValue = '0x12'; 
}