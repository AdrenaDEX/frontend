import { twMerge } from 'tailwind-merge';

import { USD_DECIMALS } from '@/constant';
import { CustodyExtended } from '@/types';
import { nativeToUi } from '@/utils';

import abbreviateWords from '../abbreviateWords';
import Bloc from '../Bloc/Bloc';
import NumberInfo from '../Table/formatting/NumberInfo';
import Table from '../Table/Table';

export default function FeeCustodyBreakdownBloc({
  className,
  custodies,
}: {
  className?: string;
  custodies: CustodyExtended[];
}) {
  const attributes = Object.keys(custodies[0].nativeObject.collectedFees);

  return (
    <Bloc
      title="Fee Custody Breakdown"
      className={twMerge('min-w-[45em]', className)}
    >
      <Table
        rowTitleWidth="90px"
        columnsTitles={attributes.map(abbreviateWords)}
        data={[
          ...custodies.map((custody) => ({
            rowTitle: custody.tokenInfo.name,
            values: attributes.map((attribute) => (
              <NumberInfo
                key={attribute}
                value={nativeToUi(
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  (custody.nativeObject.collectedFees as any)[attribute],
                  USD_DECIMALS,
                )}
              />
            )),
          })),

          {
            rowTitle: <div className="font-semibold">Total</div>,
            values: attributes.map((param, i) => (
              <NumberInfo
                key={i}
                value={custodies.reduce(
                  (total, custody) =>
                    total +
                    nativeToUi(
                      // Force typing as we know the keys are matching the collectedFees field
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (custody.nativeObject.collectedFees as any)[param],
                      USD_DECIMALS,
                    ),
                  0,
                )}
              />
            )),
          },
        ]}
      />
    </Bloc>
  );
}