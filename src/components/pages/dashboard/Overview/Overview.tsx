import { formatNumber, formatPriceInfo } from '@/utils';

export default function Overview({
  aumUsd,
  longPositions,
  shortPositions,
  nbOpenLongPositions,
  nbOpenShortPositions,
  averageLongLeverage,
  averageShortLeverage,
  totalCollectedFees,
  totalVolume,
}: {
  aumUsd: number | null;
  longPositions: number | null;
  shortPositions: number | null;
  nbOpenLongPositions: number | null;
  nbOpenShortPositions: number | null;
  averageLongLeverage: number | null;
  averageShortLeverage: number | null;
  totalCollectedFees: number | null;
  totalVolume: number | null;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-5 border border-gray-200 bg-gray-300/85 backdrop-blur-md w-full rounded-lg">
      <div className="w-full p-3 px-5">
        <h2 className="text-lg font-normal border-b border-b-gray-200 pb-3 mb-3">
          Long Overview
        </h2>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <p className="opacity-50">Open Interest</p>
            <p className="font-mono">{formatPriceInfo(longPositions)}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="opacity-50">Active Positions</p>
            <p className="font-mono">
              {nbOpenLongPositions !== null ? nbOpenLongPositions : '-'}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="opacity-50">Average Leverage</p>
            <p className="text-sm opacity-25 italic">
              {averageLongLeverage
                ? `${formatNumber(averageLongLeverage, 2)}x`
                : 'Coming soon'}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:border-l md:border-l-gray-200 p-3 px-5">
        <h2 className="text-lg font-normal border-b border-b-gray-200 pb-3 mb-3">
          Short Overview
        </h2>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <p className="opacity-50">Open Interest</p>
            <p className="font-mono">{formatPriceInfo(shortPositions)}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="opacity-50">Active Positions</p>
            <p className="font-mono">
              {nbOpenShortPositions !== null ? nbOpenShortPositions : '-'}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="opacity-50">Average Leverage</p>
            <p className="text-sm opacity-25 italic">
              {averageShortLeverage
                ? `${formatNumber(averageShortLeverage, 2)}x`
                : 'Coming soon'}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:border-l md:border-l-gray-200 p-3 px-5">
        <h2 className="text-lg font-normal border-b border-b-gray-200 pb-3 mb-3">
          Total Stats
        </h2>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <p className="opacity-50">AUM</p>
            <p className="font-mono">{formatPriceInfo(aumUsd)}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="opacity-50">Total Volume</p>
            <p className="font-mono">{formatPriceInfo(totalVolume)}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="opacity-50">Total fees</p>
            <p className="font-mono">{formatPriceInfo(totalCollectedFees)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
