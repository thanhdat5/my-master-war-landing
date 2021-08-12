import React from 'react';

import { connectorLocalStorageKey } from 'literals';

import NImage from 'components/NImage';

import { Config, Login } from './types';

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
}

function WalletCard({ login, walletConfig, onDismiss }: Props) {
  const { title, icon } = walletConfig;
  const handleCardClick = () => {
    login(walletConfig.connectorId);
    window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
    onDismiss();
  };

  return (
    <div
      onClick={handleCardClick}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      className="tkg-connect-wallet-method"
    >
      <NImage src={icon} width="30px" className="me-2" />
      <div>{title}</div>
    </div>
  );
}

export default WalletCard;
