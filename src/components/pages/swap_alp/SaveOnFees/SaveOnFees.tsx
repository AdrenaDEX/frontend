import { useMemo } from 'react';

import useBetterMediaQuery from '@/hooks/useBetterMediaQuery';
import useDailyStats from '@/hooks/useDailyStats';
import { useSelector } from '@/store/store';
import { Token, TokenName } from '@/types';

import SaveOnFeesMobile from './SaveOnFeeBlocks';
import SaveOnFeesList from './SaveOnFeeList';

type rowsType = Array<{
  token: Token;
  price: number | null;
  tokenBalance: number | null;
  balanceInUsd: number | null;
  available: number | null;
  fee: number | null;
  currentPoolAmount: number | null;
  currentPoolAmountUsd: number | null;
  maxPoolCapacity: number | null;
  equivalentAmount: number | null;
}>;

export default function SaveOnFees({
  allowedCollateralTokens,
  feesAndAmounts,
  onCollateralTokenChange,
  selectedAction,
  marketCap,
  isFeesLoading,
  setCollateralInput,
}: {
  allowedCollateralTokens: Token[];
  feesAndAmounts: {
    [tokenName: TokenName]: {
      fees: number | null;
      amount: number | null;
      equivalentAmount: number | null;
    };
  } | null;
  onCollateralTokenChange: (t: Token) => void;
  selectedAction: 'buy' | 'sell';
  marketCap: number | null;
  isFeesLoading: boolean;
  setCollateralInput: (value: number | null) => void;
}) {
  const tokenPrices = useSelector((s) => s.tokenPrices);
  const stats = useDailyStats();
  const walletTokenBalances = useSelector((s) => s.walletTokenBalances);
  const isBigScreen = useBetterMediaQuery('(min-width: 950px)');

  const rows: rowsType = useMemo(() => {
    return allowedCollateralTokens.map((token: Token) => {
      const price = tokenPrices[token.name] ?? null;

      const tokenBalance = walletTokenBalances?.[token.name] ?? null;

      const balanceInUsd =
        tokenBalance !== null && price ? tokenBalance * price : null;
      const custody = window.adrena.client.getCustodyByMint(token.mint);

      // calculates how much of the token is available for purchase/sale in usd
      const available = (() => {
        if (!stats || !marketCap || !custody || !price) return null;

        const custodyLiquidityUsd = custody.liquidity * price;

        const ratio =
          selectedAction === 'buy' ? custody.maxRatio : custody.minRatio;

        if (ratio === 1) return null;

        const availableTokens =
          (marketCap * ratio - custodyLiquidityUsd) / (price * (1 - ratio));

        const availableUsd = availableTokens * price;

        return Math.abs(availableUsd);
      })();

      const fee = feesAndAmounts?.[token.name].fees ?? null;

      const equivalentAmount =
        feesAndAmounts?.[token.name].equivalentAmount ?? null;

      const currentPoolAmount = custody.liquidity;
      const currentPoolAmountUsd =
        price !== null ? custody.liquidity * price : null;

      const maxPoolCapacity =
        currentPoolAmountUsd !== null && available !== null
          ? currentPoolAmountUsd + available
          : null;

      return {
        token,
        price,
        tokenBalance,
        balanceInUsd,
        available,
        fee,
        equivalentAmount,
        currentPoolAmount,
        currentPoolAmountUsd,
        maxPoolCapacity,
      };
    });
  }, [
    allowedCollateralTokens,
    tokenPrices,
    walletTokenBalances,
    feesAndAmounts,
    selectedAction,
    marketCap,
    stats,
    window.adrena.client.custodies,
  ]);

  return (
    <>
      <h2 className="text-2xl mt-3">Save on fees</h2>
      <p className="opacity-75 max-w-[700px] mb-3">
        {selectedAction === 'buy'
          ? 'Fees may vary depending on which asset you use to buy ALP. Enter the amount of ALP you want to purchase in the order form, then check here to compare fees.'
          : 'Fees may vary depending on which asset you sell ALP for. Enter the amount of ALP you want to redeem in the order form, then check here to compare fees.'}
      </p>
      <div className="border border-grey bg-secondary p-4">
        {isBigScreen ? (
          <SaveOnFeesList
            rows={rows}
            onCollateralTokenChange={onCollateralTokenChange}
            isFeesLoading={isFeesLoading}
            setCollateralInput={setCollateralInput}
          />
        ) : (
          <SaveOnFeesMobile
            rows={rows}
            onCollateralTokenChange={onCollateralTokenChange}
            isFeesLoading={isFeesLoading}
            setCollateralInput={setCollateralInput}
          />
        )}
      </div>
    </>
  );
}
