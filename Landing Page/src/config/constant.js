export const landPageMenu = [
  {
    name: 'Documentation',
    link: 'https://developers.doc.rsk.co/docs',
    ifOpenNewTab: false,
  },
  {
    name: 'RSK',
    link: 'https://www.rsk.co/',
    ifOpenNewTab: true,
  },
  {
    name: 'RIFOS',
    link: 'https://www.rifos.org/',
    ifOpenNewTab: true,
  },
  {
    name: 'Discussions',
    link: 'https://developers.doc.rsk.co/discuss',
    ifOpenNewTab: false,
  },
];

const gettingStartedList = [
  {
    name: 'RSK Introduction',
    link: 'https://developers.doc.rsk.co/docs/rsk-introduction',
    ifOpenNewTab: false,
  },
  {
    name: 'Node Setup',
    link: 'https://developers.doc.rsk.co/docs/set-up-a-node',
    ifOpenNewTab: false,
  },
  {
    name: 'RIF Services',
    link: 'https://developers.doc.rsk.co/docs/rif-services',
    ifOpenNewTab: false,
  },
  {
    name: 'Connect to RSK',
    link: 'https://developers.doc.rsk.co/docs/connect-to-rsk',
    ifOpenNewTab: false,
  },
  {
    name: 'Improvement Proposals',
    link: 'https://developers.doc.rsk.co/docs/rskip',
    ifOpenNewTab: false,
  },
];

const librariesToolsList = [
  {
    name: 'Wallet API',
    link: 'https://developers.doc.rsk.co/docs/javascript-wallet-library',
    ifOpenNewTab: false,
  },
  {
    name: 'RSK Explorer',
    link: 'https://developers.doc.rsk.co/docs/rsk-explorer',
    ifOpenNewTab: false,
  },
  {
    name: 'RSK Stats',
    link: 'https://stats.rsk.co/',
    ifOpenNewTab: true,

  },
  {
    name: 'Testnet Faucet',
    link: 'https://developers.doc.rsk.co/docs/testnet-faucet',
    ifOpenNewTab: false,

  },
  {
    name: 'Gas Station',
    link: 'https://developers.doc.rsk.co/docs/gas-station',
    ifOpenNewTab: false,
  },
];
const smartContractDevelopmentList = [
  {
    name: 'Hello World!',
    link: 'https://developers.doc.rsk.co/docs/hello-world',
    ifOpenNewTab: false,
  },
  {
    name: 'Deploy a Smart Contract',
    link: 'https://developers.doc.rsk.co/docs/deploy-a-smart-contract',
    ifOpenNewTab: false,
  },
  {
    name: 'Interact with Smart Contract',
    link: 'https://developers.doc.rsk.co/docs/interaction-with-the-contract',
    ifOpenNewTab: false,
  },
];

export const subListArray = [
  {
    category: 'GETTING STARTED',
    details: gettingStartedList,
  },
  {
    category: 'LIBRARIES & TOOLS',
    details: librariesToolsList,
  },
  {
    category: 'SMART CONTRACT DEVELOPMENT',
    details: smartContractDevelopmentList,
  },
];


export const artistList = [
  'Developer friendly',
  'Enterprise-grade security',
  'Fast and scalable ',
  'Built on Bitcoin, powered by Smart Contracts',
  'Core apps and infrastructure marketplace',
];
//
const DevlopFriendly = {
  title: 'Developer friendly',
  content: `RSK+RIFOS is fully compatible with Solidity, the most used Smart Contract (SC) programming language, and Web 3 standards. This means that any SC deployed in the Ethereum blockchain can
  easily be ported to our ecosystem.
  In addition, the RSK+RIFOS ecosystem includes a set of libraries and APIs (more to come soon!) to help developers build on top of our distributed technology stack, even if they are not blockchain
  experts. Our architecture is designed to abstract all the complexities of distributed technology, focusing on what’s important to developers: a great UX, proper documentation and support. `,
  link: '',
};
const EnterpriseGradesecurity = {
  title: 'Enterprise-grade security',
  content: `The RSK blockchain is the first Turing-complete, open-source smart contract platform secured by the Bitcoin network through merge-mining.
  Our mainnet has been live for over 18 months, and has had zero down-time so far.
  Also, as an open source product, we have one of the most active Github communities in the Bitcoin space, with twice as many commits as the bitcoin blockchain and growing fast.
  You can read more about the underlying technology behind `,
  link: 'https://github.com/rsksmart',
  linkName: 'RSK Github',
  ifOpenNewTab: true,
};
const FastAndScalable = {
  title: 'Fast and scalable',
  content: `Off the bat, the RSK blockchain is capable of processing up to 100 transactions per second (TPS) on chain without affecting decentralization. Through a series of compression protocols, this number
  can go up to 400 TPS on-chain. In addition, we recently launched our off-chain payments protocol called Lumino, which brings near-instant payments processing speeds to all tokens deployed on the
  RSK+RIFOS ecosystem. As a result, we are able to provide a reliable, fast and economically viable solution for the decentralized infrastructure required for multiple business models that were, until
  now, unable to consider this new technology as an alternative. To learn more, you can visit `,
  link: 'https://developers.doc.rsk.co/docs/rsk-introduction',
  linkName: 'RSK Introductions',
  ifOpenNewTab: false,
};
const poweredBySmartContracts = {
  title: 'Built on Bitcoin, powered by Smart Contracts',
  content: `We believe Bitcoin is the gold-standard of blockchains and the most secure, immutable and decentralized network in the world. This is why RSK’s architecture is built on top of it. Yet, our view is that
  business logic and application layers should be separated from the underlying blockchain. This not only makes developing easier (by eliminating the need to learn how a particular blockchain works),
  but also safer and more flexible for the future.`,
  link: '',
};
const CoreAppsAndInfrastructureMarketplace = {
  title: 'Core apps and infrastructure marketplace',
  content: `The RIF utility token allows developers to access an ever-growing infrastructure services marketplace. It also opens up the possibility of participating in such marketplace as a provider, monetizing
  their available infrastructure within the RSK+RIFOS ecosystem and its growing user base.
  The RIF Token brings a seamless way to buy and sell decentralized infrastructure within our ecosystem. One token, endless possibilities. We can’t wait to see what you build next!
  To learn more about current and future plans for the RIF Token, please visit `,
  link: 'https://www.rifos.org/rif-token/',
  linkName: 'RIF Token',
};


export const artistDetailList = [
  DevlopFriendly,
  EnterpriseGradesecurity,
  FastAndScalable,
  poweredBySmartContracts,
  CoreAppsAndInfrastructureMarketplace,
];

