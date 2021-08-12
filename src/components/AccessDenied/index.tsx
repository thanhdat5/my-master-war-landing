import React from 'react';
import { useWalletModal } from 'modals/WalletModal';

interface Props {
  title: string;
  login: any;
  logout: () => void;
}
function AccessDenied({ title, login, logout }: Props) {
  const { onPresentConnectModal } = useWalletModal(login, logout);
  return (
    <div className="o-access-denied text-center py-5">
      <h1>
        <b>{title}</b>
      </h1>
      <h2 className="font-18">
        <b>Check your stats and collect achievements</b>
      </h2>
      <hr />
      <h2>
        <b>Oops!</b>
      </h2>
      <p>Please connect your wallet to continue</p>
      <button
        type="button"
        className="btn btn-primary border-radius-12 py-2 px-4 btn-connect-wallet"
        onClick={onPresentConnectModal}
      >
        <div className="py-1">
          <b>UNLOCK WALLET</b>
        </div>
      </button>
    </div>
  );
}
export default AccessDenied;
