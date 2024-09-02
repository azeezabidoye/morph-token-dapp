// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract IToken is ERC20, ERC20Permit {
    constructor() ERC20("I Token", "IT") ERC20Permit("I Token") {
        _mint(_msgSender(), 1_000_000_000 * 1e18);
    }
}