import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/menu/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payoad: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            available : data.available,
            qty
        }

    })
    localStorage.setItem('cartItems', (getState().cart.cartItems))
}