//////////////
// Library functions
import '../interfaces/IRainbowStake.sol';

import "./SafeMath.sol";

library RainbowLibrary {
    using SafeMath for uint;

    // calculates the CREATE2 address for a pair without making any external calls
    function stakeFor(address factory, address tokenA) internal pure returns (address stake) {
        return address(0);
//        stake = address(uint(keccak256(abi.encodePacked(
//                hex'ff',
//                factory,
//                keccak256(abi.encodePacked(tokenA)),
//                hex'96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f' // TODO-change to our deployed addr
//            ))));
    }
}
