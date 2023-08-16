// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Function1 {
    uint public stateValue = 30;

    function function1() public {
        uint localValue = 30;
        console.log('function!!');
    }
    function publicFunction() public {
        internalFunction();
        this.externalFunction();
        _privateFunction();
    }

    function internalFunction() internal {
        console.log('internal');
    }

    function externalFunction() external {
        console.log('external');
    }
    function _privateFunction() private {
        console.log('private');
    }
}