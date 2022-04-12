const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Test simple store/retrieve", function () {
  it("Number retrieved should equal number strored", async function () {
    
  	numberToStore = 600;

    const [owner] = await ethers.getSigners();

    const NumberVault = await ethers.getContractFactory("NumberVault");
    const numberVault = await NumberVault.deploy();

    numberVault.storeNumber(numberToStore);

    expect(await numberVault.retrieveNumber()).to.equal(numberToStore);
  });
});

describe("Test two stores, one retrieve", function () {
	it("Number retrieved should be the second number stored", async function () {
		number1 = 500
		number2 = 300

		const NumberVault = await ethers.getContractFactory("NumberVault");
		const numberVault = await NumberVault.deploy();

		numberVault.storeNumber(number1);
		numberVault.storeNumber(number2);

		expect(await numberVault.retrieveNumber()).to.equal(number2);
	});
});
