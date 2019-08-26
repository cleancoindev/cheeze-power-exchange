const OracleWizardData = artifacts.require("./OracleWizardData.sol");

module.exports = function(deployer) {
  deployer.deploy(
    OracleWizardData,
  );
};
