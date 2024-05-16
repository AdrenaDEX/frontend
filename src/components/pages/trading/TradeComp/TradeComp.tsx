import { Wallet } from '@coral-xyz/anchor';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import TabSelect from '@/components/common/TabSelect/TabSelect';
import { Action } from '@/pages/trade';
import { PositionExtended, Token } from '@/types';

import LongShortTradingInputs from '../TradingInputs/LongShortTradingInputs';
import SwapTradingInputs from '../TradingInputs/SwapTradingInputs';

export const TradeComp = ({
  selectedAction,
  setSelectedAction,
  tokenA,
  tokenB,
  wallet,
  setTokenA,
  setTokenB,
  openedPosition,
  triggerPositionsReload,
  triggerWalletTokenBalancesReload,
  className,
}: {
  selectedAction: Action;
  setSelectedAction: (title: Action) => void;
  tokenA: Token | null;
  tokenB: Token | null;
  wallet: Wallet | null;
  setTokenA: (t: Token | null) => void;
  setTokenB: (t: Token | null) => void;
  openedPosition: PositionExtended | null;
  triggerPositionsReload: () => void;
  triggerWalletTokenBalancesReload: () => void;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        'sm:flex w-full lg:w-[30em] min-w-[350px] bg-main/90 flex-col sm:flex-row lg:flex-col mt-4 lg:mt-0 border h-full overflow-hidden rounded-lg',
        className,
      )}
    >
      <div className="w-full flex flex-col h-full p-3">
        <TabSelect
          selected={selectedAction}
          tabs={[
            { title: 'long', activeColor: 'border-b-green text-green' },
            { title: 'short', activeColor: 'border-b-red text-red' },
            { title: 'swap', activeColor: 'border-white' },
          ]}
          onClick={(title) => {
            setSelectedAction(title);
          }}
          wrapperClassName="hidden sm:flex"
        />

        {window.adrena.client.tokens.length && tokenA && tokenB && (
          <>
            {selectedAction === 'long' || selectedAction === 'short' ? (
              <LongShortTradingInputs
                side={selectedAction}
                allowedTokenA={window.adrena.client.tokens}
                allowedTokenB={window.adrena.client.tokens.filter(
                  (t) => !t.isStable,
                )}
                tokenA={tokenA}
                tokenB={tokenB}
                openedPosition={openedPosition}
                setTokenA={setTokenA}
                setTokenB={setTokenB}
                wallet={wallet}
                triggerPositionsReload={triggerPositionsReload}
                triggerWalletTokenBalancesReload={
                  triggerWalletTokenBalancesReload
                }
              />
            ) : (
              <SwapTradingInputs
                allowedTokenA={window.adrena.client.tokens}
                allowedTokenB={window.adrena.client.tokens}
                tokenA={tokenA}
                tokenB={tokenB}
                setTokenA={setTokenA}
                setTokenB={setTokenB}
                wallet={wallet}
                triggerWalletTokenBalancesReload={
                  triggerWalletTokenBalancesReload
                }
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
