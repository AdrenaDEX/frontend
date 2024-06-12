import { Connection } from '@solana/web3.js';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';

import { UserProfileExtended } from '@/types';

import chevronDownIcon from '../../../public/images/chevron-down.svg';
import logo from '../../../public/images/logo.png';
import Button from '../common/Button/Button';
import Menu from '../common/Menu/Menu';
import MenuItem from '../common/Menu/MenuItem';
import MenuItems from '../common/Menu/MenuItems';
import MenuSeparator from '../common/Menu/MenuSeparator';
import Settings from '../Settings/Settings';
import WalletAdapter from '../WalletAdapter/WalletAdapter';

export default function Header({
  userProfile,
  PAGES,
  activeRpc,
  rpcInfos,
  autoRpcMode,
  customRpcUrl,
  customRpcLatency,
  favoriteRpc,
  setAutoRpcMode,
  setCustomRpcUrl,
  setFavoriteRpc,
}: {
  userProfile: UserProfileExtended | null | false;
  PAGES: { name: string; link: string }[];
  activeRpc: {
    name: string;
    connection: Connection;
  };
  rpcInfos: {
    name: string;
    latency: number | null;
  }[];
  customRpcLatency: number | null;
  autoRpcMode: boolean;
  customRpcUrl: string | null;
  favoriteRpc: string | null;
  setAutoRpcMode: (autoRpcMode: boolean) => void;
  setCustomRpcUrl: (customRpcUrl: string | null) => void;
  setFavoriteRpc: (favoriteRpc: string) => void;
}) {
  const { pathname } = useRouter();
  const router = useRouter();

  const clusterSwitchEnabled = false;

  return (
    <div className="w-full flex flex-row items-center justify-between p-3 px-7 border-b border-b-bcolor bg-secondary z-50">
      <div className="flex flex-row items-center gap-6">
        <Link className="font-bold uppercase relative" href="/">
          {
            <Image
              src={logo}
              className={twMerge(
                'shrink-0 relative',
                window.adrena.cluster === 'devnet' ? 'bottom-1' : '',
              )}
              alt="logo"
              width={100}
              height={25}
            />
          }

          {window.adrena.cluster === 'devnet' ? (
            <span className="absolute font-special text-blue-500 bottom-[-1.4em] right-0 text-xs">
              Devnet
            </span>
          ) : null}
        </Link>

        {/* {window.adrena.cluster === 'devnet'
          ? PageLink('/faucet_devnet', 'Faucet')
          : null} */}

        {PAGES.map((page) => {
          return (
            <Link
              href={page.link}
              className={twMerge(
                'text-sm opacity-75 hover:opacity-100 transition-opacity duration-300',
                pathname === page.link ? 'opacity-100' : '',
              )}
              key={page.name}
            >
              <h5>{page.name}</h5>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <Link href="/trade">
          <Button title="Trade now" disabled={pathname === '/trade'} />
        </Link>

        <WalletAdapter userProfile={userProfile} />

        <Settings
          activeRpc={activeRpc}
          rpcInfos={rpcInfos}
          autoRpcMode={autoRpcMode}
          customRpcUrl={customRpcUrl}
          customRpcLatency={customRpcLatency}
          favoriteRpc={favoriteRpc}
          setAutoRpcMode={setAutoRpcMode}
          setCustomRpcUrl={setCustomRpcUrl}
          setFavoriteRpc={setFavoriteRpc}
        />

        {clusterSwitchEnabled ? (
          <Menu
            trigger={
              <Button
                title={window.adrena.cluster}
                variant="outline"
                rightIcon={chevronDownIcon}
              />
            }
          >
            <MenuItems>
              <MenuItem
                selected={window.adrena.cluster === 'devnet'}
                onClick={() => {
                  router.replace({
                    query: {
                      ...router.query,
                      cluster: 'devnet',
                    },
                  });
                }}
              >
                Devnet
              </MenuItem>

              <MenuSeparator />

              <MenuItem
                selected={window.adrena.cluster === 'mainnet'}
                onClick={() => {
                  router.replace({
                    query: {
                      ...router.query,
                      cluster: 'mainnet',
                    },
                  });
                }}
              >
                Mainnet
              </MenuItem>
            </MenuItems>
          </Menu>
        ) : null}
      </div>
    </div>
  );
}
