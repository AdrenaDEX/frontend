import { Alignment, Fit, Layout } from '@rive-app/react-canvas';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import StyledContainer from '@/components/common/StyledContainer/StyledContainer';
import StyledSubContainer from '@/components/common/StyledSubContainer/StyledSubContainer';
import Loader from '@/components/Loader/Loader';
import ALPSwap from '@/components/pages/buy_alp_adx/ALPSwap/ALPSwap';
import OrcaLink from '@/components/pages/buy_alp_adx/OrcaLink/OrcaLink';
import RiveAnimation from '@/components/RiveAnimation/RiveAnimation';
import { useDebounce } from '@/hooks/useDebounce';
import { useSelector } from '@/store/store';
import { PageProps, Token } from '@/types';
import { nativeToUi, uiToNative } from '@/utils';

// use the counter to handle asynchronous multiple loading
// always ignore outdated information
let loadingCounter = 0;

export type FeesAndAmountsType = {
  [tokenSymbol: string]: {
    token: Token;
    fees: number | null;
    amount: number | null;
    equivalentAmount: number | null;
  };
};

export default function Buy({
  triggerWalletTokenBalancesReload,
  mainPool,
}: PageProps) {
  const tokenPrices = useSelector((s) => s.tokenPrices);
  const [collateralInput, setCollateralInput] = useState<number | null>(null);
  const [collateralToken, setCollateralToken] = useState<Token | null>(null);
  const [alpInput, setAlpInput] = useState<number | null>(null);
  const [allowedCollateralTokens, setAllowedCollateralTokens] = useState<
    Token[] | null
  >(null);
  const [feesUsd, setFeesUsd] = useState<number | null>(null);
  const [feesAndAmounts, setFeesAndAmounts] =
    useState<FeesAndAmountsType | null>(null);
  const [selectedAction, setSelectedAction] = useState<'buy' | 'sell'>('buy');
  const [alpPrice, setAlpPrice] = useState<number | null>(null);
  const [collateralPrice, setCollateralPrice] = useState<number | null>(null);
  const debouncedInputs = useDebounce(
    selectedAction === 'buy' ? collateralInput : alpInput,
    1000,
  );

  const getFeesAndAmounts = useCallback(async () => {
    const localLoadingCounter = ++loadingCounter;

    const data = await Promise.all(
      window.adrena.client.tokens.map(async (token) => {
        const price = tokenPrices[token.symbol];

        if (!price || !collateralToken || !alpInput || !collateralInput) {
          return {
            token,
            fees: null,
            amount: null,
            equivalentAmount: null,
          };
        }

        const input = selectedAction === 'buy' ? collateralInput : alpInput;

        const collateralTokenPrice = tokenPrices[collateralToken.symbol];

        if (collateralTokenPrice === null) {
          return {
            token,
            fees: null,
            amount: null,
            equivalentAmount: null,
          };
        }

        const equivalentAmount = (collateralTokenPrice * input) / price;

        if (equivalentAmount === 0) {
          return {
            token,
            fees: 0,
            amount: 0,
            equivalentAmount,
          };
        }

        try {
          const amountAndFees = await (selectedAction === 'buy'
            ? window.adrena.client.getAddLiquidityAmountAndFee({
                amountIn: uiToNative(equivalentAmount, token.decimals),
                token,
              })
            : window.adrena.client.getRemoveLiquidityAmountAndFee({
                lpAmountIn: uiToNative(
                  alpInput,
                  window.adrena.client.alpToken.decimals,
                ),
                token,
              }));

          if (amountAndFees === null) {
            return {
              token,
              fees: null,
              amount: null,
              equivalentAmount,
            };
          }

          return {
            token,
            fees: price * nativeToUi(amountAndFees.fee, token.decimals),
            amount: nativeToUi(
              amountAndFees.amount,
              window.adrena.client.alpToken.decimals,
            ),
            equivalentAmount,
          };
        } catch (e) {
          console.log(e as Error);
          return {
            token,
            fees: null,
            amount: null,
            equivalentAmount,
          };
        }
      }),
    );

    const formattedData = data.reduce((acc, v) => {
      return {
        ...acc,
        [v.token.symbol]: v,
      };
    }, {} as FeesAndAmountsType);

    // Verify that information is not outdated
    // If loaderCounter doesn't match it means
    // an other request has been casted due to input change
    if (localLoadingCounter !== loadingCounter) {
      return;
    }

    setFeesAndAmounts(formattedData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAction, debouncedInputs]);

  useEffect(() => {
    getFeesAndAmounts();
  }, [getFeesAndAmounts, debouncedInputs]);

  useEffect(() => {
    if (!window.adrena.client.tokens.length) return;

    if (!collateralToken) {
      setCollateralToken(window.adrena.client.tokens[0]);
    }

    setAllowedCollateralTokens(window.adrena.client.tokens);
  }, [collateralToken]);

  const onCollateralTokenChange = (t: Token) => {
    if (selectedAction === 'sell') {
      setAlpInput(null);
      setAlpPrice(null);
      setFeesUsd(null);
    } else {
      setCollateralInput(null);
      setCollateralPrice(null);
      setFeesUsd(null);
    }
    // Reset the loading counter to ignore outdated information
    loadingCounter += 1;
    setCollateralToken(t);
  };

  if (allowedCollateralTokens === null) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col md:flex-row items-evenly justify-center gap-x-4 p-4">
      <div className="fixed w-[100vw] h-[100vh] left-0 top-0 opacity-50">
        <RiveAnimation
          animation="fred-bg"
          layout={
            new Layout({
              fit: Fit.Fill,
              alignment: Alignment.TopLeft,
            })
          }
          className="absolute top-0 left-0 h-[150vh] w-[220vh] scale-x-[-1]"
        />

        <RiveAnimation
          animation="fred-bg"
          layout={
            new Layout({
              fit: Fit.Fill,
              alignment: Alignment.TopLeft,
            })
          }
          className="absolute top-0 right-[-8em] h-[190vh] w-[180vh] scale-y-[-1]"
        />
      </div>

      <StyledContainer
        className="max-w-[35em]"
        title={
          <div className="flex items-center">
            <Image
              src={window.adrena.client.alpToken.image}
              width={32}
              height={32}
              alt="ALP icon"
            />

            <div className="flex flex-col justify-start ml-2">
              <h1>ALP</h1>
              <span className="opacity-50">The Pool Token</span>
            </div>
          </div>
        }
      >
        <StyledSubContainer className="lg:max-w-[25em] self-center">
          <ALPSwap
            triggerWalletTokenBalancesReload={triggerWalletTokenBalancesReload}
            collateralInput={collateralInput}
            setCollateralInput={setCollateralInput}
            alpInput={alpInput}
            setAlpInput={setAlpInput}
            collateralToken={collateralToken}
            allowedCollateralTokens={allowedCollateralTokens}
            feesUsd={feesUsd}
            setFeesUsd={setFeesUsd}
            onCollateralTokenChange={onCollateralTokenChange}
            selectedAction={selectedAction}
            setSelectedAction={setSelectedAction}
            setAlpPrice={setAlpPrice}
            setCollateralPrice={setCollateralPrice}
            alpPrice={alpPrice}
            collateralPrice={collateralPrice}
            feesAndAmounts={feesAndAmounts}
            aumUsd={mainPool?.aumUsd}
          />
        </StyledSubContainer>
      </StyledContainer>

      <StyledContainer
        className="p-0 max-w-[35em]"
        titleClassName="p-0"
        bodyClassName="h-full"
        title={
          <div className="flex items-center absolute z-20 top-4 left-4">
            <Image
              src={window.adrena.client.adxToken.image}
              width={32}
              height={32}
              alt="ADX icon"
            />

            <div className="flex flex-col justify-start ml-2">
              <h1>ADX</h1>
              <span className="opacity-50">The Governance Token</span>
            </div>
          </div>
        }
      >
        <OrcaLink />
      </StyledContainer>
    </div>
  );
}
