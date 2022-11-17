import axios from "axios";
import {
  MENU_LIST_REQUEST,
  MENU_LIST_SUCCESS,
  MENU_LIST_FAIL,
  MENU_DETAILS_FAIL,
  MENU_DETAILS_SUCCESS,
  MENU_DETAILS_REQUEST,
} from "../constants/menuConstants";
import { useParams } from "react-router-dom";

const URI = "https://coffeetime-backend.vercel.app";

export const listMenus = () => async (dispatch) => {
  try {
    dispatch({ type: MENU_LIST_REQUEST });

    const { data } = await axios.get(URI + "/api/v1/menu");

    dispatch({
      type: MENU_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: MENU_LIST_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

export const listMenuDetails = (id) => async (dispatch) => {
  //const { id } = useParams();
  try {
    dispatch({ type: MENU_DETAILS_REQUEST });

    const { data } = await axios.get(URI + `/api/v1/menu/${id}`);

    dispatch({
      type: MENU_DETAILS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: MENU_DETAILS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};
