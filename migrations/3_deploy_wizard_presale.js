const WizardPresale = artifacts.require("./WizardPresale.sol");

const startingCost = 1;
const costIncremement = 1;
const exclusiveCount = 1;
const startBlock = 50; // @notice "Start must be greater than current block"
const duration = 1;

module.exports = function(deployer) {
  deployer.deploy(
    WizardPresale,
    startingCost,
    costIncremement,
    exclusiveCount,
    startBlock,
    duration
  );
};





/// @param startingCost The minimum cost of a Wizard, used as the price for all Neutral Wizards, and the
///        cost of the first Elemental Wizard. Also used as a minimum value for Exclusive Wizards.
/// @param costIncremement The rate (in tenths of a basis point) at which the price of Elemental Wizards increases
/// @param exclusiveCount The hard cap on Exclusive Wizards, also dictates the ID of the first non-Exclusive
/// @param startBlock The starting block of the presale.
/// @param duration The duration of the presale.  Not changeable!

// constructor(
//         uint128 startingCost,
//         uint16 costIncremement,
//         uint256 exclusiveCount,
//         uint128 startBlock,
//         uint128 duration) public
// {
//     require(startBlock > block.number, "Start must be greater than current block");

//     guildmaster = msg.sender;
//     saleStartBlock = startBlock;
//     saleDuration = duration;
//     neutralWizardCost = startingCost;
//     elementalWizardCost = startingCost;
//     elementalWizardIncrement = costIncremement;
//     maxExclusives = exclusiveCount;
//     nextWizardId = exclusiveCount + 1;
