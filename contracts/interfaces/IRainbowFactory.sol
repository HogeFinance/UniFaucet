pragma solidity >=0.5.0;

interface IRainbowFactory {
    event StakeCreated(address indexed token0, address stake, uint);

    function getStake(address tokenA) external view returns (address stake);
    function allStakes(uint) external view returns (address stake);
    function allStakesLength() external view returns (uint);

    function createStake(address tokenA) external returns (address stake);
}
