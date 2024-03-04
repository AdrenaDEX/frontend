import Image from 'next/image';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { USD_DECIMALS } from '@/constant';
import { useSelector } from '@/store/store';
import { Token } from '@/types';
import { formatNumber, formatPriceInfo, nativeToUi, uiToNative } from '@/utils';

import arrowDownUpIcon from '../../../../../public/images/Icons/arrow-down-up.svg';
import InfoAnnotation from '../../monitoring/InfoAnnotation';
import TradingInput from '../../trading/TradingInput/TradingInput';

// use the counter to handle asynchronous multiple loading
// always ignore outdated informations
let loadingCounter = 0;

export default function ALPSwapInputs({
  actionType,
  className,
  alpToken,
  collateralToken,
  allowedCollateralTokens,
  alpInput,
  feesUsd,
  onChangeAlpInput,
  setAlpPrice,
  collateralInput,
  onChangeCollateralInput,
  setCollateralPrice,
  setActionType,
  onCollateralTokenChange,
  setFeesUsd,
  setIsFeesLoading,
}: {
  actionType: 'buy' | 'sell';
  className?: string;
  alpToken: Token;
  feesUsd: number | null;
  collateralToken: Token;
  collateralInput: number | null;
  allowedCollateralTokens: Token[] | null;
  setCollateralPrice: (v: number | null) => void;
  alpInput: number | null;
  onChangeAlpInput: (v: number | null) => void;
  onChangeCollateralInput: (v: number | null) => void;
  setAlpPrice: (v: number | null) => void;
  setActionType: (a: 'buy' | 'sell') => void;
  onCollateralTokenChange: (t: Token) => void;
  setFeesUsd: (f: number | null) => void;
  setIsFeesLoading: (v: boolean) => void;
}) {
  const tokenPrices = useSelector((s) => s.tokenPrices);
  const walletTokenBalances = useSelector((s) => s.walletTokenBalances);

  const [isLoading, setLoading] = useState<boolean>(false);

  // Goes from "buy" to "sell"
  const switchBuySell = () => {
    if (!alpToken || !collateralToken) return;

    onChangeAlpInput(null);
    onChangeCollateralInput(null);
    setFeesUsd(null);
    setAlpPrice(null);
    setCollateralPrice(null);

    // deprecate current loading
    setLoading(false);

    loadingCounter += 1;
    setActionType(actionType === 'buy' ? 'sell' : 'buy');
  };

  // When price change or input change, recalculate inputs and displayed price
  {
    // Adapt displayed prices when token prices change
    useEffect(() => {
      const collateralTokenPrice = tokenPrices[collateralToken.symbol] ?? null;
      const alpTokenPrice = tokenPrices[alpToken.symbol] ?? null;

      if (collateralTokenPrice !== null && collateralInput !== null) {
        setCollateralPrice(collateralInput * collateralTokenPrice);
      }

      if (alpTokenPrice !== null && alpInput !== null) {
        setAlpPrice(alpTokenPrice * alpInput);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      // Don't target tokenPrices directly otherwise it refreshes even when unrelated prices changes
      // eslint-disable-next-line react-hooks/exhaustive-deps
      collateralToken && tokenPrices[collateralToken.symbol],
      // eslint-disable-next-line react-hooks/exhaustive-deps
      alpToken && tokenPrices[alpToken.symbol],
    ]);

    useEffect(() => {
      // Ignore the event as it is not the editable input
      if (actionType === 'buy') return;

      const collateralTokenPrice = tokenPrices[collateralToken.symbol] ?? null;

      // missing informations or empty input
      if (alpInput === null || collateralTokenPrice === null) {
        // deprecate current loading
        setLoading(false);
        loadingCounter += 1;
        onChangeCollateralInput(null);
        setCollateralPrice(null);
        setAlpPrice(null);
        setFeesUsd(null);
        return;
      }

      setLoading(true);

      const localLoadingCounter = ++loadingCounter;

      setFeesUsd(null);

      window.adrena.client
        .getRemoveLiquidityAmountAndFee({
          lpAmountIn: uiToNative(alpInput, alpToken.decimals),
          token: collateralToken,
        })
        .then((amountAndFee) => {
          // Verify that information is not outdated
          // If loaderCounter doesn't match it means
          // an other request has been casted due to input change
          if (localLoadingCounter !== loadingCounter) {
            return;
          }

          if (!amountAndFee) {
            setLoading(false);
            onChangeCollateralInput(null);
            setCollateralPrice(null);
            setFeesUsd(null);
            return;
          }

          onChangeCollateralInput(
            nativeToUi(amountAndFee.amount, collateralToken.decimals),
          );

          setCollateralPrice(
            collateralTokenPrice *
              nativeToUi(amountAndFee.amount, collateralToken.decimals),
          );

          setFeesUsd(
            collateralTokenPrice *
              nativeToUi(amountAndFee.fee, collateralToken.decimals),
          );
          setLoading(false);
        })
        .catch((e) => {
          console.log('e', e);
          onChangeCollateralInput(null);
          setCollateralPrice(null);
          setLoading(false);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alpInput, collateralToken]);

    useEffect(() => {
      // Ignore the event as it is not the editable input
      if (actionType === 'sell') return;

      const alpTokenPrice = tokenPrices[alpToken.symbol] ?? null;
      const collateralTokenPrice = tokenPrices[collateralToken.symbol] ?? null;

      // missing informations or empty input
      if (
        collateralInput === null ||
        alpTokenPrice === null ||
        collateralTokenPrice === null
      ) {
        // deprecate current loading
        setLoading(false);
        loadingCounter += 1;

        onChangeAlpInput(null);
        setAlpPrice(null);
        setCollateralPrice(null);
        setFeesUsd(null);
        return;
      }

      setLoading(true);

      const localLoadingCounter = ++loadingCounter;

      setFeesUsd(null);

      window.adrena.client
        .getAddLiquidityAmountAndFee({
          amountIn: uiToNative(collateralInput, collateralToken.decimals),
          token: collateralToken,
        })
        .then((amountAndFee) => {
          // Verify that information is not outdated
          // If loaderCounter doesn't match it means
          // an other request has been casted due to input change
          if (localLoadingCounter !== loadingCounter) {
            console.log('Ignore deprecated result');
            return;
          }

          if (!amountAndFee) {
            setLoading(false);
            onChangeAlpInput(null);
            setAlpPrice(null);
            setFeesUsd(null);
            return;
          }

          onChangeAlpInput(nativeToUi(amountAndFee.amount, alpToken.decimals));
          setAlpPrice(
            alpTokenPrice * nativeToUi(amountAndFee.amount, alpToken.decimals),
          );

          setFeesUsd(
            collateralTokenPrice *
              nativeToUi(amountAndFee.fee, collateralToken.decimals),
          );
          setLoading(false);
        })
        .catch((e) => {
          console.log('e', e);
          setAlpPrice(null);
          setLoading(false);
        });

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collateralInput, collateralToken]);
  }

  const handleAlpInputChange = (v: number | null) => {
    setIsFeesLoading(true);
    const nb = Number(v);
    if (v === null || isNaN(nb)) {
      onChangeAlpInput(null);
      return;
    }

    onChangeAlpInput(nb);
  };

  const handleCollateralInputChange = (v: number | null) => {
    setIsFeesLoading(true);
    const nb = Number(v);
    if (v === null || isNaN(nb)) {
      onChangeCollateralInput(null);
      return;
    }
    onChangeCollateralInput(nb);
  };

  const alpInputComponent = (
    <TradingInput
      className="text-sm"
      loading={actionType === 'buy' && isLoading}
      disabled={actionType === 'buy'}
      value={alpInput}
      maxButton={actionType === 'sell'}
      selectedToken={alpToken}
      tokenList={[alpToken]}
      onMaxButtonClick={() => {
        onChangeAlpInput(walletTokenBalances?.[alpToken.symbol] ?? 0);
      }}
      onTokenSelect={() => {
        // only one token
      }}
      onChange={handleAlpInputChange}
    />
  );

  const collateralComponent = (
    <TradingInput
      className="text-sm"
      loading={actionType === 'sell' && isLoading}
      disabled={actionType === 'sell'}
      value={collateralInput}
      maxButton={actionType === 'buy'}
      selectedToken={collateralToken}
      tokenList={allowedCollateralTokens || []}
      onMaxButtonClick={() => {
        onChangeCollateralInput(
          walletTokenBalances?.[collateralToken.symbol] ?? 0,
        );
      }}
      onTokenSelect={onCollateralTokenChange}
      onChange={handleCollateralInputChange}
    />
  );

  const rotateIcon = () => {
    const icon = document.getElementById('switch-icon');

    if (icon) {
      icon.classList.toggle('rotate-180');
    }
  };

  return (
    <div className={twMerge('relative', 'flex', 'flex-col', className)}>
      <div className="text-sm text-txtfade mb-3">Pay</div>

      {actionType === 'buy' ? collateralComponent : alpInputComponent}

      {
        /* Display wallet balance */
        (() => {
          const token = actionType === 'buy' ? collateralToken : alpToken;

          if (!token || !walletTokenBalances) return null;

          const balance = walletTokenBalances[token.symbol];
          if (balance === null) return null;

          return (
            <div className="text-txtfade text-sm ml-auto mt-3">
              {formatNumber(balance, token.decimals)} {token.symbol} in wallet
            </div>
          );
        })()
      }

      {/* Switch Buy/Sell */}
      <div className="relative w-full overflow-visible flex justify-center items-center z-[2] mt-6">
        <div
          className="group bg-gray-200 flex rounded-full p-1 w-7 h-7 cursor-pointer items-center justify-center"
          onClick={() => {
            switchBuySell();
            rotateIcon();
          }}
        >
          <Image
            src={arrowDownUpIcon}
            alt="switch icon"
            height={16}
            width={16}
            id="switch-icon"
            className="opacity-50 group-hover:opacity-100 transition-all duration-300 "
          />
        </div>
      </div>

      <div className="text-sm text-txtfade mt-2 mb-3">Receive</div>

      {actionType === 'buy' ? alpInputComponent : collateralComponent}

      <div className="text-sm text-txtfade mt-6">Verify</div>

      <div
        className={twMerge(
          'flex flex-col bg-secondary border rounded-2xl p-2',
          className,
        )}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <InfoAnnotation
              text="Amount of tokens being traded."
              className="w-3 grow-0 mr-1"
            />

            <div className="text-sm text-txtfade">Fees</div>
          </div>

          <div className="relative flex flex-col text-sm">
            {formatPriceInfo(feesUsd, false, USD_DECIMALS)}
          </div>
        </div>
      </div>
    </div>
  );
}
