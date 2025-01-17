// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import {IVaultFactoryV2} from "../interfaces/IVaultFactoryV2.sol";
import {IConditionProvider} from "../interfaces/IConditionProvider.sol";
import {ICVIPriceFeed} from "../interfaces/ICVIPriceFeed.sol";

contract CVIPriceProvider is IConditionProvider {
    uint256 public immutable timeOut;
    ICVIPriceFeed public priceFeedAdapter;
    uint256 public immutable decimals;
    string public description;

    constructor(address _priceFeed, uint256 _timeOut, uint256 _decimals) {
        if (_priceFeed == address(0)) revert ZeroAddress();
        if (_timeOut == 0) revert InvalidInput();
        priceFeedAdapter = ICVIPriceFeed(_priceFeed);
        timeOut = _timeOut;
        decimals = _decimals;
        description = "CVI";
    }

    function latestRoundData()
        public
        view
        returns (
            uint80 roundId,
            int256 price,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        )
    {
        uint32 cviValue;
        (cviValue, roundId, updatedAt) = priceFeedAdapter
            .getCVILatestRoundData();
        price = int32(cviValue);
        startedAt = 1;
        answeredInRound = roundId;
    }

    /** @notice Fetch token price from priceFeedAdapter (Redston oracle address)
     * @return price Current token price
     */
    function getLatestPrice() public view virtual returns (int256 price) {
        (uint256 uintPrice, , uint256 updatedAt) = priceFeedAdapter
            .getCVILatestRoundData();
        price = int256(uintPrice);
        if (price == 0) revert OraclePriceZero();

        // TODO: What is a suitable timeframe to set timeout as based on this info? Update at always timestamp?
        if ((block.timestamp - updatedAt) > timeOut) revert PriceTimedOut();

        if (decimals < 18) {
            uint256 calcDecimals = 10 ** (18 - (decimals));
            price = price * int256(calcDecimals);
        } else if (decimals > 18) {
            uint256 calcDecimals = 10 ** ((decimals - 18));
            price = price / int256(calcDecimals);
        }

        return price;
    }

    // NOTE: _marketId unused but receiving marketId makes Generic controller composabile for future
    /** @notice Fetch price and return condition
     * @param _strike Strike price
     * @return boolean If condition is met i.e. strike > price
     * @return price Current price for token
     */
    function conditionMet(
        uint256 _strike
    ) public view virtual returns (bool, int256 price) {
        price = getLatestPrice();
        return (int256(_strike) < price, price);
    }

    /*//////////////////////////////////////////////////////////////
                                 ERRORS
    //////////////////////////////////////////////////////////////*/
    error ZeroAddress();
    error InvalidInput();
    error OraclePriceZero();
    error RoundIdOutdated();
    error PriceTimedOut();
}
