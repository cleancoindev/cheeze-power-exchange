const BasicTournament = artifacts.require("./BasicTournament.sol");

// In progress
const cooAddress_ = 
const duelResolver_ = 
const powerScale_ = 
const tournamentStartBlock_ = 
const admissionDuration_ = 
const revivalDuration_ = 
const fightDuration_ = 
const cullingDuration_ = 
const blueMoldBasePower_ = 
const sessionsBetweenMoldDoubling_ = 
const duelTimeoutBlocks_ = 

module.exports = function(deployer) {
  deployer.deploy(
    BasicTournament,
    // in progress
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
