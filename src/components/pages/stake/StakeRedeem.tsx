import React, { useState } from 'react';

import Button from '@/components/common/Button/Button';
import { formatNumber } from '@/utils';

export default function StakeRedeem({
  tokenSymbol,
  totalLiquidStaked,
  handleRemoveLiquidStake,
}: {
  tokenSymbol: 'ADX' | 'ALP';
  totalLiquidStaked: number;
  handleRemoveLiquidStake: (amount: number) => void;
}) {
  const [amount, setAmount] = useState<number | null>(null);

  return (
    <div className="p-5">
      <div>
        <div className="flex flex-row justify-between mb-2">
          <p className="text-sm opacity-50 font-medium"> Enter Amount</p>
          <p className="text-sm font-medium">
            <span className="opacity-50"> Total reedemable · </span>
            {totalLiquidStaked
              ? `${formatNumber(totalLiquidStaked, 2)} ${tokenSymbol}`
              : '–'}
          </p>
        </div>
        <div className="relative flex flex-row w-full">
          <div className="flex items-center bg-bcolor border rounded-l-xl px-3  border-r-none">
            <p className="opacity-50 font-mono text-sm">{tokenSymbol}</p>
          </div>
          <input
            className="w-full bg-third border rounded-xl rounded-l-none p-3 px-4 text-xl font-mono"
            type="number"
            onWheel={(e) => {
              // Disable the scroll changing input value
              (e.target as HTMLInputElement).blur();
            }}
            value={amount ?? ''}
            onChange={(e) => {
              if (!e.target.value) {
                setAmount(null);
                return;
              }
              setAmount(Number(e.target.value));
            }}
            placeholder="0.00"
          />

          <Button
            className="absolute right-2 bottom-[20%]"
            title="MAX"
            variant="outline"
            onClick={() => {
              if (!totalLiquidStaked) {
                return;
              }
              setAmount(totalLiquidStaked);
            }}
          />
        </div>
      </div>

      <Button
        variant="danger"
        className="w-full mt-3"
        size="lg"
        title="Remove stake"
        disabled={!amount}
        onClick={() => {
          if (!amount) {
            return;
          }
          handleRemoveLiquidStake(amount);
        }}
      />
    </div>
  );
}
