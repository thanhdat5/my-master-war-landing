import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import copy from 'copy-to-clipboard';

import { showAlert } from 'actions';
import { connectorLocalStorageKey, NROUTES } from 'literals';

import NImage from 'components/NImage';

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

function AccountModal({ account, logout, onDismiss = () => null }: Props) {
  const dispatch = useDispatch();
  const accountEllipsis = account
    ? `${account.substring(0, 8)}...${account.substring(account.length - 8)}`
    : null;
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleClickLogout = (e: any) => {
    e.preventDefault();
    logout();
    window.localStorage.removeItem(connectorLocalStorageKey);
    onDismiss();
  };

  const handleCopy = (e: any) => {
    e.preventDefault();
    copy(account);
    setCopiedAddress(true);
    dispatch(showAlert('Copied', { variant: 'success', timeout: 1 }));
  };

  const handleCloseModal = (e: any) => {
    e.preventDefault();
    onDismiss();
  };

  return (
    <React.Fragment>
      <Modal
        show={true}
        id="accountModal"
        className="o-modal"
        centered={true}
        size="sm"
        onHide={onDismiss}
      >
        <Modal.Body>
          <a className="o-modal-close" href="#" onClick={handleCloseModal}>
            <i className="mdi mdi-close-circle" />
          </a>
          <div className="d-flex align-items-center mb-3">
            <NImage src="default-user.png" width="40px" height="40px" className="rounded-10 me-3" />
            <div className="">
              <div className="text-dark font-13 font-700">CREATOR</div>
              <div className="text-muted font-14">
                {accountEllipsis}
                <a href="#" className="text-decoration-none text-secondary" onClick={handleCopy}>
                  <i className="mdi mdi-content-copy ms-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <NImage src="bsc.png" width="40px" height="40px" className="rounded-10 me-3" />
            <div className="">
              <div className="text-dark font-13 font-700">1.00 BNB</div>
              <div className="text-muted font-14">$2.53 - Demo</div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <NImage src="nbsc.png" width="40px" height="40px" className="rounded-10 me-3" />
            <div className="">
              <div className="text-dark font-13 font-700">0.00 NBSC - Demo</div>
              <div className="text-muted font-13">
                <a className="text-decoration-none" href="#">
                  How To Earn
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="o-link-full mb-2">
            <Link
              to={NROUTES.PROFILE}
              onClick={onDismiss}
              className="text-dark text-decoration-none font-14 font-700"
            >
              My Profile
            </Link>
          </div>
          <div className="o-link-full">
            <a
              onClick={handleClickLogout}
              className="text-danger text-decoration-none font-14 font-700"
            >
              <b>Logout</b>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default AccountModal;
