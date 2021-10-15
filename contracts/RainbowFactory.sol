pragma solidity >=0.6.0 <0.9.0;

import './interfaces/IRainbowFactory.sol';
import './RainbowStake.sol';

// Interaction Contracts - https://github.com/Uniswap/v2-periphery/tree/master/contracts/interfaces
// Core Contracts - https://github.com/Uniswap/v2-core/tree/master/contracts
contract RainbowFactory is IRainbowFactory {
    mapping(address => address) public override getStake;
    address[] public override allStakes;

    constructor() {}

    function allStakesLength() external view override returns (uint) {
        return allStakes.length;
    }

    function createStake(address token0) external override returns (address stake) {
        require(token0 != address(0), 'RainbowFactory: ZERO_ADDRESS');

        require(getStake[token0] == address(0), 'UniFaucet: STAKE_ALREADY_EXISTS'); // single check is sufficient

        bytes memory bytecode = type(RainbowStake).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(token0));
        assembly {
            stake := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }
        IRainbowStake(stake).initialize(token0);
        getStake[token0] = stake;
        allStakes.push(stake);
        emit StakeCreated(token0, stake, allStakes.length);
    }
}
