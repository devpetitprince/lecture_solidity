import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
    version: "0.8.19",
  },
],
overrides: {},
},
networks: {
  hardhat: {
    forking: {
      url: "https://klaytn04.fandom.finance",
    },
    accounts: {
      mnemonic: "test test test test test test test test test test test junk",
      accountsBalance: "10000000000000000000000000",
    },
    blockGasLimit: 30000000,
  },
  baobab: {
    url: "https://api.baobab.klaytn.net:8651",
    chainId: 1001,
    accounts: require("./baobab.json").privateKey,
    gas: 20000000,
    gasPrice: 25000000000,
  },
  cypress: {
    url: "https://klaytn01.fandom.finance/",
    chainId: 8217,
    accounts: require("./cypress.json").privateKey,
    gas: 20000000,
    gasPrice: 25000000000,
    },
  },
};


export default config;
