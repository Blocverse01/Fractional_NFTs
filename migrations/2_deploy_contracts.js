const NFT = artifacts.require("./NFT");
const Token = artifacts.require("./Token");

module.exports = async function (deployer) {
    const IPFS_IMAGE_METADATA_URI = `ipfs://QmQdPYTY8yArgVmMJK319e75rsi91bwtUF5JsSF9CLnEYe/`

    // Deploy NFT collection first...

    await deployer.deploy(
        NFT,
        "Bloc Paintings",
        "FP",
        IPFS_IMAGE_METADATA_URI,
    )

    // Once deployed, we grab the address, and deploy the ERC20 vault...

    const nft = await NFT.deployed()

    await deployer.deploy(
        Token,
        "Bloc Paintings Token",
        "BlocP",
        nft.address,
        10000
    )
};