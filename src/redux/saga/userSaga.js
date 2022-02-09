import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {baseUrl} from '../../Utils/appConstants';
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
} from '../actionTypes/actionTypes';

function* getUserProfileSagaWorker(action) {
  console.log('=========>', action);

  const {headerToken, userId} = action.payload;
  console.log('========>', `${baseUrl}users/${userId}`);
  try {
    const res = yield axios.get(`${baseUrl}users/${userId}`, {
      headers: {
        'x-access-token': headerToken,
      },
    });

    console.log('UserResponse', res);
    if (res.data.isSuccess) {
      yield put({
        type: GET_USER_PROFILE_SUCCESS,
        payload: res.data.data,
      });

      // yield put({
      //     type:SET_TOKEN,
      //     payload:{token:res.data.data.token,userId:res.data.data._id}
      // })
    } else {
    }
  } catch (error) {
    console.log(error);
    // if (error.response.data.statusCode==400) {
    //     alert(error.response.data.error)
    // }
  }
}
export function* getUserProfileSagaWatcher() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSagaWorker);
}
