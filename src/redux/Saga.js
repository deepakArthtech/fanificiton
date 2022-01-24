import {all} from 'redux-saga/effects';
import {
  getAccessTokenWatcher,
  loginSagaWatcher,
  logoutWatcher,
  setAccessTokenWatcher,
  signUpSagaWatcher,
} from './saga/authSaga';
import {getLibrarySagaWatcher, putToCartSagaWatcher} from './saga/cartSaga';
import {discoverSagaWatcher} from './saga/discoverSaga';
import {categorySagaWatcher} from './saga/genreSaga';
import {getUserProfileSagaWatcher} from './saga/userSaga';

export default function* rootSaga() {
  yield all([
    loginSagaWatcher(),
    setAccessTokenWatcher(),
    getAccessTokenWatcher(),
    signUpSagaWatcher(),
    discoverSagaWatcher(),
    categorySagaWatcher(),
    getUserProfileSagaWatcher(),
    logoutWatcher(),
    putToCartSagaWatcher(),
    getLibrarySagaWatcher(),
  ]);
}
