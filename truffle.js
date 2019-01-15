const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic =
  'pen shield shine trust horse share woman unknown accuse sample rocket pen';

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          'https://rinkeby.infura.io/v3/f508b21f6e64484e8fbc7ee51b2b4d49'
        );
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    }
  }
};
