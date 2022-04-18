const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Test time limit in ballot", function () {
  it("should execute", async function () {
    
  	numberToStore = 600;

    const [owner] = await ethers.getSigners();
    const Ballot = await ethers.getContractFactory("Ballot");
    const ballot = await Ballot.deploy([1, 2])

    const timeIsUp = await ballot.checkIfTimeIsUp();
    console.log("time is up?");
    console.log(timeIsUp);

    // const numberVault = await NumberVault.deploy();

    // numberVault.storeNumber(numberToStore);

    expect(timeIsUp).to.equal(false);
  });
});


