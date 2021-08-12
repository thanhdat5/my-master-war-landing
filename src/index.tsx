import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';
import ModalProvider from 'modals/ModalsContext';

import getLibrary from 'modules/helpers';
import history from 'modules/history';

import { showAlert } from 'actions';
import { NetworkContextName } from 'literals';
import { configStore } from 'store';

import ErrorHandler from 'containers/ErrorHandler';
import GlobalStyles from 'containers/GlobalStyles';

import Loader from 'components/Loader';
import Reload from 'components/Reload';

import reportWebVitals from './reportWebVitals';
import Root from './Root';
import { register } from './serviceWorkerRegistration';

const { store, persistor } = configStore();
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

// @ts-ignore
declare global {
  // tslint:disable-next-line
  interface Window {
    web3: any;
    ethereum: any;
    Web3Modal: any;
    Box: any;
    box: any;
    space: any;
    [name: string]: any;
    store: any;
  }
}

window.store = store;

ReactDOM.render(
  <Router history={history}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <PersistGate loading={<Loader size={100} block />} persistor={persistor}>
            <ErrorHandler>
              <HelmetProvider>
                <ModalProvider>
                  <Root />
                </ModalProvider>
              </HelmetProvider>
            </ErrorHandler>
            <GlobalStyles />
          </PersistGate>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </Router>,
  document.getElementById('root'),
);

/* istanbul ignore next */
register({
  onUpdate: () => {
    store.dispatch(showAlert(<Reload />, { id: 'sw-update', icon: 'bolt', timeout: 0 }));
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log); //eslint-disable-line no-console
