const CzPowerExchange = artifacts.require("./CzPowerExchange.sol");
const WizardPresale = artifacts.require("./WizardPresale.sol");
const BasicTournament = artifacts.require("./BasicTournament.sol");
const InauguralGateKeeper = artifacts.require("./InauguralGateKeeper.sol");
const ThreeAffinityDuelResolver = artifacts.require("./ThreeAffinityDuelResolver.sol");
const WizardGuild = artifacts.require("./WizardGuild.sol");

/**
 * Assign each contract address
 */
const wizardPresaleContractAddr = WizardPresale.address;  // External contract address of WizardPresale.sol
                                                          // If it deploy Rinkeby, it replace this contract address with address deployed Rinkeby
const BasicTournamentContractAddr = BasicTournament.address;
const InauguralGateKeeperContractAddr = InauguralGateKeeper.address;
const ThreeAffinityDuelResolverContractAddr = ThreeAffinityDuelResolver.address;
const WizardGuildContractAddr = WizardGuildContractAddr.address;


const startingCost = 1;
const costIncremement = 1;
const exclusiveCount = 1;
const startBlock = 1000; // @notice "Start must be greater than current block"
const duration = 1;

module.exports = function(deployer) {
  deployer.deploy(
    CzPowerExchange,
    wizardPresaleContractAddr,  // External contract address of WizardPresale.sol
    BasicTournamentContractAddr,
    InauguralGateKeeperContractAddr,
    ThreeAffinityDuelResolverContractAddr,
    WizardGuildContractAddr,
    startingCost,
    costIncremement,
    exclusiveCount,
    startBlock,
    duration
  );
};
