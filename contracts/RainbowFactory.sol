pragma solidity >=0.6.0 <0.9.0;

import './interfaces/IRainbowFactory.sol';
import './RainbowStake.sol';

// Interaction Contracts - https://github.com/Uniswap/v2-periphery/tree/master/contracts/interfaces
// Core Contracts - https://github.com/Uniswap/v2-core/tree/master/contracts
contract RainbowFactory is IRainbowFactory {
    address public override feeTo;
    address public override feeToSetter;

//    bytes32 public constant INIT_CODE_PAIR_HASH = keccak256(abi.encodePacked(type(RainbowStake).creationCode));

    mapping(address => address) public override getStake;
    address[] public override allStakes;

//    event StakeCreated(address indexed token0, address stake, uint);

    constructor(address _feeToSetter) public {
        feeToSetter = _feeToSetter;
    }

    function allStakesLength() external view override returns (uint) {
        return allStakes.length;
    }

    function createStake(address token0) external override returns (address stake) {
        require(token0 != address(0), 'RainbowFactory: ZERO_ADDRESS');

        require(getStake[token0] == address(0), 'UniswapV2: STAKE_EXISTS'); // single check is sufficient

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

    function setFeeTo(address _feeTo) external override {
        require(msg.sender == feeToSetter, 'RainbowFactory: FORBIDDEN');
        feeTo = _feeTo;
    }

    function setFeeToSetter(address _feeToSetter) external override {
        require(msg.sender == feeToSetter, 'RainbowFactory: FORBIDDEN');
        feeToSetter = _feeToSetter;
    }
}
