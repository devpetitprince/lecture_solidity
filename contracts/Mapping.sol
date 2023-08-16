// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Mapping {
    mapping(address => uint) public balances;

    function setBalances(address user, uint amount) public {
        balances[user] = amount;
    }

    function deleteBalances(address user) public {
        delete balances[user];
        //balance[user] = 0;
    }
}