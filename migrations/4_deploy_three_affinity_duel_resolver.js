const ThreeAffinityDuelResolver = artifacts.require("./ThreeAffinityDuelResolver.sol");


module.exports = function(deployer) {
  deployer.deploy(
    ThreeAffinityDuelResolver,
  );
};
