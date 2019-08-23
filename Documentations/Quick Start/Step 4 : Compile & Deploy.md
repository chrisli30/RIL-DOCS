## Step 3 : Compile & Deploy

<style>
  img{
    margin:0 auto;
    width:80%;
  }
</style>

In this tutorial files, we aleady have two sample smart contracts available for testing. 

- Coin.sol a minimal token contract
- EIP20.sol an implementation of [EIP20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md) tokens provided by [ConsenSys](https://github.com/ConsenSys/Tokens)

#### Locate the Smart Contract files for an EIP20 Coin
- Navigate to under /truffle/contracts/eip20
```shell
cd truffle/contracts/eip20
ls
```
There are two .sol files in this directory: EIP20Interface.sol and EIP20.sol

#### View the EIP20Interface.sol
EIP20Interface.sol defines the required functions for the ERC20 base standard.
``` javascript
/// @param _owner The address from which the balance will be retrieved
/// @return The balance
function balanceOf(address _owner) public view returns (uint256 balance);
```
``` javascript
/// @notice send `_value` token to `_to` from `msg.sender`
/// @param _to The address of the recipient
/// @param _value The amount of token to be transferred
/// @return Whether the transfer was successful or not
function transfer(address _to, uint256 _value) public returns (bool success);
```

#### View the EIP20.sol
EIP20.sol provides the implementation for the functions declared in EIP20Interface.sol

``` javascript
function balanceOf(address _owner) public view returns (uint256 balance) {
    return balances[_owner];
}

```
``` javascript
function transfer(address _to, uint256 _value) public       returns (bool success) {
    require(balances[msg.sender] >= _value);
    balances[msg.sender] -= _value;
    balances[_to] += _value;
    emit Transfer(msg.sender, _to, _value); //solhint-disable-line indent, no-unused-vars
    return true;
}
```

#### Edit the EIP20 token 
