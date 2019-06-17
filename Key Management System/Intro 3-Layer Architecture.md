## Introduction to RSK Key Management System

#### What is it for?
THe RSK Key Management System library is to assist developers to easily interact with the RSK blockchain and its ecosystem. The goal is to build a general-purpose library around the core functionalities of the RSK blockchain.

#### Feature Highlights
* Keep your private keys in your client, safe and sound
* Import and export JSON wallets 
* Import and export BIP 39 mnemonic phrases (12 word backup phrases) and HD Wallets 
* Meta-classes create JavaScript objects from any contract ABI, including ABIv2 and Human-Readable ABI
* Connect to RSK nodes over JSON-RPC
* Complete functionality for all your RSK needs
* Comprehensive documentation
* Large collection of test cases which are maintained and added to
* Fully Open Sourced

#### 3 Layer Architecture
The RSK Key Management System library is built with a 3 layer architecture. 
* The Base Layer enableds wallet(private keys) to be stored in secure enclave and hardware device. It also provides ways to store, protect, access and recovery wallets.
* The Middle Layer provides API Interpreter for all typical actions, including transactions, smart contract operations, sign/verify messages, as well as common utilities. The Middle Layer sends request to base layer for verification and signing.
* The Top Layer provides API Interfaces to popular programming languages (JS, Python, etc) and also connects to provider handlers.

#### pic