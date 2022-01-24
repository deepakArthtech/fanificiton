import {GET_DISCOVER_SUCCESS} from '../actionTypes/actionTypes';

let initialState = {
  isLoggedIn: false,
  userInfo: {},
  headerToken: {},
  userId: {},
  data: [],
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DISCOVER_SUCCESS:
      return {
        headerToken: action.payload.token,
        data: action.payload,
        userId: {},
      };
    default:
      return state;
  }
}
