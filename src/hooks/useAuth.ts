import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { NoBscProviderError } from '@binance-chain/bsc-connector';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';

import {

  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';

import { showAlert } from 'actions';
import { connectorLocalStorageKey, ConnectorNames } from 'literals';
import { bscConnector, injected, walletConnect,} from 'connectors';


function useAuth() {
  const dispatch = useDispatch();
  const { activate, deactivate } = useWeb3React();


  const connectorsByName: { [connectorName in ConnectorNames]: any } = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.BSC]: bscConnector,
    [ConnectorNames.WalletConnect]: walletConnect,
  };

  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID];
    if (connector) {


      activate(connector, async (error: Error) => {
        window.localStorage.removeItem(connectorLocalStorageKey);
        if (error instanceof UnsupportedChainIdError) {
          dispatch(
            showAlert('Unsupported Chain Id Error. Check your chain Id.', {
              variant: 'danger',
              timeout: 5,
            }),
          );
        } else if (
          error instanceof NoEthereumProviderError ||
          error instanceof NoBscProviderError
        ) {
          dispatch(showAlert('No provider was found', { variant: 'danger', timeout: 5 }));
        } else if (error instanceof UserRejectedRequestErrorInjected) {
          dispatch(
            showAlert('Please authorize to access your account', { variant: 'danger', timeout: 5 }),
          );
        } else {
          dispatch(showAlert(error.message, { variant: 'danger', timeout: 5 }));
        }
      });
    } else {
      dispatch(showAlert('The connector config is wrong', { variant: 'danger', timeout: 5 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { login, logout: deactivate };
}

export default useAuth;


