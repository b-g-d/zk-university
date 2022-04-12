// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.1;

contract NumberVault {

	uint256 private magicNumber;
	address public owner;

	constructor() {
		owner = msg.sender;
	}

	function storeNumber(uint256 number) external {
		magicNumber = number;
	}

	function retrieveNumber() external view returns(uint256) {
		return magicNumber;
	}
}