import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';

const sagaMiddleWare = createSagaMiddleWare();

import rootSaga from './Saga';
import rootReducer from './reducer';

const middleWares = [sagaMiddleWare];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleWare.run(rootSaga);

export default store;