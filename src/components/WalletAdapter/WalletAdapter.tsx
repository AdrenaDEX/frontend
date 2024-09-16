import { PublicKey } from '@solana/web3.js';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import {
  autoConnectWalletAction,
  disconnectWalletAction,
  openCloseConnectionModalAction,
} from '@/actions/walletActions';
import { walletAdapters } from '@/constant';
import { useDispatch, useSelector } from '@/store/store';
import { UserProfileExtended } from '@/types';
import {
  getAbbrevNickname,
  getAbbrevWalletAddress,
  getAccountExplorer,
} from '@/utils';

import walletIcon from '../../../public/images/wallet-icon.svg';
import Button from '../common/Button/Button';
import Menu from '../common/Menu/Menu';
import MenuItem from '../common/Menu/MenuItem';
import MenuItems from '../common/Menu/MenuItems';
import WalletSelectionModal from './WalletSelectionModal';

export default function WalletAdapter({
  className,
  userProfile,
}: {
  className?: string;
  userProfile: UserProfileExtended | null | false;
}) {
  const dispatch = useDispatch();
  const { wallet } = useSelector((s) => s.walletState);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const connected = !!wallet;

  // Load local storage state to auto-connect if needed
  const autoConnectAuthorized: boolean =
    (JSON.parse(localStorage.getItem('autoConnectAuthorized') ?? 'false') ??
      true) &&
    window.adrena.geoBlockingData.allowed;

  // When component gets created, try to auto-connect to wallet
  useEffect(() => {
    if (autoConnectAuthorized) {
      dispatch(autoConnectWalletAction('phantom'));
      return;
    }

    // Only once when page load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Detect change of account
  useEffect(() => {
    if (!wallet) return;

    const adapter = walletAdapters[wallet.adapterName];

    adapter.on('connect', (walletPubkey: PublicKey) => {
      dispatch({
        type: 'connect',
        payload: {
          adapterName: wallet.adapterName,
          walletAddress: walletPubkey.toBase58(),
        },
      });
    });

    return () => {
      adapter.removeAllListeners('connect');
    };
  }, [dispatch, wallet]);

  return (
    <div className="relative">
      {connected ? (
        <Menu
          trigger={
            <Button
              className={twMerge(className, 'gap-2 h-0 px-0 py-0')}
              rightIcon={walletIcon}
              alt="wallet icon"
              variant="secondary"
              height={17}
              width={17}
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
            />
          }
          openMenuClassName="w-[120px] right-0"
        >
          <MenuItems>
            <MenuItem
              href={getAccountExplorer(new PublicKey(wallet.walletAddress))}
              target="_blank"
            >
              <div className="underline text-blue">
                {userProfile
                  ? getAbbrevNickname(userProfile.nickname)
                  : getAbbrevWalletAddress(wallet.walletAddress)}
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);

                if (!connected) return;

                dispatch(disconnectWalletAction(wallet.adapterName));
                dispatch(openCloseConnectionModalAction(false));
              }}
            >
              Disconnect
            </MenuItem>
          </MenuItems>
        </Menu>
      ) : (
        <Button
          className={className}
          title={
            !window.adrena.geoBlockingData.allowed
              ? 'Geo-Restricted Access'
              : 'Connect wallet'
          }
          rightIcon={walletIcon}
          alt="wallet icon"
          variant="outline"
          onClick={() => {
            if (!connected) {
              dispatch(openCloseConnectionModalAction(true));
            }
          }}
        />
      )}

      <WalletSelectionModal />
    </div>
  );
}
