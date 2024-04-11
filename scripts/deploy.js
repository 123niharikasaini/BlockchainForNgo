// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = hre.ethers.parseEther("0.001");

  const Charity = await hre.ethers.deployContract("Charity");

  await Charity.waitForDeployment();

  console.log(
    `Contract deployed at address: ${await Charity.getAddress()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// address =>  0x5FbDB2315678afecb367f032d93F642f64180aa3

// new address => 0xBdfB89f9e3018A7aD23E75862B9bE5Af76f82D63

// new address =>  0x5EE3e34f7b4CaEf20d82CADd53DBC7905389508b

// 0xc1cF139C109491f94C102Aec392392E3fAB05739

// 0x75b0abBaA8c20e24b1534D13ee69103C8B00e0A6

// 0xe7ff7C1EBbCFDe188261561dB3e0fB14d262E9d8