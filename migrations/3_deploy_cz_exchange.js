const CzExchange = artifacts.require("./CzExchange.sol");

const startingCost = 1;
const costIncremement = 1;
const exclusiveCount = 1;
const startBlock = 1000; // @notice "Start must be greater than current block"
const duration = 1;

module.exports = function(deployer) {
  deployer.deploy(
    CzExchange,
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
