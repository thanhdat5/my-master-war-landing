import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';

// import { showMyProfileModal } from 'actions';

import Logo from 'components/Logo';
import NImage from 'components/NImage';
import { NROUTES } from 'literals';
import { useWeb3React } from '@web3-react/core';
import useAuth from 'hooks/useAuth';
import ConnectWalletButton from 'components/ConnectWalletButton';

export default function HeaderMobile() {
  // const dispatch = useDispatch();
  // const openMyProfileModal = (e: any) => {
  //   e.preventDefault();
  //   dispatch(showMyProfileModal(null));
  // };
  const { login, logout } = useAuth();
  const { account } = useWeb3React()

  const handleClickMenuHeader = () => {
    $('#navbarSupportedContent').toggleClass('show');
  };

  const handleClickHelpModal = (e:any)=>{
    e.preventDefault();
    handleClickMenuHeader();
  }

  return (
    <React.Fragment>
      <nav className="tkg-navbar navbar navbar-expand-md navbar-light fixed-top">
        <div className="container-fluid">
          <Logo />
          <button onClick={handleClickMenuHeader} className="tkg-navbar-toggler navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
          <div className="tkg-navbar-collapse collapse navbar-collapse align-items-end" id="navbarSupportedContent">
            <ul className="tkg-navbar-nav navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={NROUTES.HOMEPAGE} className="nav-link active" aria-current="page">
                  <NImage src="icon-dashboard.png" alt="Dashboard" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to={NROUTES.MARKET} className="nav-link">
                  <NImage src="icon-marketplace.png" alt="Marketplace" />
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#helpModal"
                  onClick={handleClickHelpModal}
                >
                  <NImage src="icon-help.png" alt="Help" />
                </a>
              </li>
            </ul>
            <ul className="tkg-navbar-nav-auth tkg-navbar-nav navbar-nav ms-auto mb-0 align justify-content-md-end justify-content-between">
              <li className="nav-item">
                <div className="tkg-balance">
                  <NImage src="icon-mat-sold.png" alt="MAT" />
                  <span>1,000,000 MAT</span>
                </div>
              </li>
              <li className="nav-item">
                {account ?
                  <a className="nav-link tkg-account" href="#" data-bs-toggle="modal" data-bs-target="#helpModal">
                    <NImage src="account-bg.png" alt="Account" />
                  </a> :
                  <ConnectWalletButton login={login} logout={logout} />

                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
