require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-abi-exporter');
require('hardhat-deploy');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const privateKey = process.env.PRIVATE_KEY;
const etherscan = process.env.ETHERSCAN_API_KEY;
const infuraKey = process.env.INFURA_KEY;
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'hardhat',
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 50,
    enabled: true,
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraKey}`,
      accounts,
    },
    testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [privateKey],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    bsc_mainnet: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts: [privateKey],
    },
  },
  etherscan: {
    apiKey: etherscan,
  },
};
