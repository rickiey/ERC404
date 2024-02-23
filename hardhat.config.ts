import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import dotenv from "dotenv";

dotenv.config();
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const NETURL = process.env.NETURL;

const PRIVATE_KEY = process.env.PRIVATE_KEY as string
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "ganache",

  networks: {
    ganache: {
      // defaultBalanceEther: 10,
      url: "HTTP://127.0.0.1:7545",
      accounts: [PRIVATE_KEY]
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/" + ALCHEMY_API_KEY,
      accounts: [PRIVATE_KEY]
    },
    sepolia: {
      url: NETURL,
      accounts: [PRIVATE_KEY]
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/" + ALCHEMY_API_KEY,
      accounts: [PRIVATE_KEY]
    }
  },
  // gasReporter: { enabled: true },
};

export default config;