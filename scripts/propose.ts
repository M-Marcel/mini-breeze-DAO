import {
    NEW_STORE_VALUE,
    FUNC,
    PROPOSAL_DESCRIPTION,
    developmentChains,
    VOTING_DELAY,
    proposalsFile,
} from "../helper-hardhat-config"
// @ts-ignore
import { ethers, network } from "hardhat"
import { moveBlocks } from "../utils/move-blocks"
import * as fs from "fs"

export async function propose(args: any[], functionToCall: string, proposalDescription: string) {
    // @ts-ignore
    const governor = await ethers.getContract("GovernorContract")
    // @ts-ignore
    const box = await ethers.getContract("Box")
    const encodedFunctionCall = box.interface.encodeFunctionData(functionToCall, args)
    // console.log(encodedFunctionCall)
    console.log(`Proposing ${functionToCall} on ${box.address} with ${args}`)
    console.log(`Proposing description: \n on ${proposalDescription}`)
    const proposeTx = await governor.proposal(
        [box.address],
        [0],
        [encodedFunctionCall],
        proposalDescription
    )
    const proposeReceipt = await proposeTx.wait(1)

    if (developmentChains.includes(network.name)) {
        await moveBlocks(VOTING_DELAY + 1)
    }

    const proposalId = proposeReceipt.events[0].args.proposalId
    let proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"))
    proposals[network.config.chainId!.toString()].push(proposalId.toString())
    fs.writeFileSync(proposalsFile, JSON.stringify(proposals))
}

propose([NEW_STORE_VALUE], FUNC, PROPOSAL_DESCRIPTION)
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })