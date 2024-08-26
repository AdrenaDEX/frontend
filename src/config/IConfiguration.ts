import { PublicKey } from '@solana/web3.js';

import { ImageRef, SupportedCluster } from '@/types';

export type TokenInfo = {
  name: string;
  color: string;
  symbol: string;
  image: ImageRef;
  coingeckoId: string;
  decimals: number;
  pythNetFeedId: PublicKey;
};

export type RpcOption = {
  name: string;
  url: string;
};

export default interface IConfiguration {
  readonly cluster: SupportedCluster;

  readonly tokensInfo: {
    [tokenPubkey: string]: TokenInfo;
  };

  readonly governanceProgram: PublicKey;
  readonly sablierThreadProgram: PublicKey;
  readonly stakesClaimPayer: PublicKey;

  readonly governanceRealmName: string;

  readonly rpcOptions: RpcOption[];

  readonly pythnetRpc: RpcOption;

  readonly mainPool: PublicKey;
}
