import {GET_GENRE_CATEGORY_SUCCESS} from '../actionTypes/actionTypes';

let initialState = {
  isLoggedIn: false,
  userInfo: {},
  headerToken: {},
  userId: {},
  isLoading: false,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GENRE_CATEGORY_SUCCESS:
      return {
        headerToken: action.payload.token,
        data: [...action.payload],
        userId: {},
      };
    default:
      return state;
  }
}
