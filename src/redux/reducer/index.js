import {combineReducers} from 'redux';
import authReducer from './authReducer';
import discoverReducer from './discoverReducer';
import genreReducer from './genreReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  authReducer,
  discoverReducer,
  genreReducer,
  userReducer,
  cartReducer,
});
