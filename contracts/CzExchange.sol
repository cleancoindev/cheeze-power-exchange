pragma solidity >=0.4.22 <0.6.0;

import "./openzeppelin-solidity/contracts/math/SafeMath.sol";
import "./storage/CzStorage.sol";
import "./modifiers/CzOwnable.sol";

import "./cheeze-base/WizardPresale.sol";



contract CzExchange is CzStorage, CzOwnable, WizardConstants {

    using SafeMath for uint256;

    constructor() public {}


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


}
