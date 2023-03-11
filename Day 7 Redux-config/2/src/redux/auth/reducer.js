import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "./actionTypes";

const initialState = {
  auth: false,
  token: "",
  isError: false,
  isLoading: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case USER_LOGIN_SUCCESS:
      return { ...state, isLoading: false, auth: true, token: payload };

    case USER_LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
