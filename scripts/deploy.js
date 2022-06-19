const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["Anita", "Arthur", "Jami"], //names
        [
            "https://i.imgur.com/pKd5Sdk.png", // Images
            "https://i.imgur.com/xVu4vFL.png", 
            "https://i.imgur.com/WMB6g9u.png"
        ],
        [1000,5000,2500], //HP and MaxHp values
        [100, 25, 70] // Attack damage values 
    );
    await gameContract.deployed();
    console.log("Contract deployed to: ", gameContract.address);
    
    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");
    
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");
    
    console.log("Done deplyoing and minting!");
};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

runMain();