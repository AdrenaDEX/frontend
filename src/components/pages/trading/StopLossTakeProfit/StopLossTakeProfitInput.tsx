import React, { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import InputNumber from '@/components/common/InputNumber/InputNumber';
import FormatNumber from '@/components/Number/FormatNumber';
import { useSelector } from '@/store/store';
import { PositionExtended } from '@/types';
import { formatPriceInfo, getTokenSymbol, nativeToUi } from '@/utils';

export default function StopLossTakeProfitInput({
  position,
  type,
  input,
  setInput,
  setIsError,
}: {
  position: PositionExtended;
  input: number | null;
  setInput: (nb: number | null) => void;
  type: 'Stop Loss' | 'Take Profit';
  setIsError: (b: boolean) => void;
}) {
  const tokenPrices = useSelector((s) => s.tokenPrices);
  const [infos, setInfos] = React.useState<{
    min: number | null;
    max: number | null;
    priceIsOk: true | number;
    priceChangePnL: number | null;
  } | null>(null);

  const markPrice: number | null =
    tokenPrices[getTokenSymbol(position.token.symbol)];

  useEffect(() => {
    let priceChangePnL: number | null = null;

    if (
      markPrice === null ||
      position.liquidationPrice === null ||
      typeof position.liquidationPrice === 'undefined'
    ) {
      return;
    }

    const fees =
      position.exitFeeUsd + (position.borrowFeeUsd ? position.borrowFeeUsd : 0);

    if (input !== null) {
      if (position.side === 'long') {
        priceChangePnL =
          (position.sizeUsd * (input - position.price)) / markPrice - fees;
      } else if (position.side === 'short') {
        priceChangePnL =
          (position.sizeUsd * (position.price - input)) / markPrice - fees;
      }
    }

    let min: number | null =
      type === 'Stop Loss' ? position.liquidationPrice : markPrice;
    let max = type === 'Stop Loss' ? markPrice : null;

    if (position.side === 'short') {
      if (type === 'Stop Loss') {
        const tmp = min;
        min = max;
        max = tmp;
      } else {
        max = markPrice;
        // Find the asset price at which the position will be in 100% profit, so when the `price moved x%` times `position.leverage` is equal to 100, and get that price as the min value
        const collateralUsd = nativeToUi(
          position.nativeObject.collateralUsd,
          position.token.decimals,
        );
        const sizeUsd = nativeToUi(
          position.nativeObject.sizeUsd,
          position.token.decimals,
        );
        const leverage = sizeUsd / collateralUsd;
        min = position.price * (1 - 1 / leverage);
      }
    }

    const priceIsOk = (() => {
      if (input === null) return true;

      if (max === null && min === null) return true;

      if (max !== null && input > max) {
        return 1;
      }
      if (min !== null && input < min) {
        return -1;
      }

      return true;
    })();

    setIsError(priceIsOk !== true);

    setInfos({
      min,
      max,
      priceIsOk,
      priceChangePnL,
    });
  }, [
    input,
    markPrice,
    position.borrowFeeUsd,
    position.collateralUsd,
    position.exitFeeUsd,
    position.liquidationPrice,
    position.price,
    position.sizeUsd,
    position.side,
    position.leverage,
    setIsError,
    type,
    position.token.decimals,
    position.nativeObject.collateralUsd,
    position.nativeObject.sizeUsd,
  ]);

  const handleBlur = () => {
    if (input !== null && infos) {
      let newValue = input;

      // Enforce min and max constraints
      if (infos.min !== null && input < infos.min) {
        newValue = infos.min;
      } else if (infos.max !== null && input > infos.max) {
        newValue = infos.max;
      }

      // Round to a maximum of two decimal places without adding trailing zeros
      newValue = Math.round(newValue * 100) / 100;

      if (newValue !== input) {
        setInput(newValue);
      } else {
        // Even if the value hasn't changed, ensure it's rounded to two decimals
        setInput(Math.round(newValue * 100) / 100);
      }
    }
  };

  const handleSetInput = (value: number | null) => {
    if (value !== null) {
      setInput(value);
    }
  };

  // Helper function to adjust the price based on type and position side
  const getAdjustedPrice = (currentPrice: number, isMin: boolean): number => {
    const adjustment = 0.01;
    const isLong = position.side === 'long';

    if (type === 'Stop Loss') {
      if (isMin) {
        // For Stop Loss, adjust min
        return isLong ? currentPrice + adjustment : currentPrice + adjustment;
      } else {
        // For Stop Loss, adjust max if needed
        return isLong ? currentPrice - adjustment : currentPrice - adjustment;
      }
    } else if (type === 'Take Profit') {
      if (isMin) {
        // For Take Profit, adjust min if applicable
        return isLong ? currentPrice + adjustment : currentPrice + adjustment;
      } else {
        // For Take Profit, adjust max
        return isLong ? currentPrice + adjustment : currentPrice - adjustment;
      }
    }

    // Default adjustment
    return currentPrice;
  };

  if (!infos) return null;

  const { min, max, priceIsOk, priceChangePnL } = infos;

  // Determine the value and color to display based on type
  const displayValue = priceChangePnL;
  const isPositive = priceChangePnL != null && priceChangePnL > 0;

  const displayColor = isPositive ? 'text-green' : 'text-red';

  return (
    <div className="flex flex-col w-full">
      <div className="border-t border-bcolor w-full h-[1px]" />

      <div className="flex justify-center mt-4 pb-2 h-8 items-center gap-2">
        <h5>{type}</h5>

        {priceIsOk === true && displayValue !== null ? (
          <div className="flex items-center">
            <div className={twMerge(displayColor + ' text-sm mr-1')}>
              {' '}
              {}
              {isPositive ? '+' : '-'}
              {formatPriceInfo(Math.abs(displayValue))}
            </div>

            <FormatNumber
              nb={(displayValue / position.collateralUsd) * 100}
              format="percentage"
              prefix="("
              suffix=")"
              precision={2}
              isDecimalDimmed={false}
              className={twMerge(displayColor + ` text-xs`)}
            />
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-center justify-center w-full pl-6 pr-6 gap-4">
        <div className="flex items-center border rounded-lg bg-inputcolor pt-2 pb-2 grow text-sm w-full relative">
          <InputNumber
            value={input === null ? undefined : input}
            placeholder="none"
            className="font-mono border-0 outline-none bg-transparent flex text-center"
            onChange={setInput}
            onBlur={handleBlur} // Now enforces max two decimals on blur
            inputFontSize="1em"
          />

          {input !== null && (
            <div
              className="absolute right-2 cursor-pointer text-txtfade hover:text-white"
              onClick={() => setInput(null)}
            >
              clear
            </div>
          )}
        </div>

        <div className="flex">
          {min !== null ? (
            <div
              className={twMerge(
                'w-[7em] min-w-[7em] max-w-[7em] flex flex-col items-center justify-center text-base cursor-pointer',
              )}
              onClick={() =>
                handleSetInput(
                  Math.round(getAdjustedPrice(min, true) * 100) / 100,
                )
              }
            >
              <div className={priceIsOk === -1 ? 'text-redbright' : ''}>
                {formatPriceInfo(
                  Math.round(getAdjustedPrice(min, true) * 100) / 100,
                )}
              </div>
              <div className="text-xs text-txtfade">min</div>
            </div>
          ) : null}

          {max !== null ? (
            <div
              className={twMerge(
                'w-[7em] min-w-[7em] max-w-[7em] flex flex-col items-center justify-center text-base cursor-pointer',
                priceIsOk === 1 ? 'text-redbright' : '',
                max === null ? 'text-txtfade' : '',
              )}
              onClick={() =>
                handleSetInput(
                  Math.round(getAdjustedPrice(max, false) * 100) / 100,
                )
              }
            >
              <div
                className={twMerge(
                  priceIsOk === 1 ? 'text-redbright' : '',
                  max === null ? 'text-txtfade' : '',
                )}
              >
                {formatPriceInfo(
                  Math.round(getAdjustedPrice(max, false) * 100) / 100,
                )}
              </div>
              <div className="text-xs text-txtfade">max</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
