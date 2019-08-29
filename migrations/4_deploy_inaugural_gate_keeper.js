const InauguralGateKeeper = artifacts.require("./InauguralGateKeeper.sol");

const setCooAddress = '0x0bd73db76789c7604faee5d23372ddcb63e71bd6'
const setCfoAddress = '0x7e552db0c8e534dca6de7cba21473737aaaf2377'
const setNeutralWizardCost = 10
const setElementalWizardCost = 10
const setElementalWizardIncrement = 10


module.exports = function(deployer) {
  deployer.deploy(
    InauguralGateKeeper,
    setCooAddress,
    setCfoAddress,
    setNeutralWizardCost,
    setElementalWizardCost,
    setElementalWizardIncrement
  );
};



/*
constructor(
    address setCooAddress,
    address payable setCfoAddress,
    uint256 setNeutralWizardCost,
    uint256 setElementalWizardCost,
    uint256 setElementalWizardIncrement
)
*/
