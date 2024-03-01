export type Adrena = {
  version: '0.1.0';
  name: 'adrena';
  instructions: [
    {
      name: 'init';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'transferAuthority';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'lmStaking';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'governanceTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'lmStakingStakedTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'lmStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'lmStakingLmRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'lmStakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'adrenaProgramData';
          isMut: false;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'governanceRealm';
          isMut: false;
          isSigner: false;
          docs: [
            '#15',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ];
        },
        {
          name: 'governanceProgram';
          isMut: false;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#17'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#18'];
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
          docs: ['#19'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'InitParams';
          };
        },
      ];
    },
    {
      name: 'addVest';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'owner';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#3'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'vest';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'governanceTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'governanceRealm';
          isMut: false;
          isSigner: false;
          docs: [
            '#10',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ];
        },
        {
          name: 'governanceRealmConfig';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'governanceGoverningTokenHolding';
          isMut: true;
          isSigner: false;
          docs: [
            '#12',
            "Token account owned by governance program holding user's locked tokens",
          ];
        },
        {
          name: 'governanceGoverningTokenOwnerRecord';
          isMut: true;
          isSigner: false;
          docs: [
            '#13',
            'Account owned by governance storing user informations',
          ];
        },
        {
          name: 'governanceProgram';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
          docs: ['#17'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'AddVestParams';
          };
        },
      ];
      returns: 'u8';
    },
    {
      name: 'claimVest';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'receivingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'vest';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'governanceTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'governanceRealm';
          isMut: false;
          isSigner: false;
          docs: [
            '#9',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ];
        },
        {
          name: 'governanceRealmConfig';
          isMut: false;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'governanceGoverningTokenHolding';
          isMut: true;
          isSigner: false;
          docs: [
            '#11',
            "Token account owned by governance program holding user's locked tokens",
          ];
        },
        {
          name: 'governanceGoverningTokenOwnerRecord';
          isMut: true;
          isSigner: false;
          docs: [
            '#12',
            'Account owned by governance storing user informations',
          ];
        },
        {
          name: 'governanceProgram';
          isMut: false;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
          docs: ['#17'];
        },
      ];
      args: [];
      returns: 'u64';
    },
    {
      name: 'addPool';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'lpTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
          docs: ['#9'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'AddPoolParams';
          };
        },
      ];
      returns: 'u8';
    },
    {
      name: 'removePool';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'transferAuthority';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'RemovePoolParams';
          };
        },
      ];
      returns: 'u8';
    },
    {
      name: 'addCustody';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'custodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'custodyTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'AddCustodyParams';
          };
        },
      ];
      returns: 'u8';
    },
    {
      name: 'removeCustody';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'transferAuthority';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'custodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#9'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'RemoveCustodyParams';
          };
        },
      ];
      returns: 'u8';
    },
    {
      name: 'setCustodyConfig';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'SetCustodyConfigParams';
          };
        },
      ];
      returns: 'u8';
    },
    {
      name: 'setPermissions';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'SetPermissionsParams';
          };
        },
      ];
      returns: 'u8';
    },
    {
      name: 'withdrawFees';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'custodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'receivingTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#8'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'WithdrawFeesParams';
          };
        },
      ];
      returns: 'u8';
    },
    {
      name: 'withdrawSolFees';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'receivingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'WithdrawSolFeesParams';
          };
        },
      ];
      returns: 'u8';
    },
    {
      name: 'setCustomOraclePrice';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'custody';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'oracleAccount';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'SetCustomOraclePriceParams';
          };
        },
      ];
      returns: 'u8';
    },
    {
      name: 'testAdminRemoveCollateral';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'owner';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'receivingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'position';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'collateralCustody';
          isMut: true;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'collateralCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#15'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'TestAdminRemoveCollateralParams';
          };
        },
      ];
    },
    {
      name: 'swap';
      accounts: [
        {
          name: 'owner';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'fundingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'receivingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'lmStaking';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'lpStaking';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'stakingRewardTokenCustody';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'receivingCustody';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'receivingCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'receivingCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'dispensingCustody';
          isMut: true;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'dispensingCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#17'];
        },
        {
          name: 'dispensingCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#18'];
        },
        {
          name: 'lmStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#19'];
        },
        {
          name: 'lpStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#20'];
        },
        {
          name: 'lpTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#21'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#22'];
        },
        {
          name: 'userProfile';
          isMut: true;
          isSigner: false;
          isOptional: true;
          docs: ['#23'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#24'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#25'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'SwapParams';
          };
        },
      ];
    },
    {
      name: 'addLiquidity';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'fundingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'lpTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'lmStaking';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'lpStaking';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'stakingRewardTokenCustody';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'custodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'lmStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'lpStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#17'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#18'];
        },
        {
          name: 'lpTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#19'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#20'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#21'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#22'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'AddLiquidityParams';
          };
        },
      ];
    },
    {
      name: 'addGenesisLiquidity';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'fundingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'lpTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'lpUserStaking';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'lpStaking';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'lpStakingStakedTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'custodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'lpTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'governanceTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'governanceRealm';
          isMut: false;
          isSigner: false;
          docs: [
            '#17',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ];
        },
        {
          name: 'governanceRealmConfig';
          isMut: false;
          isSigner: false;
          docs: ['#18'];
        },
        {
          name: 'governanceGoverningTokenHolding';
          isMut: true;
          isSigner: false;
          docs: [
            '#19',
            "Token account owned by governance program holding user's locked tokens",
          ];
        },
        {
          name: 'governanceGoverningTokenOwnerRecord';
          isMut: true;
          isSigner: false;
          docs: [
            '#20',
            'Account owned by governance storing user informations',
          ];
        },
        {
          name: 'lpStakeResolutionThread';
          isMut: true;
          isSigner: false;
          docs: ['#21'];
        },
        {
          name: 'stakesClaimCronThread';
          isMut: true;
          isSigner: false;
          docs: ['#22'];
        },
        {
          name: 'lpUserStakingThreadAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#23'];
        },
        {
          name: 'clockworkProgram';
          isMut: false;
          isSigner: false;
          docs: ['#24'];
        },
        {
          name: 'governanceProgram';
          isMut: false;
          isSigner: false;
          docs: ['#25'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#26'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#27'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#28'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'AddGenesisLiquidityParams';
          };
        },
      ];
    },
    {
      name: 'removeLiquidity';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'receivingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'lpTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'lmStaking';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'lpStaking';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'stakingRewardTokenCustody';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'custodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'lmStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'lpStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#17'];
        },
        {
          name: 'lpTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#18'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#19'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#20'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#21'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'RemoveLiquidityParams';
          };
        },
      ];
    },
    {
      name: 'openPosition';
      accounts: [
        {
          name: 'owner';
          isMut: false;
          isSigner: true;
          docs: ['#1', 'Check: any user account'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'fundingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'lmStaking';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'lpStaking';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'position';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'stakingRewardTokenCustody';
          isMut: true;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'collateralCustody';
          isMut: true;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#17'];
        },
        {
          name: 'collateralCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#18'];
        },
        {
          name: 'lmStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#19'];
        },
        {
          name: 'lpStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#20'];
        },
        {
          name: 'lpTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#21'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#22'];
        },
        {
          name: 'userProfile';
          isMut: true;
          isSigner: false;
          isOptional: true;
          docs: ['#23'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#24'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#25'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#26'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'OpenPositionParams';
          };
        },
      ];
    },
    {
      name: 'openPositionWithSwap';
      accounts: [
        {
          name: 'owner';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'fundingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'collateralAccount';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'receivingCustody';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'receivingCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'receivingCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'collateralCustody';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'collateralCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'principalCustody';
          isMut: true;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'principalCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'principalCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'lmStaking';
          isMut: true;
          isSigner: false;
          docs: ['#17'];
        },
        {
          name: 'lpStaking';
          isMut: true;
          isSigner: false;
          docs: ['#18'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#19'];
        },
        {
          name: 'position';
          isMut: true;
          isSigner: false;
          docs: ['#20'];
        },
        {
          name: 'stakingRewardTokenCustody';
          isMut: true;
          isSigner: false;
          docs: ['#21'];
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#22'];
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#23'];
        },
        {
          name: 'lmStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#24'];
        },
        {
          name: 'lpStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#25'];
        },
        {
          name: 'lpTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#26'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#27'];
        },
        {
          name: 'userProfile';
          isMut: true;
          isSigner: false;
          isOptional: true;
          docs: ['#28'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#29'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#30'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#31'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'OpenPositionWithSwapParams';
          };
        },
      ];
    },
    {
      name: 'addCollateral';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'fundingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'position';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'collateralCustody';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'collateralCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'AddCollateralParams';
          };
        },
      ];
    },
    {
      name: 'removeCollateral';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'receivingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'position';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'collateralCustody';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'collateralCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'RemoveCollateralParams';
          };
        },
      ];
    },
    {
      name: 'closePosition';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'receivingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'lmStaking';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'lpStaking';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'position';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'stakingRewardTokenCustody';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'collateralCustody';
          isMut: true;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'collateralCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#17'];
        },
        {
          name: 'lmStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#18'];
        },
        {
          name: 'lpStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#19'];
        },
        {
          name: 'lpTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#20'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#21'];
        },
        {
          name: 'userProfile';
          isMut: true;
          isSigner: false;
          isOptional: true;
          docs: ['#22'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#23'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#24'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'ClosePositionParams';
          };
        },
      ];
    },
    {
      name: 'liquidate';
      accounts: [
        {
          name: 'signer';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'receivingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'rewardsReceivingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'lmStaking';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'lpStaking';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'position';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'stakingRewardTokenCustody';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'collateralCustody';
          isMut: true;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'collateralCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#17'];
        },
        {
          name: 'lmStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#18'];
        },
        {
          name: 'lpStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#19'];
        },
        {
          name: 'lpTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#20'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#21'];
        },
        {
          name: 'userProfile';
          isMut: true;
          isSigner: false;
          isOptional: true;
          docs: ['#22'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#23'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#24'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'LiquidateParams';
          };
        },
      ];
    },
    {
      name: 'updatePoolAum';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
      ];
      args: [];
      returns: 'u128';
    },
    {
      name: 'getAddLiquidityAmountAndFee';
      accounts: [
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'custody';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'lpTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'GetAddLiquidityAmountAndFeeParams';
          };
        },
      ];
      returns: {
        defined: 'AmountAndFee';
      };
    },
    {
      name: 'getRemoveLiquidityAmountAndFee';
      accounts: [
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'custody';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'lpTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'GetRemoveLiquidityAmountAndFeeParams';
          };
        },
      ];
      returns: {
        defined: 'AmountAndFee';
      };
    },
    {
      name: 'getEntryPriceAndFee';
      accounts: [
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'custody';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'collateralCustody';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'GetEntryPriceAndFeeParams';
          };
        },
      ];
      returns: {
        defined: 'NewPositionPricesAndFee';
      };
    },
    {
      name: 'getOpenPositionWithSwapAmountAndFees';
      accounts: [
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'receivingCustody';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'receivingCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'collateralCustody';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'principalCustody';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'principalCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#9'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'GetOpenPositionWithSwapAmountAndFeesParams';
          };
        },
      ];
      returns: {
        defined: 'OpenPositionWithSwapAmountAndFees';
      };
    },
    {
      name: 'getExitPriceAndFee';
      accounts: [
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'position';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'custody';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'collateralCustody';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'GetExitPriceAndFeeParams';
          };
        },
      ];
      returns: {
        defined: 'ExitPriceAndFee';
      };
    },
    {
      name: 'getPnl';
      accounts: [
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'position';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'custody';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'collateralCustody';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'GetPnlParams';
          };
        },
      ];
      returns: {
        defined: 'ProfitAndLoss';
      };
    },
    {
      name: 'getLiquidationPrice';
      accounts: [
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'position';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'custody';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'collateralCustody';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'GetLiquidationPriceParams';
          };
        },
      ];
      returns: 'u64';
    },
    {
      name: 'getLiquidationState';
      accounts: [
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'position';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'custody';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'collateralCustody';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
      ];
      args: [];
      returns: 'u8';
    },
    {
      name: 'getOraclePrice';
      accounts: [
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'custody';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
      ];
      args: [];
      returns: 'u64';
    },
    {
      name: 'getSwapAmountAndFees';
      accounts: [
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'receivingCustody';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'receivingCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'dispensingCustody';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'dispensingCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'GetSwapAmountAndFeesParams';
          };
        },
      ];
      returns: {
        defined: 'SwapAmountAndFees';
      };
    },
    {
      name: 'getAssetsUnderManagement';
      accounts: [
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'GetAssetsUnderManagementParams';
          };
        },
      ];
      returns: 'u128';
    },
    {
      name: 'initUserStaking';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'rewardTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'lmTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'stakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'stakingLmRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'userStaking';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'userStakingThreadAuthority';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'stakesClaimCronThread';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'stakesClaimPayer';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'staking';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'lmTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'clockworkProgram';
          isMut: false;
          isSigner: false;
          docs: ['#17'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#18'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#19'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'InitUserStakingParams';
          };
        },
      ];
    },
    {
      name: 'initUserProfile';
      accounts: [
        {
          name: 'user';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'userProfile';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'sponsor';
          isMut: false;
          isSigner: false;
          isOptional: true;
          docs: ['#5'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#8'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'InitUserProfileParams';
          };
        },
      ];
    },
    {
      name: 'editUserProfile';
      accounts: [
        {
          name: 'user';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'userProfile';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'EditUserProfileParams';
          };
        },
      ];
    },
    {
      name: 'deleteUserProfile';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'user';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#3'];
        },
        {
          name: 'userProfile';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#8'];
        },
      ];
      args: [];
    },
    {
      name: 'initStaking';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'staking';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'stakingStakedTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'stakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'stakingLmRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'stakingStakedTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
          docs: ['#15'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'InitStakingParams';
          };
        },
      ];
      returns: 'u8';
    },
    {
      name: 'addLiquidStake';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'fundingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'rewardTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'lmTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'stakingStakedTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'stakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'stakingLmRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'userStaking';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'staking';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'governanceTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'governanceRealm';
          isMut: false;
          isSigner: false;
          docs: [
            '#16',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ];
        },
        {
          name: 'governanceRealmConfig';
          isMut: false;
          isSigner: false;
          docs: ['#17'];
        },
        {
          name: 'governanceGoverningTokenHolding';
          isMut: true;
          isSigner: false;
          docs: [
            '#18',
            "Token account owned by governance program holding user's locked tokens",
          ];
        },
        {
          name: 'governanceGoverningTokenOwnerRecord';
          isMut: true;
          isSigner: false;
          docs: [
            '#19',
            'Account owned by governance storing user informations',
          ];
        },
        {
          name: 'stakesClaimCronThread';
          isMut: true;
          isSigner: false;
          docs: ['#20'];
        },
        {
          name: 'userStakingThreadAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#21'];
        },
        {
          name: 'clockworkProgram';
          isMut: false;
          isSigner: false;
          docs: ['#22'];
        },
        {
          name: 'governanceProgram';
          isMut: false;
          isSigner: false;
          docs: ['#23'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#24'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#25'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#26'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'AddLiquidStakeParams';
          };
        },
      ];
    },
    {
      name: 'addLockedStake';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'fundingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'rewardTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'stakingStakedTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'stakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'userStaking';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'staking';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'governanceTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'governanceRealm';
          isMut: false;
          isSigner: false;
          docs: [
            '#14',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ];
        },
        {
          name: 'governanceRealmConfig';
          isMut: false;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'governanceGoverningTokenHolding';
          isMut: true;
          isSigner: false;
          docs: [
            '#16',
            "Token account owned by governance program holding user's locked tokens",
          ];
        },
        {
          name: 'governanceGoverningTokenOwnerRecord';
          isMut: true;
          isSigner: false;
          docs: [
            '#17',
            'Account owned by governance storing user informations',
          ];
        },
        {
          name: 'stakeResolutionThread';
          isMut: true;
          isSigner: false;
          docs: ['#18'];
        },
        {
          name: 'stakesClaimCronThread';
          isMut: true;
          isSigner: false;
          docs: ['#19'];
        },
        {
          name: 'userStakingThreadAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#20'];
        },
        {
          name: 'clockworkProgram';
          isMut: false;
          isSigner: false;
          docs: ['#21'];
        },
        {
          name: 'governanceProgram';
          isMut: false;
          isSigner: false;
          docs: ['#22'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#23'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#24'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#25'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'AddLockedStakeParams';
          };
        },
      ];
    },
    {
      name: 'removeLiquidStake';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'stakedTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'lmTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'rewardTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'stakingStakedTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'stakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'stakingLmRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'userStaking';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'staking';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'governanceTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'governanceRealm';
          isMut: false;
          isSigner: false;
          docs: [
            '#16',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ];
        },
        {
          name: 'governanceRealmConfig';
          isMut: false;
          isSigner: false;
          docs: ['#17'];
        },
        {
          name: 'governanceGoverningTokenHolding';
          isMut: true;
          isSigner: false;
          docs: [
            '#18',
            "Token account owned by governance program holding user's locked tokens",
          ];
        },
        {
          name: 'governanceGoverningTokenOwnerRecord';
          isMut: true;
          isSigner: false;
          docs: [
            '#19',
            'Account owned by governance storing user informations',
          ];
        },
        {
          name: 'stakesClaimCronThread';
          isMut: true;
          isSigner: false;
          docs: ['#20'];
        },
        {
          name: 'userStakingThreadAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#21'];
        },
        {
          name: 'clockworkProgram';
          isMut: false;
          isSigner: false;
          docs: ['#22'];
        },
        {
          name: 'governanceProgram';
          isMut: false;
          isSigner: false;
          docs: ['#23'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#24'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#25'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#26'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'RemoveLiquidStakeParams';
          };
        },
      ];
    },
    {
      name: 'removeLockedStake';
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'lmTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'rewardTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'stakingStakedTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'stakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'stakingLmRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'userStaking';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'staking';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'governanceTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'governanceRealm';
          isMut: false;
          isSigner: false;
          docs: [
            '#15',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ];
        },
        {
          name: 'governanceRealmConfig';
          isMut: false;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'governanceGoverningTokenHolding';
          isMut: true;
          isSigner: false;
          docs: [
            '#17',
            "Token account owned by governance program holding user's locked tokens",
          ];
        },
        {
          name: 'governanceGoverningTokenOwnerRecord';
          isMut: true;
          isSigner: false;
          docs: [
            '#18',
            'Account owned by governance storing user informations',
          ];
        },
        {
          name: 'stakesClaimCronThread';
          isMut: true;
          isSigner: false;
          docs: ['#19'];
        },
        {
          name: 'userStakingThreadAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#20'];
        },
        {
          name: 'clockworkProgram';
          isMut: false;
          isSigner: false;
          docs: ['#21'];
        },
        {
          name: 'governanceProgram';
          isMut: false;
          isSigner: false;
          docs: ['#22'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#23'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#24'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#25'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'RemoveLockedStakeParams';
          };
        },
      ];
    },
    {
      name: 'claimStakes';
      accounts: [
        {
          name: 'caller';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'rewardTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'lmTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'stakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'stakingLmRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'userStaking';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'staking';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'lmTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#17'];
        },
      ];
      args: [];
    },
    {
      name: 'claimReferalRewards';
      accounts: [
        {
          name: 'sponsor';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'receivingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'sponsorProfile';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
      ];
      args: [];
      returns: 'u64';
    },
    {
      name: 'finalizeLockedStake';
      accounts: [
        {
          name: 'caller';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'owner';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'userStaking';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'staking';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'governanceTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'governanceRealm';
          isMut: false;
          isSigner: false;
          docs: [
            '#10',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ];
        },
        {
          name: 'governanceRealmConfig';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'governanceGoverningTokenHolding';
          isMut: true;
          isSigner: false;
          docs: [
            '#12',
            "Token account owned by governance program holding user's locked tokens",
          ];
        },
        {
          name: 'governanceGoverningTokenOwnerRecord';
          isMut: true;
          isSigner: false;
          docs: [
            '#13',
            'Account owned by governance storing user informations',
          ];
        },
        {
          name: 'governanceProgram';
          isMut: false;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#17'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'FinalizeLockedStakeParams';
          };
        },
      ];
    },
    {
      name: 'resolveStakingRound';
      accounts: [
        {
          name: 'caller';
          isMut: true;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'stakingStakedTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'stakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'stakingLmRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'staking';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#13'];
        },
      ];
      args: [];
    },
    {
      name: 'getLpTokenPrice';
      accounts: [
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#1'];
        },
        {
          name: 'pool';
          isMut: false;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'lpTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'GetLpTokenPriceParams';
          };
        },
      ];
      returns: 'u64';
    },
    {
      name: 'mintLmTokensFromBucket';
      accounts: [
        {
          name: 'admin';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'receivingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#2'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'perpetuals';
          isMut: false;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'lmTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#7'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'MintLmTokensFromBucketParams';
          };
        },
      ];
      returns: 'u8';
    },
    {
      name: 'increasePosition';
      accounts: [
        {
          name: 'owner';
          isMut: false;
          isSigner: true;
          docs: ['#1'];
        },
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
          docs: ['#2'];
        },
        {
          name: 'fundingAccount';
          isMut: true;
          isSigner: false;
          docs: ['#3'];
        },
        {
          name: 'transferAuthority';
          isMut: false;
          isSigner: false;
          docs: ['#4'];
        },
        {
          name: 'lmStaking';
          isMut: true;
          isSigner: false;
          docs: ['#5'];
        },
        {
          name: 'lpStaking';
          isMut: true;
          isSigner: false;
          docs: ['#6'];
        },
        {
          name: 'cortex';
          isMut: true;
          isSigner: false;
          docs: ['#7'];
        },
        {
          name: 'perpetuals';
          isMut: true;
          isSigner: false;
          docs: ['#8'];
        },
        {
          name: 'pool';
          isMut: true;
          isSigner: false;
          docs: ['#9'];
        },
        {
          name: 'position';
          isMut: true;
          isSigner: false;
          docs: ['#10'];
        },
        {
          name: 'stakingRewardTokenCustody';
          isMut: true;
          isSigner: false;
          docs: ['#11'];
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#12'];
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#13'];
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
          docs: ['#14'];
        },
        {
          name: 'custodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#15'];
        },
        {
          name: 'collateralCustody';
          isMut: true;
          isSigner: false;
          docs: ['#16'];
        },
        {
          name: 'collateralCustodyOracleAccount';
          isMut: false;
          isSigner: false;
          docs: ['#17'];
        },
        {
          name: 'collateralCustodyTokenAccount';
          isMut: true;
          isSigner: false;
          docs: ['#18'];
        },
        {
          name: 'lmStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#19'];
        },
        {
          name: 'lpStakingRewardTokenVault';
          isMut: true;
          isSigner: false;
          docs: ['#20'];
        },
        {
          name: 'lpTokenMint';
          isMut: true;
          isSigner: false;
          docs: ['#21'];
        },
        {
          name: 'stakingRewardTokenMint';
          isMut: false;
          isSigner: false;
          docs: ['#22'];
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
          docs: ['#23'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
          docs: ['#24'];
        },
        {
          name: 'adrenaProgram';
          isMut: false;
          isSigner: false;
          docs: ['#25'];
        },
      ];
      args: [
        {
          name: 'params';
          type: {
            defined: 'IncreasePositionParams';
          };
        },
      ];
    },
  ];
  accounts: [
    {
      name: 'cortex';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'lmTokenBump';
            type: 'u8';
          },
          {
            name: 'governanceTokenBump';
            type: 'u8';
          },
          {
            name: 'inceptionEpoch';
            type: 'u64';
          },
          {
            name: 'governanceProgram';
            type: 'publicKey';
          },
          {
            name: 'governanceRealm';
            type: 'publicKey';
          },
          {
            name: 'vests';
            type: {
              vec: 'publicKey';
            };
          },
          {
            name: 'vestedTokenAmount';
            type: 'u128';
          },
          {
            name: 'coreContributorBucketAllocation';
            type: 'u64';
          },
          {
            name: 'coreContributorBucketVestedAmount';
            type: 'u64';
          },
          {
            name: 'coreContributorBucketMintedAmount';
            type: 'u64';
          },
          {
            name: 'daoTreasuryBucketAllocation';
            type: 'u64';
          },
          {
            name: 'daoTreasuryBucketVestedAmount';
            type: 'u64';
          },
          {
            name: 'daoTreasuryBucketMintedAmount';
            type: 'u64';
          },
          {
            name: 'polBucketAllocation';
            type: 'u64';
          },
          {
            name: 'polBucketVestedAmount';
            type: 'u64';
          },
          {
            name: 'polBucketMintedAmount';
            type: 'u64';
          },
          {
            name: 'ecosystemBucketAllocation';
            type: 'u64';
          },
          {
            name: 'ecosystemBucketVestedAmount';
            type: 'u64';
          },
          {
            name: 'ecosystemBucketMintedAmount';
            type: 'u64';
          },
          {
            name: 'referalRewardsLimit';
            type: 'u64';
          },
          {
            name: 'referalRewardsEmitted';
            type: 'u64';
          },
          {
            name: 'userProfileAmount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'custody';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'pool';
            type: 'publicKey';
          },
          {
            name: 'mint';
            type: 'publicKey';
          },
          {
            name: 'tokenAccount';
            type: 'publicKey';
          },
          {
            name: 'decimals';
            type: 'u8';
          },
          {
            name: 'isStable';
            type: 'bool';
          },
          {
            name: 'oracle';
            type: {
              defined: 'OracleParams';
            };
          },
          {
            name: 'pricing';
            type: {
              defined: 'PricingParams';
            };
          },
          {
            name: 'permissions';
            type: {
              defined: 'Permissions';
            };
          },
          {
            name: 'fees';
            type: {
              defined: 'Fees';
            };
          },
          {
            name: 'borrowRate';
            type: {
              defined: 'BorrowRateParams';
            };
          },
          {
            name: 'assets';
            type: {
              defined: 'Assets';
            };
          },
          {
            name: 'collectedFees';
            type: {
              defined: 'FeesStats';
            };
          },
          {
            name: 'volumeStats';
            type: {
              defined: 'VolumeStats';
            };
          },
          {
            name: 'tradeStats';
            type: {
              defined: 'TradeStats';
            };
          },
          {
            name: 'longPositions';
            type: {
              defined: 'PositionStats';
            };
          },
          {
            name: 'shortPositions';
            type: {
              defined: 'PositionStats';
            };
          },
          {
            name: 'borrowRateState';
            type: {
              defined: 'BorrowRateState';
            };
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'tokenAccountBump';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'customOracle';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'price';
            type: 'u64';
          },
          {
            name: 'expo';
            type: 'i32';
          },
          {
            name: 'conf';
            type: 'u64';
          },
          {
            name: 'publishTime';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'perpetuals';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'admin';
            type: 'publicKey';
          },
          {
            name: 'permissions';
            type: {
              defined: 'Permissions';
            };
          },
          {
            name: 'pools';
            type: {
              vec: 'publicKey';
            };
          },
          {
            name: 'transferAuthorityBump';
            type: 'u8';
          },
          {
            name: 'perpetualsBump';
            type: 'u8';
          },
          {
            name: 'inceptionTime';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'pool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'name';
            type: 'string';
          },
          {
            name: 'custodies';
            type: {
              vec: 'publicKey';
            };
          },
          {
            name: 'ratios';
            type: {
              vec: {
                defined: 'TokenRatios';
              };
            };
          },
          {
            name: 'aumUsd';
            type: 'u128';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'lpTokenBump';
            type: 'u8';
          },
          {
            name: 'inceptionTime';
            type: 'i64';
          },
          {
            name: 'nbStableCustody';
            type: 'u8';
          },
        ];
      };
    },
    {
      name: 'position';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'pool';
            type: 'publicKey';
          },
          {
            name: 'custody';
            type: 'publicKey';
          },
          {
            name: 'collateralCustody';
            type: 'publicKey';
          },
          {
            name: 'openTime';
            type: 'i64';
          },
          {
            name: 'updateTime';
            type: 'i64';
          },
          {
            name: 'side';
            type: {
              defined: 'Side';
            };
          },
          {
            name: 'price';
            type: 'u64';
          },
          {
            name: 'sizeUsd';
            type: 'u64';
          },
          {
            name: 'borrowSizeUsd';
            type: 'u64';
          },
          {
            name: 'collateralUsd';
            type: 'u64';
          },
          {
            name: 'unrealizedProfitUsd';
            type: 'u64';
          },
          {
            name: 'unrealizedLossUsd';
            type: 'u64';
          },
          {
            name: 'cumulativeInterestSnapshot';
            type: 'u128';
          },
          {
            name: 'lockedAmount';
            type: 'u64';
          },
          {
            name: 'collateralAmount';
            type: 'u64';
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'entryFeeUsd';
            type: 'u64';
          },
          {
            name: 'exitFeeUsd';
            type: 'u64';
          },
          {
            name: 'liquidationFeeUsd';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'staking';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakingType';
            type: {
              defined: 'StakingType';
            };
          },
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'stakedTokenVaultBump';
            type: 'u8';
          },
          {
            name: 'rewardTokenVaultBump';
            type: 'u8';
          },
          {
            name: 'lmRewardTokenVaultBump';
            type: 'u8';
          },
          {
            name: 'nbLockedTokens';
            type: 'u64';
          },
          {
            name: 'stakedTokenMint';
            type: 'publicKey';
          },
          {
            name: 'stakedTokenDecimals';
            type: 'u8';
          },
          {
            name: 'rewardTokenMint';
            type: 'publicKey';
          },
          {
            name: 'rewardTokenDecimals';
            type: 'u8';
          },
          {
            name: 'resolvedRewardTokenAmount';
            type: 'u64';
          },
          {
            name: 'resolvedStakedTokenAmount';
            type: 'u64';
          },
          {
            name: 'resolvedLmRewardTokenAmount';
            type: 'u64';
          },
          {
            name: 'resolvedLmStakedTokenAmount';
            type: 'u64';
          },
          {
            name: 'currentStakingRound';
            type: {
              defined: 'StakingRound';
            };
          },
          {
            name: 'nextStakingRound';
            type: {
              defined: 'StakingRound';
            };
          },
          {
            name: 'resolvedStakingRounds';
            type: {
              vec: {
                defined: 'StakingRound';
              };
            };
          },
        ];
      };
    },
    {
      name: 'userProfile';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'nickname';
            type: 'string';
          },
          {
            name: 'createdAt';
            type: 'i64';
          },
          {
            name: 'owner';
            type: 'publicKey';
          },
          {
            name: 'swapCount';
            type: 'u64';
          },
          {
            name: 'swapVolumeUsd';
            type: 'u64';
          },
          {
            name: 'swapFeePaidUsd';
            type: 'u64';
          },
          {
            name: 'shortStats';
            type: {
              defined: 'TradingStats';
            };
          },
          {
            name: 'longStats';
            type: {
              defined: 'TradingStats';
            };
          },
          {
            name: 'sponsor';
            type: {
              option: 'publicKey';
            };
          },
          {
            name: 'referalClaimedVolumeUsd';
            type: 'u64';
          },
          {
            name: 'sponsorClaimedRewardAmount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'userStaking';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'threadAuthorityBump';
            type: 'u8';
          },
          {
            name: 'stakesClaimCronThreadId';
            type: 'u64';
          },
          {
            name: 'liquidStake';
            type: {
              defined: 'LiquidStake';
            };
          },
          {
            name: 'lockedStakes';
            type: {
              vec: {
                defined: 'LockedStake';
              };
            };
          },
        ];
      };
    },
    {
      name: 'vest';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bump';
            type: 'u8';
          },
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'originBucket';
            type: {
              defined: 'BucketName';
            };
          },
          {
            name: 'unlockStartTimestamp';
            type: 'i64';
          },
          {
            name: 'unlockEndTimestamp';
            type: 'i64';
          },
          {
            name: 'claimedAmount';
            type: 'u64';
          },
          {
            name: 'lastClaimTimestamp';
            type: 'i64';
          },
          {
            name: 'owner';
            type: 'publicKey';
          },
        ];
      };
    },
  ];
  types: [
    {
      name: 'AddCollateralParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collateral';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'AddCustodyParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'isStable';
            type: 'bool';
          },
          {
            name: 'oracle';
            type: {
              defined: 'OracleParams';
            };
          },
          {
            name: 'pricing';
            type: {
              defined: 'PricingParams';
            };
          },
          {
            name: 'permissions';
            type: {
              defined: 'Permissions';
            };
          },
          {
            name: 'fees';
            type: {
              defined: 'Fees';
            };
          },
          {
            name: 'borrowRate';
            type: {
              defined: 'BorrowRateParams';
            };
          },
          {
            name: 'ratios';
            type: {
              vec: {
                defined: 'TokenRatios';
              };
            };
          },
        ];
      };
    },
    {
      name: 'AddGenesisLiquidityParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'lpStakeResolutionThreadId';
            type: 'u64';
          },
          {
            name: 'amountIn';
            type: 'u64';
          },
          {
            name: 'minLpAmountOut';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'AddLiquidStakeParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'AddLiquidityParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amountIn';
            type: 'u64';
          },
          {
            name: 'minLpAmountOut';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'AddLockedStakeParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakeResolutionThreadId';
            type: 'u64';
          },
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'lockedDays';
            type: 'u32';
          },
        ];
      };
    },
    {
      name: 'AddPoolParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'name';
            type: 'string';
          },
        ];
      };
    },
    {
      name: 'AddVestParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'originBucket';
            type: {
              defined: 'BucketName';
            };
          },
          {
            name: 'unlockStartTimestamp';
            type: 'i64';
          },
          {
            name: 'unlockEndTimestamp';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'ClosePositionParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'price';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'EditUserProfileParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nickname';
            type: 'string';
          },
        ];
      };
    },
    {
      name: 'FinalizeLockedStakeParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'threadId';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'GetAddLiquidityAmountAndFeeParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amountIn';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'GetAssetsUnderManagementParams';
      type: {
        kind: 'struct';
        fields: [];
      };
    },
    {
      name: 'GetEntryPriceAndFeeParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collateral';
            type: 'u64';
          },
          {
            name: 'leverage';
            type: 'u64';
          },
          {
            name: 'side';
            type: {
              defined: 'Side';
            };
          },
        ];
      };
    },
    {
      name: 'GetExitPriceAndFeeParams';
      type: {
        kind: 'struct';
        fields: [];
      };
    },
    {
      name: 'GetLiquidationPriceParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'addCollateral';
            type: 'u64';
          },
          {
            name: 'removeCollateral';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'GetLpTokenPriceParams';
      type: {
        kind: 'struct';
        fields: [];
      };
    },
    {
      name: 'GetOpenPositionWithSwapAmountAndFeesParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collateralAmount';
            type: 'u64';
          },
          {
            name: 'leverage';
            type: 'u64';
          },
          {
            name: 'side';
            type: {
              defined: 'Side';
            };
          },
        ];
      };
    },
    {
      name: 'GetPnlParams';
      type: {
        kind: 'struct';
        fields: [];
      };
    },
    {
      name: 'GetRemoveLiquidityAmountAndFeeParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'lpAmountIn';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'GetSwapAmountAndFeesParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amountIn';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'IncreasePositionParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'price';
            type: 'u64';
          },
          {
            name: 'collateral';
            type: 'u64';
          },
          {
            name: 'leverage';
            type: 'u64';
          },
          {
            name: 'side';
            type: {
              defined: 'Side';
            };
          },
        ];
      };
    },
    {
      name: 'InitStakingParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakingType';
            type: {
              defined: 'StakingType';
            };
          },
        ];
      };
    },
    {
      name: 'InitUserProfileParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'nickname';
            type: 'string';
          },
        ];
      };
    },
    {
      name: 'InitUserStakingParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'stakesClaimCronThreadId';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'InitParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'allowSwap';
            type: 'bool';
          },
          {
            name: 'allowAddLiquidity';
            type: 'bool';
          },
          {
            name: 'allowRemoveLiquidity';
            type: 'bool';
          },
          {
            name: 'allowOpenPosition';
            type: 'bool';
          },
          {
            name: 'allowClosePosition';
            type: 'bool';
          },
          {
            name: 'allowPnlWithdrawal';
            type: 'bool';
          },
          {
            name: 'allowCollateralWithdrawal';
            type: 'bool';
          },
          {
            name: 'allowSizeChange';
            type: 'bool';
          },
          {
            name: 'coreContributorBucketAllocation';
            type: 'u64';
          },
          {
            name: 'daoTreasuryBucketAllocation';
            type: 'u64';
          },
          {
            name: 'polBucketAllocation';
            type: 'u64';
          },
          {
            name: 'ecosystemBucketAllocation';
            type: 'u64';
          },
          {
            name: 'referalRewardsLimit';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'LiquidateParams';
      type: {
        kind: 'struct';
        fields: [];
      };
    },
    {
      name: 'MintLmTokensFromBucketParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'bucketName';
            type: {
              defined: 'BucketName';
            };
          },
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'reason';
            type: 'string';
          },
        ];
      };
    },
    {
      name: 'OpenPositionWithSwapParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'price';
            type: 'u64';
          },
          {
            name: 'collateral';
            type: 'u64';
          },
          {
            name: 'leverage';
            type: 'u64';
          },
          {
            name: 'side';
            type: {
              defined: 'Side';
            };
          },
        ];
      };
    },
    {
      name: 'OpenPositionParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'price';
            type: 'u64';
          },
          {
            name: 'collateral';
            type: 'u64';
          },
          {
            name: 'leverage';
            type: 'u64';
          },
          {
            name: 'side';
            type: {
              defined: 'Side';
            };
          },
        ];
      };
    },
    {
      name: 'RemoveCollateralParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collateralUsd';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'RemoveCustodyParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'ratios';
            type: {
              vec: {
                defined: 'TokenRatios';
              };
            };
          },
        ];
      };
    },
    {
      name: 'RemoveLiquidStakeParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'RemoveLiquidityParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'lpAmountIn';
            type: 'u64';
          },
          {
            name: 'minAmountOut';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'RemoveLockedStakeParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'lockedStakeIndex';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'RemovePoolParams';
      type: {
        kind: 'struct';
        fields: [];
      };
    },
    {
      name: 'SetCustodyConfigParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'isStable';
            type: 'bool';
          },
          {
            name: 'oracle';
            type: {
              defined: 'OracleParams';
            };
          },
          {
            name: 'pricing';
            type: {
              defined: 'PricingParams';
            };
          },
          {
            name: 'permissions';
            type: {
              defined: 'Permissions';
            };
          },
          {
            name: 'fees';
            type: {
              defined: 'Fees';
            };
          },
          {
            name: 'borrowRate';
            type: {
              defined: 'BorrowRateParams';
            };
          },
          {
            name: 'ratios';
            type: {
              vec: {
                defined: 'TokenRatios';
              };
            };
          },
        ];
      };
    },
    {
      name: 'SetCustomOraclePriceParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'price';
            type: 'u64';
          },
          {
            name: 'expo';
            type: 'i32';
          },
          {
            name: 'conf';
            type: 'u64';
          },
          {
            name: 'publishTime';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'SetPermissionsParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'allowSwap';
            type: 'bool';
          },
          {
            name: 'allowAddLiquidity';
            type: 'bool';
          },
          {
            name: 'allowRemoveLiquidity';
            type: 'bool';
          },
          {
            name: 'allowOpenPosition';
            type: 'bool';
          },
          {
            name: 'allowClosePosition';
            type: 'bool';
          },
          {
            name: 'allowPnlWithdrawal';
            type: 'bool';
          },
          {
            name: 'allowCollateralWithdrawal';
            type: 'bool';
          },
          {
            name: 'allowSizeChange';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'SwapParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amountIn';
            type: 'u64';
          },
          {
            name: 'minAmountOut';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'TestAdminRemoveCollateralParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collateralUsd';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'WithdrawFeesParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'WithdrawSolFeesParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'Fees';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'swapIn';
            type: 'u16';
          },
          {
            name: 'swapOut';
            type: 'u16';
          },
          {
            name: 'stableSwapIn';
            type: 'u16';
          },
          {
            name: 'stableSwapOut';
            type: 'u16';
          },
          {
            name: 'addLiquidity';
            type: 'u16';
          },
          {
            name: 'removeLiquidity';
            type: 'u16';
          },
          {
            name: 'openPosition';
            type: 'u16';
          },
          {
            name: 'closePosition';
            type: 'u16';
          },
          {
            name: 'liquidation';
            type: 'u16';
          },
          {
            name: 'feeMax';
            type: 'u16';
          },
          {
            name: 'protocolShare';
            type: 'u16';
          },
        ];
      };
    },
    {
      name: 'FeesStats';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'swapUsd';
            type: 'u64';
          },
          {
            name: 'addLiquidityUsd';
            type: 'u64';
          },
          {
            name: 'removeLiquidityUsd';
            type: 'u64';
          },
          {
            name: 'openPositionUsd';
            type: 'u64';
          },
          {
            name: 'closePositionUsd';
            type: 'u64';
          },
          {
            name: 'liquidationUsd';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'VolumeStats';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'swapUsd';
            type: 'u64';
          },
          {
            name: 'addLiquidityUsd';
            type: 'u64';
          },
          {
            name: 'removeLiquidityUsd';
            type: 'u64';
          },
          {
            name: 'openPositionUsd';
            type: 'u64';
          },
          {
            name: 'closePositionUsd';
            type: 'u64';
          },
          {
            name: 'liquidationUsd';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'TradeStats';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'profitUsd';
            type: 'u64';
          },
          {
            name: 'lossUsd';
            type: 'u64';
          },
          {
            name: 'oiLongUsd';
            type: 'u64';
          },
          {
            name: 'oiShortUsd';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'Assets';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'collateral';
            type: 'u64';
          },
          {
            name: 'protocolFees';
            type: 'u64';
          },
          {
            name: 'owned';
            type: 'u64';
          },
          {
            name: 'locked';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'PricingParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'useUnrealizedPnlInAum';
            type: 'bool';
          },
          {
            name: 'minInitialLeverage';
            type: 'u32';
          },
          {
            name: 'maxInitialLeverage';
            type: 'u32';
          },
          {
            name: 'maxLeverage';
            type: 'u32';
          },
          {
            name: 'maxPayoffMult';
            type: 'u32';
          },
          {
            name: 'maxUtilization';
            type: 'u16';
          },
          {
            name: 'maxPositionLockedUsd';
            type: 'u64';
          },
          {
            name: 'maxTotalLockedUsd';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'BorrowRateParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'baseRate';
            type: 'u64';
          },
          {
            name: 'slope1';
            type: 'u64';
          },
          {
            name: 'slope2';
            type: 'u64';
          },
          {
            name: 'optimalUtilization';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'BorrowRateState';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'currentRate';
            type: 'u64';
          },
          {
            name: 'cumulativeInterest';
            type: 'u128';
          },
          {
            name: 'lastUpdate';
            type: 'i64';
          },
        ];
      };
    },
    {
      name: 'PositionStats';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'openPositions';
            type: 'u64';
          },
          {
            name: 'collateralUsd';
            type: 'u64';
          },
          {
            name: 'sizeUsd';
            type: 'u64';
          },
          {
            name: 'borrowSizeUsd';
            type: 'u64';
          },
          {
            name: 'lockedAmount';
            type: 'u64';
          },
          {
            name: 'weightedPrice';
            type: 'u128';
          },
          {
            name: 'totalQuantity';
            type: 'u128';
          },
          {
            name: 'cumulativeInterestUsd';
            type: 'u64';
          },
          {
            name: 'cumulativeInterestSnapshot';
            type: 'u128';
          },
          {
            name: 'exitFeeUsd';
            type: 'u64';
          },
          {
            name: 'liquidationFeeUsd';
            type: 'u64';
          },
          {
            name: 'stableLockedAmount';
            type: {
              array: [
                {
                  defined: 'StableLockedAmountStat';
                },
                2,
              ];
            };
          },
        ];
      };
    },
    {
      name: 'StableLockedAmountStat';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'custody';
            type: 'publicKey';
          },
          {
            name: 'lockedAmount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'OraclePrice';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'price';
            type: 'u64';
          },
          {
            name: 'exponent';
            type: 'i32';
          },
          {
            name: 'conf';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'OracleParams';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'oracleAccount';
            type: 'publicKey';
          },
          {
            name: 'oracleType';
            type: {
              defined: 'OracleType';
            };
          },
          {
            name: 'maxPriceError';
            type: 'u64';
          },
          {
            name: 'maxPriceAgeSec';
            type: 'u32';
          },
        ];
      };
    },
    {
      name: 'ExitPriceAndFee';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'price';
            type: 'u64';
          },
          {
            name: 'fee';
            type: 'u64';
          },
          {
            name: 'amountOut';
            type: 'u64';
          },
          {
            name: 'profitUsd';
            type: 'u64';
          },
          {
            name: 'lossUsd';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'AmountAndFee';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'fee';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'NewPositionPricesAndFee';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'entryPrice';
            type: 'u64';
          },
          {
            name: 'liquidationPrice';
            type: 'u64';
          },
          {
            name: 'entryFee';
            type: 'u64';
          },
          {
            name: 'exitFee';
            type: 'u64';
          },
          {
            name: 'liquidationFee';
            type: 'u64';
          },
          {
            name: 'size';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'OpenPositionWithSwapAmountAndFees';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'entryPrice';
            type: 'u64';
          },
          {
            name: 'liquidationPrice';
            type: 'u64';
          },
          {
            name: 'swapFeeIn';
            type: 'u64';
          },
          {
            name: 'swapFeeOut';
            type: 'u64';
          },
          {
            name: 'openPositionFee';
            type: 'u64';
          },
          {
            name: 'exitFee';
            type: 'u64';
          },
          {
            name: 'liquidationFee';
            type: 'u64';
          },
          {
            name: 'size';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'SwapAmountAndFees';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amountOut';
            type: 'u64';
          },
          {
            name: 'feeIn';
            type: 'u64';
          },
          {
            name: 'feeOut';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'ProfitAndLoss';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'profit';
            type: 'u64';
          },
          {
            name: 'loss';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'Permissions';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'allowSwap';
            type: 'bool';
          },
          {
            name: 'allowAddLiquidity';
            type: 'bool';
          },
          {
            name: 'allowRemoveLiquidity';
            type: 'bool';
          },
          {
            name: 'allowOpenPosition';
            type: 'bool';
          },
          {
            name: 'allowClosePosition';
            type: 'bool';
          },
          {
            name: 'allowPnlWithdrawal';
            type: 'bool';
          },
          {
            name: 'allowCollateralWithdrawal';
            type: 'bool';
          },
          {
            name: 'allowSizeChange';
            type: 'bool';
          },
        ];
      };
    },
    {
      name: 'TokenRatios';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'target';
            type: 'u64';
          },
          {
            name: 'min';
            type: 'u64';
          },
          {
            name: 'max';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'StakingRound';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'startTime';
            type: 'i64';
          },
          {
            name: 'rate';
            type: 'u64';
          },
          {
            name: 'totalStake';
            type: 'u64';
          },
          {
            name: 'totalClaim';
            type: 'u64';
          },
          {
            name: 'lmRate';
            type: 'u64';
          },
          {
            name: 'lmTotalStake';
            type: 'u64';
          },
          {
            name: 'lmTotalClaim';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'TradingStats';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'openedPositionCount';
            type: 'u64';
          },
          {
            name: 'liquidatedPositionCount';
            type: 'u64';
          },
          {
            name: 'openingAverageLeverage';
            type: 'u64';
          },
          {
            name: 'openingSizeUsd';
            type: 'u64';
          },
          {
            name: 'profitsUsd';
            type: 'u64';
          },
          {
            name: 'lossesUsd';
            type: 'u64';
          },
          {
            name: 'feePaidUsd';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'LiquidStake';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'stakeTime';
            type: 'i64';
          },
          {
            name: 'claimTime';
            type: 'i64';
          },
          {
            name: 'overlapTime';
            type: 'i64';
          },
          {
            name: 'overlapAmount';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'LockedStake';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'amount';
            type: 'u64';
          },
          {
            name: 'stakeTime';
            type: 'i64';
          },
          {
            name: 'claimTime';
            type: 'i64';
          },
          {
            name: 'lockDuration';
            type: 'u64';
          },
          {
            name: 'rewardMultiplier';
            type: 'u32';
          },
          {
            name: 'lmRewardMultiplier';
            type: 'u32';
          },
          {
            name: 'voteMultiplier';
            type: 'u32';
          },
          {
            name: 'amountWithRewardMultiplier';
            type: 'u64';
          },
          {
            name: 'amountWithLmRewardMultiplier';
            type: 'u64';
          },
          {
            name: 'resolved';
            type: 'bool';
          },
          {
            name: 'stakeResolutionThreadId';
            type: 'u64';
          },
        ];
      };
    },
    {
      name: 'BucketName';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'CoreContributor';
          },
          {
            name: 'DaoTreasury';
          },
          {
            name: 'PoL';
          },
          {
            name: 'Ecosystem';
          },
        ];
      };
    },
    {
      name: 'FeesMode';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'Fixed';
          },
          {
            name: 'Linear';
          },
          {
            name: 'Optimal';
          },
        ];
      };
    },
    {
      name: 'OracleType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'None';
          },
          {
            name: 'Custom';
          },
          {
            name: 'Pyth';
          },
        ];
      };
    },
    {
      name: 'Side';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'None';
          },
          {
            name: 'Long';
          },
          {
            name: 'Short';
          },
        ];
      };
    },
    {
      name: 'CollateralChange';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'None';
          },
          {
            name: 'Add';
          },
          {
            name: 'Remove';
          },
        ];
      };
    },
    {
      name: 'StakingType';
      type: {
        kind: 'enum';
        variants: [
          {
            name: 'LM';
          },
          {
            name: 'LP';
          },
        ];
      };
    },
  ];
  errors: [
    {
      code: 6000;
      name: 'MathOverflow';
      msg: 'Overflow in arithmetic operation';
    },
    {
      code: 6001;
      name: 'UnsupportedOracle';
      msg: 'Unsupported price oracle';
    },
    {
      code: 6002;
      name: 'InvalidOracleAccount';
      msg: 'Invalid oracle account';
    },
    {
      code: 6003;
      name: 'InvalidOracleState';
      msg: 'Invalid oracle state';
    },
    {
      code: 6004;
      name: 'StaleOraclePrice';
      msg: 'Stale oracle price';
    },
    {
      code: 6005;
      name: 'InvalidOraclePrice';
      msg: 'Invalid oracle price';
    },
    {
      code: 6006;
      name: 'InvalidEnvironment';
      msg: 'Instruction is not allowed in production';
    },
    {
      code: 6007;
      name: 'InvalidPoolState';
      msg: 'Invalid pool state';
    },
    {
      code: 6008;
      name: 'InvalidVestState';
      msg: 'Invalid vest state';
    },
    {
      code: 6009;
      name: 'InvalidStakeState';
      msg: 'Invalid stake state';
    },
    {
      code: 6010;
      name: 'InvalidCustodyState';
      msg: 'Invalid custody state';
    },
    {
      code: 6011;
      name: 'InvalidCollateralCustody';
      msg: 'Invalid collateral custody';
    },
    {
      code: 6012;
      name: 'InvalidPositionState';
      msg: 'Invalid position state';
    },
    {
      code: 6013;
      name: 'InvalidStakingRoundState';
      msg: 'Invalid staking round state';
    },
    {
      code: 6014;
      name: 'InvalidPerpetualsConfig';
      msg: 'Invalid perpetuals config';
    },
    {
      code: 6015;
      name: 'InvalidPoolConfig';
      msg: 'Invalid pool config';
    },
    {
      code: 6016;
      name: 'InvalidCustodyConfig';
      msg: 'Invalid custody config';
    },
    {
      code: 6017;
      name: 'InsufficientAmountReturned';
      msg: 'Insufficient token amount returned';
    },
    {
      code: 6018;
      name: 'MaxPriceSlippage';
      msg: 'Price slippage limit exceeded';
    },
    {
      code: 6019;
      name: 'MaxLeverage';
      msg: 'Position leverage limit exceeded';
    },
    {
      code: 6020;
      name: 'MinLeverage';
      msg: 'Position leverage under minimum';
    },
    {
      code: 6021;
      name: 'CustodyAmountLimit';
      msg: 'Custody amount limit exceeded';
    },
    {
      code: 6022;
      name: 'PositionAmountLimit';
      msg: 'Position amount limit exceeded';
    },
    {
      code: 6023;
      name: 'TokenRatioOutOfRange';
      msg: 'Token ratio out of range';
    },
    {
      code: 6024;
      name: 'UnsupportedToken';
      msg: 'Token is not supported';
    },
    {
      code: 6025;
      name: 'InstructionNotAllowed';
      msg: 'Instruction is not allowed at this time';
    },
    {
      code: 6026;
      name: 'MaxUtilization';
      msg: 'Token utilization limit exceeded';
    },
    {
      code: 6027;
      name: 'InvalidGovernanceProgram';
      msg: "Governance program do not match Cortex's";
    },
    {
      code: 6028;
      name: 'InvalidGovernanceRealm';
      msg: "Governance realm do not match Cortex's";
    },
    {
      code: 6029;
      name: 'InvalidVestingUnlockTime';
      msg: 'Vesting unlock time is too close or passed';
    },
    {
      code: 6030;
      name: 'InvalidStakingLockingTime';
      msg: 'Invalid staking locking time';
    },
    {
      code: 6031;
      name: 'CannotFoundStake';
      msg: 'Cannot found stake';
    },
    {
      code: 6032;
      name: 'UnresolvedStake';
      msg: 'Stake is not resolved';
    },
    {
      code: 6033;
      name: 'BucketMintLimit';
      msg: 'Reached bucket mint limit';
    },
    {
      code: 6034;
      name: 'GenesisAlpLimitReached';
      msg: 'Genesis ALP add liquidity limit reached';
    },
    {
      code: 6035;
      name: 'PermissionlessOracleMissingSignature';
      msg: 'Permissionless oracle update must be preceded by Ed25519 signature verification instruction';
    },
    {
      code: 6036;
      name: 'PermissionlessOracleMalformedEd25519Data';
      msg: 'Ed25519 signature verification data does not match expected format';
    },
    {
      code: 6037;
      name: 'PermissionlessOracleSignerMismatch';
      msg: 'Ed25519 signature was not signed by the oracle authority';
    },
    {
      code: 6038;
      name: 'PermissionlessOracleMessageMismatch';
      msg: 'Signed message does not match instruction params';
    },
    {
      code: 6039;
      name: 'CustodyStableLockedAmountNotFound';
      msg: 'Cannot find custody stable locked amount';
    },
    {
      code: 6040;
      name: 'CustodyNotFound';
      msg: 'Cannot find custody';
    },
    {
      code: 6041;
      name: 'InsufficientBucketReserve';
      msg: 'The bucket does not contain enough token for reserving this allocation';
    },
    {
      code: 6042;
      name: 'UserNicknameTooLong';
      msg: 'User nickname exceed 24 characters';
    },
    {
      code: 6043;
      name: 'UserNicknameTooShort';
      msg: 'User nickname is less than 3 characters';
    },
    {
      code: 6044;
      name: 'SelfSponsored';
      msg: 'User cannot sponsor itself';
    },
    {
      code: 6045;
      name: 'ReferalRewardLimitReached';
      msg: 'Referal reward limit reached';
    },
  ];
};

