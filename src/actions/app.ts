/**
 * @module Actions/App
 * @desc App Actions
 */
import React from 'react';
import { nanoid } from 'nanoid';

import { createAction } from 'modules/helpers';

import { ActionTypes } from 'literals';

import { ShowAlertOptions } from 'types';

export { go, goBack, push, replace } from 'modules/history';
export const hideAlert = createAction(ActionTypes.HIDE_ALERT, (id: string) => ({ id }));
export const showAlert = createAction(
  ActionTypes.SHOW_ALERT,
  (message: React.ReactNode, options: ShowAlertOptions) => {
    const timeout = options.variant === 'danger' ? 0 : 5;

    return {
      id: options.id || nanoid(),
      icon: options.icon,
      message,
      position: options.position || 'bottom-right',
      variant: options.variant || 'dark',
      timeout: typeof options.timeout === 'number' ? options.timeout : timeout,
    };
  },
);

export const showMyProfileModal = createAction(
  ActionTypes.SHOW_MY_PROFILE_MODAL,
  (message: any) => message,
);
export const hideMyProfileModal = createAction(
  ActionTypes.HIDE_MY_PROFILE_MODAL,
  (message: any) => message,
);
export const showSubmitNFTModal = createAction(
  ActionTypes.SHOW_SUBMIT_NFT_MODAL,
  (message: any) => message,
);
export const hideSubmitNFTModal = createAction(
  ActionTypes.HIDE_SUBMIT_NFT_MODAL,
  (message: any) => message,
);
export const showSubmitNFTSuccessModal = createAction(
  ActionTypes.SHOW_SUBMIT_NFT_SUCCESS_MODAL,
  (message: any) => message,
);
export const hideSubmitNFTSuccessModal = createAction(
  ActionTypes.HIDE_SUBMIT_NFT_SUCCESS_MODAL,
  (message: any) => message,
);
export const showUpdateProfileModal = createAction(
  ActionTypes.SHOW_UPDATE_PROFILE_MODAL,
  (message: any) => message,
);
export const hideUpdateProfileModal = createAction(
  ActionTypes.HIDE_UPDATE_PROFILE_MODAL,
  (message: any) => message,
);
export const showTermsOfServiceModal = createAction(
  ActionTypes.SHOW_TERMS_OF_SERVICE_MODAL,
  (message: any) => message,
);
export const hideTermsOfServiceModal = createAction(
  ActionTypes.HIDE_TERMS_OF_SERVICE_MODAL,
  (message: any) => message,
);
export const showHelpModal = createAction(ActionTypes.SHOW_HELP_MODAL, (message: any) => message);
export const hideHelpModal = createAction(ActionTypes.HIDE_HELP_MODAL, (message: any) => message);
export const enableWalletSuccess = createAction(
  ActionTypes.ENABLE_WALLET_SUCCESS,
  (message: any) => message,
);
export const connectWalletSuccess = createAction(
  ActionTypes.CONNECT_WALLET_SUCCESS,
  (message: any) => message,
);
export const getBNBBalanceSuccess = createAction(
  ActionTypes.GET_BNB_BALANCE_SUCCESS,
  (message: any) => message,
);
export const setLastBlockNumber = createAction(
  ActionTypes.SET_LATEST_BLOCK_NUMBER,
  (message: any) => message,
);
