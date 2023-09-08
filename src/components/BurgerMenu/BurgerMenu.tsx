import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Button from '../common/Button/Button';
import Menu from '../common/Menu/Menu';
import MenuItem from '../common/Menu/MenuItem';
import MenuItems from '../common/Menu/MenuItems';
import MenuSeperator from '../common/Menu/MenuSeperator';
import Footer from '../Footer/Footer';
import WalletAdapter from '../WalletAdapter/WalletAdapter';

export default function BurgerMenu() {
  const [isThreeDotMenuOpen, setIsThreeDotMenuOpen] = useState<boolean>(false);
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const PAGES: { name: string; link: string }[] = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Earn', link: '/earn' },
    { name: 'Buy', link: '/swap_alp' },
    { name: 'Onchain Info', link: '/onchain_info' },
    { name: 'Faucet', link: '/faucet_devnet' },
    { name: 'Docs', link: 'https://www.gitbook.com/' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <div>
      <div className="absolute px-4 mt-5 z-30 flex flex-row justify-between items-center w-full">
        <div
          className="flex items-center justify-center p-1 border w-9 h-8 border-gray-200 rounded-md hover:bg-gray-200 transition duration-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            className="cursor-pointer opacity-75"
            src={`/images/icons/${isOpen ? 'cross' : 'burger-menu'}.svg`}
            alt="burger menu icon"
            width={16}
            height={16}
          />
        </div>

        <div className="flex flex-row items-center gap-3">
          <Button
            title="Trade now"
            className="w-full"
            href={'/trade'}
            onClick={() => setIsOpen(false)}
          />

          <WalletAdapter className="w-full" />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute flex flex-col justify-between w-full h-full bg-dark z-20 border-b border-gray-200 p-5 pt-[75px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div>
              <ul className="flex flex-col gap-3 mt-4">
                {PAGES.map((page) => (
                  <li
                    className={twMerge(
                      'font-normal text-xl opacity-50 hover:opacity-100 transition-opacity duration-300 w-full',
                      pathname === page.link ? 'opacity-100' : '',
                    )}
                    key={page.name}
                  >
                    <Link
                      href={page.link}
                      className="block w-full"
                      onClick={() => setIsOpen(!open)}
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="relative mt-7">
                <Button
                  className="w-full"
                  title={window.adrena.cluster}
                  variant="outline"
                  rightIcon="/images/icons/chevron-down.svg"
                  onClick={() => setIsThreeDotMenuOpen(!isThreeDotMenuOpen)}
                />

                <Menu
                  open={isThreeDotMenuOpen}
                  onClose={() => {
                    setIsThreeDotMenuOpen(false);
                  }}
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
                        setIsOpen(false);
                      }}
                    >
                      Devnet
                    </MenuItem>
                    <MenuSeperator />
                    <MenuItem
                      selected={window.adrena.cluster === 'mainnet'}
                      onClick={() => {
                        router.replace({
                          query: {
                            ...router.query,
                            cluster: 'mainnet',
                          },
                        });
                        setIsOpen(false);
                      }}
                    >
                      Mainnet
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>

            <div>
              <Image
                src="/images/logo.svg"
                className="m-auto"
                alt="logo"
                width={150}
                height={150}
              />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}