// authDuck.js
import axios from "axios";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// defaults to localStorage for web

// Action Types
const LOGIN_REQUEST = "auth/LOGIN_REQUEST";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAILURE = "auth/LOGIN_FAILURE";
const LOGOUT = "auth/LOGOUT";

// 기본 값 store
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// 액션 생성
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user: any) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: any) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const LoginUser = (email: string, password: string) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/login",
        data: {
          email: email,
          password: password,
        },
      });
      console.log(response.data);
      dispatch(loginSuccess("user")); //원래 user
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

// 액션에 스토어 값을 변경
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

// Configuration for Redux Persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // specify the reducers you want to persist
};

// Wrap the reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, authReducer);

export default persistedReducer;
