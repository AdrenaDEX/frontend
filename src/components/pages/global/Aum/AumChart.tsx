import React, { useEffect, useState } from 'react';

import LineRechartAum from './RechartAum';

export default function AumChart() {
  const [AUM, setAUM] = useState<any>(null);

  const getPoolInfo = async () => {
    try {
      const res = await fetch(
        `https://datapi.adrena.xyz/poolinfo?aum_usd=true&start_date=${(() => {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);

          return yesterday.toISOString(); // Get the last 24h
        })()}&end_date=${new Date().toISOString()}`,
      );
      const { data } = await res.json();
      const { aum_usd, snapshot_timestamp } = data;

      console.log(snapshot_timestamp);

      const timeStamp = snapshot_timestamp.map((time: string) =>
        new Date(time).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        }),
      );

      const formattedData = aum_usd.map((aum: number, i: string | number) => ({
        name: timeStamp[i],
        value: aum,
      }));

      setAUM(formattedData);
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

  if (!AUM) {
    return (
      <div className="h-full w-full flex items-center justify-center text-sm">
        Loading...
      </div>
    );
  }

  return (
    <LineRechartAum title={'AUM'} data={AUM} labels={[{ name: 'value' }]} />
  );
}
