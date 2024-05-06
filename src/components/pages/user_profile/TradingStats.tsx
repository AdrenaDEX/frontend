import StyledContainer from '@/components/common/StyledContainer/StyledContainer';
import StyledSubSubContainer from '@/components/common/StyledSubSubContainer/StyledSubSubContainer';
import FormatNumber from '@/components/Number/FormatNumber';
import { UserProfileExtended } from '@/types';

export default function TradingStatsBloc({
  userProfile,
}: {
  userProfile: UserProfileExtended;
}) {
  return userProfile ? (
    <div className="flex flex-wrap gap-4">
      <StyledContainer
        title={<h2>Trading Stats</h2>}
        className="md:max-w-[23.5em]"
      >
        <StyledSubSubContainer className="flex-col">
          <div className="flex w-full items-center justify-between">
            <div className="text-sm">Opened Position Count</div>

            <FormatNumber
              nb={
                userProfile.longStats.openedPositionCount +
                userProfile.shortStats.openedPositionCount
              }
              precision={1}
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="text-sm">Liquidated Position Count</div>

            <FormatNumber
              nb={
                userProfile.longStats.liquidatedPositionCount +
                userProfile.shortStats.liquidatedPositionCount
              }
              precision={1}
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="text-sm">Opening Average Leverage</div>

            {/* <span>
                  x
                  {formatNumber(
                    (userProfile.longStats.openingAverageLeverage *
                      userProfile.longStats.openedPositionCount +
                      userProfile.shortStats.openingAverageLeverage *
                        userProfile.shortStats.openedPositionCount) /
                      (userProfile.longStats.openedPositionCount +
                        userProfile.shortStats.openedPositionCount),
                    3,
                  )}
                </span> */}

            <FormatNumber
              nb={
                (userProfile.longStats.openingAverageLeverage *
                  userProfile.longStats.openedPositionCount +
                  userProfile.shortStats.openingAverageLeverage *
                    userProfile.shortStats.openedPositionCount) /
                (userProfile.longStats.openedPositionCount +
                  userProfile.shortStats.openedPositionCount)
              }
              precision={3}
              prefix="x"
              isDecimalDimmed={false}
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="text-sm">Opening Size</div>

            <FormatNumber
              nb={
                userProfile.longStats.openingSizeUsd +
                userProfile.shortStats.openingSizeUsd
              }
              format="currency"
              precision={3}
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="text-sm">Profits</div>

            <FormatNumber
              nb={
                userProfile.longStats.profitsUsd +
                userProfile.shortStats.profitsUsd
              }
              format="currency"
              precision={3}
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="text-sm">Losses</div>

            <FormatNumber
              nb={
                userProfile.longStats.lossesUsd +
                userProfile.shortStats.lossesUsd
              }
              format="currency"
              precision={3}
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="text-sm">Fees Paid</div>

            <FormatNumber
              nb={
                userProfile.longStats.feePaidUsd +
                userProfile.shortStats.feePaidUsd
              }
              format="currency"
              precision={3}
            />
          </div>
        </StyledSubSubContainer>
      </StyledContainer>

      <StyledContainer
        title={<h2>Swap Stats</h2>}
        className="md:max-w-[23.5em]"
      >
        <StyledSubSubContainer className="flex-col">
          <div className="flex w-full items-start justify-between">
            <div className="text-sm">Swap Count</div>

            <FormatNumber nb={userProfile.swapCount} precision={1} />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="text-sm">Swap Volume</div>

            <FormatNumber
              nb={userProfile.swapVolumeUsd}
              format="currency"
              precision={3}
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="text-sm">Fees Paid</div>

            <FormatNumber
              nb={userProfile.swapFeePaidUsd}
              format="currency"
              precision={3}
            />
          </div>
        </StyledSubSubContainer>
      </StyledContainer>
    </div>
  ) : (
    '<></>'
  );
}
