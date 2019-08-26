pragma solidity >=0.4.22 <0.6.0;

import "./openzeppelin-solidity/contracts/math/SafeMath.sol";
import "./storage/CzStorage.sol";
import "./modifiers/CzOwnable.sol";

import "./cheeze-base/WizardPresale.sol";


contract CzExchange is CzStorage, CzOwnable, WizardPresaleNFT, WizardConstants, WizardPresale {

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


    function exchangeCheeze(
        uint256 _tokenId, address _owner, uint8 _affinity
    ) 
        public payable returns (uint256 tokenId, address owner, uint8 affinity) 
    {
        WizardPresale(_wizardPresaleContractAddr).conjureExclusiveWizard(_tokenId, _owner, _affinity);
    }



    function testFunc() public returns (uint) {
        uint test;
        uint testCalculate;

        testCalculate = test.add(ELEMENT_NEUTRAL);

        emit TestEvent(testCalculate);

        return test.add(testCalculate);
    }


    function testFunc2(
        uint256 _cost
    ) 
        public
        returns (uint256 cost)
    {
        return WizardPresale(_wizardPresaleContractAddr).costToPower(_cost);
    }

}
