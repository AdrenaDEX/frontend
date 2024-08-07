import { NATIVE_MINT } from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';

import { ImageRef } from '@/types';

import btcLogo from '../../public/images/btc.svg';
import ethLogo from '../../public/images/eth.svg';
import solLogo from '../../public/images/sol.svg';
import usdcLogo from '../../public/images/usdc.svg';
import IConfiguration, { RpcOption } from './IConfiguration';

class MainnetConfiguration implements IConfiguration {
  public readonly cluster = 'mainnet';

  public readonly tokensInfo: {
    [tokenPubkey: string]: {
      name: string;
      color: string;
      symbol: string;
      image: ImageRef;
      coingeckoId: string;
      decimals: number;
      pythNetFeedId: PublicKey;
    };
  } = {
    '3jdYcGYZaQVvcvMQGqVpt37JegEoDDnX7k4gSGAeGRqG': {
      name: 'USD Coin',
      color: '#2775ca',
      symbol: 'USDC',
      image: usdcLogo,
      coingeckoId: 'usd-coin',
      decimals: 6,
      pythNetFeedId: new PublicKey(
        'Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD',
      ),
    },
    HRHfoVPeLKKwHAMP1P5zsgG9w4HHSu93Merjxpt8u5a7: {
      name: 'Ethereum',
      color: '#3D3E3F',
      symbol: 'ETH',
      image: ethLogo,
      coingeckoId: 'ethereum',
      decimals: 6,
      pythNetFeedId: new PublicKey(
        'JBu1AL4obBcCMqKBBxhpWCNUt136ijcuMZLFvTP7iWdB',
      ),
    },
    '7MoYkgWVCEDtNR6i2WUH9LTUSFXkQCsD9tBHriHQvuP5': {
      name: 'Bitcoin',
      color: '#f7931a',
      symbol: 'BTC',
      image: btcLogo,
      coingeckoId: 'bitcoin',
      decimals: 6,
      pythNetFeedId: new PublicKey(
        'GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMU',
      ),
    },
    [NATIVE_MINT.toBase58()]: {
      name: 'Solana',
      color: '#9945FF',
      symbol: 'SOL',
      image: solLogo,
      coingeckoId: 'solana',
      decimals: 9,
      pythNetFeedId: new PublicKey(
        'H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG',
      ),
    },
  };

  // devnet address
  public readonly governanceProgram: PublicKey = new PublicKey(
    'GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw',
  );

  // devnet address
  public readonly sablierThreadProgram: PublicKey = new PublicKey(
    'CLoCKyJ6DXBJqqu2VWx9RLbgnwwR6BMHHuyasVmfMzBh',
  );

  public readonly stakesClaimPayer: PublicKey = new PublicKey(
    'C1ockworkPayer11111111111111111111111111111',
  );

  public readonly governanceRealmName = 'AdrenaRealm5';

  public readonly rpcOptions: RpcOption[] = [
    {
      name: 'Triton RPC',
      url: 'https://adrena-solanad-ac2e.devnet.rpcpool.com/eb24df90-f9aa-45f2-9a9c-fe20cd0f35fd',
    },
    {
      name: 'Helius RPC',
      url: 'https://devnet.helius-rpc.com/?api-key=1e567222-acdb-43ee-80dc-926f9c06d89d',
    },
    {
      name: 'Solana RPC',
      url: 'https://api.devnet.solana.com',
    },
  ];

  public readonly pythnetRpc: RpcOption = {
    name: 'Triton Pythnet',
    url: 'https://adrena-pythnet-99a9.mainnet.pythnet.rpcpool.com/ad1705c9-2ec3-4a48-87c0-086a554cbff1',
  };

  public readonly mainPool: PublicKey = new PublicKey(
    'FcE6ZcbvJ7i9FBWA2q8BE64m2wd6coPrsp7xFTam4KH7',
  );
}

const config = new MainnetConfiguration();
export default config;
