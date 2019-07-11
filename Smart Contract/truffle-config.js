/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = 'view blood flavor endless truth lobster seed ice anxiety guide pulp laundry';

const publicNode = 'https://public-node.testnet.rsk.co:443'

const PrivateKeyProvider = require("truffle-privatekey-provider");
 
const privateKey = "c85ef7d79691fe79573b1a7064c19c1a9819ebdbd1faaab1a8ec92344438aaf4"; // Public Key: 0xcd2a3d9f938e13cd947ec05abc7fe734df8dd826

module.exports = {
  networks: {
    testnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, publicNode),
      network_id: '*',
      gas: 2500000,
      gasPrice: 183000
    },
    regtest: {
      provider: new PrivateKeyProvider(privateKey, "http://127.0.0.1:4444"),
      host: "127.0.0.1",
      port: 4444,
      network_id: "*"
    }
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.24",
      evmVersion: "byzantium"
    }
  }
}
