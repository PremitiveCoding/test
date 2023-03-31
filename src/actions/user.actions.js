import { CREATE_USER_SUCCESS } from "./types";
import api from "../api";

export const createUser = (user) => async (dispatch) => {
  try {
    const response = await api.post("/user/add", user);
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: response.data,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
