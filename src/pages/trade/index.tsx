import { Alignment, Fit, Layout } from '@rive-app/react-canvas';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '@/components/common/Button/Button';
import Modal from '@/components/common/Modal/Modal';
import Positions from '@/components/pages/trading/Positions/Positions';
import TradeComp from '@/components/pages/trading/TradeComp/TradeComp';
import TradingChart from '@/components/pages/trading/TradingChart/TradingChart';
import TradingChartHeader from '@/components/pages/trading/TradingChartHeader/TradingChartHeader';
import RiveAnimation from '@/components/RiveAnimation/RiveAnimation';
import useBetterMediaQuery from '@/hooks/useBetterMediaQuery';
import { PageProps, PositionExtended, Token } from '@/types';

export type Action = 'long' | 'short' | 'swap';

function pickDefaultToken(positions: PositionExtended[] | null): Token {
  const tokens = window.adrena.client.tokens.filter((t) => !t.isStable);

  const solToken = tokens.find((t) => t.symbol === 'SOL');

  if (!solToken) throw new Error('SOL token not found');

  if (!positions || !positions.length) return solToken;

  const positionsPerToken: Record<string, number> = positions.reduce(
    (acc, position) => {
      const tokenSymbol = position.token.symbol;
      const positionSize = position.sizeUsd;

      acc[tokenSymbol] = (acc[tokenSymbol] || 0) + positionSize;

      return acc;
    },
    {} as Record<string, number>,
  );

  const maxPositionSize = Math.max(...Object.values(positionsPerToken));

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const tokenWithMaxSize = tokens.find(
    (t) =>
      t.symbol ===
      Object.keys(positionsPerToken).find(
        (key) => positionsPerToken[key] === maxPositionSize,
      ),
  )!;

  return tokenWithMaxSize;
}

