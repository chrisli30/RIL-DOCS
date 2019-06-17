## RSK Technology & Security Model Overview


#### __RSK platform is, at its core, the combination of:__
* __A Turing-complete resource-accounted deterministic virtual machine (for smart contracts)__
<br/>
* __A two-way pegged Bitcoin Sidechain (for BTC denominated exchange) based on a Federation secured with custom HSM-modules. Once the drivechain protocol becomes implemented on Bitcoin, the original plan is to move to a hybrid- drivechain mechanism)__
<br/>

* __A selfish-mining resistant merge-mining-based consensus protocol__
<br/>

* __A low-latency block-propagation network (for fast payments)__
<br/>



#### [Turing-Complete Virtual Machine (RVM)](./Turing-Complete.md)

The RVM is compatible with EVM at the op-code level, allowing Ethereum contracts to run flawlessly on RSK.

Performance improvement pipeline documented in numerous RSKIPs (RSK improvement proposals) created by the RSK community.


#### [Security Model： Sidechains & Federation](./Security-Model.md)

A sidechain is an independent blockchain whose native currency is pegged to the value of another blockchain currency automatically by using proofs of payment.

In RSK, the Smart Bitcoin (RBTC) is two-way pegged to the BTC.

As of January 2019, the RSK Federation comprises 15 well-known, and highly-secure notaries. Leading Blockchain companies currently integrate the RSK Federation and participate in an autonomous protocol to securely lock Bitcoins. 

#### [Merged Mining](./Merged-Mining.md)

 Merge mining is a technique that allows Bitcoin miners to mine other cryptocurrencies simultaneously with nearly zero marginal cost. The same mining infrastructure and setup they use to mine Bitcoins is reused to mine RSK simultaneously. This means that, as RSK rewards the miners with additional transaction fees, the incentive for merged mining becomes high.

#### [Fast Payments and Low-Latency-Network](./Fast-Payments.md)

RSK aims to provide a much better on-chain payment network compared to Bitcoin.

#### [Transaction Privacy](./Transaction-Privacy.md)

RSK does not provide better transaction privacy by itself than Bitcoin and relies on pseudonyms. Nevertheless, the VM of RSK is Turing-complete, so anonymization technologies such as CoinJoin, ring Signatures or zCash can be implemented securely without third-party trust.

#### [Scalability](./Scalability.md)

RSK can scale far beyond Bitcoin in its current state. An RSK payment requires a fifth of the size of a standard Bitcoin payment. Using the proposed LTCP protocol, transaction size can be reduced to 1/50th of a Bitcoin transaction size. This immediately leads to a substantial increase in transaction volume capability. Besides, there are community proposals (RSKIPs) to enable user-selectable signature schemes: ECDSA, Schnorr and Ed25519. Because Ed25519 is more performant than Bitcoin ECDSA curve, using this scheme may lead to even more capacity.
