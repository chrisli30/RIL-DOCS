## BTC RBTC Conversion

<style>
  img{
    margin:0 auto;
    width:80%;
  }
</style>

### Introduction

In this article we will explain step by step on how to convert from BTC to RBTC and vice versa. The process of conversion is called a **2-way peg** mechanism, which locks BTC token on BTC network in BTC-to-RBTC conversion and release the BTC token during RBTC-to-BTC conversion.

### Testnet Guide

In this section we will go over the steps of converting BTC to RBTC and vice versa in BTC and RBTC testnet.

Note:
The minimum amount of Bitcoin to convert is **0.01 BTC** for Testnet.

#### 1. BTC to RBTC conversion

**1.1 Connect a wallet to BTC testnet**
We recommend to use Electrum BTC wallet for connecting to BTC testnet.
* First, you will need to download the wallet from [Electrum Website](https://bitzuma.com/posts/a-beginners-guide-to-the-electrum-bitcoin-wallet/)
* Second, install the App.
* Then, start Electrum in testnet mode, for example on MacOS.
`/Applications/Electrum.app/Contents/MacOS/Electrum --testnet`
* Once Electrum starts, create or import a wallet and go to the third tab "Receive". You will see a Bitcoin Testnet address like below.

> Note: The Bitcoin wallet needs to be legacy (not Segwit) whose public key starts with either *m* or *n*, and private key starting with *p2pkh:*

**1.2 Get test Bitcoin from testnet Faucet**
There are a few options to get Bitcoin on Testnet. We use [https://testnet-faucet.mempool.co/](https://testnet-faucet.mempool.co/)

**1.3 Whitelist Bitcoin address in RSK**
You can contact us in RSK official [Gitter channels](https://gitter.im/rsksmart/getting-started) to whitelist your Bitcoin testnet address. The admin Alejandro Cavallero @alepc253 will add you to the whitelist.

**1.4 Send Bitcoin to RSK Federation address**
The Federation address is retrieved by making a Smart Contract call on RSK Testnet. In order to make the call, you will need to have **MyCrypto** installed, selet RSK Testnet in *"More Networks"*, and Navigate to *"MyCrypto -> Contracts -> Select Existing Contracts -> "Bridge" -> "getFederationAddress"* to execute the call. It should look like below screenshot.

Once got Federation address, you can send Bitcoin to it from your whitelisted Bitcoin address.

> Note: You need to send a minimum amount of 0.01 BTC for conversion.

**1.5 Get RBTC address with BTC private key**
You can get RBTC address with your BTC private key from [https://utils.rsk.co/](https://utils.rsk.co/).

> Note: when entering Bitcoin private key do not include *p2pkh:* in the front.

**1.6 Check RBTC balance on Testnet**
Get it by using MyCrypto (select the RSK network, the Bridge contract is one of the existing contracts) or invoking getFederationAddress method of the Bridge contract at address: 0x0000000000000000000000000000000001000006 (for testnet or mainnet.

You have to wait a minimum of 100 confirmations + a minimum of 5 minutes for checking your RBTC balance

#### 2. RBTC to BTC conversion

2.1 Send RBTC back to Federation Address
Federation Address:

2.1 Get BTC address with RBTC private key
If you forgot BTC public address you can retrieve it with RBTC private key from [https://utils.rsk.co/](https://utils.rsk.co/). 

> Note: If you want to generate the address on your local machine, git clone this repo [https://github.com/rsksmart/utils/](https://github.com/rsksmart/utils/) and open index.html in Browser.

2.1 Check balance of BTC address on Bitcoin Testnet
You can either use Electrum wallet downloaded earlier or from any Bitcoin explorer.

### Mainnet Guide

In this section we will go over the steps of converting BTC to RBTC and vice versa in BTC and RBTC mainnet.

Note:
The minimum amount of Bitcoin to convert is **0.01 BTC** for Mainnet.

#### 1. BTC to RBTC conversion

#### 2. RBTC to BTC conversion

### Q & A
**1. How frequent does Federation address change?**
Federation address has changed three times since RSK mainnet launch.

**2. Do I lose my Bitcoin if Federation address change during my transfer?**
There is a grace period for Federation address change. You will still be able to lock Bicoin and get RBTC during the grace period, however, any Bitcoin sent to the old Federation address will be lost post to the grace period.

**3. **

