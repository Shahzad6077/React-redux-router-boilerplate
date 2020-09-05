import { SET_USER_AUTH, REMOVE_USER_AUTH } from "./../Actions/AuthAction";
import { getLocalStorage } from "./../../Helper/useLocalStorage";

const initialState = {
  isAuthenticated: null,
  user: null,
  token: null,
};

const AuthReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case SET_USER_AUTH: {
      return {
        ...state,
        ...payload,
      };
    }
    case REMOVE_USER_AUTH: {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default AuthReducer;
