import React, { useEffect, useRef, useState } from 'react';

import LineRechartPercentage from './LineRechartRealizedPnl';

interface CumulativePnlChartProps {
  isSmallScreen: boolean;
}

export function RealizedPnlChart({ isSmallScreen }: CumulativePnlChartProps) {
  const [infos, setInfos] = useState<{
    formattedData: (
      | {
          time: string;
        }
      | { [key: string]: number }
    )[];

    custodiesColors: string[];
  } | null>(null);
  const [period, setPeriod] = useState<string | null>('7d');
  const periodRef = useRef(period);

  const [totalRealizedPnl, setTotalRealizedPnl] = useState<number>(0);

  useEffect(() => {
    periodRef.current = period;
    getCustodyInfo();
  }, [period]);

  const getCustodyInfo = async () => {
    try {
      const dataEndpoint = (() => {
        switch (periodRef.current) {
          case '1d':
            return 'custodyinfo';
          case '7d':
            return 'custodyinfohourly';
          case '1M':
            return 'custodyinfodaily';
          default:
            return 'custodyinfo';
        }
      })();

      const dataPeriod = (() => {
        switch (periodRef.current) {
          case '1d':
            return 1;
          case '7d':
            return 7;
          case '1M':
            return 31;
          default:
            return 1;
        }
      })();

      const res = await fetch(
        `https://datapi.adrena.xyz/${dataEndpoint}?cumulative_profit_usd=true&cumulative_loss_usd=true&start_date=${(() => {
          const startDate = new Date();
          startDate.setDate(startDate.getDate() - dataPeriod);

          return startDate.toISOString();
        })()}&end_date=${new Date().toISOString()}`,
      );

      const { data } = await res.json();
      const {
        cumulative_profit_usd: cumulativeProfitUsd,
        cumulative_loss_usd: cumulativeLossUsd,
        snapshot_timestamp,
      } = data as {
        cumulative_profit_usd: { [key: string]: string[] };
        cumulative_loss_usd: { [key: string]: string[] };
        snapshot_timestamp: string[];
      };

      const timeStamp = snapshot_timestamp.map((time: string) => {
        if (periodRef.current === '1d') {
          return new Date(time).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
          });
        }

        if (periodRef.current === '7d') {
          return new Date(time).toLocaleString('en-US', {
            day: 'numeric',
            month: 'numeric',
            hour: 'numeric',
          });
        }

        if (periodRef.current === '1M') {
          return new Date(time).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'numeric',
          });
        }

        return new Date(time).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        });
      });

      // Each custody keeps an utilization array
      const infos = window.adrena.client.custodies.map((c) => ({
        custody: c,
        values: [] as number[],
      }));

      const totalInfos: number[] = Array.from(Array(timeStamp.length).fill(0));

      for (const [custodyKey, cumulativeProfitUsdValues] of Object.entries(
        cumulativeProfitUsd,
      )) {
        const custodyInfos = infos.find(
          ({ custody }) => custody.pubkey.toBase58() === custodyKey,
        );

        if (!custodyInfos) continue;

        cumulativeProfitUsdValues.forEach(
          (cumulativeProfitUsdValue: string, i: number) => {
            const cumulativeProfitUsdNb = parseInt(
              cumulativeProfitUsdValue,
              10,
            );
            const cumulativeLossUsdNb = parseInt(
              cumulativeLossUsd[custodyKey][i],
              10,
            );

            custodyInfos.values.push(
              cumulativeProfitUsdNb - cumulativeLossUsdNb,
            );

            totalInfos[i] += cumulativeProfitUsdNb - cumulativeLossUsdNb;
          },
        );
      }

      const formatted = timeStamp.map((time: string, i: number) => ({
        time,
        ...infos.reduce((acc, { custody, values }) => {
          if (custody.tokenInfo.symbol !== 'USDC') {
            acc[custody.tokenInfo.symbol] = values[i];
          }
          return acc;
        }, {} as { [key: string]: number }),
        Total: totalInfos[i],
      }));

      const lastDataPoint = formatted[formatted.length - 1];
      const calculatedTotalRealizedPnl = Object.entries(lastDataPoint)
        .filter(([key]) => key !== 'time' && key !== 'Total')
        .reduce((sum, [_, value]) => sum + (value as number), 0);

      setTotalRealizedPnl(calculatedTotalRealizedPnl);
      setInfos({
        formattedData: formatted,
        custodiesColors: infos.map(({ custody }) => custody.tokenInfo.color),
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCustodyInfo();

    const interval = setInterval(() => {
      getCustodyInfo();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!infos) {
    return (
      <div className="h-full w-full flex items-center justify-center text-sm">
        Loading...
      </div>
    );
  }

  return (
    <LineRechartPercentage
      title="Traders Realized PnL"
      subValue={totalRealizedPnl}
      data={infos.formattedData}
      labels={[
        { name: 'Total', color: '#ff0000' },
        ...Object.keys(infos.formattedData[0])
          .filter((key) => key !== 'time' && key !== 'Total')
          .map((x, i) => ({
            name: x,
            color: infos.custodiesColors.filter(
              (_, index) =>
                window.adrena.client.custodies[index].tokenInfo.symbol !==
                'USDC',
            )[i],
          })),
      ]}
      period={period}
      setPeriod={setPeriod}
      isSmallScreen={isSmallScreen}
    />
  );
}