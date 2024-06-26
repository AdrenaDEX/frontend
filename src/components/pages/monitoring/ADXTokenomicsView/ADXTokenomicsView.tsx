import {
  ActiveElement,
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartEvent,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  TooltipItem,
} from 'chart.js';
import ChartPluginAnnotation, {
  AnnotationOptions,
  AnnotationTypeRegistry,
} from 'chartjs-plugin-annotation';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import { Bar, Pie } from 'react-chartjs-2';

import StyledContainer from '@/components/common/StyledContainer/StyledContainer';
import StyledSubSubContainer from '@/components/common/StyledSubSubContainer/StyledSubSubContainer';
import useBetterMediaQuery from '@/hooks/useBetterMediaQuery';
import { Cortex, Staking, VestRegistry } from '@/types';
import {
  formatNumber,
  formatNumberShort,
  getFontSizeWeight,
  nativeToUi,
} from '@/utils';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels,
  ChartPluginAnnotation,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function indexToMin(index: number) {
  return index - 0.36;
}

function indexToMax(index: number) {
  return index + 0.36;
}

function generateLine(
  index: number,
  ratio: number,
  color: string,
): AnnotationOptions<keyof AnnotationTypeRegistry> {
  return {
    type: 'line',
    borderColor: color,
    borderWidth: 4,
    xMax: indexToMax(index) + 0.05,
    xMin: indexToMin(index) - 0.05,
    xScaleID: 'x',
    yMax: () => ratio,
    yMin: () => ratio,
    yScaleID: 'y',
  };
}

