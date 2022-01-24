import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {
  GET_TOKEN,
  GET_TOKEN_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_TOKEN,
  SET_TOKEN_SUCCESS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
} from '../actionTypes/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../../Utils/appConstants';

//SET TOKEN TO ASYNC STORAGE

function* setAccessTokenWorker(action) {
  // console.log('set access token', action);
  const {token, userId, cartId} = action.payload;
  console.log('SetToken', cartId);
  try {
    if (token) {
      const res = yield AsyncStorage.setItem('token', token);

      const user_id = yield AsyncStorage.setItem('userId', userId);

      const cart_id = yield AsyncStorage.setItem('cartId', cartId);
    }
    yield put({type: GET_TOKEN});
  } catch (error) {
    console.log(error?.response?.data?.errors);
  }
}

export function* setAccessTokenWatcher() {
  yield takeEvery(SET_TOKEN, setAccessTokenWorker);
}

//GET TOKEN FROM ASYNC STORAGE
function* getAccessTokenWorker(action) {
  console.log('GetToken', action);
  // const{callback}=action.payload
  const headerToken = yield AsyncStorage.getItem('token');
  const userId = yield AsyncStorage.getItem('userId');
  const cartId = yield AsyncStorage.getItem('cartId');
  // console.log('Token===>',res);

  // const headerToken = res;

  yield put({type: GET_TOKEN_SUCCESS, payload: {headerToken, userId, cartId}});
}

export function* getAccessTokenWatcher() {
  yield takeEvery(GET_TOKEN, getAccessTokenWorker);
}

function* loginSagaWorker(action) {
  console.log('=========>', action);

  const {email, password} = action.payload;

  try {
    const res = yield axios.post(`${baseUrl}users/login`, {
      email: email,
      password: password,
    });

    console.log('res===>', res);

    if (res.data.isSuccess) {
      yield put({
        type: LOGIN_SUCCESS,
        payload: res.data.data,
      });

      yield put({
        type: SET_TOKEN,
        payload: {
          token: res.data.data.token,
          userId: res.data.data._id,
          cartId: res.data.data.cartId,
        },
      });
    } else {
    }
  } catch (error) {
    console.log(error.response);
    if (error.response.data.statusCode == 400) {
      alert(error.response.data.error);
    }
  }
}
export function* loginSagaWatcher() {
  yield takeEvery(LOGIN, loginSagaWorker);
}

function* signUpSagaWorker(action) {
  console.log('=========>', action);

  const {email, password, uId, name, loginType} = action.payload;

  try {
    const res = yield axios.post(`${baseUrl}users`, {
      email: email,
      password: password,
      uId,
      name,
      loginType,
    });

    console.log('res===>', res);

    if (res.data.isSuccess) {
      yield put({
        type: SIGN_UP_SUCCESS,
        payload: res.data.data,
      });

      yield put({
        type: SET_TOKEN,
        payload: {token: res.data.data.token, userId: res.data.data._id},
      });
    } else {
    }
  } catch (error) {
    console.log(error.response);
    if (error.response.data.statusCode == 400) {
      alert(error.response.data.error);
    }
  }
}

export function* signUpSagaWatcher() {
  yield takeEvery(SIGN_UP, signUpSagaWorker);
}

function* logoutWorker(action) {
  console.log(action);
  try {
    const headerToken = yield AsyncStorage.removeItem('token');
    const userId = yield AsyncStorage.removeItem('userId');
  } catch (error) {
    console.log(error);
  }
}

export function* logoutWatcher() {
  yield takeEvery(LOGOUT, logoutWorker);
}
