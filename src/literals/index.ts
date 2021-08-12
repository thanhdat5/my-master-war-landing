import { keyMirror } from 'modules/helpers';

import { Status } from 'types';

export const NROUTES = {
  HOMEPAGE: '/',
  MARKET: '/market',
  ACTIVITY: '/activity',
  ARTISTS: '/artists',
  EXPLORE: '/explore',
  NFT_DETAIL: '/detail',
  PAGE_NOT_FOUND: '/page-not-found',
  ACCESS_DENIED: '/access-denied',
  PROFILE: '/profile',
  RANKING: '/ranking',
  TERMS_OF_SERVICE: '/terms-of-service',
};

export const ActionTypes = keyMirror({
  GITHUB_GET_REPOS_REQUEST: undefined,
  GITHUB_GET_REPOS_SUCCESS: undefined,
  GITHUB_GET_REPOS_FAILURE: undefined,
  HIDE_ALERT: undefined,
  SHOW_ALERT: undefined,
  USER_LOGIN_REQUEST: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT_REQUEST: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
  SHOW_MY_PROFILE_MODAL: undefined,
  HIDE_MY_PROFILE_MODAL: undefined,
  SHOW_SUBMIT_NFT_MODAL: undefined,
  HIDE_SUBMIT_NFT_MODAL: undefined,
  SUBMIT_NFT_SUCCESS: undefined,
  SUBMIT_NFT_FAILURE: undefined,
  SHOW_SUBMIT_NFT_SUCCESS_MODAL: undefined,
  HIDE_SUBMIT_NFT_SUCCESS_MODAL: undefined,
  SHOW_UPDATE_PROFILE_MODAL: undefined,
  HIDE_UPDATE_PROFILE_MODAL: undefined,
  SHOW_TERMS_OF_SERVICE_MODAL: undefined,
  HIDE_TERMS_OF_SERVICE_MODAL: undefined,
  SHOW_HELP_MODAL: undefined,
  HIDE_HELP_MODAL: undefined,
  CONNECT_WALLET_SUCCESS: undefined,
  ENABLE_WALLET_SUCCESS: undefined,
  GET_BNB_BALANCE_SUCCESS: undefined,
  SET_LATEST_BLOCK_NUMBER: undefined,
});

export const STATUS: Status = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
export const connectorLocalStorageKey = 'connectorId';
export enum ConnectorNames {
  Injected = 'injected',
  BSC = 'bsc',
  WalletConnect = 'WalletConnect'
}
export const NETWORK_CHAIN_ID = 97; // parseInt(process.env.REACT_APP_CHAIN_ID ?? '56');
export const NETWORK_URL = 'https://data-seed-prebsc-1-s1.binance.org:8545';
export const NetworkContextName = 'NETWORK';


export declare enum ChainId{
  MAINNET= 56,
  TESTNET= 97
}

export const DEPOSIT_CONTRACT = "0xd03e9cbb40d37135265c2317c73b120b733935cf"