import { ConnectorNames } from 'literals';

import { Config } from './types';

const connectors: Config[] = [
  {
    title: 'Metamask',
    icon: 'metamask.svg',
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'TrustWallet',
    icon: 'trust.svg',
    connectorId: ConnectorNames.Injected,
  },
  // {
  //   title: 'MathWallet',
  //   icon: 'MathWallet.svg',
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: 'TokenPocket',
  //   icon: 'TokenPocket.svg',
  //   connectorId: ConnectorNames.Injected,
  // },
  {
    title: "WalletConnect",
    icon: 'WalletConnect.svg',
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: 'Binance Chain Wallet',
    icon: 'bscwallet.svg',
    connectorId: ConnectorNames.BSC,
  },
];

export default connectors;