export default function ADXTokenomicsView({
  cortex,
  vestRegistry,
  adxTotalSupply,
  adxStakingAccount,
}: {
  cortex: Cortex;
  vestRegistry: VestRegistry;
  adxTotalSupply: number;
  adxStakingAccount: Staking;
}) {
  const bucketNames = [
    'coreContributor',
    'daoTreasury',
    'pol',
    'ecosystem',
  ] as const;
  const bucketsLabels = ['Core Contrib.', 'DAO Treasury', 'POL', 'Ecosystem'];
  const bucketColors = ['#ff4069f0', '#f9df65f0', '#3b82f6f0', '#07956bf0'];
  const isBreakpoint = useBetterMediaQuery('(max-width: 500px)');

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <StyledContainer
          headerClassName="text-center justify-center"
          title="ADX CIRCULATING SUPPLY"
          className="w-full"
        >
          <StyledSubSubContainer className="items-center justify-center">
            <h2>{formatNumber(adxTotalSupply, 2)}</h2>
            <h2 className="ml-1">ADX</h2>
          </StyledSubSubContainer>
        </StyledContainer>

        <StyledContainer
          headerClassName="text-center justify-center"
          title="LOCKED STAKED ADX"
          className="w-full"
        >
          <StyledSubSubContainer className="items-center justify-center">
            <h2>
              {formatNumber(
                nativeToUi(
                  adxStakingAccount.nbLockedTokens,
                  adxStakingAccount.stakedTokenDecimals,
                ),
                2,
              )}
            </h2>
            <h2 className="ml-1">ADX</h2>
          </StyledSubSubContainer>
        </StyledContainer>
      </div>
      <StyledContainer
        headerClassName="text-center justify-center"
        title="VESTED ADX"
        className="w-full grow"
      >
        <StyledSubSubContainer className="items-center justify-center">
          <h2>
            {formatNumber(
              nativeToUi(
                vestRegistry.vestedTokenAmount,
                window.adrena.client.adxToken.decimals,
              ),
              2,
            )}
          </h2>
          <h2 className="ml-1">ADX</h2>
        </StyledSubSubContainer>
      </StyledContainer>

      <StyledContainer
        title="BUCKETS"
        headerClassName="ml-auto mr-auto"
        className="w-full grow"
        bodyClassName=""
      >
        <StyledSubSubContainer className="flex-col items-center">
          <div className="w-full max-w-[30em] ">
            <div className="flex w-full justify-evenly">
              <h3 className="flex flex-col">
                <div className="h-[3px] w-full bg-white"></div>
                <span className="text-sm">minted</span>
              </h3>

              <h3 className="flex flex-col">
                <div className="h-[3px] w-full bg-blue-500"></div>
                <span className="text-sm text-blue-500">allocated</span>
              </h3>
            </div>

            <Bar
              data={{
                labels: bucketsLabels,
                datasets: [
                  {
                    label: 'Minted',
                    data: bucketNames.map((name) =>
                      nativeToUi(
                        cortex[`${name}BucketMintedAmount`],
                        window.adrena.client.adxToken.decimals,
                      ),
                    ),
                    backgroundColor: '#fffffff0',
                    borderColor: [],
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                onHover: (
                  event: ChartEvent,
                  activeElements: ActiveElement[],
                ) => {
                  (event?.native?.target as HTMLElement).style.cursor =
                    activeElements?.length > 0 ? 'pointer' : 'auto';
                },
                plugins: {
                  datalabels: {
                    align: 'end',
                    anchor: 'end',
                    color: () => '#ffffff',
                    font: (context: Context) => getFontSizeWeight(context),
                    formatter: (_, context: Context) => [
                      `${context.chart.data.labels?.[context.dataIndex]}`,
                    ],
                  },
                  annotation: {
                    annotations: bucketNames.reduce((lines, name, index) => {
                      return {
                        [`line${index + 1}`]: generateLine(
                          index,
                          nativeToUi(
                            cortex[`${name}BucketAllocation`],
                            window.adrena.client.adxToken.decimals,
                          ),
                          '#3b82f6',
                        ),
                        ...lines,
                      };
                    }, {}),
                  },
                  legend: {
                    display: false,
                  },
                  tooltip: {
                    displayColors: false,
                    callbacks: {
                      label: (context: TooltipItem<'bar'>) =>
                        (() => {
                          const name = bucketNames[context.dataIndex];

                          return [
                            `allocation: ${formatNumber(
                              nativeToUi(
                                cortex[`${name}BucketAllocation`],
                                window.adrena.client.adxToken.decimals,
                              ),
                              3,
                            )} ADX`,

                            `minted: ${formatNumber(
                              nativeToUi(
                                cortex[`${name}BucketMintedAmount`],
                                window.adrena.client.adxToken.decimals,
                              ),
                              3,
                            )} ADX`,
                          ];
                        })(),

                      //remove title from tooltip because it is not needed and looks
                      title: () => '',
                    },
                  },
                },
                //needed so the labels don't get hidden if bar is 100%
                layout: {
                  padding: {
                    top: 20,
                  },
                },
                scales: {
                  x: {
                    display: false,
                    offset: true,
                  },
                  y: {
                    ticks: {
                      callback: (value: string | number) =>
                        formatNumberShort(value) + ' ADX',

                      font: {
                        size: isBreakpoint ? 8 : 12,
                      },
                    },
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </StyledSubSubContainer>
      </StyledContainer>

      <StyledContainer title="TOKENOMIC" headerClassName="ml-auto mr-auto">
        <StyledSubSubContainer className="flex-col items-center">
          <div className="flex gap-6 justify-evenly mb-4">
            {bucketsLabels.map((name, i) => (
              <h3 key={name} className="flex flex-col">
                <div
                  className="h-[3px] w-full"
                  style={{
                    backgroundColor: bucketColors[i],
                  }}
                ></div>
                <span className="text-sm">{name}</span>
              </h3>
            ))}
          </div>

          <div className="w-full max-w-[25em] h-[25em]">
            <Pie
              color="#ffffff"
              options={{
                cutout: '50%',
                responsive: true,
                plugins: {
                  legend: {
                    labels: {
                      color: '#ffffff',
                      padding: 14,
                    },
                    position: 'bottom',
                  },
                  datalabels: {
                    display: false,
                  },
                },
              }}
              data={{
                labels: [
                  // Core contributors
                  'Launch Team',
                  'Investors',

                  // DAO Treasury Reserves
                  'DAO Treasury Reserves',

                  // POL
                  'Liquidity Provision',

                  // Ecosystem
                  'Community Grants',
                  'Partnerships/Marketing/Airdrop',
                  'LM - Staked ADX',
                  'LM - ALP',
                  'LM - Genesis',
                  'Development Fund',
                ],
                datasets: [
                  {
                    label: '%',
                    data: [21.33, 14.67, 10, 8, 10, 10, 15, 5, 2, 4],
                    borderWidth: 2,
                    backgroundColor: [
                      // Core contributors
                      bucketColors[0],
                      bucketColors[0],

                      // DAO Treasury Reserves
                      bucketColors[1],

                      // POL
                      bucketColors[2],

                      // Ecosystem
                      bucketColors[3],
                      bucketColors[3],
                      bucketColors[3],
                      bucketColors[3],
                      bucketColors[3],
                      bucketColors[3],
                    ],
                  },
                ],
              }}
            />
          </div>
        </StyledSubSubContainer>
      </StyledContainer>
    </>
  );
}
