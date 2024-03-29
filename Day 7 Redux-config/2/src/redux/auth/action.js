import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionTypes";

export const loginRequestAction = () => {
  return { type: USER_LOGIN_REQUEST };
};

export const loginSuccessAction = (payload) => {
  return { type: USER_LOGIN_SUCCESS, payload };
};

export const loginFailureAction = () => {
  return { type: USER_LOGIN_FAILURE };
};
