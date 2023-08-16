// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Function2 {
    uint stateValue = 30;
    function pureFunction(uint a) public pure {
        uint b = a;
    }
    function viewFunction(uint a) public view {
        uint b = a + stateValue;
        console.log(b);
    }
    function getDoubleA(uint _a) public pure returns (uint) {
        uint a = _a * 2;
        return a;
    }
    function getDoubleA2(uint _a)public pure returns (uint a) {
        a = _a * 2;
    } 
    function getDouble(uint _a, uint _b) public pure returns (uint a , uint b) {
        a = _a * 2;
        b = _b * 2;
    }
    function printDouble() view public {
        (uint a2, uint b2) = getDouble(6,2);
        console.log('a2: ', a2, 'b2: ', b2);
    }
}