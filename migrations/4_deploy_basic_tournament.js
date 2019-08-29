const BasicTournament = artifacts.require("BasicTournament");
const TournamentTimeAbstract = artifacts.require("TournamentTimeAbstract");
const AccessControl = artifacts.require("AccessControl");



/**
 * @Notice: BasicTournament.sol has 3 constructors entirely
 */
// This values are assigned to contructor of BasicTournament contract
const cooAddress_ = '0x3f1b79ad265a2d80e4669b015748675187502fbe' 
const duelResolver_ = '0xa679c6d5158c70befe500cb6a169f87e7cbd5388'
const powerScale_ = 100
const tournamentStartBlock_ = 100
const admissionDuration_ = 100
const revivalDuration_ = 100
const ascensionDuration_ = 100
const fightDuration_ = 100
const cullingDuration_ = 100
const blueMoldBasePower_ = 100
const sessionsBetweenMoldDoubling_ = 100
const duelTimeoutBlocks_ = 100

// This values are assigned to contructor of TournamentTimeAbstract contract
const _cooAddress = '0x800da5395c4d2e8a5625ebfbf6a8c713c6fba7c3'
const tournamentStartBlock = 100
const admissionDuration = 100
const revivalDuration = 100
const ascensionDuration = 100
const fightDuration = 100
const cullingDuration = 100
const duelTimeoutDuration = 100
const blueMoldBasePower = 100
const sessionsBetweenMoldDoubling = 100

// This values are assigned to contructor of AccessControl contract
const newCooAddress = '0x17c3fdce048e6e6cef9ccc6e3cf7cd1092dc825e'
const newCfoAddress = '0x127c9e6563be225c923f6155d7ca9ef2098d8fd2'


module.exports = function(deployer) {
  deployer.deploy(
    //   TournamentTimeAbstract,
    //   _cooAddress,
    //   tournamentStartBlock,
    //   admissionDuration,
    //   revivalDuration,
    //   ascensionDuration,
    //   fightDuration,
    //   cullingDuration,
    //   duelTimeoutDuration,
    //   blueMoldBasePower,
    //   sessionsBetweenMoldDoubling,

    //   BasicTournament,
    //   cooAddress_,
    //   duelResolver_,
    //   powerScale_,
    //   tournamentStartBlock_,
    //   admissionDuration_,
    //   revivalDuration_,
    //   ascensionDuration_,
    //   fightDuration_,
    //   cullingDuration_,
    //   blueMoldBasePower_,
    //   sessionsBetweenMoldDoubling_,
    //   duelTimeoutBlocks_,

    AccessControl,
    newCooAddress,
    newCfoAddress
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


/* 
constructor(
    address _cooAddress,
    uint256 tournamentStartBlock,
    uint256 admissionDuration,
    uint256 revivalDuration,
    uint256 ascensionDuration,
    uint256 fightDuration,
    uint256 cullingDuration,
    uint256 duelTimeoutDuration,
    uint256 blueMoldBasePower,
    uint256 sessionsBetweenMoldDoubling
)
*/


/*
constructor(
    address newCooAddress, 
    address payable newCfoAddress
)
*/
