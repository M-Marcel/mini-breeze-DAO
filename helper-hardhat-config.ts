// const networkConfig = {
//     default: {
//         name: "hardhat",
//         keepersUpdateInterval: "30",
//     },
//     31337: {
//         name: "localhost",
//         subscriptionId: "588",
//         gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
//         keepersUpdateInterval: "30",
//         raffleEntranceFee: "100000000000000000", // 0.1 ETH
//         callbackGasLimit: "500000", // 500,000 gas
//     },
//     4: {
//         name: "rinkeby",
//         subscriptionId: "588",
//         gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
//         keepersUpdateInterval: "30",
//         raffleEntranceFee: "100000000000000000", // 0.1 ETH
//         callbackGasLimit: "500000", // 500,000 gas
//     },
//     1: {
//         name: "mainnet",
//         keepersUpdateInterval: "30",
//     },
// }

export const developmentChains = ["hardhat", "localhost"]
// const VERIFICATION_BLOCK_CONFIRMATIONS = 6
// const frontEndContractsFile = "../nextjs-nft-marketplace-moralis-fcc/constants/networkMapping.json"
// const frontEndContractsFile2 =
//     "../nextjs-nft-marketplace-thegraph-fcc/constants/networkMapping.json"
// const frontEndAbiLocation = "../nextjs-nft-marketplace-moralis-fcc/constants/"
// const frontEndAbiLocation2 = "../nextjs-nft-marketplace-thegraph-fcc/constants/"
export const MIN_DELAY = 3600
export const VOTING_PERIOD = 5
export const VOTING_DELAY = 5
export const QUORUM_PERCENTAGE = 4
export const ADDRESS_ZERO = "0x0000000000000000000000000000000"
export const NEW_STORE_VALUE = 77
export const FUNC = "store"
export const PROPOSAL_DESCRIPTION = "Proposal #1: Store 77 in the box"
export const proposalsFile = "proposals.json"
// module.exports = {
//     networkConfig,
//     developmentChains,
//     VERIFICATION_BLOCK_CONFIRMATIONS,
//     frontEndContractsFile,
//     frontEndContractsFile2,
//     frontEndAbiLocation,
//     frontEndAbiLocation2,
//     MIN_DELAY,
// }
