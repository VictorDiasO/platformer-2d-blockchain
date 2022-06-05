// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract PlatformerToken is ERC20, ERC20Burnable, Ownable {
    address public _owner;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() ERC20("PlatformerToken", "PM2D") {
        _mint(msg.sender, 50000000 * 10**decimals());
        _owner = msg.sender;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    /**
     * @dev Burn the token.
     */
    function burn(uint256 amount) public override onlyOwner {
        _burn(msg.sender, amount);
    }

    function reward(address to, uint256 amount) public onlyOwner {
        _transfer(_owner, to, amount);
    }
}
