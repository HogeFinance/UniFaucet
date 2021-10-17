pragma solidity >=0.5.0;

interface IRainbowStake {
    event Mint(address indexed sender, uint amount0);
    event Burn(address indexed sender, uint amount0, address indexed to);
    event Drip(address indexed to, uint amount);
    event Sync(uint reserve0);

    function factory() external view returns (address);
    function token0() external view returns (address);
    function getReserve() external view returns (uint reserve0);
    function addLiquidity(address tokenA, uint amountA, address to) external;
    function burn(address to) external returns (uint amount0);
    function drip(address to, uint amount) external;
    function initialize(address) external;
}
