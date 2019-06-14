## Top Layer
The RSK Key Management Top Layer provides Account Management interfaces, API interfaces (Python, JS) and Provider handler to interact with RSK provider networks (Local, Public, and 3rd party operated).


下面这些文字格式化一下，例子

**函数名字放在这**
>解释说明放在这

怎么区分函数和解释说明呢呢，看这个文档， 第一列是我们要的第一行，右边的列是解释说明
https://docs.google.com/document/d/1lAmVf_2vobBCJzXtvrO5fDnKglb3dOgFjkCskSFSM5E/edit?usp=sharing


connect (provider-network)
Connect to an RSK node network

create_wallet
Create a wallet with a label & master encrypted passphrase
choose between using a hardware wallet, generating keystore file or a mnemonic phrase.

Example:
create_wallet MyWallet1_Label -pass (prompted to enter password)
create_wallet MyWallet1_Label -mnemonic “.... ….”
set_wallet_label
Sets the local wallet label to a new label
Usage: set_wallet_label MyWallet1 My-Developer-Wallet
import_wallet
Import existing wallet’s accounts as a new Wallet using a private key or encrypted JSON keystore
Usage: import_wallet MyWallet1 -json mywallet1.json NewEncryptedPass (prompted to enter the old encrypted password) 
recover_wallet_mnemonic
Recover a wallet using a mnemonic phrase

create_new_account
Create_new_account MyWallet1 [label_new_account]
Output: New account created 0x……. with label Account1 for wallet MyWallet1
import_account
Import an existing account
Usage: import 0x…. <from_Wallet2> <to_myWallet1>
export
Export the keyset for a wallet

get_dev_coins [RIF or RBTC]
Quickly get rBTC or RIF testnet funds from faucets. 
( Only works if you are connected to RSK-Testnet. }
Usage: get_dev_coins RIF MyWallet1 Account1
Output: Account1 in MyWallet1 has received 100 RIF tokens 


contract_create
Creates a new contract instance with all methods and events defined in the interface 
Usage: contract_create(Interface, address, options)
contract_method
Create a transaction object for a method that can be called, sent, estimated
ttcontract_event_subscribe_once
Subscribes to an event only once
contract_event_subscribe
Subscribes to an event
contract_allevents
Receives all events from this smart contract, or filter events.
contract_pastevents
Gets past events for this contract.


view_accounts
Show accounts for existing wallet using a variety of methods [ hardware, web3, private key, keystore, mnemonic]
Usage: view_accounts MyWallet1 <encrypted_passphrase>
get_balance
Get balance of accounts in a wallet, or specify a specific account
Usage: get_balance MyWallet1  OR   get_balance MyWallet1 0xAccountInfo
pay, payment
to, amount, account from, fee
paytomany
Pay to many
signMsg, signTx
Signing of messages or transactions
Usage: signTx(tx, privatekey, callback)
check_tx_status
Check the transaction status of a txID
build_tx
build_tx(account, amount, gas, nonce, gasPrice, data)
send_tx
Sends a signed transaction
Usage: sendtx(0x + hex_string)
