import { Dispatch } from 'redux';
import { Variants } from 'styled-minimal/lib/types';
import { ValueOf } from 'type-fest';

import { AlertPosition, Icons, Status } from './common';

export interface AlertData {
  icon: Icons;
  id: string;
  message: string;
  position: AlertPosition;
  timeout: number;
  variant: Variants;
}

export interface Topic {
  cached: boolean;
  data: Array<Record<string, any>>;
  message: string;
  status: ValueOf<Status>;
  updatedAt: number;
}

export interface AppState {
  alerts: AlertData[];
  showProfileModal: boolean;
  showSubmitNFTModal: boolean;
  showSubmitNFTSuccessModal: boolean;
  showUpdateProfileModal: boolean;
  showTermsOfServiceModal: boolean;
  isConnectWallet: boolean;
  walletUtils: any;
  walletAddress: string;
  showHelpModal: boolean;
  bnbBalance: number;
  latestBlockNumber: number;
}

export interface GitHubState {
  topics: Record<string, Topic>;
  query: string;
}

export interface UserState {
  status: ValueOf<Status>;
}

export interface StoreState {
  app: AppState;
  github: GitHubState;
  user: UserState;
}

export interface WithDispatch {
  dispatch: Dispatch;
}
