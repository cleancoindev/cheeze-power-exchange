import React, { Component } from "react";
import getWeb3, { getGanacheWeb3, Web3 } from "./utils/getWeb3";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import Hero from "./components/Hero/index.js";
import Web3Info from "./components/Web3Info/index.js";

import { Loader, Button, Card, Input, Heading, Table, Form } from 'rimble-ui';
import { Grid } from 'react-bootstrap';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { moment } from 'moment'

import { zeppelinSolidityHotLoaderOptions } from '../config/webpack';

import styles from './App.module.scss';



// Dash board
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/animate.min.css";
// import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
// import "./assets/css/demo.css";
// import "./assets/css/pe-icon-7-stroke.css";
// import AdminLayout from "./layout/Admin.jsx";



class App extends Component {
  constructor(props) {    
    super(props);

    this.state = {
      /////// Default state
      storageValue: 0,
      web3: null,
      accounts: null,
      route: window.location.pathname.replace("/",""),
    };

    this.getTestData = this.getTestData.bind(this);

  }


  ///////--------------------- Functions of CzExchange ---------------------------



  ///////--------------------- Functions of testFunc ---------------------------  
  getTestData = async () => {
    const { accounts, cz_exchange, cz_power_exchange, wizard_presale, oracle_wizard_data } = this.state;

    const web3 = new Web3(window.ethereum);
    //const WizardPresale = require("../../build/contracts/WizardPresale.json");  // Load ABI of contract of WizardPresale

    const response = await cz_exchange.methods.testFunc().send({ from: accounts[0] })
    console.log('=== response of testFunc function ===', response);  // Debug

    const _owner = '0x39b41fff1baef21d99ee31228326c76214c306d7'
    const response_2 = await cz_exchange.methods.balanceOf(_owner).call()
    console.log('=== response of balanceOf function (through inherited  WizardPresaleNFT contract) ===', response_2);  // Debug

    const _cost = 100
    const response_3 = await cz_exchange.methods.testFunc2(_cost).call()
    console.log('=== response of testFunc2 function (through WizardPresale contract) ===', response_3);  // Debug

    /*
    const _tokenId = 0
    const _affinity = 10

    const response_4 = await cz_exchange.methods.exchangeCheeze(_tokenId, _owner, _affinity).send({ from: accounts[0] })
    console.log('=== response of exchangeCheeze function (through WizardPresale contract) ===', response_4);  // Debug
    */

    // Oracle
    /*
    const _myid = "0xaf7658cc1e17d1494cbe6b3b8d78b3cc7cb48090";
    const _result = "";
    const _proof = "0xaf7658cc1e17d1494cbe6b3b8d78b3cc7cb48090";
    const response_5 = await oracle_wizard_data.methods.__callback(_myid, _result, _proof).send({ from: accounts[0] })
    console.log('=== response of oracle_wizard_data function ===', response_5);  // Debug
    */

    const response_6 = await cz_power_exchange.methods.testFuncOfPowerExchange().send({ from: accounts[0] })
    console.log('=== response of testFuncOfPowerExchange function ===', response_6);  // Debug


    let _id = 1
    const response_7 = await cz_power_exchange.methods.powerExchange(_id).call()
    console.log('=== response of powerExchange function ===', response_7);  // Debug
  }




  //////////////////////////////////// 
  ///// Ganache
  ////////////////////////////////////
  getGanacheAddresses = async () => {
    if (!this.ganacheProvider) {
      this.ganacheProvider = getGanacheWeb3();
    }
    if (this.ganacheProvider) {
      return await this.ganacheProvider.eth.getAccounts();
    }
    return [];
  }

