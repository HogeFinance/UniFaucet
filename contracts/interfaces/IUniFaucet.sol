pragma solidity >=0.6.2;

interface IUniFaucet {
    function factory() external view returns (address);
    function removeLiquidity(address tokenA, uint liquidity, address to) external returns (uint amountA);
    function drip(address token, address to) payable external returns (uint amount);
    function getAvailableSpend(address token) view external returns (uint spend);
}
