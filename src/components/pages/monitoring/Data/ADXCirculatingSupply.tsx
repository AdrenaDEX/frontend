import StyledContainer from '@/components/common/StyledContainer/StyledContainer';
import { formatNumber } from '@/utils';

export default function ADXCirculatingSupply({
  adxTotalSupply,
  titleClassName,
  bodyClassName,
}: {
  adxTotalSupply: number;
  titleClassName?: string;
  bodyClassName?: string;
}) {
  return (
    <StyledContainer
      title="ADX CIRCULATING SUPPLY"
      className="w-auto grow items-center min-w-[22em]"
      titleClassName={titleClassName}
      bodyClassName="items-center"
    >
      <div className="flex items-center">
        <div className={bodyClassName}>{formatNumber(adxTotalSupply, 2)}</div>
        <div className="ml-1">ADX</div>
      </div>
    </StyledContainer>
  );
}
