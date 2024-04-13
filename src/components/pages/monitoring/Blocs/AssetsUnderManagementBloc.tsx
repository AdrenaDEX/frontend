import StyledContainer from '@/components/common/StyledContainer/StyledContainer';
import { useSelector } from '@/store/store';
import { CustodyExtended, PoolExtended } from '@/types';

import NumberInfo from '../NumberInfo';
import Table from '../Table';

const CANNOT_CALCULATE = -1;

export default function AssetsUnderManagementBloc({
  className,
  mainPool,
  custodies,
}: {
  className?: string;
  mainPool: PoolExtended;
  custodies: CustodyExtended[];
}) {
  const tokenPrices = useSelector((s) => s.tokenPrices);

  // Value of all assets owned by the pool
  // Which doesn't take into account opened positions and stuff
  const totalPoolAssetHardValue = custodies.reduce((acc, custody) => {
    const price = tokenPrices[custody.tokenInfo.symbol];

    if (!price) return CANNOT_CALCULATE;
    return acc + custody.owned * price;
  }, 0);

  return (
    <StyledContainer
      title={<h1>Assets Under Management</h1>}
      className={className}
    >
      <Table
        rowTitleWidth="50%"
        data={[
          {
            rowTitle: 'Total Value',
            value: <NumberInfo value={mainPool.aumUsd} />,
          },

          ...(totalPoolAssetHardValue !== CANNOT_CALCULATE
            ? [
                {
                  rowTitle: 'Raw Total Assets Value',
                  value: <NumberInfo value={totalPoolAssetHardValue} />,
                },
              ]
            : []),

          ...custodies.map((custody) => ({
            rowTitle: custody.tokenInfo.name,
            value: (
              <div className="flex flex-col">
                <NumberInfo
                  value={custody.owned}
                  precision={custody.decimals}
                  denomination={custody.tokenInfo.symbol}
                />
                {tokenPrices[custody.tokenInfo.symbol] ? (
                  <NumberInfo
                    value={
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      custody.owned * tokenPrices[custody.tokenInfo.symbol]!
                    }
                  />
                ) : null}
              </div>
            ),
          })),
        ]}
      />
    </StyledContainer>
  );
}