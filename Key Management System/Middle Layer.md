## Middle Layer

The Middle Layer provides API Interpreter for all typical actions, including transactions, smart contract operations, sign/verify messages, as well as common utilities. The Middle Layer sends request to base layer for verification and signing.

## Contract Operations
A Contract is an abstraction of an executable program on the RSK Blockchain. A Contract has code (called byte code) as well as allocated long-term memory (called storage). Every deployed Contract has an address, which is used to connect to it so that it may be sent messages to call its methods.

A Contract can emit Events, which can be efficiently observed by applications to be notified when a contract has performed specific operation. Events cannot be read by a Contract.

The Contract API provides simple way to connect to a Contract and call its methods, as functions on a JavaScript object, handling all the binary protocol conversion, internal name mangling and topic construction. This allows a Contract object to be used like any standard JavaScript object, without having to worry about the low-level details of the  Virtual Machine or Blockchain.

The Contract object is a meta-class, which is a class that defines a Class at run-time. The Contract definition (called an Application Binary Interface, or ABI) can be provided and the available methods and events will be dynamically added to the object.

#### Deploying a Contract
https://docs.ethers.io/ethers.js/html/api-contract.html#deploying-a-contract
抄 Deploying a Contract 下面的所有函数，绿色的sample不用抄 不用分子类，就连着写起来就行

#### Connecting to Existing Contracts
https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-existing-contracts
抄 Connecting to Existing Contracts 下面的所有函数，绿色的sample不用抄

#### Meta-Class Properties
https://docs.ethers.io/ethers.js/html/api-contract.html#meta-class-properties
抄 Meta-Class Properties 下面的所有函数，绿色的sample不用抄

#### Event Emitter
https://docs.ethers.io/ethers.js/html/api-contract.html#event-emitter
抄 Event Emitter 下面的所有函数，包括Event Names， Event Object , Configuring Events，绿色的sample不用抄


## Utilities
The utility functions provide a large assortment of common utility functions required to write dapps, process user input and format data.

#### Addresses
There are several formats available to represent RSK addresses and various ways they are determined.


https://docs.ethers.io/ethers.js/html/api-utils.html
抄 getAddress

抄 getContractAddress

#### Big Numbers
A BigNumber is an immutable object which allow accurate math operations on values larger than JavaScript can accurately handle can safely handle.


https://docs.ethers.io/ethers.js/html/api-utils.html
抄 Big Numbers 下面所有


#### Cryptographic Functions
https://docs.ethers.io/ethers.js/html/api-utils.html
抄 Elliptic Curve 下面的 5个函数
