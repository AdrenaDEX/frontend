import React, { useEffect, useRef, useState } from 'react';

import LineRechartAum from './RechartALPPrice';

export default function ALPPriceChart() {
  const [chartData, setChartData] = useState<any>(null);
  const [period, setPeriod] = useState<string | null>('7d');
  const periodRef = useRef(period);

  useEffect(() => {
    periodRef.current = period;
    getPoolInfo();
  }, [period]);
  const getPoolInfo = async () => {
    try {
      const dataEndpoint = (() => {
        switch (periodRef.current) {
          case '1d':
            return 'poolinfo';
          case '7d':
            return 'poolinfohourly';
          case '1M':
            return 'poolinfodaily';
          default:
            return 'poolinfo';
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
        `https://datapi.adrena.xyz/${dataEndpoint}?lp_token_price=true&start_date=${(() => {
          const startDate = new Date();
          startDate.setDate(startDate.getDate() - dataPeriod);

          return startDate.toISOString();
        })()}&end_date=${new Date().toISOString()}`,
      );
      const { data } = await res.json();
      const { lp_token_price, snapshot_timestamp } = data;

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

      const formattedData = lp_token_price.map(
        (price: number, i: string | number) => ({
          name: timeStamp[i],
          value: price,
        }),
      );

      setChartData(formattedData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPoolInfo();

    const interval = setInterval(() => {
      getPoolInfo();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (!chartData) {
    return (
      <div className="h-full w-full flex items-center justify-center text-sm">
        Loading...
      </div>
    );
  }

  return (
    <LineRechartAum
      title={'ALP Price'}
      subValue={chartData[chartData.length - 1].value}
      data={chartData}
      labels={[{ name: 'value' }]}
      period={period}
      setPeriod={setPeriod}
    />
  );
}
