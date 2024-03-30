import { useCallback, useEffect, useState } from 'react';

import { useSelector } from '@/store/store';
import { CustodyExtended, Token } from '@/types';
import { nativeToUi } from '@/utils';

export type TokenInfo = {
  token: Token;
  price: number | null;
  color: string | null;
  custodyUsdValue: number | null;
  currentRatio: number | null;
  targetRatio: number | null;
  minRatio: number | null;
  maxRatio: number | null;
  utilization: number | null;
  ownedAssets: number | null;
};

export type ALPIndexComposition = TokenInfo[];

const useALPIndexComposition = (custodies: CustodyExtended[] | null) => {
  const tokenPrices = useSelector((s) => s.tokenPrices);

  const [alpIndexComposition, setALPIndexComposition] =
    useState<ALPIndexComposition | null>(null);

  const calculateALPIndexComposition = useCallback(async () => {
    const alpIndexComposition = window.adrena.client.tokens.map((token) => {
      const price = tokenPrices[token.symbol];

      const custody = custodies?.find(
        (custody) => token.custody && custody.pubkey.equals(token.custody),
      );

      const custodyUsdValue =
        custody && price
          ? nativeToUi(custody.nativeObject.assets.owned, token.decimals) *
            price
          : null;

      const currentRatio =
        custodyUsdValue !== null
          ? (custodyUsdValue * 100) / window.adrena.client.mainPool.aumUsd
          : null;

      const utilization = (() => {
        if (!custody) return null;

        if (custody.nativeObject.assets.locked.isZero()) return 0;

        return (
          (nativeToUi(custody.nativeObject.assets.locked, custody.decimals) *
            100) /
          nativeToUi(custody.nativeObject.assets.owned, custody.decimals)
        );
      })();

      const ownedAssets = (() => {
        if (!custody) return null;

        return nativeToUi(custody.nativeObject.assets.owned, custody.decimals);
      })();

      const color = (() => {
        if (!custody) return null;

        if (token.symbol === 'USDC') return '#2775ca';
        if (token.symbol === 'USDT') return '#26a17b';
        if (token.symbol === 'ETH') return '#3D3E3F';
        if (token.symbol === 'BTC') return '#f7931a';
        if (token.symbol === 'SOL') return '#9945FF';

        return '#000000';
      })();

      return {
        token,
        color,
        price,
        custodyUsdValue,
        currentRatio,
        targetRatio: custody ? custody.targetRatio / 100 : null,
        minRatio: custody ? custody.minRatio / 100 : null,
        maxRatio: custody ? custody.maxRatio / 100 : null,
        utilization,
        ownedAssets,
      };
    });

    setALPIndexComposition(alpIndexComposition);
  }, [tokenPrices, custodies]);

  useEffect(() => {
    calculateALPIndexComposition();
  }, [calculateALPIndexComposition]);

  return alpIndexComposition;
};

export default useALPIndexComposition;
