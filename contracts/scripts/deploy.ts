import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with:", deployer.address);

  const PlayerRegistry = await ethers.getContractFactory("PlayerRegistry");
  const playerRegistry = await PlayerRegistry.deploy(deployer.address);
  await playerRegistry.waitForDeployment();

  const MatchRoomFactory = await ethers.getContractFactory("MatchRoomFactory");
  const matchRoomFactory = await MatchRoomFactory.deploy();
  await matchRoomFactory.waitForDeployment();

  console.log("PlayerRegistry:", await playerRegistry.getAddress());
  console.log("MatchRoomFactory:", await matchRoomFactory.getAddress());
  console.log("\nNext:");
  console.log("1) Add players per match to PlayerRegistry");
  console.log("2) Create rooms from MatchRoomFactory");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
