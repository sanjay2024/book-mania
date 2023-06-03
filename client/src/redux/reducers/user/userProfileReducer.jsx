import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_PROFILE_FAIL,
} from "../../action/actionVaraible";

const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case USER_PROFILE_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case USER_PROFILE_FAIL:
      return {
        loading: false,
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
