import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import useAuth from 'hooks/useAuth';
import { useWalletModal } from 'modals/WalletModal';

import config from 'config';

import { NROUTES } from 'literals';

import Home from 'routes/Home';
import Market from 'routes/Market';
import NFTDetail from 'routes/NFTDetail';
import NotFound from 'routes/NotFound';

import RoutePublic from 'containers/RoutePublic';
import SystemAlerts from 'containers/SystemAlerts';

import Footer from 'components/Footer';
import HeaderMobile from 'components/HeaderMobile';
import ScrollToTop from 'components/ScrollToTop';
import Web3ReactManager from 'components/Web3ReactManager';
import HelpModal from 'components/HelpModal';

function Root() {

  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout);
  const { account } = useWeb3React();
  const [init, setInit] = useState(false);

  useEffect(() => {
    window.onload = () => {
      if (!account) {
        onPresentConnectModal();
      }
      setInit(true);

      window.setTimeout(() => {
        $('.tkg-loading').fadeOut(400);
    }, 2600)
    };
  }, [init, account]);
  return (
    <React.Fragment>
      <ScrollToTop />
      <Helmet
        defer={false}
        htmlAttributes={{ lang: 'pt-br' }}
        encodeSpecialCharacters={true}
        defaultTitle={config.name}
        titleTemplate={`%s | ${config.name}`}
        titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
      />
      <HeaderMobile />
      <main className="tkg-main">
        <Web3ReactManager>
          <Switch>
            <RoutePublic path="/" exact to={NROUTES.HOMEPAGE} component={Home} />
            <RoutePublic path={NROUTES.HOMEPAGE} exact component={Home} />
            <RoutePublic path={NROUTES.MARKET} exact component={Market} />
            <RoutePublic path={NROUTES.NFT_DETAIL} exact component={NFTDetail} />
            {/*   <RoutePublic path={NROUTES.PROFILE} exact component={Profile} />
              <RoutePublic path={NROUTES.RANKING} exact component={Ranking} />
              <RoutePublic path={NROUTES.ACTIVITY} exact component={Activity} />
              <RoutePublic path={NROUTES.ARTISTS} exact component={Artists} />
              <RoutePublic path={NROUTES.TERMS_OF_SERVICE} exact component={TermsOfService} />
              <RoutePublic path={NROUTES.ACCESS_DENIED} exact component={AccessDenied} /> */}
            <Route component={NotFound} />
          </Switch>
        </Web3ReactManager>
      </main>
      <HelpModal />
      <SystemAlerts />
      <Footer />
    </React.Fragment>
  );
}

export default Root;
