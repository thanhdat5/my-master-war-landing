import { createReducer } from 'modules/helpers';

import { ActionTypes, STATUS } from 'literals';

import { UserState } from 'types';

export const userState = {
  status: STATUS.IDLE,
};

export default {
  user: createReducer<UserState>(
    {
      [ActionTypes.USER_LOGIN_SUCCESS]: draft => {
        draft.status = STATUS.READY;
      },
      [ActionTypes.USER_LOGOUT_REQUEST]: draft => {
        draft.status = STATUS.RUNNING;
      },
      [ActionTypes.USER_LOGOUT_SUCCESS]: draft => {
        draft.status = STATUS.IDLE;
      },
    },
    userState,
  ),
};