  componentDidMount = async () => {
    const hotLoaderDisabled = zeppelinSolidityHotLoaderOptions.disabled;
 
    let CzExchange = {};
    let CzPowerExchange = {};
    let WizardPresale = {};
    let OracleWizardData = {};

    try {
      CzExchange = require("../../build/contracts/CzExchange.json");        // Load ABI of contract of CzExchange
      CzPowerExchange = require("../../build/contracts/CzPowerExchange.json");        // Load ABI of contract of         let instanceCzExchange = null;CzPowerExchange
      WizardPresale = require("../../build/contracts/WizardPresale.json");  // Load ABI of contract of WizardPresale
      OracleWizardData = require("../../build/contracts/OracleWizardData.json");  // Load ABI of contract of OracleWizardData
    } catch (e) {
      console.log(e);
    }

    try {
      const isProd = process.env.NODE_ENV === 'production';
      if (!isProd) {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        let ganacheAccounts = [];

        try {
          ganacheAccounts = await this.getGanacheAddresses();
        } catch (e) {
          console.log('Ganache is not running');
        }

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const networkType = await web3.eth.net.getNetworkType();
        const isMetaMask = web3.currentProvider.isMetaMask;
        let balance = accounts.length > 0 ? await web3.eth.getBalance(accounts[0]): web3.utils.toWei('0');
        balance = web3.utils.fromWei(balance, 'ether');

        let instanceCzExchange = null;
        let instanceCzPowerExchange = null;
        let instanceWizardPresale = null;
        let instanceOracleWizardData = null;
        let deployedNetwork = null;

        // Create instance of contracts
        if (CzExchange.networks) {
          deployedNetwork = CzExchange.networks[networkId.toString()];
          if (deployedNetwork) {
            instanceCzExchange = new web3.eth.Contract(
              CzExchange.abi,
              deployedNetwork && deployedNetwork.address,
            );
            console.log('=== instanceCzExchange ===', instanceCzExchange);
          }
        }
        if (CzPowerExchange.networks) {
          deployedNetwork = CzPowerExchange.networks[networkId.toString()];
          if (deployedNetwork) {
            instanceCzPowerExchange = new web3.eth.Contract(
              CzPowerExchange.abi,
              deployedNetwork && deployedNetwork.address,
            );
            console.log('=== instanceCzPowerExchange ===', instanceCzPowerExchange);
          }
        }
        if (WizardPresale.networks) {
          deployedNetwork = WizardPresale.networks[networkId.toString()];
          if (deployedNetwork) {
            instanceWizardPresale = new web3.eth.Contract(
              WizardPresale.abi,
              deployedNetwork && deployedNetwork.address,
            );
            console.log('=== instanceWizardPresale ===', instanceWizardPresale);
          }
        }
        if (OracleWizardData.networks) {
          deployedNetwork = OracleWizardData.networks[networkId.toString()];
          if (deployedNetwork) {
            instanceOracleWizardData = new web3.eth.Contract(
              OracleWizardData.abi,
              deployedNetwork && deployedNetwork.address,
            );
            console.log('=== instanceOracleWizardData ===', instanceOracleWizardData);
          }
        }

        if (instanceCzExchange || instanceCzPowerExchange || instanceWizardPresale || instanceOracleWizardData) {
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          this.setState({ web3, ganacheAccounts, accounts, balance, networkId, networkType, hotLoaderDisabled,
            isMetaMask, cz_exchange: instanceCzExchange, cz_power_exchange: instanceCzPowerExchange, wizard_presale: instanceWizardPresale, oracle_wizard_data: instanceOracleWizardData }, () => {
              this.refreshValues(instanceCzExchange, instanceWizardPresale, instanceOracleWizardData);
              setInterval(() => {
                this.refreshValues(instanceCzExchange, instanceWizardPresale, instanceOracleWizardData);
              }, 5000);
            });
        }
        else {
          this.setState({ web3, ganacheAccounts, accounts, balance, networkId, networkType, hotLoaderDisabled, isMetaMask });
        }
      }
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  refreshValues = (instanceCzExchange, instanceCzPowerExchange, instanceWizardPresale, instanceOracleWizardData) => {
    if (instanceCzExchange) {
      console.log('refreshValues of instanceCzExchange');
    }
    if (instanceCzPowerExchange) {
      console.log('refreshValues of instanceCzPowerExchange');
    }
    if (instanceWizardPresale) {
      console.log('refreshValues of instanceWizardPresale');
    }
    if (instanceOracleWizardData) {
      console.log('refreshValues of instanceOracleWizardData');
    }
  }

  renderLoader() {
    return (
      <div className={styles.loader}>
        <Loader size="80px" color="red" />
        <h3> Loading Web3, accounts, and contract...</h3>
        <p> Unlock your metamask </p>
      </div>
    );
  }

  renderDeployCheck(instructionsKey) {
    return (
      <div className={styles.setup}>
        <div className={styles.notice}>
          Your <b> contracts are not deployed</b> in this network. Two potential reasons: <br />
          <p>
            Maybe you are in the wrong network? Point Metamask to localhost.<br />
            You contract is not deployed. Follow the instructions below.
          </p>
        </div>
      </div>
    );
  }

  renderInstructions() {
    return (
      <div className={styles.wrapper}>
        <Hero />
      </div>
    );
  }

  renderCzExchange() {
    return (
      <div className={styles.wrapper}>
      {!this.state.web3 && this.renderLoader()}
      {this.state.web3 && !this.state.cz_exchange && (
        this.renderDeployCheck('cz_exchange')
      )}
      {this.state.web3 && this.state.cz_exchange && (
        <div className={styles.contracts}>
          <div className={styles.widgets}>
            <Card width={'350px'} bg="primary">
              <h2>Cheeze Exchange</h2>

              <Button onClick={this.getTestData}>Get Test Data</Button>
            </Card>
          </div>
        </div>
      )}
      </div>
    );
  }

  render() {
    return (
      <div className={styles.App}>
        <Header />
          {this.state.route === '' && this.renderInstructions()}
          {this.state.route === 'cz_exchange' && this.renderCzExchange()}
        <Footer />
      </div>
    );
  }
}

export default App;
