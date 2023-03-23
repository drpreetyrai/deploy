// const hre = require("hardhat");

const {ethers} = require('hardhat');


async function main() {
    
//   const chai = await hre.ethers.getContractFactory("chai");
//   console.log("dd");
//   const contract = await chai.deploy(); //instance of contract
 
//   await contract.deployed();
//   console.log("Address of contract:", contract.address);
    
const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Chai = await ethers.getContractFactory("chai");
  const deployedContract = await Chai.deploy();

  console.log("Token address:", deployedContract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// code 




















































