import React from 'react';
import { useWalletModal } from 'modals/WalletModal';

interface Props {
  login: any;
  logout: () => void;
}
function ConnectWalletButton({ login, logout }: Props) {
  const { onPresentConnectModal } = useWalletModal(login, logout);
  return (
    <button type="button" className="btn btn-link nav-link" onClick={onPresentConnectModal}>
      <img src="/media/images/icon-login.png" alt="Login" />
    </button>
  );
}

export default ConnectWalletButton;
