import { BN } from '@coral-xyz/anchor';

import Button from '@/components/common/Button/Button';
import { STAKE_MULTIPLIERS } from '@/constant';
import { LockPeriod, StakePositionsExtended } from '@/types';
import { formatNumber, getDaysRemaining, nativeToUi } from '@/utils';

import lockIcon from '../../../../public/images/Icons/lock.svg';

export default function StakeBlocks({
  positions,
  handleRemoveLockedStake,
}: {
  positions: StakePositionsExtended[];
  handleRemoveLockedStake: (
    tokenSymbol: 'ADX' | 'ALP',
    resolved: boolean,
    threadId: BN,
    lockedStakeIndex: number,
  ) => void;
}) {
  const today = new Date();

  if (positions.length === 0) {
    return <p className="text-center opacity-25">No locked stake</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {positions?.map(
        ({
          lockedStakeIndex,
          tokenSymbol,
          resolved,
          amount,
          stakeTime,
          claimTime,
          lockDuration,
          stakeResolutionThreadId,
        }) => (
          <div
            key={Number(stakeResolutionThreadId)}
            className="bg-gray-300 p-3 rounded-xl border border-gray-200"
          >
            <div className="pb-2 flex flex-row justify-between border-b border-b-gray-200">
              <div className="flex flex-row gap-2 items-center">
                <div
                  className={`p-1 bg-${
                    tokenSymbol === 'ADX' ? 'red' : 'blue'
                  }-500 rounded-full`}
                >
                  <p className="flex items-center justify-center text-sm font-specialmonster h-7 w-7">
                    {tokenSymbol === 'ADX' ? 'ADX' : 'ALP'}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium opacity-50">
                    {tokenSymbol}
                  </p>
                  <p>
                    {tokenSymbol === 'ADX'
                      ? window.adrena.client.adxToken.name
                      : window.adrena.client.alpToken.name}
                  </p>
                </div>
              </div>
            </div>
            <ul className="flex flex-col gap-2 pt-3">
              <li className="flex flex-row gap-3 justify-between">
                <p className="text-sm opacity-50">Amount</p>
                <p className="font-mono text-sm">
                  {formatNumber(
                    nativeToUi(amount, window.adrena.client.adxToken.decimals),
                    2,
                  )}{' '}
                  ADX
                </p>
              </li>

              <li className="flex flex-row gap-3 justify-between">
                <p className="text-sm opacity-50">Stake Time</p>
                <p className="font-mono text-sm">
                  {new Date(Number(stakeTime) * 1000).toLocaleString('en', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
              </li>

              <li className="flex flex-row gap-3 justify-between">
                <p className="text-sm opacity-50">Claim Time</p>
                <p className="font-mono text-sm">
                  {Number(claimTime) !== 0
                    ? new Date(Number(claimTime) * 1000).toLocaleString('en', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })
                    : 'Not Claimed'}
                </p>
              </li>

              <li className="flex flex-row gap-3 justify-between">
                <p className="text-sm opacity-50">Lock Duration</p>
                <p className="font-mono text-sm">
                  {Number(lockDuration) / 3600 / 24}
                  <span className="opacity-50"> days</span>
                </p>
              </li>

              <li className="flex flex-row gap-3 justify-between">
                <p className="text-sm opacity-50">LM Reward Multiplier</p>
                <p className="font-mono text-sm">
                  {lockDuration &&
                    STAKE_MULTIPLIERS[
                      (Number(lockDuration) / 3600 / 24) as LockPeriod
                    ].adx}
                  x
                </p>
              </li>

              <li className="flex flex-row gap-3 justify-between">
                <p className="text-sm opacity-50">Reward Multiplier</p>
                <p className="font-mono text-sm">
                  {lockDuration &&
                    STAKE_MULTIPLIERS[
                      (Number(lockDuration) / 3600 / 24) as LockPeriod
                    ].usdc}
                  x
                </p>
              </li>

              <li className="flex flex-row gap-3 justify-between">
                <p className="text-sm opacity-50">Vote Multiplier</p>
                <p className="font-mono text-sm">
                  {lockDuration &&
                    STAKE_MULTIPLIERS[
                      (Number(lockDuration) / 3600 / 24) as LockPeriod
                    ].votes}
                  x
                </p>
              </li>

              <li>
                <Button
                  className="w-full mt-3"
                  variant="secondary"
                  rightIcon={
                    getDaysRemaining(stakeTime, lockDuration) <= 0
                      ? undefined
                      : lockIcon
                  }
                  disabled={!(getDaysRemaining(stakeTime, lockDuration) <= 0)}
                  title={
                    getDaysRemaining(stakeTime, lockDuration) <= 0
                      ? 'Redeem'
                      : `${getDaysRemaining(
                          stakeTime,
                          lockDuration,
                        )} days remaining (${new Date(
                          today.setDate(
                            today.getDay() +
                              getDaysRemaining(stakeTime, lockDuration),
                          ),
                        ).toLocaleString('en', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })})`
                  }
                  onClick={() => {
                    if (getDaysRemaining(stakeTime, lockDuration) <= 0) {
                      handleRemoveLockedStake(
                        tokenSymbol,
                        resolved,
                        stakeResolutionThreadId,
                        lockedStakeIndex,
                      );
                    }
                  }}
                />
              </li>
            </ul>
          </div>
        ),
      )}
    </div>
  );
}
