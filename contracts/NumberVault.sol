// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.1;

contract NumberVault {
	/*
	* This contract hosts a "magicNumber" in the vault, and then returns it.
	* The number can be overwritten by any client of the contract.
	*/
	uint256 private magicNumber;
	address public owner;

	constructor() {
		owner = msg.sender;
	}

	function storeNumber(uint256 number) external {
	// this stores the magicNumber, or rather accepts a number and makes it magic
		magicNumber = number;
	}

	function retrieveNumber() external view returns(uint256) {
	// this returns a number, which has been imbued with magic 
		return magicNumber;
	}
}