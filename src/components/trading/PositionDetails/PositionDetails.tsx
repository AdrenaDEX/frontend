import useAdrenaClient from "@/hooks/useAdrenaClient";
import { useSelector } from "@/store/store";
import { Token } from "@/types";
import { formatNumber, formatPriceInfo, getCustodyLiquidity } from "@/utils";
import { BN } from "@project-serum/anchor";
import styles from "./PositionDetails.module.scss";

export default function PositionDetails({
  tokenB,
  entryPrice,
  exitPrice,
}: {
  tokenB: Token;
  entryPrice: number | null;
  exitPrice: number | null;
}) {
  const tokenPrices = useSelector((s) => s.tokenPrices);
  const client = useAdrenaClient();

  return (
    <div className={styles.positionDetails}>
      <div className={styles.positionDetails__row}>
        <span>Entry Price</span>
        <span>{entryPrice !== null ? formatPriceInfo(entryPrice) : "-"}</span>
      </div>

      <div className={styles.positionDetails__row}>
        <span>Exit Price</span>
        <span>{exitPrice !== null ? formatPriceInfo(exitPrice) : "-"}</span>
      </div>

      <div className={styles.positionDetails__row}>
        <span>Borrow Fee</span>
        <span>
          {client && tokenB
            ? `${formatNumber(
                client
                  .getCustodyByMint(tokenB.mint)
                  .borrowRateState.currentRate.mul(new BN(100))
                  .toNumber(),
                4
              )}% / hr`
            : "-"}
        </span>
      </div>

      <div className={styles.positionDetails__row}>
        <span>Available Liquidity</span>
        <span>
          {client && tokenB && tokenPrices && tokenPrices[tokenB.name]
            ? formatPriceInfo(
                getCustodyLiquidity(
                  client.getCustodyByMint(tokenB.mint),
                  tokenPrices[tokenB.name]!
                )
              )
            : "-"}
        </span>
      </div>
    </div>
  );
}