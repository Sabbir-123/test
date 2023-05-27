// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.2;

// A simple smart contract
contract MessageContract {
    string message = "Hello World";

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
