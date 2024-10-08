import Tippy from '@tippyjs/react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { twMerge } from 'tailwind-merge';

import { formatPriceInfo } from '@/utils';

export default function LineRechartRealizedPnl({
  title,
  subValue,
  data,
  labels,
  period,
  setPeriod,
  isSmallScreen,
}: {
  title: string;
  subValue: number;
  data: any;
  labels: {
    name: string;
    color?: string;
  }[];
  period: string | null;
  setPeriod: (v: string | null) => void;
  isSmallScreen: boolean;
}) {
  const formatYAxis = (tickItem: any) => {
    return formatPriceInfo(tickItem, 0);
  };

  function CustomToolTip(props: any) {
    const { active, payload, label } = props;

    if (active && payload && payload.length) {
      return (
        <div className="bg-third p-3 border border-white rounded-lg min-w-[12em]">
          <p className="text-lg mb-2 font-mono">{label}</p>
          {payload.map((item: any) => (
            <div
              key={item.dataKey}
              className="text-sm font-mono flex justify-between"
              style={{ color: item.fill }}
            >
              <span style={{ color: item.fill }}>{item.dataKey}:</span>
              <span className="ml-2 font-mono" style={{ color: item.fill }}>
                {formatPriceInfo(item.value, 2, 2)}
              </span>
            </div>
          ))}
        </div>
      );
    }

    return null;
  }

  return (
    <div className="flex flex-col h-full w-full max-h-[18em]">
      <div className="flex mb-3 justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="">{title}</h2>
          {!isSmallScreen && (
            <div className="text-txtfade text-sm">
              ({formatPriceInfo(subValue, 0)})
            </div>
          )}
        </div>

        <div className="flex gap-2 text-sm">
          <div
            className={twMerge(
              'cursor-pointer',
              period === '1d' ? 'underline' : '',
            )}
            onClick={() => setPeriod('1d')}
          >
            1d
          </div>
          <div
            className={twMerge(
              'cursor-pointer',
              period === '7d' ? 'underline' : '',
            )}
            onClick={() => setPeriod('7d')}
          >
            7d
          </div>
          <div
            className={twMerge(
              'cursor-pointer',
              period === '1M' ? 'underline' : '',
            )}
            onClick={() => setPeriod('1M')}
          >
            1M
          </div>

          <Tippy
            content={
              <div className="text-sm w-20 flex flex-col justify-around">
                Coming soon
              </div>
            }
            placement="auto"
          >
            <div className="text-txtfade cursor-not-allowed">1Y</div>
          </Tippy>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="10 10" strokeOpacity={0.1} />

          <XAxis dataKey="time" fontSize="12" />

          <YAxis domain={[0]} tickFormatter={formatYAxis} fontSize="11" />

          <Tooltip content={<CustomToolTip />} cursor={false} />

          <Legend />

          {labels?.map(({ name, color }) => {
            return (
              <Line
                key={name}
                type="monotone"
                dataKey={name}
                fill={color}
                stroke={color}
                dot={false}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
