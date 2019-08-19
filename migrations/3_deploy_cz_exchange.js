const CzExchange = artifacts.require("./CzExchange.sol");
const WizardPresale = artifacts.require("./WizardPresale.sol");

const wizardPresaleContractAddr = WizardPresale.address;  // External contract address of WizardPresale.sol
                                                          // If it deploy Rinkeby, it replace this contract address with address deployed Rinkeby
const startingCost = 1;
const costIncremement = 1;
const exclusiveCount = 1;
const startBlock = 1000; // @notice "Start must be greater than current block"
const duration = 1;

module.exports = function(deployer) {
  deployer.deploy(
    CzExchange,
    wizardPresaleContractAddr,  // External contract address of WizardPresale.sol
    startingCost,
    costIncremement,
    exclusiveCount,
    startBlock,
    duration
  );
};


// module.exports = function(deployer) {
//   deployer.deploy(CzExchange);
// };
