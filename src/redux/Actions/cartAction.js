import * as A from '../Types'
import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`,
        'Accept': 'application/json'
    }
}
export const addToCart = (product, color, size, customer, quantity) => async (dispatch) =>
{

        // const product = id
        // const customer = username.id
        const body = JSON.stringify({product,customer, color, size, quantity})

        await axios.post('/api/cart/', body, config).then((res)=>
        {
            dispatch({
                type: A.CART_ADD_ITEM,
                payload: res.data
            })
            console.log(res.data)
        })
    // }
    // catch (err)
    // {
    //     dispatch({
    //         type: A.CART_ADD_FAIL,
    //         payload: err.response.data
    //     })
    // }

}

export const getCartItems = () => async (dispatch) =>
{
    await axios.get('/api/cart/', config).then((res)=>
    {
        dispatch({
            type: A.CART_GET_ITEMS,
            payload: res.data.result,
            order_total: res.data.order_total,
            cart_count: res.data.cart_count,
        })
        // localStorage.setItem('cartItem', JSON.stringify(res.data))
    })
}

export const removeItemFromCart = (id) => async (dispatch) =>
{
    await axios.delete(`/api/cart/${id}`, config).then((res)=>
    {
        dispatch({
            type: A.CART_REMOVE_ITEM,
            payload: id,
        })
        dispatch(getCartItems())
        localStorage.removeItem('cartItem')
    })
}

export const updateCartItem = (id, quantity, product) => async (dispatch) =>
{
    const body = JSON.stringify({quantity, product})
    await axios.put(`/api/cart/${id}`, body, config).then((res)=>
    {
        dispatch({
            type: A.CART_UPDATE_ITEM,
            payload: res.data,
        })
        // localStorage.getItem('cartItem', JSON.stringify(res.data))
        dispatch(getCartItems())
    })
}
// export const saveShippingAddress = (data) => (dispatch) =>
// {
//     dispatch({
//         type:A.CART_SAVE_SHIPPING_ADDRESS,
//         payload: data,
//     })
//     // localStorage.setItem('shippingAddress', JSON.stringify(data))
// }

export const savePaymentMethod = (data)=> (dispatch)=>
{
    dispatch({
        type:A.CART_PAYMENT,
        payload: data,
    })
    // localStorage.setItem('payment', JSON.stringify(data))
}
