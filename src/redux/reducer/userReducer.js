import {GET_USER_PROFILE_SUCCESS} from '../actionTypes/actionTypes';

let initialState = {
  isLoggedIn: false,
  userInfo: {},
  headerToken: {},
  userId: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_PROFILE_SUCCESS:
      return {
        headerToken: action.payload.token,
        userInfo: action.payload,
        userId: {},
      };
    default:
      return state;
  }
}
