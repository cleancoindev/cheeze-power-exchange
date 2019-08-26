const OraclePlayersData = artifacts.require("./OraclePlayersData.sol");

module.exports = function(deployer) {
  deployer.deploy(OraclePlayersData);
};
