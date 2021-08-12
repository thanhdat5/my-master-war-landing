import { REHYDRATE } from 'redux-persist';

import { createReducer } from 'modules/helpers';

import { ActionTypes } from 'literals';

import { AppState } from 'types';

export const appState: AppState = {
  alerts: [],
  showProfileModal: false,
  showSubmitNFTModal: false,
  showSubmitNFTSuccessModal: false,
  showUpdateProfileModal: false,
  showTermsOfServiceModal: false,
  isConnectWallet: false,
  walletUtils: null,
  walletAddress: '',
  showHelpModal: false,
  bnbBalance: 0,
  latestBlockNumber: 0,
};

export default {
  app: createReducer<AppState>(
    {
      [REHYDRATE]: draft => {
        draft.alerts = [];
      },
      [ActionTypes.HIDE_ALERT]: (draft, { payload: { id } }) => {
        draft.alerts = draft.alerts.filter(d => d.id !== id);
      },
      [ActionTypes.SHOW_ALERT]: (draft, { payload }) => {
        draft.alerts.push(payload);
      },
      [ActionTypes.SHOW_MY_PROFILE_MODAL]: draft => {
        draft.showProfileModal = true;
      },
      [ActionTypes.HIDE_MY_PROFILE_MODAL]: draft => {
        draft.showProfileModal = false;
      },
      [ActionTypes.SHOW_SUBMIT_NFT_MODAL]: draft => {
        draft.showSubmitNFTModal = true;
      },
      [ActionTypes.HIDE_SUBMIT_NFT_MODAL]: draft => {
        draft.showSubmitNFTModal = false;
      },
      [ActionTypes.SHOW_SUBMIT_NFT_SUCCESS_MODAL]: draft => {
        draft.showSubmitNFTSuccessModal = true;
      },
      [ActionTypes.HIDE_SUBMIT_NFT_SUCCESS_MODAL]: draft => {
        draft.showSubmitNFTSuccessModal = false;
      },
      [ActionTypes.SHOW_UPDATE_PROFILE_MODAL]: draft => {
        draft.showUpdateProfileModal = true;
      },
      [ActionTypes.HIDE_UPDATE_PROFILE_MODAL]: draft => {
        draft.showUpdateProfileModal = false;
      },
      [ActionTypes.SHOW_TERMS_OF_SERVICE_MODAL]: draft => {
        draft.showTermsOfServiceModal = true;
      },
      [ActionTypes.HIDE_TERMS_OF_SERVICE_MODAL]: draft => {
        draft.showTermsOfServiceModal = false;
      },
      [ActionTypes.ENABLE_WALLET_SUCCESS]: (draft, { payload }) => {
        draft.isConnectWallet = true;
        draft.walletUtils = payload.data;
      },
      [ActionTypes.CONNECT_WALLET_SUCCESS]: (draft, { payload }) => {
        draft.isConnectWallet = true;
        draft.walletAddress = payload;
      },
      [ActionTypes.SHOW_HELP_MODAL]: draft => {
        draft.showHelpModal = true;
      },
      [ActionTypes.HIDE_HELP_MODAL]: draft => {
        draft.showHelpModal = false;
      },
      [ActionTypes.GET_BNB_BALANCE_SUCCESS]: (draft, { payload }) => {
        draft.bnbBalance = payload.data;
      },
      [ActionTypes.SET_LATEST_BLOCK_NUMBER]: (draft, { payload }) => {
        draft.latestBlockNumber = payload.data;
      },
    },
    appState,
  ),
};
