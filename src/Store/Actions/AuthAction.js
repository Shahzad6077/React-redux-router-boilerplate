import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from "./../../Helper/useLocalStorage";
import axiosInstance from "./../../axiosInstance";

export const SET_USER_AUTH = "SET_USER_AUTH";
export const REMOVE_USER_AUTH = "REMOVE_USER_AUTH";

export const setUserAuth = (data) => {
  const expiration = new Date(0);
  expiration.setUTCSeconds(data.expiry);
  setLocalStorage(
    "userData",
    JSON.stringify({ token: data.token, expiration: expiration.toISOString() })
  );
  return {
    type: SET_USER_AUTH,
    payload: {
      token: data.token,
      user: data.userData,
      isAuthenticated: data.isAuthenticated,
    },
  };
};
export const removeUserAuth = () => {
  return {
    type: REMOVE_USER_AUTH,
    payload: {
      token: null,
      user: null,
      isAuthenticated: false,
    },
  };
};

export const checkAuthStatus = () => {
  return async (dispatch) => {
    try {
      const localStorageUserData = JSON.parse(getLocalStorage("userData"));
      if (localStorageUserData?.token && localStorageUserData?.expiration) {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorageUserData.token}`,
        };
        const response = await axiosInstance.post(
          "/user/checkAuthStatus",
          null,
          {
            headers,
          }
        );
        const { data } = response;
        dispatch(
          setUserAuth({
            isAuthenticated: true,
            ...data,
            token: localStorageUserData.token,
          })
        );
      } else {
        removeLocalStorage("userData");
        dispatch(
          setUserAuth({ isAuthenticated: false, user: null, token: null })
        );
      }
    } catch (err) {
      removeLocalStorage("token");
    }
    return;
  };
};

export const logout = () => {
  return async (dispatch) => {
    removeLocalStorage("userData");
    dispatch(removeUserAuth());
  };
};
