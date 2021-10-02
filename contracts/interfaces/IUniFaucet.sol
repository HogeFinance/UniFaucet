pragma solidity >=0.6.2;

interface IUniFaucet {
    function factory() external view returns (address);

    function addLiquidity(
        address tokenA,
        uint amountADesired,
        address to
    ) external returns (uint liquidity);
    function removeLiquidity(
        address tokenA,
        uint liquidity,
        address to
    ) external returns (uint amountA);
//    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
//    external
//    payable
//    returns (uint[] memory amounts);
//    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
//    external
//    returns (uint[] memory amounts);
//    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
//    external
//    returns (uint[] memory amounts);
//    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
//    external
//    payable
//    returns (uint[] memory amounts);
//
//    function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);
//    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);
//    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);
//    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);
//    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);
}
