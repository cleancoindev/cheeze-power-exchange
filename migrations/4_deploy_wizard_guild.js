const WizardGuild = artifacts.require("./WizardGuild.sol");

const _cooAddress = '0x800da5395c4d2e8a5625ebfbf6a8c713c6fba7c3'

module.exports = function(deployer) {
  deployer.deploy(
    WizardGuild,
    _cooAddress,
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
