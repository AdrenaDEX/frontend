import { Connection, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '@/components/common/Button/Button';
import Modal from '@/components/common/Modal/Modal';
import MultiStepNotification from '@/components/common/MultiStepNotification/MultiStepNotification';
import StyledSubContainer from '@/components/common/StyledSubContainer/StyledSubContainer';
import { Congrats } from '@/components/Congrats/Congrats';
import ProgressBar from '@/components/Genesis/ProgressBar';
import FormatNumber from '@/components/Number/FormatNumber';
import TradingInput from '@/components/pages/trading/TradingInput/TradingInput';
import RefreshButton from '@/components/RefreshButton/RefreshButton';
import Settings from '@/components/Settings/Settings';
import WalletAdapter from '@/components/WalletAdapter/WalletAdapter';
import { GENESIS_REWARD_SHARE_OF_TOTAL_ADX_SUPPLY } from '@/constant';
import useADXTotalSupply from '@/hooks/useADXTotalSupply';
import { useDebounce } from '@/hooks/useDebounce';
import { useSelector } from '@/store/store';
import { GenesisLock, PageProps } from '@/types';
import {
  addFailedTxNotification,
  addSuccessTxNotification,
  formatPriceInfo,
  nativeToUi,
  uiToNative,
} from '@/utils';

import adrenaMonsters from '../../../public/images/adrena-monsters.png';
import alpIcon from '../../../public/images/alp.svg';
import capsuleMonster from '../../../public/images/capsule.png';
import errorImg from '../../../public/images/Icons/error.svg';
import lockIcon from '../../../public/images/Icons/lock.svg';
import logo from '../../../public/images/logo.png';
import xIcon from '../../../public/images/x-black-bg.png';

export default function Genesis({
  connected,
  userProfile,
  triggerWalletTokenBalancesReload,
  activeRpc,
  rpcInfos,
  autoRpcMode,
  customRpcUrl,
  customRpcLatency,
  favoriteRpc,
  setAutoRpcMode,
  setCustomRpcUrl,
  setFavoriteRpc,
}: PageProps & {
  activeRpc: {
    name: string;
    connection: Connection;
  };
  rpcInfos: {
    name: string;
    latency: number | null;
  }[];
  customRpcLatency: number | null;
  autoRpcMode: boolean;
  customRpcUrl: string | null;
  favoriteRpc: string | null;
  setAutoRpcMode: (autoRpcMode: boolean) => void;
  setCustomRpcUrl: (customRpcUrl: string | null) => void;
  setFavoriteRpc: (favoriteRpc: string) => void;
}) {
  const { wallet } = useSelector((s) => s.walletState);
  const tokenPrices = useSelector((s) => s.tokenPrices);
  const walletTokenBalances = useSelector((s) => s.walletTokenBalances);
  const usdc = window.adrena.client?.tokens.find((t) => t.symbol === 'USDC');
  const walletTokenABalance = walletTokenBalances?.['USDC'];
  const [fundsAmount, setFundsAmount] = useState<number | null>(null);
  const [feeAndAmount, setFeeAndAmount] = useState<{
    amount: number;
    fee: number;
  } | null>(null);
  const [genesis, setGenesis] = useState<GenesisLock | null>(null);
  const [currentStep, setCurrentStep] = useState(2);
  const fundsAmountDebounced = useDebounce(fundsAmount, 500);
  const totalADXSupply = useADXTotalSupply();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGenesisLoading, setIsGenesisLoading] = useState(false);
  const [isUserStakingAccountInit, setIsUserStakingAccountFound] =
    useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const genesisReward = totalADXSupply
    ? totalADXSupply * GENESIS_REWARD_SHARE_OF_TOTAL_ADX_SUPPLY
    : null;

  const adxPerUSDC =
    genesis?.publicAmount && usdc?.decimals && genesisReward
      ? genesisReward / nativeToUi(genesis.publicAmountClaimed, usdc.decimals)
      : null;

  useEffect(() => {
    getAlpAmount();
  }, [fundsAmountDebounced]);

  useEffect(() => {
    getUserStakingAccount();
  }, [connected]);

  useEffect(() => {
    getGenesis();
  }, [connected, isSuccess]);

  useEffect(() => {
    const isRebalancing = process.env.NEXT_PUBLIC_IS_REBALANCING === 'true';

    if (genesis) {
      const daysElapsed = Math.floor(
        (Date.now() - genesis.campaignStartDate.toNumber() * 1000) /
          (1000 * 60 * 60 * 24),
      );

      if (!isRebalancing && daysElapsed >= 4) return setCurrentStep(3);

      if (isRebalancing) return setCurrentStep(3);

      if (genesis.hasTransitionedToFullyPublic) return setCurrentStep(2);

      setCurrentStep(0);
    }
  }, [genesis]);

  const getGenesis = async () => {
    if (!connected) {
      return;
    }

    setIsGenesisLoading(true);

    try {
      const genesis = await window.adrena.client.getGensisLock();

      if (!genesis) {
        return;
      }

      setGenesis(genesis as GenesisLock);
      setIsGenesisLoading(false);
    } catch (error) {
      console.log('error fetching genesis', error);
      setIsGenesisLoading(false);
    }
  };

  const getAlpAmount = async () => {
    if (!fundsAmount || !usdc) {
      setFeeAndAmount(null);
      setIsLoading(false);
      return;
    }

    const price = tokenPrices[usdc?.symbol];

    if (!wallet) return;

    try {
      // drop view and call instruction
      const alp = await window.adrena.client.getAddLiquidityAmountAndFee({
        amountIn: uiToNative(fundsAmount, usdc.decimals),
        token: usdc,
      });

      if (!alp || !price) {
        setFeeAndAmount(null);
        setIsLoading(false);
        return;
      }

      setFeeAndAmount({
        amount: nativeToUi(alp.amount, window.adrena.client.alpToken.decimals),
        fee: price * nativeToUi(alp.fee, usdc.decimals),
      });
      setIsLoading(false);
    } catch (error) {
      console.log('error', error);
      setErrorMsg('Error fetching ALP amount');
      setIsLoading(false);
      setFeeAndAmount(null);
    }
  };

  const getUserStakingAccount = async () => {
    if (!connected || !wallet) {
      return;
    }

    try {
      const userStaking = await window.adrena.client.getUserStakingAccount({
        owner: new PublicKey(wallet.walletAddress),
        stakedTokenMint: window.adrena.client.alpToken.mint,
      });

      if (!userStaking) {
        setIsUserStakingAccountFound(false);
      }
    } catch (error) {
      console.log('error fetching user staking', error);
    }
  };

  const initUserStakingAccount = async () => {
    if (!wallet) return;

    try {
      const txHash = await window.adrena.client.initUserStaking({
        owner: new PublicKey(wallet.walletAddress),
        stakedTokenMint: window.adrena.client.alpToken.mint,
        threadId: new BN(Date.now()),
      });

      triggerWalletTokenBalancesReload();
      setIsUserStakingAccountFound(true);
      return addSuccessTxNotification({
        title: 'Successful Transaction',
        txHash,
      });
    } catch (error) {
      console.log('error', error);
      setErrorMsg('Error initializing user staking account');

      return addFailedTxNotification({
        title: 'Error Initializing User Staking Account',
        error,
      });
    }
  };

  const addGenesisLiquidity = async () => {
    if (!fundsAmount) {
      return;
    }

    if (!isUserStakingAccountInit) {
      await initUserStakingAccount();
    }

    const notification =
      MultiStepNotification.newForRegularTransaction('Buying ALP').fire();

    try {
      if (!wallet) return;

      const txHash = await window.adrena.client.addGenesisLiquidity({
        amountIn: fundsAmount,

        // TODO: Apply proper slippage
        minLpAmountOut: new BN(0),
        notification,
      });

      triggerWalletTokenBalancesReload();
      setFundsAmount(null);
      setIsSuccess(true);
      return addSuccessTxNotification({
        title: 'Successful Transaction',
        txHash,
      });
    } catch (error) {
      console.log('error', error);
      setErrorMsg('Error buying ALP');

      return addFailedTxNotification({
        title: 'Error Buying ALP',
        error,
      });
    }
  };

  const reservedGrantOwners = genesis?.reservedGrantOwners.map((key, i) => {
    return {
      walletAddress: key.toString(),
      maxAmount: genesis.reservedGrantAmounts[i],
    };
  });

  const isReserved =
    wallet?.walletAddress &&
    reservedGrantOwners?.find(
      (owner) => owner.walletAddress === wallet.walletAddress,
    );

  const url = 'https://www.adrena.xyz/';
  const text = `Just bought some ALP locked and staked for 180 days`;

  const MAX_USDC_AMOUNT = 500_000;

  const reservedGrantOwnerLeftAmount = reservedGrantOwners?.find(
    (owner) => owner.walletAddress === wallet?.walletAddress,
  )?.maxAmount;

  return (
    <>
      <ProgressBar currentStep={currentStep} genesis={genesis} />

      <div className="relative p-4 m-auto max-w-[1150px]">
        <Image
          src={capsuleMonster}
          alt="Monster Capsule"
          className="fixed top-0 object-contain left-[-250px] h-full w-[650px] opacity-10"
        />

        <Image
          src={capsuleMonster}
          alt="Monster Capsule"
          className="fixed top-0 object-contain right-[-250px] h-full w-[650px] opacity-10 -scale-x-[1]"
        />

        <div className="relative items-center border rounded-lg w-full p-2 shadow-2xl bg-[#050D14]">
          <div className="flex flex-col md:flex-row gap-2 m-auto z-20">
            <div className="sm:hidden h-full bg-gradient-to-tr from-[#07111A] to-[#0B1722] rounded-lg p-5 shadow-lg border border-bcolor">
              <Image src={logo} alt="Adrena logo" width={60} />
              <div className="flex flex-row gap-3 mb-3">
                <h1 className="text-[24px]">Genesis Lock</h1>
                <Image
                  src={alpIcon}
                  alt="ALP logo"
                  className="opacity-10 w-[30px]"
                />
              </div>
              <p className="text-sm lg:text-base font-mono opacity-75 mb-4">
                Kickstart protocol liquidity and get rewarded for your support.
                The Genesis Lock campaign has for goal to seed initial
                liquidities to the platform, filling the first 10m TVL cap.
                Special rewards are granted for the participants, in the form of
                boosted ALP Locked Stake rewards:
              </p>

              <ul className="mb-4 ml-4">
                <li className="text-sm font-mono opacity-75 list-disc">
                  participate today and start accruing extra ADX rewards, this
                  is a one time opportunity
                </li>
                <li className="text-sm font-mono opacity-75 list-disc">
                  receive Locked ALP tokens, details about the base rewards{' '}
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    here
                  </a>
                </li>
              </ul>

              <p className="text-sm lg:text-base font-mono opacity-75">
                The pool has a reserved component that has been whitelisted for
                early supporters and contributors, after 24 hours if any amount
                of the reserved pool remains un-claimed, it will move back to
                the public allocation and become available to all.
              </p>
            </div>

            <div className="flex flex-col gap-2 order-2 md:order-1">
              <div className="hidden sm:block h-full bg-gradient-to-tr from-[#07111A] to-[#0B1722] rounded-lg p-5 shadow-lg border border-bcolor">
                <Image src={logo} alt="Adrena logo" width={60} />
                <div className="flex flex-row gap-3 mb-3">
                  <h1 className="text-[24px]">Genesis Lock</h1>
                  <Image
                    src={alpIcon}
                    alt="ALP logo"
                    className="opacity-10 w-[30px]"
                  />
                </div>
                <p className="text-sm font-mono opacity-75 mb-4">
                  Kickstart protocol liquidity and get rewarded for your
                  support. The Genesis Lock campaign has for goal to seed
                  initial liquidities to the platform, filling the first 10m TVL
                  cap. Special rewards are granted for the participants, in the
                  form of boosted ALP Locked Stake rewards:
                </p>

                <ul className="mb-4 ml-4">
                  <li className="text-sm font-mono opacity-75 list-disc">
                    participate today and start accruing extra ADX rewards, this
                    is a one time opportunity
                  </li>
                  <li className="text-sm font-mono opacity-75 list-disc">
                    receive Locked ALP tokens, details about the base rewards{' '}
                    <a
                      href={`${window.location.origin}/buy_alp`}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      here
                    </a>
                  </li>
                </ul>

                <p className="text-sm font-mono opacity-75">
                  The pool has a reserved component that has been whitelisted
                  for early supporters and contributors, after 24 hours if any
                  amount of the reserved pool remains un-claimed, it will move
                  back to the public allocation and become available to all.
                </p>
              </div>

              <div className="flex flex-col gap-6 justify-between flex-none min-h-[170px] bg-gradient-to-tr from-[#07111A] to-[#0B1722] rounded-lg p-5 shadow-lg border border-bcolor">
                <h2>Liquidity pool</h2>
                {genesis?.publicAmountClaimed &&
                genesis?.publicAmount &&
                usdc?.decimals ? (
                  <div className="flex flex-row items-center">
                    <div className="w-full mt-auto">
                      <p className="opacity-50 text-sm sm:text-base mb-1">
                        Public liquidity
                      </p>
                      <p className="text-base sm:text-lg font-mono">
                        {usdc.decimals &&
                          formatPriceInfo(
                            nativeToUi(
                              genesis.publicAmountClaimed,
                              usdc?.decimals,
                            ),
                          )}{' '}
                        <span className="text-base sm:text-lg font-mono opacity-50">
                          /{' '}
                          {formatPriceInfo(
                            nativeToUi(genesis.publicAmount, usdc.decimals),
                          )}
                        </span>
                      </p>

                      <div className="flex-start flex h-3 w-full overflow-hidden rounded-full rounded-l-none bg-bcolor mt-3 p-1 pl-0 scale-[-1]">
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{
                            width: `${
                              (nativeToUi(
                                genesis.publicAmountClaimed,
                                usdc.decimals,
                              ) /
                                nativeToUi(
                                  genesis.publicAmount,
                                  usdc.decimals,
                                )) *
                              100
                            }%`,
                          }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="flex items-center justify-center h-1 overflow-hidden break-all bg-gradient-to-r from-[#1F2A8A] to-[#5B6AE8] rounded-full"
                        ></motion.div>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-center bg-bcolor h-[60px] w-[4px] z-1 mt-auto">
                      <div className="absolute top-0 w-2 h-2 rounded-full bg-bcolor" />
                    </div>

                    <div
                      className={twMerge(
                        'w-full',
                        genesis?.hasTransitionedToFullyPublic && 'opacity-50',
                      )}
                    >
                      <p className="opacity-50 text-right text-sm sm:text-base mb-1">
                        Reserved liquidity
                      </p>
                      {genesis?.reservedAmount &&
                        genesis?.reservedAmountClaimed &&
                        usdc?.decimals && (
                          <p className="text-base sm:text-lg font-mono text-right">
                            {usdc.decimals &&
                              formatPriceInfo(
                                nativeToUi(
                                  genesis?.reservedAmountClaimed,
                                  usdc?.decimals,
                                ),
                              )}{' '}
                            <span className="text-base sm:text-lg font-mono opacity-50">
                              /{' '}
                              {formatPriceInfo(
                                nativeToUi(
                                  genesis.reservedAmount,
                                  usdc.decimals,
                                ),
                              )}
                            </span>
                          </p>
                        )}

                      {isReserved && reservedGrantOwnerLeftAmount && (
                        <p className="hidden sm:block opacity-50 text-right font-mono">
                          Reserved amount left:{' '}
                          <FormatNumber
                            nb={nativeToUi(
                              reservedGrantOwnerLeftAmount,
                              usdc.decimals,
                            )}
                            suffix=" USDC"
                            className="inline-block"
                          />
                        </p>
                      )}
                      {genesis?.reservedAmountClaimed &&
                        genesis?.reservedAmount &&
                        usdc && (
                          <div className="flex-start flex h-3 w-full overflow-hidden rounded-full rounded-l-none bg-bcolor mt-3 p-1 pl-0">
                            <motion.div
                              initial={{ width: '0%' }}
                              animate={{
                                width: `${
                                  (nativeToUi(
                                    genesis.reservedAmountClaimed,
                                    usdc.decimals,
                                  ) /
                                    nativeToUi(
                                      genesis.reservedAmount,
                                      usdc.decimals,
                                    )) *
                                  100
                                }%`,
                              }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                              className="flex items-center justify-center h-1 overflow-hidden break-all bg-gradient-to-r from-[#6D1324] to-[#A33D50] rounded-full"
                            ></motion.div>
                          </div>
                        )}
                    </div>
                  </div>
                ) : (
                  <p className="font-mono animate-pulse">Loading</p>
                )}
                {isReserved && usdc && reservedGrantOwnerLeftAmount && (
                  <p className="sm:hidden opacity-50 text-center font-mono">
                    Reserved amount left:{' '}
                    <FormatNumber
                      nb={nativeToUi(
                        reservedGrantOwnerLeftAmount,
                        usdc.decimals,
                      )}
                      className="inline-block"
                    />
                  </p>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-tr from-[#07111A] to-[#0B1722] w-full md:w-[400px] rounded-lg p-5 shadow-lg border border-bcolor order-1 md:order-2 flex-none">
              <div className="flex flex-row gap-3 justify-end items-center">
                <RefreshButton />
                <Settings
                  activeRpc={activeRpc}
                  rpcInfos={rpcInfos}
                  autoRpcMode={autoRpcMode}
                  customRpcUrl={customRpcUrl}
                  customRpcLatency={customRpcLatency}
                  favoriteRpc={favoriteRpc}
                  setAutoRpcMode={setAutoRpcMode}
                  setCustomRpcUrl={setCustomRpcUrl}
                  setFavoriteRpc={setFavoriteRpc}
                  isIcon
                  isGenesis
                />
                <WalletAdapter userProfile={userProfile} />
              </div>
              <div className="w-full">
                <p className="opacity-50 text-sm mb-3">Pay</p>
                {usdc && (
                  <TradingInput
                    className="text-sm rounded-full"
                    inputClassName={'bg-inputcolor'}
                    tokenListClassName={twMerge(
                      'rounded-tr-lg rounded-br-lg border-l border-l-inputcolor bg-inputcolor',
                    )}
                    menuClassName="shadow-none justify-end mr-2"
                    menuOpenBorderClassName="rounded-tr-lg rounded-br-lg"
                    value={fundsAmount}
                    maxButton={connected}
                    maxClassName="relative ml-auto"
                    selectedToken={usdc}
                    tokenList={[usdc]}
                    onMaxButtonClick={() => {
                      setFundsAmount(walletTokenABalance ?? null);
                    }}
                    onChange={(e) => {
                      if (e !== null && e >= MAX_USDC_AMOUNT) {
                        setErrorMsg('Max amount is 500,000 USDC');
                        return;
                      }
                      setIsLoading(true);
                      setErrorMsg(null);
                      setFundsAmount(e);
                    }}
                  />
                )}

                <span className="flex flex-row justify-end items-center gap-1 mt-3 w-full text-right">
                  <p className="opacity-50 inline">Wallet · </p>
                  <FormatNumber nb={walletTokenABalance} suffix=" USDC" />
                </span>
              </div>

              <div
                className={twMerge('w-full transition-opacity duration-300')}
              >
                <p className="opacity-50 text-sm mb-3">Receive</p>
                <StyledSubContainer className="bg-transparent">
                  <div>
                    <div className="relative flex flex-row gap-2 items-center transition-opacity duration-300">
                      <Image
                        src={window.adrena.client.alpToken.image}
                        width={16}
                        height={16}
                        alt="ALP logo"
                      />
                      <FormatNumber
                        nb={feeAndAmount?.amount}
                        suffix=" ALP"
                        placeholder="0.00 ALP"
                        placeholderClassName="opacity-50"
                        className="text-lg"
                        isLoading={isLoading}
                      />
                    </div>
                    <div className="flex flex-row gap-1 items-center mt-3">
                      <Image
                        src={lockIcon}
                        width={12}
                        height={12}
                        alt="ALP logo"
                        className="opacity-50"
                      />
                      <p>Immediately staked and locked for 180 days</p>
                    </div>
                  </div>
                </StyledSubContainer>
              </div>

              <Button
                size="lg"
                title="Provide Liquidity"
                className="w-full mt-3 py-3"
                disabled={
                  !connected || !usdc || isLoading
                  // !fundsAmount ||
                  // !feeAndAmount?.amount
                }
                onClick={() => addGenesisLiquidity()}
              />

              {errorMsg !== null ? (
                <AnimatePresence>
                  <motion.div
                    className="flex w-full h-auto relative overflow-hidden pl-6 pt-2 pb-2 pr-2 my-4 border-2 border-[#BE3131] backdrop-blur-md z-40 items-center justify-center rounded-xl"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ originY: 0 }}
                  >
                    <Image
                      className="absolute left-[0.5em]"
                      src={errorImg}
                      width={16}
                      alt="Error icon"
                    />

                    <div className="items-center justify-center">
                      <div className="text-sm">{errorMsg}</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : null}
              <div className="w-full mt-6">
                <p className="opacity-50 text-sm mb-3">Rewards</p>
                <ul className="flex gap-1 sm:gap-3 items-center flex-wrap justify-evenly p-1 py-2 sm:p-3 rounded-lg border border-bcolor">
                  <li className="flex flex-col items-center">
                    <p className="text-sm">USDC Yield</p>
                    <p className="font-medium font-mono text-sm sm:text-lg">
                      1.75x
                    </p>
                  </li>

                  <li className="h-[40px] w-[1px] bg-bcolor" />

                  <li className="flex flex-col items-center">
                    <p className="text-sm">ADX rewards</p>
                    <p className="font-medium font-mono text-sm sm:text-lg">
                      1.75x
                    </p>
                  </li>

                  <li className="h-[40px] w-[1px] bg-bcolor" />

                  <li className="flex flex-col items-center">
                    <p className="text-sm">Bonus ADX</p>

                    <FormatNumber
                      nb={
                        genesis && adxPerUSDC !== null && feeAndAmount?.amount
                          ? feeAndAmount.amount * adxPerUSDC
                          : null
                      }
                      isLoading={isLoading}
                      className="font-medium font-mono text-sm sm:text-lg"
                      suffix=" ADX"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSuccess && (
          <Modal close={() => setIsSuccess(false)}>
            <div className="relative p-10">
              <div className="absolute top-0 w-[300px] left-[150px]">
                <Congrats />
              </div>
              <div className="relative">
                <Image
                  src={adrenaMonsters}
                  alt="Adrena monsters"
                  className="w-full max-w-[400px] m-auto"
                />
                <div className="absolute bottom-0 h-[120px] w-full bg-gradient-to-b from-secondary/0 to-secondary" />
              </div>

              <h1 className="text-center mt-6">Welcome to Adrena!</h1>
              <p className="text-center mt-1 text-base opacity-50 max-w-[400px]">
                You have bought {feeAndAmount?.amount.toFixed(2)} ALP locked and
                staked for 6 months
              </p>
              <Button
                size="lg"
                title="Share on"
                className="w-full mt-6 py-3 text-base"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  text,
                )}&url=${encodeURIComponent(url)}`}
                isOpenLinkInNewTab
                rightIcon={xIcon}
                rightIconClassName="w-4 h-4"
                onClick={() => setIsSuccess(false)}
              />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