export const IDL: Adrena = {
  version: '0.1.0',
  name: 'adrena',
  instructions: [
    {
      name: 'init',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'transferAuthority',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'lmStaking',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'governanceTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'lmStakingStakedTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'lmStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'lmStakingLmRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'lmStakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'adrenaProgramData',
          isMut: false,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'governanceRealm',
          isMut: false,
          isSigner: false,
          docs: [
            '#15',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ],
        },
        {
          name: 'governanceProgram',
          isMut: false,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#17'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#18'],
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
          docs: ['#19'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'InitParams',
          },
        },
      ],
    },
    {
      name: 'addVest',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'owner',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#3'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'vest',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'governanceTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'governanceRealm',
          isMut: false,
          isSigner: false,
          docs: [
            '#10',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ],
        },
        {
          name: 'governanceRealmConfig',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'governanceGoverningTokenHolding',
          isMut: true,
          isSigner: false,
          docs: [
            '#12',
            "Token account owned by governance program holding user's locked tokens",
          ],
        },
        {
          name: 'governanceGoverningTokenOwnerRecord',
          isMut: true,
          isSigner: false,
          docs: [
            '#13',
            'Account owned by governance storing user informations',
          ],
        },
        {
          name: 'governanceProgram',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
          docs: ['#17'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'AddVestParams',
          },
        },
      ],
      returns: 'u8',
    },
    {
      name: 'claimVest',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'receivingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'vest',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'governanceTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'governanceRealm',
          isMut: false,
          isSigner: false,
          docs: [
            '#9',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ],
        },
        {
          name: 'governanceRealmConfig',
          isMut: false,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'governanceGoverningTokenHolding',
          isMut: true,
          isSigner: false,
          docs: [
            '#11',
            "Token account owned by governance program holding user's locked tokens",
          ],
        },
        {
          name: 'governanceGoverningTokenOwnerRecord',
          isMut: true,
          isSigner: false,
          docs: [
            '#12',
            'Account owned by governance storing user informations',
          ],
        },
        {
          name: 'governanceProgram',
          isMut: false,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
          docs: ['#17'],
        },
      ],
      args: [],
      returns: 'u64',
    },
    {
      name: 'addPool',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
          docs: ['#9'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'AddPoolParams',
          },
        },
      ],
      returns: 'u8',
    },
    {
      name: 'removePool',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'transferAuthority',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'RemovePoolParams',
          },
        },
      ],
      returns: 'u8',
    },
    {
      name: 'addCustody',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'custodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'custodyTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'AddCustodyParams',
          },
        },
      ],
      returns: 'u8',
    },
    {
      name: 'removeCustody',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'transferAuthority',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'custodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#9'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'RemoveCustodyParams',
          },
        },
      ],
      returns: 'u8',
    },
    {
      name: 'setCustodyConfig',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'SetCustodyConfigParams',
          },
        },
      ],
      returns: 'u8',
    },
    {
      name: 'setPermissions',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'SetPermissionsParams',
          },
        },
      ],
      returns: 'u8',
    },
    {
      name: 'withdrawFees',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'custodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'receivingTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#8'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'WithdrawFeesParams',
          },
        },
      ],
      returns: 'u8',
    },
    {
      name: 'withdrawSolFees',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'receivingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'WithdrawSolFeesParams',
          },
        },
      ],
      returns: 'u8',
    },
    {
      name: 'setCustomOraclePrice',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'custody',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'oracleAccount',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'SetCustomOraclePriceParams',
          },
        },
      ],
      returns: 'u8',
    },
    {
      name: 'testAdminRemoveCollateral',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'owner',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'receivingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'position',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'collateralCustody',
          isMut: true,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'collateralCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#15'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'TestAdminRemoveCollateralParams',
          },
        },
      ],
    },
    {
      name: 'swap',
      accounts: [
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'fundingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'receivingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'lmStaking',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'lpStaking',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'stakingRewardTokenCustody',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'receivingCustody',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'receivingCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'receivingCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'dispensingCustody',
          isMut: true,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'dispensingCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#17'],
        },
        {
          name: 'dispensingCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#18'],
        },
        {
          name: 'lmStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#19'],
        },
        {
          name: 'lpStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#20'],
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#21'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#22'],
        },
        {
          name: 'userProfile',
          isMut: true,
          isSigner: false,
          isOptional: true,
          docs: ['#23'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#24'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#25'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'SwapParams',
          },
        },
      ],
    },
    {
      name: 'addLiquidity',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'fundingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'lpTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'lmStaking',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'lpStaking',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'stakingRewardTokenCustody',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'custodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'lmStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'lpStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#17'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#18'],
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#19'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#20'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#21'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#22'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'AddLiquidityParams',
          },
        },
      ],
    },
    {
      name: 'addGenesisLiquidity',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'fundingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'lpTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'lpUserStaking',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'lpStaking',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'lpStakingStakedTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'custodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'governanceTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'governanceRealm',
          isMut: false,
          isSigner: false,
          docs: [
            '#17',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ],
        },
        {
          name: 'governanceRealmConfig',
          isMut: false,
          isSigner: false,
          docs: ['#18'],
        },
        {
          name: 'governanceGoverningTokenHolding',
          isMut: true,
          isSigner: false,
          docs: [
            '#19',
            "Token account owned by governance program holding user's locked tokens",
          ],
        },
        {
          name: 'governanceGoverningTokenOwnerRecord',
          isMut: true,
          isSigner: false,
          docs: [
            '#20',
            'Account owned by governance storing user informations',
          ],
        },
        {
          name: 'lpStakeResolutionThread',
          isMut: true,
          isSigner: false,
          docs: ['#21'],
        },
        {
          name: 'stakesClaimCronThread',
          isMut: true,
          isSigner: false,
          docs: ['#22'],
        },
        {
          name: 'lpUserStakingThreadAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#23'],
        },
        {
          name: 'clockworkProgram',
          isMut: false,
          isSigner: false,
          docs: ['#24'],
        },
        {
          name: 'governanceProgram',
          isMut: false,
          isSigner: false,
          docs: ['#25'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#26'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#27'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#28'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'AddGenesisLiquidityParams',
          },
        },
      ],
    },
    {
      name: 'removeLiquidity',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'receivingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'lpTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'lmStaking',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'lpStaking',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'stakingRewardTokenCustody',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'custodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'lmStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'lpStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#17'],
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#18'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#19'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#20'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#21'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'RemoveLiquidityParams',
          },
        },
      ],
    },
    {
      name: 'openPosition',
      accounts: [
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
          docs: ['#1', 'Check: any user account'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'fundingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'lmStaking',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'lpStaking',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'position',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'stakingRewardTokenCustody',
          isMut: true,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'collateralCustody',
          isMut: true,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#17'],
        },
        {
          name: 'collateralCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#18'],
        },
        {
          name: 'lmStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#19'],
        },
        {
          name: 'lpStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#20'],
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#21'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#22'],
        },
        {
          name: 'userProfile',
          isMut: true,
          isSigner: false,
          isOptional: true,
          docs: ['#23'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#24'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#25'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#26'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'OpenPositionParams',
          },
        },
      ],
    },
    {
      name: 'openPositionWithSwap',
      accounts: [
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'fundingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'collateralAccount',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'receivingCustody',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'receivingCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'receivingCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'collateralCustody',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'collateralCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'principalCustody',
          isMut: true,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'principalCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'principalCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'lmStaking',
          isMut: true,
          isSigner: false,
          docs: ['#17'],
        },
        {
          name: 'lpStaking',
          isMut: true,
          isSigner: false,
          docs: ['#18'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#19'],
        },
        {
          name: 'position',
          isMut: true,
          isSigner: false,
          docs: ['#20'],
        },
        {
          name: 'stakingRewardTokenCustody',
          isMut: true,
          isSigner: false,
          docs: ['#21'],
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#22'],
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#23'],
        },
        {
          name: 'lmStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#24'],
        },
        {
          name: 'lpStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#25'],
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#26'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#27'],
        },
        {
          name: 'userProfile',
          isMut: true,
          isSigner: false,
          isOptional: true,
          docs: ['#28'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#29'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#30'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#31'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'OpenPositionWithSwapParams',
          },
        },
      ],
    },
    {
      name: 'addCollateral',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'fundingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'position',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'collateralCustody',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'collateralCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'AddCollateralParams',
          },
        },
      ],
    },
    {
      name: 'removeCollateral',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'receivingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'position',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'collateralCustody',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'collateralCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'RemoveCollateralParams',
          },
        },
      ],
    },
    {
      name: 'closePosition',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'receivingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'lmStaking',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'lpStaking',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'position',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'stakingRewardTokenCustody',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'collateralCustody',
          isMut: true,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'collateralCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#17'],
        },
        {
          name: 'lmStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#18'],
        },
        {
          name: 'lpStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#19'],
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#20'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#21'],
        },
        {
          name: 'userProfile',
          isMut: true,
          isSigner: false,
          isOptional: true,
          docs: ['#22'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#23'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#24'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'ClosePositionParams',
          },
        },
      ],
    },
    {
      name: 'liquidate',
      accounts: [
        {
          name: 'signer',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'receivingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'rewardsReceivingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'lmStaking',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'lpStaking',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'position',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'stakingRewardTokenCustody',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'collateralCustody',
          isMut: true,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'collateralCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#17'],
        },
        {
          name: 'lmStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#18'],
        },
        {
          name: 'lpStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#19'],
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#20'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#21'],
        },
        {
          name: 'userProfile',
          isMut: true,
          isSigner: false,
          isOptional: true,
          docs: ['#22'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#23'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#24'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'LiquidateParams',
          },
        },
      ],
    },
    {
      name: 'updatePoolAum',
      accounts: [
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
      ],
      args: [],
      returns: 'u128',
    },
    {
      name: 'getAddLiquidityAmountAndFee',
      accounts: [
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'custody',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'lpTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'GetAddLiquidityAmountAndFeeParams',
          },
        },
      ],
      returns: {
        defined: 'AmountAndFee',
      },
    },
    {
      name: 'getRemoveLiquidityAmountAndFee',
      accounts: [
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'custody',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'lpTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'GetRemoveLiquidityAmountAndFeeParams',
          },
        },
      ],
      returns: {
        defined: 'AmountAndFee',
      },
    },
    {
      name: 'getEntryPriceAndFee',
      accounts: [
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'custody',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'collateralCustody',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'GetEntryPriceAndFeeParams',
          },
        },
      ],
      returns: {
        defined: 'NewPositionPricesAndFee',
      },
    },
    {
      name: 'getOpenPositionWithSwapAmountAndFees',
      accounts: [
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'receivingCustody',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'receivingCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'collateralCustody',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'principalCustody',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'principalCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#9'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'GetOpenPositionWithSwapAmountAndFeesParams',
          },
        },
      ],
      returns: {
        defined: 'OpenPositionWithSwapAmountAndFees',
      },
    },
    {
      name: 'getExitPriceAndFee',
      accounts: [
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'position',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'custody',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'collateralCustody',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'GetExitPriceAndFeeParams',
          },
        },
      ],
      returns: {
        defined: 'ExitPriceAndFee',
      },
    },
    {
      name: 'getPnl',
      accounts: [
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'position',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'custody',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'collateralCustody',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'GetPnlParams',
          },
        },
      ],
      returns: {
        defined: 'ProfitAndLoss',
      },
    },
    {
      name: 'getLiquidationPrice',
      accounts: [
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'position',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'custody',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'collateralCustody',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'GetLiquidationPriceParams',
          },
        },
      ],
      returns: 'u64',
    },
    {
      name: 'getLiquidationState',
      accounts: [
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'position',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'custody',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'collateralCustody',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
      ],
      args: [],
      returns: 'u8',
    },
    {
      name: 'getOraclePrice',
      accounts: [
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'custody',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
      ],
      args: [],
      returns: 'u64',
    },
    {
      name: 'getSwapAmountAndFees',
      accounts: [
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'receivingCustody',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'receivingCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'dispensingCustody',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'dispensingCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'GetSwapAmountAndFeesParams',
          },
        },
      ],
      returns: {
        defined: 'SwapAmountAndFees',
      },
    },
    {
      name: 'getAssetsUnderManagement',
      accounts: [
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'GetAssetsUnderManagementParams',
          },
        },
      ],
      returns: 'u128',
    },
    {
      name: 'initUserStaking',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'rewardTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'lmTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'stakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'stakingLmRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'userStaking',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'userStakingThreadAuthority',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'stakesClaimCronThread',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'stakesClaimPayer',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'staking',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'lmTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'clockworkProgram',
          isMut: false,
          isSigner: false,
          docs: ['#17'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#18'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#19'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'InitUserStakingParams',
          },
        },
      ],
    },
    {
      name: 'initUserProfile',
      accounts: [
        {
          name: 'user',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'userProfile',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'sponsor',
          isMut: false,
          isSigner: false,
          isOptional: true,
          docs: ['#5'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#8'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'InitUserProfileParams',
          },
        },
      ],
    },
    {
      name: 'editUserProfile',
      accounts: [
        {
          name: 'user',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'userProfile',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'EditUserProfileParams',
          },
        },
      ],
    },
    {
      name: 'deleteUserProfile',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'user',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#3'],
        },
        {
          name: 'userProfile',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#8'],
        },
      ],
      args: [],
    },
    {
      name: 'initStaking',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'staking',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'stakingStakedTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'stakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'stakingLmRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'stakingStakedTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
          docs: ['#15'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'InitStakingParams',
          },
        },
      ],
      returns: 'u8',
    },
    {
      name: 'addLiquidStake',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'fundingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'rewardTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'lmTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'stakingStakedTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'stakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'stakingLmRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'userStaking',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'staking',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'governanceTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'governanceRealm',
          isMut: false,
          isSigner: false,
          docs: [
            '#16',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ],
        },
        {
          name: 'governanceRealmConfig',
          isMut: false,
          isSigner: false,
          docs: ['#17'],
        },
        {
          name: 'governanceGoverningTokenHolding',
          isMut: true,
          isSigner: false,
          docs: [
            '#18',
            "Token account owned by governance program holding user's locked tokens",
          ],
        },
        {
          name: 'governanceGoverningTokenOwnerRecord',
          isMut: true,
          isSigner: false,
          docs: [
            '#19',
            'Account owned by governance storing user informations',
          ],
        },
        {
          name: 'stakesClaimCronThread',
          isMut: true,
          isSigner: false,
          docs: ['#20'],
        },
        {
          name: 'userStakingThreadAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#21'],
        },
        {
          name: 'clockworkProgram',
          isMut: false,
          isSigner: false,
          docs: ['#22'],
        },
        {
          name: 'governanceProgram',
          isMut: false,
          isSigner: false,
          docs: ['#23'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#24'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#25'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#26'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'AddLiquidStakeParams',
          },
        },
      ],
    },
    {
      name: 'addLockedStake',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'fundingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'rewardTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'stakingStakedTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'stakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'userStaking',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'staking',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'governanceTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'governanceRealm',
          isMut: false,
          isSigner: false,
          docs: [
            '#14',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ],
        },
        {
          name: 'governanceRealmConfig',
          isMut: false,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'governanceGoverningTokenHolding',
          isMut: true,
          isSigner: false,
          docs: [
            '#16',
            "Token account owned by governance program holding user's locked tokens",
          ],
        },
        {
          name: 'governanceGoverningTokenOwnerRecord',
          isMut: true,
          isSigner: false,
          docs: [
            '#17',
            'Account owned by governance storing user informations',
          ],
        },
        {
          name: 'stakeResolutionThread',
          isMut: true,
          isSigner: false,
          docs: ['#18'],
        },
        {
          name: 'stakesClaimCronThread',
          isMut: true,
          isSigner: false,
          docs: ['#19'],
        },
        {
          name: 'userStakingThreadAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#20'],
        },
        {
          name: 'clockworkProgram',
          isMut: false,
          isSigner: false,
          docs: ['#21'],
        },
        {
          name: 'governanceProgram',
          isMut: false,
          isSigner: false,
          docs: ['#22'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#23'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#24'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#25'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'AddLockedStakeParams',
          },
        },
      ],
    },
    {
      name: 'removeLiquidStake',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'stakedTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'lmTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'rewardTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'stakingStakedTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'stakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'stakingLmRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'userStaking',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'staking',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'governanceTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'governanceRealm',
          isMut: false,
          isSigner: false,
          docs: [
            '#16',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ],
        },
        {
          name: 'governanceRealmConfig',
          isMut: false,
          isSigner: false,
          docs: ['#17'],
        },
        {
          name: 'governanceGoverningTokenHolding',
          isMut: true,
          isSigner: false,
          docs: [
            '#18',
            "Token account owned by governance program holding user's locked tokens",
          ],
        },
        {
          name: 'governanceGoverningTokenOwnerRecord',
          isMut: true,
          isSigner: false,
          docs: [
            '#19',
            'Account owned by governance storing user informations',
          ],
        },
        {
          name: 'stakesClaimCronThread',
          isMut: true,
          isSigner: false,
          docs: ['#20'],
        },
        {
          name: 'userStakingThreadAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#21'],
        },
        {
          name: 'clockworkProgram',
          isMut: false,
          isSigner: false,
          docs: ['#22'],
        },
        {
          name: 'governanceProgram',
          isMut: false,
          isSigner: false,
          docs: ['#23'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#24'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#25'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#26'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'RemoveLiquidStakeParams',
          },
        },
      ],
    },
    {
      name: 'removeLockedStake',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'lmTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'rewardTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'stakingStakedTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'stakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'stakingLmRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'userStaking',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'staking',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'governanceTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'governanceRealm',
          isMut: false,
          isSigner: false,
          docs: [
            '#15',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ],
        },
        {
          name: 'governanceRealmConfig',
          isMut: false,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'governanceGoverningTokenHolding',
          isMut: true,
          isSigner: false,
          docs: [
            '#17',
            "Token account owned by governance program holding user's locked tokens",
          ],
        },
        {
          name: 'governanceGoverningTokenOwnerRecord',
          isMut: true,
          isSigner: false,
          docs: [
            '#18',
            'Account owned by governance storing user informations',
          ],
        },
        {
          name: 'stakesClaimCronThread',
          isMut: true,
          isSigner: false,
          docs: ['#19'],
        },
        {
          name: 'userStakingThreadAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#20'],
        },
        {
          name: 'clockworkProgram',
          isMut: false,
          isSigner: false,
          docs: ['#21'],
        },
        {
          name: 'governanceProgram',
          isMut: false,
          isSigner: false,
          docs: ['#22'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#23'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#24'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#25'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'RemoveLockedStakeParams',
          },
        },
      ],
    },
    {
      name: 'claimStakes',
      accounts: [
        {
          name: 'caller',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'rewardTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'lmTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'stakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'stakingLmRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'userStaking',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'staking',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'lmTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#17'],
        },
      ],
      args: [],
    },
    {
      name: 'claimReferalRewards',
      accounts: [
        {
          name: 'sponsor',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'receivingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'sponsorProfile',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
      ],
      args: [],
      returns: 'u64',
    },
    {
      name: 'finalizeLockedStake',
      accounts: [
        {
          name: 'caller',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'userStaking',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'staking',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'governanceTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'governanceRealm',
          isMut: false,
          isSigner: false,
          docs: [
            '#10',
            'A realm represent one project (ADRENA, MANGO etc.) within the governance program',
          ],
        },
        {
          name: 'governanceRealmConfig',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'governanceGoverningTokenHolding',
          isMut: true,
          isSigner: false,
          docs: [
            '#12',
            "Token account owned by governance program holding user's locked tokens",
          ],
        },
        {
          name: 'governanceGoverningTokenOwnerRecord',
          isMut: true,
          isSigner: false,
          docs: [
            '#13',
            'Account owned by governance storing user informations',
          ],
        },
        {
          name: 'governanceProgram',
          isMut: false,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#17'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'FinalizeLockedStakeParams',
          },
        },
      ],
    },
    {
      name: 'resolveStakingRound',
      accounts: [
        {
          name: 'caller',
          isMut: true,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'stakingStakedTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'stakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'stakingLmRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'staking',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#13'],
        },
      ],
      args: [],
    },
    {
      name: 'getLpTokenPrice',
      accounts: [
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#1'],
        },
        {
          name: 'pool',
          isMut: false,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'lpTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'GetLpTokenPriceParams',
          },
        },
      ],
      returns: 'u64',
    },
    {
      name: 'mintLmTokensFromBucket',
      accounts: [
        {
          name: 'admin',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'receivingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#2'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'perpetuals',
          isMut: false,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'lmTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#7'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'MintLmTokensFromBucketParams',
          },
        },
      ],
      returns: 'u8',
    },
    {
      name: 'increasePosition',
      accounts: [
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
          docs: ['#1'],
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
          docs: ['#2'],
        },
        {
          name: 'fundingAccount',
          isMut: true,
          isSigner: false,
          docs: ['#3'],
        },
        {
          name: 'transferAuthority',
          isMut: false,
          isSigner: false,
          docs: ['#4'],
        },
        {
          name: 'lmStaking',
          isMut: true,
          isSigner: false,
          docs: ['#5'],
        },
        {
          name: 'lpStaking',
          isMut: true,
          isSigner: false,
          docs: ['#6'],
        },
        {
          name: 'cortex',
          isMut: true,
          isSigner: false,
          docs: ['#7'],
        },
        {
          name: 'perpetuals',
          isMut: true,
          isSigner: false,
          docs: ['#8'],
        },
        {
          name: 'pool',
          isMut: true,
          isSigner: false,
          docs: ['#9'],
        },
        {
          name: 'position',
          isMut: true,
          isSigner: false,
          docs: ['#10'],
        },
        {
          name: 'stakingRewardTokenCustody',
          isMut: true,
          isSigner: false,
          docs: ['#11'],
        },
        {
          name: 'stakingRewardTokenCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#12'],
        },
        {
          name: 'stakingRewardTokenCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#13'],
        },
        {
          name: 'custody',
          isMut: true,
          isSigner: false,
          docs: ['#14'],
        },
        {
          name: 'custodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#15'],
        },
        {
          name: 'collateralCustody',
          isMut: true,
          isSigner: false,
          docs: ['#16'],
        },
        {
          name: 'collateralCustodyOracleAccount',
          isMut: false,
          isSigner: false,
          docs: ['#17'],
        },
        {
          name: 'collateralCustodyTokenAccount',
          isMut: true,
          isSigner: false,
          docs: ['#18'],
        },
        {
          name: 'lmStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#19'],
        },
        {
          name: 'lpStakingRewardTokenVault',
          isMut: true,
          isSigner: false,
          docs: ['#20'],
        },
        {
          name: 'lpTokenMint',
          isMut: true,
          isSigner: false,
          docs: ['#21'],
        },
        {
          name: 'stakingRewardTokenMint',
          isMut: false,
          isSigner: false,
          docs: ['#22'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
          docs: ['#23'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
          docs: ['#24'],
        },
        {
          name: 'adrenaProgram',
          isMut: false,
          isSigner: false,
          docs: ['#25'],
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'IncreasePositionParams',
          },
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'cortex',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'lmTokenBump',
            type: 'u8',
          },
          {
            name: 'governanceTokenBump',
            type: 'u8',
          },
          {
            name: 'inceptionEpoch',
            type: 'u64',
          },
          {
            name: 'governanceProgram',
            type: 'publicKey',
          },
          {
            name: 'governanceRealm',
            type: 'publicKey',
          },
          {
            name: 'vests',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'vestedTokenAmount',
            type: 'u128',
          },
          {
            name: 'coreContributorBucketAllocation',
            type: 'u64',
          },
          {
            name: 'coreContributorBucketVestedAmount',
            type: 'u64',
          },
          {
            name: 'coreContributorBucketMintedAmount',
            type: 'u64',
          },
          {
            name: 'daoTreasuryBucketAllocation',
            type: 'u64',
          },
          {
            name: 'daoTreasuryBucketVestedAmount',
            type: 'u64',
          },
          {
            name: 'daoTreasuryBucketMintedAmount',
            type: 'u64',
          },
          {
            name: 'polBucketAllocation',
            type: 'u64',
          },
          {
            name: 'polBucketVestedAmount',
            type: 'u64',
          },
          {
            name: 'polBucketMintedAmount',
            type: 'u64',
          },
          {
            name: 'ecosystemBucketAllocation',
            type: 'u64',
          },
          {
            name: 'ecosystemBucketVestedAmount',
            type: 'u64',
          },
          {
            name: 'ecosystemBucketMintedAmount',
            type: 'u64',
          },
          {
            name: 'referalRewardsLimit',
            type: 'u64',
          },
          {
            name: 'referalRewardsEmitted',
            type: 'u64',
          },
          {
            name: 'userProfileAmount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'custody',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'pool',
            type: 'publicKey',
          },
          {
            name: 'mint',
            type: 'publicKey',
          },
          {
            name: 'tokenAccount',
            type: 'publicKey',
          },
          {
            name: 'decimals',
            type: 'u8',
          },
          {
            name: 'isStable',
            type: 'bool',
          },
          {
            name: 'oracle',
            type: {
              defined: 'OracleParams',
            },
          },
          {
            name: 'pricing',
            type: {
              defined: 'PricingParams',
            },
          },
          {
            name: 'permissions',
            type: {
              defined: 'Permissions',
            },
          },
          {
            name: 'fees',
            type: {
              defined: 'Fees',
            },
          },
          {
            name: 'borrowRate',
            type: {
              defined: 'BorrowRateParams',
            },
          },
          {
            name: 'assets',
            type: {
              defined: 'Assets',
            },
          },
          {
            name: 'collectedFees',
            type: {
              defined: 'FeesStats',
            },
          },
          {
            name: 'volumeStats',
            type: {
              defined: 'VolumeStats',
            },
          },
          {
            name: 'tradeStats',
            type: {
              defined: 'TradeStats',
            },
          },
          {
            name: 'longPositions',
            type: {
              defined: 'PositionStats',
            },
          },
          {
            name: 'shortPositions',
            type: {
              defined: 'PositionStats',
            },
          },
          {
            name: 'borrowRateState',
            type: {
              defined: 'BorrowRateState',
            },
          },
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'tokenAccountBump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'customOracle',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'price',
            type: 'u64',
          },
          {
            name: 'expo',
            type: 'i32',
          },
          {
            name: 'conf',
            type: 'u64',
          },
          {
            name: 'publishTime',
            type: 'i64',
          },
        ],
      },
    },
    {
      name: 'perpetuals',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'admin',
            type: 'publicKey',
          },
          {
            name: 'permissions',
            type: {
              defined: 'Permissions',
            },
          },
          {
            name: 'pools',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'transferAuthorityBump',
            type: 'u8',
          },
          {
            name: 'perpetualsBump',
            type: 'u8',
          },
          {
            name: 'inceptionTime',
            type: 'i64',
          },
        ],
      },
    },
    {
      name: 'pool',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'custodies',
            type: {
              vec: 'publicKey',
            },
          },
          {
            name: 'ratios',
            type: {
              vec: {
                defined: 'TokenRatios',
              },
            },
          },
          {
            name: 'aumUsd',
            type: 'u128',
          },
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'lpTokenBump',
            type: 'u8',
          },
          {
            name: 'inceptionTime',
            type: 'i64',
          },
          {
            name: 'nbStableCustody',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'position',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'pool',
            type: 'publicKey',
          },
          {
            name: 'custody',
            type: 'publicKey',
          },
          {
            name: 'collateralCustody',
            type: 'publicKey',
          },
          {
            name: 'openTime',
            type: 'i64',
          },
          {
            name: 'updateTime',
            type: 'i64',
          },
          {
            name: 'side',
            type: {
              defined: 'Side',
            },
          },
          {
            name: 'price',
            type: 'u64',
          },
          {
            name: 'sizeUsd',
            type: 'u64',
          },
          {
            name: 'borrowSizeUsd',
            type: 'u64',
          },
          {
            name: 'collateralUsd',
            type: 'u64',
          },
          {
            name: 'unrealizedProfitUsd',
            type: 'u64',
          },
          {
            name: 'unrealizedLossUsd',
            type: 'u64',
          },
          {
            name: 'cumulativeInterestSnapshot',
            type: 'u128',
          },
          {
            name: 'lockedAmount',
            type: 'u64',
          },
          {
            name: 'collateralAmount',
            type: 'u64',
          },
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'entryFeeUsd',
            type: 'u64',
          },
          {
            name: 'exitFeeUsd',
            type: 'u64',
          },
          {
            name: 'liquidationFeeUsd',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'staking',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'stakingType',
            type: {
              defined: 'StakingType',
            },
          },
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'stakedTokenVaultBump',
            type: 'u8',
          },
          {
            name: 'rewardTokenVaultBump',
            type: 'u8',
          },
          {
            name: 'lmRewardTokenVaultBump',
            type: 'u8',
          },
          {
            name: 'nbLockedTokens',
            type: 'u64',
          },
          {
            name: 'stakedTokenMint',
            type: 'publicKey',
          },
          {
            name: 'stakedTokenDecimals',
            type: 'u8',
          },
          {
            name: 'rewardTokenMint',
            type: 'publicKey',
          },
          {
            name: 'rewardTokenDecimals',
            type: 'u8',
          },
          {
            name: 'resolvedRewardTokenAmount',
            type: 'u64',
          },
          {
            name: 'resolvedStakedTokenAmount',
            type: 'u64',
          },
          {
            name: 'resolvedLmRewardTokenAmount',
            type: 'u64',
          },
          {
            name: 'resolvedLmStakedTokenAmount',
            type: 'u64',
          },
          {
            name: 'currentStakingRound',
            type: {
              defined: 'StakingRound',
            },
          },
          {
            name: 'nextStakingRound',
            type: {
              defined: 'StakingRound',
            },
          },
          {
            name: 'resolvedStakingRounds',
            type: {
              vec: {
                defined: 'StakingRound',
              },
            },
          },
        ],
      },
    },
    {
      name: 'userProfile',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'nickname',
            type: 'string',
          },
          {
            name: 'createdAt',
            type: 'i64',
          },
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'swapCount',
            type: 'u64',
          },
          {
            name: 'swapVolumeUsd',
            type: 'u64',
          },
          {
            name: 'swapFeePaidUsd',
            type: 'u64',
          },
          {
            name: 'shortStats',
            type: {
              defined: 'TradingStats',
            },
          },
          {
            name: 'longStats',
            type: {
              defined: 'TradingStats',
            },
          },
          {
            name: 'sponsor',
            type: {
              option: 'publicKey',
            },
          },
          {
            name: 'referalClaimedVolumeUsd',
            type: 'u64',
          },
          {
            name: 'sponsorClaimedRewardAmount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'userStaking',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'threadAuthorityBump',
            type: 'u8',
          },
          {
            name: 'stakesClaimCronThreadId',
            type: 'u64',
          },
          {
            name: 'liquidStake',
            type: {
              defined: 'LiquidStake',
            },
          },
          {
            name: 'lockedStakes',
            type: {
              vec: {
                defined: 'LockedStake',
              },
            },
          },
        ],
      },
    },
    {
      name: 'vest',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'originBucket',
            type: {
              defined: 'BucketName',
            },
          },
          {
            name: 'unlockStartTimestamp',
            type: 'i64',
          },
          {
            name: 'unlockEndTimestamp',
            type: 'i64',
          },
          {
            name: 'claimedAmount',
            type: 'u64',
          },
          {
            name: 'lastClaimTimestamp',
            type: 'i64',
          },
          {
            name: 'owner',
            type: 'publicKey',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'AddCollateralParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'collateral',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'AddCustodyParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'isStable',
            type: 'bool',
          },
          {
            name: 'oracle',
            type: {
              defined: 'OracleParams',
            },
          },
          {
            name: 'pricing',
            type: {
              defined: 'PricingParams',
            },
          },
          {
            name: 'permissions',
            type: {
              defined: 'Permissions',
            },
          },
          {
            name: 'fees',
            type: {
              defined: 'Fees',
            },
          },
          {
            name: 'borrowRate',
            type: {
              defined: 'BorrowRateParams',
            },
          },
          {
            name: 'ratios',
            type: {
              vec: {
                defined: 'TokenRatios',
              },
            },
          },
        ],
      },
    },
    {
      name: 'AddGenesisLiquidityParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'lpStakeResolutionThreadId',
            type: 'u64',
          },
          {
            name: 'amountIn',
            type: 'u64',
          },
          {
            name: 'minLpAmountOut',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'AddLiquidStakeParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'AddLiquidityParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amountIn',
            type: 'u64',
          },
          {
            name: 'minLpAmountOut',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'AddLockedStakeParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'stakeResolutionThreadId',
            type: 'u64',
          },
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'lockedDays',
            type: 'u32',
          },
        ],
      },
    },
    {
      name: 'AddPoolParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'name',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'AddVestParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'originBucket',
            type: {
              defined: 'BucketName',
            },
          },
          {
            name: 'unlockStartTimestamp',
            type: 'i64',
          },
          {
            name: 'unlockEndTimestamp',
            type: 'i64',
          },
        ],
      },
    },
    {
      name: 'ClosePositionParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'price',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'EditUserProfileParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'nickname',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'FinalizeLockedStakeParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'threadId',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'GetAddLiquidityAmountAndFeeParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amountIn',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'GetAssetsUnderManagementParams',
      type: {
        kind: 'struct',
        fields: [],
      },
    },
    {
      name: 'GetEntryPriceAndFeeParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'collateral',
            type: 'u64',
          },
          {
            name: 'leverage',
            type: 'u64',
          },
          {
            name: 'side',
            type: {
              defined: 'Side',
            },
          },
        ],
      },
    },
    {
      name: 'GetExitPriceAndFeeParams',
      type: {
        kind: 'struct',
        fields: [],
      },
    },
    {
      name: 'GetLiquidationPriceParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'addCollateral',
            type: 'u64',
          },
          {
            name: 'removeCollateral',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'GetLpTokenPriceParams',
      type: {
        kind: 'struct',
        fields: [],
      },
    },
    {
      name: 'GetOpenPositionWithSwapAmountAndFeesParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'collateralAmount',
            type: 'u64',
          },
          {
            name: 'leverage',
            type: 'u64',
          },
          {
            name: 'side',
            type: {
              defined: 'Side',
            },
          },
        ],
      },
    },
    {
      name: 'GetPnlParams',
      type: {
        kind: 'struct',
        fields: [],
      },
    },
    {
      name: 'GetRemoveLiquidityAmountAndFeeParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'lpAmountIn',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'GetSwapAmountAndFeesParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amountIn',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'IncreasePositionParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'price',
            type: 'u64',
          },
          {
            name: 'collateral',
            type: 'u64',
          },
          {
            name: 'leverage',
            type: 'u64',
          },
          {
            name: 'side',
            type: {
              defined: 'Side',
            },
          },
        ],
      },
    },
    {
      name: 'InitStakingParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'stakingType',
            type: {
              defined: 'StakingType',
            },
          },
        ],
      },
    },
    {
      name: 'InitUserProfileParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'nickname',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'InitUserStakingParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'stakesClaimCronThreadId',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'InitParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'allowSwap',
            type: 'bool',
          },
          {
            name: 'allowAddLiquidity',
            type: 'bool',
          },
          {
            name: 'allowRemoveLiquidity',
            type: 'bool',
          },
          {
            name: 'allowOpenPosition',
            type: 'bool',
          },
          {
            name: 'allowClosePosition',
            type: 'bool',
          },
          {
            name: 'allowPnlWithdrawal',
            type: 'bool',
          },
          {
            name: 'allowCollateralWithdrawal',
            type: 'bool',
          },
          {
            name: 'allowSizeChange',
            type: 'bool',
          },
          {
            name: 'coreContributorBucketAllocation',
            type: 'u64',
          },
          {
            name: 'daoTreasuryBucketAllocation',
            type: 'u64',
          },
          {
            name: 'polBucketAllocation',
            type: 'u64',
          },
          {
            name: 'ecosystemBucketAllocation',
            type: 'u64',
          },
          {
            name: 'referalRewardsLimit',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'LiquidateParams',
      type: {
        kind: 'struct',
        fields: [],
      },
    },
    {
      name: 'MintLmTokensFromBucketParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bucketName',
            type: {
              defined: 'BucketName',
            },
          },
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'reason',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'OpenPositionWithSwapParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'price',
            type: 'u64',
          },
          {
            name: 'collateral',
            type: 'u64',
          },
          {
            name: 'leverage',
            type: 'u64',
          },
          {
            name: 'side',
            type: {
              defined: 'Side',
            },
          },
        ],
      },
    },
    {
      name: 'OpenPositionParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'price',
            type: 'u64',
          },
          {
            name: 'collateral',
            type: 'u64',
          },
          {
            name: 'leverage',
            type: 'u64',
          },
          {
            name: 'side',
            type: {
              defined: 'Side',
            },
          },
        ],
      },
    },
    {
      name: 'RemoveCollateralParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'collateralUsd',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'RemoveCustodyParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'ratios',
            type: {
              vec: {
                defined: 'TokenRatios',
              },
            },
          },
        ],
      },
    },
    {
      name: 'RemoveLiquidStakeParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'RemoveLiquidityParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'lpAmountIn',
            type: 'u64',
          },
          {
            name: 'minAmountOut',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'RemoveLockedStakeParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'lockedStakeIndex',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'RemovePoolParams',
      type: {
        kind: 'struct',
        fields: [],
      },
    },
    {
      name: 'SetCustodyConfigParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'isStable',
            type: 'bool',
          },
          {
            name: 'oracle',
            type: {
              defined: 'OracleParams',
            },
          },
          {
            name: 'pricing',
            type: {
              defined: 'PricingParams',
            },
          },
          {
            name: 'permissions',
            type: {
              defined: 'Permissions',
            },
          },
          {
            name: 'fees',
            type: {
              defined: 'Fees',
            },
          },
          {
            name: 'borrowRate',
            type: {
              defined: 'BorrowRateParams',
            },
          },
          {
            name: 'ratios',
            type: {
              vec: {
                defined: 'TokenRatios',
              },
            },
          },
        ],
      },
    },
    {
      name: 'SetCustomOraclePriceParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'price',
            type: 'u64',
          },
          {
            name: 'expo',
            type: 'i32',
          },
          {
            name: 'conf',
            type: 'u64',
          },
          {
            name: 'publishTime',
            type: 'i64',
          },
        ],
      },
    },
    {
      name: 'SetPermissionsParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'allowSwap',
            type: 'bool',
          },
          {
            name: 'allowAddLiquidity',
            type: 'bool',
          },
          {
            name: 'allowRemoveLiquidity',
            type: 'bool',
          },
          {
            name: 'allowOpenPosition',
            type: 'bool',
          },
          {
            name: 'allowClosePosition',
            type: 'bool',
          },
          {
            name: 'allowPnlWithdrawal',
            type: 'bool',
          },
          {
            name: 'allowCollateralWithdrawal',
            type: 'bool',
          },
          {
            name: 'allowSizeChange',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'SwapParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amountIn',
            type: 'u64',
          },
          {
            name: 'minAmountOut',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'TestAdminRemoveCollateralParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'collateralUsd',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'WithdrawFeesParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'WithdrawSolFeesParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'Fees',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'swapIn',
            type: 'u16',
          },
          {
            name: 'swapOut',
            type: 'u16',
          },
          {
            name: 'stableSwapIn',
            type: 'u16',
          },
          {
            name: 'stableSwapOut',
            type: 'u16',
          },
          {
            name: 'addLiquidity',
            type: 'u16',
          },
          {
            name: 'removeLiquidity',
            type: 'u16',
          },
          {
            name: 'openPosition',
            type: 'u16',
          },
          {
            name: 'closePosition',
            type: 'u16',
          },
          {
            name: 'liquidation',
            type: 'u16',
          },
          {
            name: 'feeMax',
            type: 'u16',
          },
          {
            name: 'protocolShare',
            type: 'u16',
          },
        ],
      },
    },
    {
      name: 'FeesStats',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'swapUsd',
            type: 'u64',
          },
          {
            name: 'addLiquidityUsd',
            type: 'u64',
          },
          {
            name: 'removeLiquidityUsd',
            type: 'u64',
          },
          {
            name: 'openPositionUsd',
            type: 'u64',
          },
          {
            name: 'closePositionUsd',
            type: 'u64',
          },
          {
            name: 'liquidationUsd',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'VolumeStats',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'swapUsd',
            type: 'u64',
          },
          {
            name: 'addLiquidityUsd',
            type: 'u64',
          },
          {
            name: 'removeLiquidityUsd',
            type: 'u64',
          },
          {
            name: 'openPositionUsd',
            type: 'u64',
          },
          {
            name: 'closePositionUsd',
            type: 'u64',
          },
          {
            name: 'liquidationUsd',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'TradeStats',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'profitUsd',
            type: 'u64',
          },
          {
            name: 'lossUsd',
            type: 'u64',
          },
          {
            name: 'oiLongUsd',
            type: 'u64',
          },
          {
            name: 'oiShortUsd',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'Assets',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'collateral',
            type: 'u64',
          },
          {
            name: 'protocolFees',
            type: 'u64',
          },
          {
            name: 'owned',
            type: 'u64',
          },
          {
            name: 'locked',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'PricingParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'useUnrealizedPnlInAum',
            type: 'bool',
          },
          {
            name: 'minInitialLeverage',
            type: 'u32',
          },
          {
            name: 'maxInitialLeverage',
            type: 'u32',
          },
          {
            name: 'maxLeverage',
            type: 'u32',
          },
          {
            name: 'maxPayoffMult',
            type: 'u32',
          },
          {
            name: 'maxUtilization',
            type: 'u16',
          },
          {
            name: 'maxPositionLockedUsd',
            type: 'u64',
          },
          {
            name: 'maxTotalLockedUsd',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'BorrowRateParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'baseRate',
            type: 'u64',
          },
          {
            name: 'slope1',
            type: 'u64',
          },
          {
            name: 'slope2',
            type: 'u64',
          },
          {
            name: 'optimalUtilization',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'BorrowRateState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'currentRate',
            type: 'u64',
          },
          {
            name: 'cumulativeInterest',
            type: 'u128',
          },
          {
            name: 'lastUpdate',
            type: 'i64',
          },
        ],
      },
    },
    {
      name: 'PositionStats',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'openPositions',
            type: 'u64',
          },
          {
            name: 'collateralUsd',
            type: 'u64',
          },
          {
            name: 'sizeUsd',
            type: 'u64',
          },
          {
            name: 'borrowSizeUsd',
            type: 'u64',
          },
          {
            name: 'lockedAmount',
            type: 'u64',
          },
          {
            name: 'weightedPrice',
            type: 'u128',
          },
          {
            name: 'totalQuantity',
            type: 'u128',
          },
          {
            name: 'cumulativeInterestUsd',
            type: 'u64',
          },
          {
            name: 'cumulativeInterestSnapshot',
            type: 'u128',
          },
          {
            name: 'exitFeeUsd',
            type: 'u64',
          },
          {
            name: 'liquidationFeeUsd',
            type: 'u64',
          },
          {
            name: 'stableLockedAmount',
            type: {
              array: [
                {
                  defined: 'StableLockedAmountStat',
                },
                2,
              ],
            },
          },
        ],
      },
    },
    {
      name: 'StableLockedAmountStat',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'custody',
            type: 'publicKey',
          },
          {
            name: 'lockedAmount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'OraclePrice',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'price',
            type: 'u64',
          },
          {
            name: 'exponent',
            type: 'i32',
          },
          {
            name: 'conf',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'OracleParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'oracleAccount',
            type: 'publicKey',
          },
          {
            name: 'oracleType',
            type: {
              defined: 'OracleType',
            },
          },
          {
            name: 'maxPriceError',
            type: 'u64',
          },
          {
            name: 'maxPriceAgeSec',
            type: 'u32',
          },
        ],
      },
    },
    {
      name: 'ExitPriceAndFee',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'price',
            type: 'u64',
          },
          {
            name: 'fee',
            type: 'u64',
          },
          {
            name: 'amountOut',
            type: 'u64',
          },
          {
            name: 'profitUsd',
            type: 'u64',
          },
          {
            name: 'lossUsd',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'AmountAndFee',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'fee',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'NewPositionPricesAndFee',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'entryPrice',
            type: 'u64',
          },
          {
            name: 'liquidationPrice',
            type: 'u64',
          },
          {
            name: 'entryFee',
            type: 'u64',
          },
          {
            name: 'exitFee',
            type: 'u64',
          },
          {
            name: 'liquidationFee',
            type: 'u64',
          },
          {
            name: 'size',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'OpenPositionWithSwapAmountAndFees',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'entryPrice',
            type: 'u64',
          },
          {
            name: 'liquidationPrice',
            type: 'u64',
          },
          {
            name: 'swapFeeIn',
            type: 'u64',
          },
          {
            name: 'swapFeeOut',
            type: 'u64',
          },
          {
            name: 'openPositionFee',
            type: 'u64',
          },
          {
            name: 'exitFee',
            type: 'u64',
          },
          {
            name: 'liquidationFee',
            type: 'u64',
          },
          {
            name: 'size',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'SwapAmountAndFees',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amountOut',
            type: 'u64',
          },
          {
            name: 'feeIn',
            type: 'u64',
          },
          {
            name: 'feeOut',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'ProfitAndLoss',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'profit',
            type: 'u64',
          },
          {
            name: 'loss',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'Permissions',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'allowSwap',
            type: 'bool',
          },
          {
            name: 'allowAddLiquidity',
            type: 'bool',
          },
          {
            name: 'allowRemoveLiquidity',
            type: 'bool',
          },
          {
            name: 'allowOpenPosition',
            type: 'bool',
          },
          {
            name: 'allowClosePosition',
            type: 'bool',
          },
          {
            name: 'allowPnlWithdrawal',
            type: 'bool',
          },
          {
            name: 'allowCollateralWithdrawal',
            type: 'bool',
          },
          {
            name: 'allowSizeChange',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'TokenRatios',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'target',
            type: 'u64',
          },
          {
            name: 'min',
            type: 'u64',
          },
          {
            name: 'max',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'StakingRound',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'startTime',
            type: 'i64',
          },
          {
            name: 'rate',
            type: 'u64',
          },
          {
            name: 'totalStake',
            type: 'u64',
          },
          {
            name: 'totalClaim',
            type: 'u64',
          },
          {
            name: 'lmRate',
            type: 'u64',
          },
          {
            name: 'lmTotalStake',
            type: 'u64',
          },
          {
            name: 'lmTotalClaim',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'TradingStats',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'openedPositionCount',
            type: 'u64',
          },
          {
            name: 'liquidatedPositionCount',
            type: 'u64',
          },
          {
            name: 'openingAverageLeverage',
            type: 'u64',
          },
          {
            name: 'openingSizeUsd',
            type: 'u64',
          },
          {
            name: 'profitsUsd',
            type: 'u64',
          },
          {
            name: 'lossesUsd',
            type: 'u64',
          },
          {
            name: 'feePaidUsd',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'LiquidStake',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'stakeTime',
            type: 'i64',
          },
          {
            name: 'claimTime',
            type: 'i64',
          },
          {
            name: 'overlapTime',
            type: 'i64',
          },
          {
            name: 'overlapAmount',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'LockedStake',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'stakeTime',
            type: 'i64',
          },
          {
            name: 'claimTime',
            type: 'i64',
          },
          {
            name: 'lockDuration',
            type: 'u64',
          },
          {
            name: 'rewardMultiplier',
            type: 'u32',
          },
          {
            name: 'lmRewardMultiplier',
            type: 'u32',
          },
          {
            name: 'voteMultiplier',
            type: 'u32',
          },
          {
            name: 'amountWithRewardMultiplier',
            type: 'u64',
          },
          {
            name: 'amountWithLmRewardMultiplier',
            type: 'u64',
          },
          {
            name: 'resolved',
            type: 'bool',
          },
          {
            name: 'stakeResolutionThreadId',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'BucketName',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'CoreContributor',
          },
          {
            name: 'DaoTreasury',
          },
          {
            name: 'PoL',
          },
          {
            name: 'Ecosystem',
          },
        ],
      },
    },
    {
      name: 'FeesMode',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'Fixed',
          },
          {
            name: 'Linear',
          },
          {
            name: 'Optimal',
          },
        ],
      },
    },
    {
      name: 'OracleType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'Custom',
          },
          {
            name: 'Pyth',
          },
        ],
      },
    },
    {
      name: 'Side',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'Long',
          },
          {
            name: 'Short',
          },
        ],
      },
    },
    {
      name: 'CollateralChange',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'None',
          },
          {
            name: 'Add',
          },
          {
            name: 'Remove',
          },
        ],
      },
    },
    {
      name: 'StakingType',
      type: {
        kind: 'enum',
        variants: [
          {
            name: 'LM',
          },
          {
            name: 'LP',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'MathOverflow',
      msg: 'Overflow in arithmetic operation',
    },
    {
      code: 6001,
      name: 'UnsupportedOracle',
      msg: 'Unsupported price oracle',
    },
    {
      code: 6002,
      name: 'InvalidOracleAccount',
      msg: 'Invalid oracle account',
    },
    {
      code: 6003,
      name: 'InvalidOracleState',
      msg: 'Invalid oracle state',
    },
    {
      code: 6004,
      name: 'StaleOraclePrice',
      msg: 'Stale oracle price',
    },
    {
      code: 6005,
      name: 'InvalidOraclePrice',
      msg: 'Invalid oracle price',
    },
    {
      code: 6006,
      name: 'InvalidEnvironment',
      msg: 'Instruction is not allowed in production',
    },
    {
      code: 6007,
      name: 'InvalidPoolState',
      msg: 'Invalid pool state',
    },
    {
      code: 6008,
      name: 'InvalidVestState',
      msg: 'Invalid vest state',
    },
    {
      code: 6009,
      name: 'InvalidStakeState',
      msg: 'Invalid stake state',
    },
    {
      code: 6010,
      name: 'InvalidCustodyState',
      msg: 'Invalid custody state',
    },
    {
      code: 6011,
      name: 'InvalidCollateralCustody',
      msg: 'Invalid collateral custody',
    },
    {
      code: 6012,
      name: 'InvalidPositionState',
      msg: 'Invalid position state',
    },
    {
      code: 6013,
      name: 'InvalidStakingRoundState',
      msg: 'Invalid staking round state',
    },
    {
      code: 6014,
      name: 'InvalidPerpetualsConfig',
      msg: 'Invalid perpetuals config',
    },
    {
      code: 6015,
      name: 'InvalidPoolConfig',
      msg: 'Invalid pool config',
    },
    {
      code: 6016,
      name: 'InvalidCustodyConfig',
      msg: 'Invalid custody config',
    },
    {
      code: 6017,
      name: 'InsufficientAmountReturned',
      msg: 'Insufficient token amount returned',
    },
    {
      code: 6018,
      name: 'MaxPriceSlippage',
      msg: 'Price slippage limit exceeded',
    },
    {
      code: 6019,
      name: 'MaxLeverage',
      msg: 'Position leverage limit exceeded',
    },
    {
      code: 6020,
      name: 'MinLeverage',
      msg: 'Position leverage under minimum',
    },
    {
      code: 6021,
      name: 'CustodyAmountLimit',
      msg: 'Custody amount limit exceeded',
    },
    {
      code: 6022,
      name: 'PositionAmountLimit',
      msg: 'Position amount limit exceeded',
    },
    {
      code: 6023,
      name: 'TokenRatioOutOfRange',
      msg: 'Token ratio out of range',
    },
    {
      code: 6024,
      name: 'UnsupportedToken',
      msg: 'Token is not supported',
    },
    {
      code: 6025,
      name: 'InstructionNotAllowed',
      msg: 'Instruction is not allowed at this time',
    },
    {
      code: 6026,
      name: 'MaxUtilization',
      msg: 'Token utilization limit exceeded',
    },
    {
      code: 6027,
      name: 'InvalidGovernanceProgram',
      msg: "Governance program do not match Cortex's",
    },
    {
      code: 6028,
      name: 'InvalidGovernanceRealm',
      msg: "Governance realm do not match Cortex's",
    },
    {
      code: 6029,
      name: 'InvalidVestingUnlockTime',
      msg: 'Vesting unlock time is too close or passed',
    },
    {
      code: 6030,
      name: 'InvalidStakingLockingTime',
      msg: 'Invalid staking locking time',
    },
    {
      code: 6031,
      name: 'CannotFoundStake',
      msg: 'Cannot found stake',
    },
    {
      code: 6032,
      name: 'UnresolvedStake',
      msg: 'Stake is not resolved',
    },
    {
      code: 6033,
      name: 'BucketMintLimit',
      msg: 'Reached bucket mint limit',
    },
    {
      code: 6034,
      name: 'GenesisAlpLimitReached',
      msg: 'Genesis ALP add liquidity limit reached',
    },
    {
      code: 6035,
      name: 'PermissionlessOracleMissingSignature',
      msg: 'Permissionless oracle update must be preceded by Ed25519 signature verification instruction',
    },
    {
      code: 6036,
      name: 'PermissionlessOracleMalformedEd25519Data',
      msg: 'Ed25519 signature verification data does not match expected format',
    },
    {
      code: 6037,
      name: 'PermissionlessOracleSignerMismatch',
      msg: 'Ed25519 signature was not signed by the oracle authority',
    },
    {
      code: 6038,
      name: 'PermissionlessOracleMessageMismatch',
      msg: 'Signed message does not match instruction params',
    },
    {
      code: 6039,
      name: 'CustodyStableLockedAmountNotFound',
      msg: 'Cannot find custody stable locked amount',
    },
    {
      code: 6040,
      name: 'CustodyNotFound',
      msg: 'Cannot find custody',
    },
    {
      code: 6041,
      name: 'InsufficientBucketReserve',
      msg: 'The bucket does not contain enough token for reserving this allocation',
    },
    {
      code: 6042,
      name: 'UserNicknameTooLong',
      msg: 'User nickname exceed 24 characters',
    },
    {
      code: 6043,
      name: 'UserNicknameTooShort',
      msg: 'User nickname is less than 3 characters',
    },
    {
      code: 6044,
      name: 'SelfSponsored',
      msg: 'User cannot sponsor itself',
    },
    {
      code: 6045,
      name: 'ReferalRewardLimitReached',
      msg: 'Referal reward limit reached',
    },
  ],
};
