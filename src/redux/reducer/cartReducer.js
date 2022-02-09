import {
  GET_LIBRARY_SUCCESS,
  PUT_TO_CART_SUCCESS,
} from '../actionTypes/actionTypes';

let initialState = {
  isLoggedIn: false,
  cartData: {},
  headerToken: {},
  userId: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PUT_TO_CART_SUCCESS:
      return {
        headerToken: action.payload.token,
        cartData: action.payload,
      };
    case GET_LIBRARY_SUCCESS:
      return {
        headerToken: action.payload.token,
        cartData: action.payload,
      };
    default:
      return state;
  }
}