export default function Trade({
  positions,
  wallet,
  connected,
  triggerPositionsReload,
  triggerUserProfileReload,
  triggerWalletTokenBalancesReload,
}: PageProps) {
  const [activePositionModal, setActivePositionModal] = useState<Action | null>(
    null,
  );
  const [selectedAction, setSelectedAction] = useState<Action>('long');
  const router = useRouter();

  const [tokenA, setTokenA] = useState<Token | null>(null);
  const [tokenB, setTokenB] = useState<Token | null>(null);

  const [isInitialized, setIsInitialize] = useState<boolean>(false);

  // There is one position max per side per custody
  // If the position exist for the selected custody, store it in this variable
  const [openedPosition, setOpenedPosition] = useState<PositionExtended | null>(
    null,
  );

  const isBigScreen = useBetterMediaQuery('(min-width: 1100px)');

  useEffect(() => {
    if (!tokenA || !tokenB) return;

    // Save the trading pair on URL
    router.replace({
      query: {
        ...router.query,
        pair: `${tokenA.symbol}_${tokenB.symbol}`,
        action: selectedAction,
      },
    });
    // Use custom triggers to avoid unwanted refresh
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!router, tokenA?.symbol, tokenB?.symbol, selectedAction]);

  // Setup
  useEffect(() => {
    const tokenACandidate = window.adrena.client.tokens;

    // First initialization of the component
    // Load trading pair and action type (long/short/swap) from URL
    if (!isInitialized) {
      setIsInitialize(true);

      const action = router.query.action;

      // bad/empty url query params
      if (
        typeof action !== 'string' ||
        !['long', 'short', 'swap'].includes(action)
      ) {
        return;
      }

      // Set the proper action
      setSelectedAction(action as Action);

      const tokenBCandidate =
        action === 'swap'
          ? window.adrena.client.tokens
          : window.adrena.client.tokens.filter((t) => !t.isStable);

      const possiblePair = router.query.pair;

      // bad url
      if (!possiblePair || possiblePair instanceof Array) {
        return;
      }

      const pair = possiblePair.split('_');

      // bad URL
      if (pair.length !== 2) {
        return;
      }

      const [tokenAName, tokenBName] = pair;

      const tokenA = tokenACandidate.find(
        (token) => token.symbol === tokenAName,
      );
      const tokenB = tokenBCandidate.find(
        (token) => token.symbol === tokenBName,
      );

      // bad URL
      if (!tokenA || !tokenB) {
        return;
      }

      setTokenA(tokenA);
      setTokenB(tokenB);

      return;
    }

    const tokenBCandidate =
      selectedAction === 'swap'
        ? window.adrena.client.tokens
        : window.adrena.client.tokens.filter((t) => !t.isStable);

    // If token is not set or token is not allowed, set default token
    if (
      !tokenA ||
      !tokenACandidate.find((token) => token.symbol === tokenA.symbol)
    ) {
      setTokenA(tokenACandidate[0]);
    }

    // If token is not set or token is not allowed, set default token
    if (
      !tokenB ||
      !tokenBCandidate.find((token) => token.symbol === tokenB.symbol)
    ) {
      setTokenB(pickDefaultToken(positions));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // Only call when the user get initialized or we change of action
    selectedAction,
    isInitialized,
  ]);

  // Check for opened position
  useEffect(() => {
    if (!tokenB) return;
    if (!positions) return setOpenedPosition(null);

    const relatedPosition = positions.find(
      (position) =>
        position.token.mint.equals(tokenB.mint) &&
        position.side === selectedAction,
    );

    setOpenedPosition(relatedPosition ?? null);
  }, [positions, selectedAction, tokenB]);

  useEffect(() => {
    if (activePositionModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [activePositionModal]);

  return (
    <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:items-start z-10 min-h-full p-4">
      <div className="fixed w-[100vw] h-[100vh] left-0 top-0 -z-10 opacity-50">
        <RiveAnimation
          animation="btm-monster"
          layout={
            new Layout({
              fit: Fit.Fill,
              alignment: Alignment.TopLeft,
            })
          }
          className="absolute top-0 left-[-10vh] h-[100vh] w-[140vh] scale-x-[-1]"
        />

        <RiveAnimation
          animation="mid-monster"
          layout={
            new Layout({
              fit: Fit.Fill,
              alignment: Alignment.TopLeft,
            })
          }
          className="absolute hidden md:block top-0 right-[-20vh] h-[90vh] w-[110vh] -z-10"
        />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full border rounded-lg overflow-hidden">
          {/* Trading chart header */}
          {tokenB ? (
            <TradingChartHeader
              tokenList={
                selectedAction === 'short' || selectedAction === 'long'
                  ? window.adrena.client.tokens.filter((t) => !t.isStable)
                  : window.adrena.client.tokens
              }
              selected={tokenB}
              onChange={(t: Token) => {
                setTokenB(t);
              }}
            />
          ) : null}

          <div className="min-h-[24em] max-h-[28em] grow shrink-1 flex max-w-full">
            {/* Display trading chart for appropriate token */}
            {tokenA && tokenB ? (
              <>
                <TradingChart
                  token={
                    selectedAction === 'short' || selectedAction === 'long'
                      ? tokenB
                      : tokenA.isStable
                      ? tokenB
                      : tokenA
                  }
                  positions={positions}
                />
              </>
            ) : null}
          </div>
        </div>

        {isBigScreen ? (
          <div className="flex flex-col w-full">
            <div
              className={twMerge(
                'flex z-30 overflow-hidden bg-main/90 xl:pl-3 xl:pr-3 border rounded-lg mt-4',
                !positions?.length
                  ? 'min-h-[15em] items-center justify-center'
                  : null,
              )}
            >
              <Positions
                bodyClassName={'mt-3'}
                connected={connected}
                positions={positions}
                triggerPositionsReload={triggerPositionsReload}
                triggerUserProfileReload={triggerUserProfileReload}
                isBigScreen={isBigScreen}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-row">
            <Positions
              className={
                'sm:w-1/2 sm:mr-4 lg:mr-0 lg:mt-4 md:w-[57%] lg:w-[65%] h-full'
              }
              connected={connected}
              positions={positions}
              triggerPositionsReload={triggerPositionsReload}
              triggerUserProfileReload={triggerUserProfileReload}
              isBigScreen={isBigScreen}
            />
            <div className="flex sm:w-1/2 md:w-[43%] lg:w-[35%] lg:ml-4 hidden sm:flex">
              <TradeComp
                selectedAction={selectedAction}
                setSelectedAction={setSelectedAction}
                tokenA={tokenA}
                tokenB={tokenB}
                setTokenA={setTokenA}
                setTokenB={setTokenB}
                openedPosition={openedPosition}
                wallet={wallet}
                connected={connected}
                triggerPositionsReload={triggerPositionsReload}
                triggerWalletTokenBalancesReload={
                  triggerWalletTokenBalancesReload
                }
                isBigScreen={isBigScreen}
              />
            </div>
          </div>
        )}
      </div>

      <>
        {isBigScreen ? (
          <TradeComp
            className="lg:max-h-[50em] hidden sm:flex lg:ml-4"
            selectedAction={selectedAction}
            setSelectedAction={setSelectedAction}
            tokenA={tokenA}
            tokenB={tokenB}
            setTokenA={setTokenA}
            setTokenB={setTokenB}
            openedPosition={openedPosition}
            wallet={wallet}
            connected={connected}
            triggerPositionsReload={triggerPositionsReload}
            triggerWalletTokenBalancesReload={triggerWalletTokenBalancesReload}
            isBigScreen={isBigScreen}
          />
        ) : null}

        <div className="fixed sm:hidden bottom-0 w-full bg-bcolor backdrop-blur-sm p-5 z-30">
          <ul className="flex flex-row gap-3 justify-between ml-4 mr-4">
            <li>
              <Button
                className="bg-transparent font-boldy border-[#10e1a3] text-[#10e1a3]"
                title="Long"
                variant="outline"
                size="lg"
                onClick={() => {
                  setActivePositionModal('long');
                  setSelectedAction('long');
                }}
              />
            </li>
            <li>
              <Button
                className="bg-transparent font-boldy border-[#f24f4f] text-[#f24f4f]"
                title="Short"
                variant="outline"
                size="lg"
                onClick={() => {
                  setActivePositionModal('short');
                  setSelectedAction('short');
                }}
              />
            </li>
            <li>
              <Button
                className="bg-transparent text-black font-boldy border-white text-white"
                title="Swap"
                variant="outline"
                size="lg"
                onClick={() => {
                  setActivePositionModal('swap');
                  setSelectedAction('swap');
                }}
              />
            </li>
          </ul>

          <AnimatePresence>
            {activePositionModal && (
              <Modal
                title={`${
                  activePositionModal.charAt(0).toUpperCase() +
                  activePositionModal.slice(1)
                } Position`}
                close={() => setActivePositionModal(null)}
                className="flex flex-col p-2 sm:p-4 overflow-auto h-[100%]"
              >
                <div className="flex w-full">
                  <TradeComp
                    selectedAction={selectedAction}
                    setSelectedAction={setSelectedAction}
                    tokenA={tokenA}
                    tokenB={tokenB}
                    setTokenA={setTokenA}
                    setTokenB={setTokenB}
                    openedPosition={openedPosition}
                    className="p-0 m-0"
                    wallet={wallet}
                    connected={connected}
                    triggerPositionsReload={triggerPositionsReload}
                    triggerWalletTokenBalancesReload={
                      triggerWalletTokenBalancesReload
                    }
                  />
                </div>
              </Modal>
            )}
          </AnimatePresence>
        </div>
      </>
    </div>
  );
}
