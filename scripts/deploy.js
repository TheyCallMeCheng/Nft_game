const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    // Initialize the contract with the basic characters 
    const gameContract = await gameContractFactory.deploy(
        ["Anita", "Arthur", "Jami"], //names
        [
            "https://i.imgur.com/pKd5Sdk.png", // Images
            "https://i.imgur.com/xVu4vFL.png", 
            "https://i.imgur.com/WMB6g9u.png"
        ],
        [1000,5000,2500], //HP and MaxHp values
        [100, 25, 70], // Attack damage values 
        "Elon Musk", // Boss name
        "https://i.imgur.com/AksR0tt.png", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );

    await gameContract.deployed();
    console.log("Contract deployed to: ", gameContract.address)

}

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