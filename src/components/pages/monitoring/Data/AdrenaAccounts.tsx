import { AdrenaClient } from '@/AdrenaClient';
import StyledContainer from '@/components/common/StyledContainer/StyledContainer';
import { Cortex, CustodyExtended, PoolExtended } from '@/types';

import InfoAnnotation from '../InfoAnnotation';
import OnchainAccountInfo from '../OnchainAccountInfo';
import Table from '../Table';
import TitleAnnotation from '../TitleAnnotation';

export default function AdrenaAccounts({
  cortex,
  mainPool,
  custodies,
  titleClassName,
}: {
  cortex: Cortex;
  mainPool: PoolExtended;
  custodies: CustodyExtended[];
  titleClassName?: string;
}) {
  const lmStakingPda = window.adrena.client.getStakingPda(
    window.adrena.client.lmTokenMint,
  );

  const lpStakingPda = window.adrena.client.getStakingPda(
    window.adrena.client.lpTokenMint,
  );

  const lmStakingRewardTokenVaultPda =
    window.adrena.client.getStakingRewardTokenVaultPda(lmStakingPda);

  const lmStakingLmRewardTokenVaultPda =
    window.adrena.client.getStakingLmRewardTokenVaultPda(lmStakingPda);

  const lpStakingRewardTokenVaultPda =
    window.adrena.client.getStakingRewardTokenVaultPda(lpStakingPda);

  const lpStakingLmRewardTokenVaultPda =
    window.adrena.client.getStakingLmRewardTokenVaultPda(lpStakingPda);

  return (
    <StyledContainer
      title="Adrena Accounts"
      subTitle="Adrena Program on-chain accounts (PDAs)."
      className="w-[46em] grow md:min-w-[46em]"
      titleClassName={titleClassName}
    >
      <Table
        rowHovering={true}
        breakpoint="767px"
        rowTitleWidth="50%"
        data={[
          {
            rowTitle: (
              <div className="flex items-center font-boldy">
                Program
                <InfoAnnotation
                  text="Account containing the source code of the Adrena smart contract."
                  className="mr-1"
                />
              </div>
            ),
            value: (
              <OnchainAccountInfo
                className="md:ml-auto"
                address={AdrenaClient.programId}
              />
            ),
          },
          {
            rowTitle: (
              <div className="flex items-center font-boldy">
                Admin
                <InfoAnnotation
                  text="The program's administrator account, authorized to modify settings and upgrade the program."
                  className="mr-1"
                />
              </div>
            ),
            value: (
              <OnchainAccountInfo
                className="md:ml-auto"
                address={cortex.admin}
              />
            ),
          },
          {
            rowTitle: (
              <div className="flex items-center font-boldy">
                Cortex
                <TitleAnnotation text="PDA" />
                <InfoAnnotation
                  text="Top-level account managing Adrena access, owned by the governance."
                  className="mr-1"
                />
              </div>
            ),
            value: (
              <OnchainAccountInfo
                className="md:ml-auto"
                address={AdrenaClient.cortexPda}
              />
            ),
          },
          {
            rowTitle: (
              <div className="flex items-center font-boldy">
                Pool
                <TitleAnnotation text="PDA" />
                <InfoAnnotation
                  text="Top-level account with information on custodies and their associated ratios."
                  className="mr-1"
                />
              </div>
            ),
            value: (
              <OnchainAccountInfo
                className="md:ml-auto"
                address={mainPool.pubkey}
              />
            ),
          },
          ...custodies
            .map((custody) => ({
              rowTitle: (
                <div className="flex items-center">
                  {custody.tokenInfo.symbol} Custody
                  <TitleAnnotation text="PDA" />
                  <InfoAnnotation
                    text={`Manages ${custody.tokenInfo.symbol} assets within Adrena's ecosystem, tracking balances, fees, and transactions.`}
                    className="mr-1"
                  />
                </div>
              ),
              value: (
                <OnchainAccountInfo
                  className="md:ml-auto"
                  address={custody.pubkey}
                />
              ),
            }))
            .flat(),
          {
            rowTitle: (
              <div className="flex items-center font-boldy">
                Transfer Authority
                <TitleAnnotation text="PDA" />
                <InfoAnnotation
                  text="Serves as the designated authority for managing custodies' token accounts, facilitating secure asset transfers."
                  className="mr-1"
                />
              </div>
            ),
            value: (
              <OnchainAccountInfo
                className="md:ml-auto"
                address={AdrenaClient.transferAuthorityAddress}
              />
            ),
          },
          {
            rowTitle: (
              <div className="flex items-center font-boldy">
                ADX Staking <TitleAnnotation text="PDA" />
                <InfoAnnotation
                  text="Top-level account holding details on ADX token staking, tracking participation and rewards."
                  className="mr-1"
                />
              </div>
            ),
            value: (
              <OnchainAccountInfo
                className="md:ml-auto"
                address={lmStakingPda}
              />
            ),
          },
          {
            rowTitle: (
              <div className="flex items-center font-boldy">
                ADX Staking USDC Rewards Vault
                <TitleAnnotation text="PDA" />
              </div>
            ),
            value: (
              <OnchainAccountInfo
                className="md:ml-auto"
                address={lmStakingRewardTokenVaultPda}
              />
            ),
          },
          {
            rowTitle: (
              <div className="flex items-center font-boldy">
                ADX Staking ADX Rewards Vault
                <TitleAnnotation text="PDA" />
              </div>
            ),
            value: (
              <OnchainAccountInfo
                className="md:ml-auto"
                address={lmStakingLmRewardTokenVaultPda}
              />
            ),
          },
          {
            rowTitle: (
              <div className="flex items-center font-boldy">
                ALP Staking <TitleAnnotation text="PDA" />
                <InfoAnnotation
                  text="Top-level account holding details on ALP token staking, tracking participation and rewards."
                  className="mr-1"
                />
              </div>
            ),
            value: (
              <OnchainAccountInfo
                className="md:ml-auto"
                address={lpStakingPda}
              />
            ),
          },
          {
            rowTitle: (
              <div className="flex items-center font-boldy">
                ALP Staking USDC Rewards Vault
                <TitleAnnotation text="PDA" />
              </div>
            ),
            value: (
              <OnchainAccountInfo
                className="md:ml-auto"
                address={lpStakingRewardTokenVaultPda}
              />
            ),
          },
          {
            rowTitle: (
              <div className="flex items-center font-boldy">
                ALP Staking ADX Rewards Vault
                <TitleAnnotation text="PDA" />
              </div>
            ),
            value: (
              <OnchainAccountInfo
                className="md:ml-auto"
                address={lpStakingLmRewardTokenVaultPda}
              />
            ),
          },
          {
            rowTitle: (
              <div className="flex items-center font-boldy">
                Genesis Lock <TitleAnnotation text="PDA" />
              </div>
            ),
            value: (
              <OnchainAccountInfo
                className="md:ml-auto"
                address={window.adrena.client.getGenesisLockPda()}
              />
            ),
          },
        ]}
      />
    </StyledContainer>
  );
}
