pragma solidity ^0.5.0;

import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/StandaloneERC20.sol";

contract GBAToken is StandaloneERC20 {

    event CBTransfer(address from, address to, uint256 value, string blockchain, string destAddr, string memo);
    event MemoTransfer(address from, address to, uint256 value, string memo);

    function cbTransferFrom(address sender, address recipient, uint256 amount,
                string memory blockchain, string memory destAddr, string memory memo) public {
        transferFrom(sender, recipient, amount);
        emit CBTransfer(sender, recipient, amount, blockchain, destAddr, memo);
    }

    function memoTransferFrom(address sender, address recipient, uint256 amount, string memory memo) public {
        transferFrom(sender, recipient, amount);
        emit MemoTransfer(sender, recipient, amount, memo);
    }
}