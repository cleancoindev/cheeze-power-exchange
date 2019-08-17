const CzExchange = artifacts.require("./CzExchange.sol");
//const WizardPresale = WizardPresale.address;

module.exports = function(deployer) {
  deployer.deploy(CzExchange);
};
