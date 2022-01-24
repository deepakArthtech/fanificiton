import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {baseUrl} from '../../Utils/appConstants';
import {
  GET_DISCOVER,
  GET_DISCOVER_SUCCESS,
  GET_LIBRARY,
  GET_LIBRARY_SUCCESS,
  PUT_TO_CART,
  PUT_TO_CART_SUCCESS,
} from '../actionTypes/actionTypes';

function* putToCartSagaWorker(action) {
  console.log('Cart=========>', action);

  const {headerToken, userId, cartId, bookId} = action.payload;
  console.log('========>', `${baseUrl}carts/${cartId}`);

  const params = JSON.stringify({
    addItem: 'true',

    item: {
      id: bookId,
    },
  });

  console.log('Params', params);

  try {
    const res = yield axios.put(`${baseUrl}carts/${cartId}`, params, {
      headers: {
        'x-access-token': headerToken,
        'content-type': 'application/json',
      },
    });

    console.log('cartResponse', res.data);

    if (res.data.isSuccess) {
      // yield put({
      //     type:SET_TOKEN,
      //     payload:{token:res.data.data.token,userId:res.data.data._id}
      // })
    } else {
    }
  } catch (error) {
    console.log(error.response);
    // if (error.response.data.statusCode==400) {
    //     alert(error.response.data.error)
    // }
  }
}
export function* putToCartSagaWatcher() {
  yield takeEvery(PUT_TO_CART, putToCartSagaWorker);
}

//Get Library

function* getLibrarySagaWorker(action) {
  console.log('Cart=========>', action);

  const {headerToken, cartId} = action.payload;
  console.log('========>', `${baseUrl}carts/${cartId}`);

  try {
    const res = yield axios.get(`${baseUrl}carts/${cartId}`, {
      headers: {
        'x-access-token': headerToken,
      },
    });

    console.log('LibraryResponse', res.data);

    if (res.data.isSuccess) {
      yield put({
        type: GET_LIBRARY_SUCCESS,
        payload: res.data.data,
      });

      // yield put({
      //     type:SET_TOKEN,
      //     payload:{token:res.data.data.token,userId:res.data.data._id}
      // })
    } else {
    }
  } catch (error) {
    console.log(error.response);
    // if (error.response.data.statusCode==400) {
    //     alert(error.response.data.error)
    // }
  }
}
export function* getLibrarySagaWatcher() {
  yield takeEvery(GET_LIBRARY, getLibrarySagaWorker);
}
