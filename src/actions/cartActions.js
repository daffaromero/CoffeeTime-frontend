import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const URI = "https://coffeetime-backend.vercel.app";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/menu/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      prod_id: data.data._id,
      name: data.data.name,
      image: data.data.image,
      price: data.data.price,
      available: data.data.available,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
