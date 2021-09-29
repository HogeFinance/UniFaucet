pragma solidity >=0.5.0;

interface IRainbowCallee {
    function rainbowCall(address sender, uint amount0, bytes calldata data) external;
}
