const CzExchange = artifacts.require("./CzExchange.sol");


contract('CzExchange', function (accounts) {

    it('Get ', async () => {
        const accounts = await web3.eth.getAccounts();

        // Create instance of CzExchange contract
        const cz_exchange = await new web3.eth.Contract(CzExchange.abi, CzExchange.address);

        // Execute function
        const response = await cz_exchange.methods.testFunc().send({ from: accounts[0] })
        console.log('=== response of testFunc function ===', response);  // Debug

    })

});


