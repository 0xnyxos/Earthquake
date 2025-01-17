// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import {Helper} from "../Helper.sol";
import {VaultFactoryV2} from "../../../src/v2/VaultFactoryV2.sol";
import {CVIPriceProvider} from "../../../src/v2/oracles/CVIPriceProvider.sol";
import {TimeLock} from "../../../src/v2/TimeLock.sol";
import {MockOracleAnswerZeroCVI, MockOracleTimeOutCVI} from "./MockOracles.sol";

contract CVIPriceProviderTest is Helper {
    uint256 public arbForkId;
    VaultFactoryV2 public factory;
    CVIPriceProvider public cviPriceProvider;

    ////////////////////////////////////////////////
    //                HELPERS                     //
    ////////////////////////////////////////////////

    function setUp() public {
        arbForkId = vm.createFork(ARBITRUM_RPC_URL);
        vm.selectFork(arbForkId);

        address timelock = address(new TimeLock(ADMIN));
        factory = new VaultFactoryV2(WETH, TREASURY, address(timelock));
        cviPriceProvider = new CVIPriceProvider(
            CVI_ORACLE,
            TIME_OUT,
            CVI_DECIMALS
        );
    }

    ////////////////////////////////////////////////
    //                STATE                       //
    ////////////////////////////////////////////////
    function testCVICreation() public {
        assertEq(cviPriceProvider.timeOut(), TIME_OUT);
        assertEq(address(cviPriceProvider.priceFeedAdapter()), CVI_ORACLE);
        assertEq(cviPriceProvider.decimals(), CVI_DECIMALS);
        assertEq(cviPriceProvider.description(), "CVI");
    }

    ////////////////////////////////////////////////
    //                FUNCTIONS                  //
    ////////////////////////////////////////////////
    function testLatestRoundDataCVI() public {
        (
            uint80 roundId,
            int256 price,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        ) = cviPriceProvider.latestRoundData();
        assertTrue(price != 0);
        assertTrue(roundId != 0);
        assertEq(startedAt, 1);
        assertTrue(updatedAt != 0);
        assertTrue(answeredInRound != 0);
    }

    function testLatestPriceCVI() public {
        int256 price = cviPriceProvider.getLatestPrice();
        assertTrue(price != 0);
    }

    function testConditionMetCVI() public {
        (bool condition, int256 price) = cviPriceProvider.conditionMet(100);
        assertTrue(price != 0);
        assertEq(condition, true);
    }

    ////////////////////////////////////////////////
    //              REVERT CASES                  //
    ////////////////////////////////////////////////

    function testRevertConstructorInputs() public {
        vm.expectRevert(CVIPriceProvider.ZeroAddress.selector);
        new CVIPriceProvider(address(0), TIME_OUT, CVI_DECIMALS);

        vm.expectRevert(CVIPriceProvider.InvalidInput.selector);
        new CVIPriceProvider(CVI_ORACLE, 0, CVI_DECIMALS);
    }

    function testRevertOraclePriceZeroCVI() public {
        address mockOracle = address(new MockOracleAnswerZeroCVI());
        cviPriceProvider = new CVIPriceProvider(
            mockOracle,
            TIME_OUT,
            CVI_DECIMALS
        );
        vm.expectRevert(CVIPriceProvider.OraclePriceZero.selector);
        cviPriceProvider.getLatestPrice();
    }

    function testRevertTimeOut() public {
        address mockOracle = address(
            new MockOracleTimeOutCVI(block.timestamp, TIME_OUT)
        );
        cviPriceProvider = new CVIPriceProvider(
            mockOracle,
            TIME_OUT,
            CVI_DECIMALS
        );
        vm.expectRevert(CVIPriceProvider.PriceTimedOut.selector);
        cviPriceProvider.getLatestPrice();
    }
}
