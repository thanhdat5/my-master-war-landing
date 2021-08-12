/**
 * Configuration
 * @module config
 */
const extensionName = {
  metamask: 'METAMASK',
  binanceExtension: 'BINANCE_EXTENSION',
  trustWallet: 'TRUST_WALLET',
};
const config = {
  name: 'MAT NFT Market',
  description: 'BSC NFT Market',
  BLOCKCHAIN_NETWORK: 'MAINNET',
  connectors: [
    {
      key: extensionName.metamask,
      title: 'Metamask',
      icon: 'metamask.svg',
      description: 'Desktop',
    },
    {
      key: extensionName.trustWallet,
      title: 'Trust Wallet',
      icon: 'trust.svg',
      description: '',
    },
    {
      key: extensionName.binanceExtension,
      title: 'Binance Wallet',
      icon: 'bscwallet.svg',
      description: '',
    },
  ],
  extensionName,
  chainId: {
    bscMainnet: 56,
    bscTestnet: 97,
  },
};

export const SORT_TYPE = [
  { key: '1', label: "ID giảm dần" },
  { key: '2', label: "ID tăng dần" },
  { key: '3', label: "Giá từ thấp đến cao" },
  { key: '4', label: "Giá từ cao đến thấp" },
  { key: '5', label: "Mới nhất" }
];

export default config;
