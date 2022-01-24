import {
  GET_TOKEN_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGN_UP_SUCCESS,
} from '../actionTypes/actionTypes';

let initialState = {
  isLoggedIn: false,
  userInfo: {},
  headerToken: {},
  userId: {},
  isLoading: false,
  cartId: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        headerToken: action.payload.token,
        isLoggedIn: true,
      };
    case GET_TOKEN_SUCCESS:
      return {
        headerToken: action.payload.headerToken,
        userId: action.payload.userId,
        cartId: action.payload.cartId,
      };
    case SIGN_UP_SUCCESS:
      return {
        headerToken: action.payload.token,
        isLoggedIn: false,
      };
    case LOGOUT:
      console.log('logout');
      return {
        headerToken: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
