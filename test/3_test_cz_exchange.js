const CzExchange = artifacts.require("./CzExchange.sol");
const WizardPresale = artifacts.require("./WizardPresale.sol");



contract('CzExchange', function (accounts) {

    it('Execute testFunc function', async () => {
        const accounts = await web3.eth.getAccounts();

        // Create instance of contracts
        const cz_exchange = await new web3.eth.Contract(CzExchange.abi, CzExchange.address);

        // Execute function
        const response = await cz_exchange.methods.testFunc().send({ from: accounts[0] })
        console.log('=== response of testFunc function ===', response);  // Debug

    })



    it('Execute testFunc2 function', async () => {
        const accounts = await web3.eth.getAccounts();

        // Create instance of contracts
        const cz_exchange = await new web3.eth.Contract(CzExchange.abi, CzExchange.address);
        const wizard_presale = await new web3.eth.Contract(WizardPresale.abi, WizardPresale.address);

        // Define constant
        const _wizardPresaleContractAddr = WizardPresale.address
        const _tokenId = 1
        const _owner = web3.utils.randomHex(20)
        const _power = 100 
        const _affinity = 10
        console.log('=== _wizardPresaleContractAddr ===', _wizardPresaleContractAddr);  // Debug

        // Execute function
        const response = await cz_exchange.methods.testFunc2(_wizardPresaleContractAddr, _tokenId, _owner, _power, _affinity).send({ from: accounts[0] })
        console.log('=== response of testFunc function ===', response);  // Debug

    })
});


