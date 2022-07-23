const { getNamedAccounts, deployments, network } = require("hardhat")
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")
const { log } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const INTIAL_SUPPLY = "100"
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    log(chainId)
    log("----------------------------------------------------")
    log("Deploying Token and waiting for confirmations...")
    const token = await deploy("Vtoken", {
        from: deployer,
        args: [INTIAL_SUPPLY],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    log(`Token is deployed at ${token.address}`)

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(token.address, [INTIAL_SUPPLY])
    }
}

module.exports.tags = ["all", "token"]
