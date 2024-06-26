import { twMerge } from 'tailwind-merge';

import StyledContainer from '@/components/common/StyledContainer/StyledContainer';
import StyledSubSubContainer from '@/components/common/StyledSubSubContainer/StyledSubSubContainer';
import FormatNumber from '@/components/Number/FormatNumber';
import { UserProfileExtended } from '@/types';

export default function TradingStatsBloc({
  userProfile,
  className,
}: {
  userProfile: UserProfileExtended;
  className?: string;
}) {
  return (
    <StyledContainer
      title="Trading Stats"
      titleClassName="text-2xl"
      className={twMerge(className)}
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

          {userProfile.longStats.profitsUsd +
            userProfile.shortStats.profitsUsd ===
          0 ? (
            <span className="font-mono">$0</span>
          ) : (
            <FormatNumber
              nb={
                userProfile.longStats.profitsUsd +
                userProfile.shortStats.profitsUsd
              }
              format="currency"
              precision={3}
              className="text-green"
            />
          )}
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="text-sm">Losses</div>

          {userProfile.longStats.lossesUsd +
            userProfile.shortStats.lossesUsd ===
          0 ? (
            <span className="font-mono">$0</span>
          ) : (
            <FormatNumber
              nb={
                userProfile.longStats.lossesUsd +
                userProfile.shortStats.lossesUsd
              }
              format="currency"
              precision={3}
              className="text-red"
              prefix="-"
            />
          )}
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
  );
}
