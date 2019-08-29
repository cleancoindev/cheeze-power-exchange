const BasicTournament = artifacts.require("./BasicTournament.sol");

// In progress
const cooAddress_ = '0x800da5395c4d2e8a5625ebfbf6a8c713c6fba7c3'
const duelResolver_ = '0x597c457cc3772b902e834890e133dbbd58b8e6a0'
const powerScale_ = 100
const tournamentStartBlock_ = 1000 
const admissionDuration_ = 100
const revivalDuration_ = 100
const ascensionDuration_ = 100
const fightDuration_ = 100
const cullingDuration_ = 100
const blueMoldBasePower_ = 100
const sessionsBetweenMoldDoubling_ = 100
const duelTimeoutBlocks_ = 1000

module.exports = function(deployer) {
  deployer.deploy(
    BasicTournament,
    // in progress
    cooAddress_,
    duelResolver_,
    powerScale_,
    tournamentStartBlock_,
    admissionDuration_,
    revivalDuration_,
    ascensionDuration_,
    fightDuration_,
    cullingDuration_,
    blueMoldBasePower_,
    sessionsBetweenMoldDoubling_,
    duelTimeoutBlocks_
  );
};




/* 
constructor(
    address cooAddress_,
    address duelResolver_,
    uint256 powerScale_,
    uint256 tournamentStartBlock_,
    uint256 admissionDuration_,
    uint256 revivalDuration_,
    uint256 ascensionDuration_,
    uint256 fightDuration_,
    uint256 cullingDuration_,
    uint256 blueMoldBasePower_,
    uint256 sessionsBetweenMoldDoubling_,
    uint256 duelTimeoutBlocks_
)
*/
