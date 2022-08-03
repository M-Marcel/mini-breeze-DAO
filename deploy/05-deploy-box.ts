import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/dist/types"
// @ts-ignore
import { ethers } from "hardhat"

const deployBox: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    // @ts-ignore
    const { getNamedAccounts, deployments } = hre
    const { deploy, log, get } = deployments
    const { deployer } = await getNamedAccounts()
    log("Deploying box!.....")

    const box = await deploy("Box", {
        from: deployer,
        args: [],
        log: true,
    })
    // @ts-ignore
    const timeLock = await ethers.getContract("TimeLock")
    const boxContract = await ethers.getContractAt("Box", box.address)
    const transferOwerTx = await boxContract.transferOwnership(timeLock.address)
    await transferOwerTx.wait(1)
    log("You have done it!!!")
}

export default deployBox
