import { CREATE_USER_SUCCESS } from "../actions/types";

const initialState = {};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER_SUCCESS:
      return { ...state, user: payload };

    default:
      return state;
  }
}
