import {
  GET_DISCOVER,
  GET_GENRE_CATEGORY,
  GET_GENRE_CATEGORY_SUCCESS,
  GET_LIBRARY,
  GET_TOKEN,
  GET_USER_PROFILE,
  IS_LOADING,
  LOGIN,
  LOGOUT,
  PUT_TO_CART,
  SET_ERROR,
  SET_IS_LOADING,
  SET_TOKEN,
  SIGN_UP,
} from '../actionTypes/actionTypes';

export const setError = data => ({
  type: SET_ERROR,
  payload: data,
});

export const isLoadingData = flag => ({
  type: SET_IS_LOADING,
  payload: flag,
});

//logout

export const logoutUser = () => ({
  type: LOGOUT,
});

// SignUp Action creators
export const signUp = data => ({
  type: SIGN_UP,
  payload: data,
});

//Login
export const login = data => ({
  type: LOGIN,
  payload: data,
});

export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});

export const getToken = () => ({
  type: GET_TOKEN,
});

//Discover
export const getDiscover = data => ({
  type: GET_DISCOVER,
  payload: data,
});

//GET Category
export const getCategory = data => ({
  type: GET_GENRE_CATEGORY,
  payload: data,
});

//GET USER PROFILE
export const getProfile = data => ({
  type: GET_USER_PROFILE,
  payload: data,
});

export const putToCart = cartData => ({
  type: PUT_TO_CART,
  payload: cartData,
});
export const getLibrary = libData => ({
  type: GET_LIBRARY,
  payload: libData,
});
