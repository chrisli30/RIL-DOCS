pragma solidity ^0.4.17;
import 'openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract YourNewToken is StandardToken, Ownable {
  string public name = 'CoinFabrik';
  string public symbol = 'CF';
  uint8 public decimals = 18;
  uint public INITIAL_SUPPLY = 1000;

  string Owner;

  event Yes(string);
  event No(string);

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY * (10**uint(decimals));
    balances[msg.sender] = totalSupply_;
  }

  function setON(string _n) public onlyOwner returns (bool) {
    Owner = _n;
    return true;
  }

  function getON() public view returns (string) {
    return Owner;
  }

  function () public payable {
    if (msg.value > 0) {
      emit Yes('Thanks for donating RBTC! :)');
    } else {
      emit No('Error 404: Function not found :P');
    }
  }
  function destroy() public onlyOwner {
    selfdestruct(owner);
  }
}