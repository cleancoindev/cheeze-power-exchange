pragma solidity >=0.4.22 <0.6.0;

import "./openzeppelin-solidity/contracts/math/SafeMath.sol";
import "./storage/CzStorage.sol";
import "./modifiers/CzOwnable.sol";

import "./cheeze-base/WizardPresale.sol";


contract CzPowerExchange is CzStorage, CzOwnable, WizardPresaleNFT, WizardConstants, WizardPresale {

    using SafeMath for uint256;

    address _wizardPresaleContractAddr;  // For assigning the contract address of WizardPresale.sol

    constructor(
        address wizardPresaleContractAddr,   // External contract address of WizardPresale.sol
        uint128 startingCost,
        uint16 costIncremement,
        uint256 exclusiveCount,
        uint128 startBlock,
        uint128 duration
    )
        public
        WizardPresale(         // Assign value of constructor of inherited contract of WizardPresale.sol
            startingCost,
            costIncremement,
            exclusiveCount,
            startBlock,
            duration
        )
    {
        _wizardPresaleContractAddr = wizardPresaleContractAddr;
    }



    function powerExchange(uint256 _id) public returns (bool) {
        getWizard(_id);  // this function is referenced from WizardPresale contract

        return true;
    }


    function testFuncOfPowerExchange() public returns (bool) {
        return true;
    }

}