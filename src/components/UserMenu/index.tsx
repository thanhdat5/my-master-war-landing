import React from 'react';
import { useWalletModal } from 'modals/WalletModal';

import NImage from 'components/NImage';

interface Props {
  account?: string;
  login: any;
  logout: () => void;
}
function UserMenu({ account, login, logout }: Props) {
  const { onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account
    ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}`
    : null;
  const openMyProfileModal = (e: any) => {
    e.preventDefault();
    onPresentAccountModal();
  };
  return (
    <div className="o-user-menu">
      <a
        href="#"
        onClick={e => {
          openMyProfileModal(e);
        }}
        className="d-flex align-items-center text-decoration-none"
      >
        <NImage src="default-user.png" width="32" height="32" className="rounded-10 me-2" />
        <div className="lh-1-5">
          <div className="text-dark font-12">
            <strong>CREATOR</strong>
          </div>
          <div className="text-muted font-13">{accountEllipsis}</div>
        </div>
      </a>
    </div>
  );
}

export default UserMenu;
