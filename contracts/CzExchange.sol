pragma solidity >=0.4.22 <0.6.0;

import "./openzeppelin-solidity/contracts/math/SafeMath.sol";
import "./storage/CzStorage.sol";
import "./modifiers/CzOwnable.sol";

import "./cheeze-base/WizardPresale.sol";


contract CzExchange is CzStorage, CzOwnable, WizardPresaleNFT, WizardConstants, WizardPresale {

    using SafeMath for uint256;

    //address wizardPresale;

    constructor(
        uint128 startingCost,
        uint16 costIncremement,
        uint256 exclusiveCount,
        uint128 startBlock,
        uint128 duration
    ) 
        public
        WizardPresale(
            startingCost,
            costIncremement,
            exclusiveCount,
            startBlock,
            duration
        )
    {
        //wizardPresale = _WizardPresale;
    }


    function exchangeCheeze() public returns (uint) {
        // in progress
    }



    function testFunc() public returns (uint) {
        uint test;
        uint testCalculate;

        testCalculate = test.add(ELEMENT_NEUTRAL);

        emit TestEvent(testCalculate);

        return test.add(testCalculate);
    }


    function testFunc2(
        uint256 tokenId, 
        address owner, 
        uint256 power, 
        uint8 affinity
    ) 
        public
    {
        _createWizard(tokenId, owner, power, affinity);
    }

}
