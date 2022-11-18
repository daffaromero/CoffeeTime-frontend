import axios from 'axios'
import { useParams } from "react-router-dom";
import { CART_ADD_ITEM } from '../constants/cartConstants'

const URI = "https://coffeetime-backend.vercel.app";

export const addToCart = (id, qty) => async (dispatch, getState) => {

    const { data } = await axios.get(URI + `/api/v1/menu/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            available : data.available,
            qty
        }

    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}