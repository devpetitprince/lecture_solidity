// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract GlobalVariable {
    uint public weiUnit = 1 wei;
    uint public gweiUnit = 1 gwei;
    uint public ethUnit = 1 ether;

    uint public secondsUnit = 1 seconds;
    uint public minutesUnit = 1 minutes;
    uint public hoursUnit = 1 hours;
    uint public daysUnit = 1 days;
    uint public weeksUnit = 1 weeks;

    bytes public msgData;
    address public msgSender;
    bytes4 public msgSig;
    uint public msgValue;

    function msgTest(uint8 a) public payable {
        msgData = msg.data;
        msgSender = msg.sender;
        msgSig = msg.sig;
        msgValue = msg.value;
    }
    uint public gasPrice = tx.gasprice;
    address public origin = tx.origin;
}