import { BN } from '@coral-xyz/anchor';
import Tippy from '@tippyjs/react';
import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '@/components/common/Button/Button';
import TabSelect from '@/components/common/TabSelect/TabSelect';
import RefreshButton from '@/components/RefreshButton/RefreshButton';
import {
  ADX_LOCK_PERIODS,
  ADX_STAKE_MULTIPLIERS,
  ALP_LOCK_PERIODS,
  ALP_STAKE_MULTIPLIERS,
} from '@/constant';
import { useSelector } from '@/store/store';
import { AdxLockPeriod, AlpLockPeriod, LockedStakeExtended } from '@/types';
import { formatNumber, nativeToUi } from '@/utils';

import infoIcon from '../../../../public/images/Icons/info.svg';
import lockIcon from '../../../../public/images/Icons/lock.svg';
import walletImg from '../../../../public/images/wallet-icon.svg';

export default function UpdateLockedStake({
  lockedStake,
}: {
  lockedStake: LockedStakeExtended;
}) {
  const [amount, setAmount] = useState<number | null>(null);
  const walletTokenBalances = useSelector((s) => s.walletTokenBalances);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const actualDuration = Math.floor(
    lockedStake.lockDuration.toNumber() / 3600 / 24,
  );

  const [lockPeriod, setLockPeriod] = useState<AdxLockPeriod | AlpLockPeriod>(
    actualDuration as AdxLockPeriod | AlpLockPeriod,
  );

  // Force typing for now, need to do something clean with templates
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LOCK_PERIODS =
    lockedStake.tokenSymbol === 'ALP' ? ALP_LOCK_PERIODS : ADX_LOCK_PERIODS;

  const STAKE_MULTIPLIERS =
    lockedStake.tokenSymbol === 'ALP'
      ? ALP_STAKE_MULTIPLIERS
      : ADX_STAKE_MULTIPLIERS;

  const lockPeriods = LOCK_PERIODS.map((lockPeriod) => ({
    title: lockPeriod,
    activeColor: 'border-white',
    disabled: lockPeriod < actualDuration,
  })).filter((x) => x.title !== 0);

  const walletBalance: number | null =
    walletTokenBalances?.[lockedStake.tokenSymbol] ?? null;

  const onStakeAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '') {
      setAmount(null);
      setErrorMessage('');
      return;
    }

    const minAmount =
      lockedStake.tokenSymbol === 'ALP'
        ? nativeToUi(new BN(1), window.adrena.client.alpToken.decimals)
        : nativeToUi(new BN(1), window.adrena.client.adxToken.decimals);

    if (walletBalance === null || Number(value) > walletBalance) {
      setErrorMessage('Insufficient balance');
    } else if (Number(value) < minAmount) {
      setErrorMessage(`Minimum stake amount is ${minAmount}`);
    } else {
      setErrorMessage('');
    }

    setAmount(Number(value));
  };

  // Force typing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const multipliers = (STAKE_MULTIPLIERS as any)[lockPeriod] as unknown as {
    usdc: number;
    adx: number;
    votes?: number;
  };

  return (
    <div className={twMerge('flex-col pb-4 sm:pb-0')}>
      <div className="min-h-[10em] flex flex-col gap-4 items-center justify-center text-center text-sm p-4">
        <div>
          This feature allow you to upgrade an existing stake, either in quality
          (duration) or quantity (amount).
        </div>

        <div className="w-full bg-bcolor h-[1px]" />

        <Tippy
          content={
            <div className="text-sm flex flex-col text-center">
              Example: if you&apos;ve been staked for 30 out of a 90 days lock,
              upgrading to 180 days lock will bring you back to 0/180 for the
              whole amount
            </div>
          }
          placement="auto"
        >
          <div className="bg-blue/30 p-4 border-dashed border-blue rounded flex">
            <Image
              className="opacity-60 relative mb-auto"
              src={infoIcon}
              height={20}
              width={20}
              alt="Wallet icon"
            />
            When you do so, the extra weight will be counted toward rewards of
            the current round, and you&apos;ll renew the contract to stake until
            the max lock duration.
          </div>
        </Tippy>
      </div>

      <div className="w-full bg-bcolor h-[1px]" />

      <div className="flex flex-col gap-5 justify-between w-full px-5 pl-6 pr-6">
        <div className="mt-4">
          <div className="flex flex-row justify-between mb-1">
            <h5 className="ml-4"> Additional Amount</h5>

            <div className="text-sm flex items-center justify-end h-6">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  if (walletBalance === null) return;

                  setAmount(walletBalance);
                }}
              >
                <Image
                  className="mr-1 opacity-60 relative"
                  src={walletImg}
                  height={18}
                  width={18}
                  alt="Wallet icon"
                />

                <span className="text-txtfade font-mono text-xs mr-1">
                  {walletBalance !== null
                    ? `${formatNumber(walletBalance, 2)} ${
                        lockedStake.tokenSymbol
                      }`
                    : '–'}
                </span>
              </div>
              <RefreshButton className="ml-1" />
            </div>
          </div>

          <div className="relative flex flex-row w-full">
            <div className="flex items-center bg-bcolor border rounded-l-xl px-3  border-r-none">
              <p className="opacity-50 font-mono text-sm">
                {lockedStake.tokenSymbol}
              </p>
            </div>
            <input
              className="w-full bg-inputcolor border border-bcolor rounded-xl rounded-l-none p-3 px-4 text-xl font-mono"
              type="number"
              onWheel={(e) => {
                // Disable the scroll changing input value
                (e.target as HTMLInputElement).blur();
              }}
              value={amount ?? ''}
              onChange={onStakeAmountChange}
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-row gap-1 mb-2 ml-4">
            <Image
              className="relative"
              src={lockIcon}
              width={14}
              height={18}
              alt="lock icon"
            />
            <h5 className="text-sm font-medium">New Lock Duration (days)</h5>
          </div>

          <TabSelect
            className="font-mono"
            selected={lockPeriod}
            initialSelectedIndex={lockPeriods.findIndex(
              (x) => x.title === lockPeriod,
            )}
            tabs={lockPeriods}
            onClick={(title) => {
              // Typescript not liking ADX and ALP having different types
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              setLockPeriod(title as any);
            }}
          />
        </div>
      </div>

      <div className="text-sm text-txtfade/50 ml-12 mt-4">Benefits</div>

      <div className="w-full justify-around items-center flex mt-4">
        <div className="flex flex-col items-center w-20 grow">
          <div className="font-mono text-2xl">{lockPeriod}</div>
          <div className="text-txtfade text-sm">days</div>
        </div>

        <div className="flex flex-col items-center w-20 grow">
          <div className="font-mono text-2xl">{multipliers.usdc}x</div>
          <div className="text-txtfade text-sm">USDC yield</div>
        </div>

        <div className="flex flex-col items-center w-20 grow">
          <div className="font-mono text-2xl">{multipliers.adx}</div>
          <div className="text-txtfade text-sm">ADX token yield</div>
        </div>

        {lockedStake.tokenSymbol === 'ADX' && multipliers.votes ? (
          <div className="flex flex-col items-center w-20 grow">
            <div className="font-mono text-2xl">{multipliers.votes}x</div>
            <div className="text-txtfade text-sm">
              Base voting power multiplier
            </div>
          </div>
        ) : null}
      </div>

      <div className="pb-4 pl-4 pr-4 mb-4">
        <Button
          className="w-full mt-8"
          size="lg"
          title={errorMessage ? errorMessage : '[U]pgrade'}
          disabled={!!errorMessage || (lockPeriod == actualDuration && !amount)}
          onClick={() => {
            //
          }}
        />
      </div>
    </div>
  );
}
