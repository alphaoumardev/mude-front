import * as A from '../Types'
import axios from "axios";

const localToken = localStorage.getItem('token')
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localToken}`,
        'Accept': 'application/json'
    }
}
export const addToWishlist = (product, customer) => async (dispatch) =>
{
    if(localToken)
    {
        const body = JSON.stringify({product, customer})

        await axios.post('/api/wishlist/', body, config).then((res) => {
            dispatch({
                type: A.WISHLIST_ADD_ITEM,
                payload: res.data
            })
            // localStorage.setItem('wish', JSON.stringify(res.data.product))
        })
    }
}

export const getWishlistItems = () => async (dispatch) =>
{
    if(localToken)
    {
        await axios.get('/api/wishlist/', config).then((res)=>
        {
        dispatch({
            type: A.WISHLIST_GET_ITEMS,
            payload: res.data
        })
        // localStorage.setItem('wishlistItem', JSON.stringify(res.data))
    })
    }
}
export const removeItemFromWishlist = (id) => async (dispatch) =>
{
    await axios.delete('/api/wishlist/' + id, config).then((res)=>
    {
        dispatch({
            type: A.WISHLIST_REMOVE_ITEM,
            payload: res,
        })
        dispatch(getWishlistItems())
    })
}

export const updateWishlistItem = (id, product) => async (dispatch) =>
{
    const body = JSON.stringify({product})
    await axios.put('/api/wishlist/' + id, body, config).then((res)=>
    {
        dispatch({
            type: A.WISHLIST_UPDATE_ITEM,
            payload: res.data,
        })
        // localStorage.getItem('wishlistItem', JSON.stringify(res.data))
        dispatch(getWishlistItems())
    })
}
// export const saveShippingAddress = (data) => (dispatch) =>
// {
//     dispatch({
//         type:A.WISHLIST_SAVE_SHIPPING_ADDRESS,
//         payload: data,
//     })
//     localStorage.setItem('shippingAddress', JSON.stringify(data))
// }
//
// export const savePaymentMethod = (data)=> (dispatch)=>
// {
//     dispatch({
//         type:A.WISHLIST_PAYMENT,
//         payload: data,
//     })
//     localStorage.setItem('payment', JSON.stringify(data))
// }
