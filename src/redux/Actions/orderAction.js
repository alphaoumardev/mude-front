import * as O from '../Types'
import axios from "axios";
import * as A from "../Types";

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`,
        'Accept': 'application/json'
    }
}

export const addAddress = (customer, country, state, zip, city, street, details, order_note) => async (dispatch) =>
{
    // let user = username.id
    try
    {
        dispatch({type: O.ADDRESS_ADD_REQUEST})
        const body = JSON.stringify({customer, country, state, zip, city, street, details, order_note})
        await axios.post(`/api/address/`, body, config).then(res =>
        {
            dispatch({type: O.ADDRESS_SUCCESS, payload: res.data})
            console.log(res.data)
        })
    } catch (error)
    {
        dispatch({
            type:O.ADDRESS_FAIL,
            payload: "Something went wrong"
        })
    }
}


export const getAddressAction = () => async (dispatch) =>
{
    try
    {
        dispatch({type: O.ADDRESS_GET_REQUEST})
        await axios.get(`/api/address/`, config).then(res =>
        {
            dispatch({type: O.ADDRESS_GET_SUCCESS, payload: res.data})
        })
    } catch (error)
    {
        dispatch({
            type:O.ADDRESS_GET_FAIL,
            payload: "Something went wrong"
        })
    }
}

export const createOrderAction = (customer, address, amount, order_reference) => async (dispatch) =>
{
    const body = JSON.stringify({customer, address, amount, order_reference})
    try
    {
        dispatch({type: O.ORDER_CREATE_REQUEST})
        await axios.post(`/api/orders/`,body, config).then((res)=>
        {
            dispatch({
                type:O.ORDER_CREATE_SUCCESS,
                payload: res.data,
            })
            // console.log(res.data)
            localStorage.removeItem('cartItems')
        })
    } catch (error)
    {
        console.log(error)
        dispatch({
            type: O.ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

export const getMyOrderAction = () => async (dispatch) =>
{
    try
    {
        dispatch({type: O.ORDER_MY_REQUEST})
        await axios.get('/api/orders/', config).then(res =>
        {
            dispatch({type: O.ORDER_MY_SUCCESS, payload: res.data})
            // console.log(res.data)
        })
    } catch (error)
    {
        dispatch({
            type:O.ORDER_MY_FAIL,
            payload: "Something went wrong"
        })
    }
}

export const addReview = (user, rate, product, comment) => async (dispatch) =>
{
    const username= user.id
    try {
        const body = JSON.stringify({username, rate, product, comment})

        dispatch({type: O.REVIEW_REQUEST})
        await axios.post(`/api/review/`, body, config).then(res=>
        {
            dispatch(
                {
                    type: O.REVIEW_SUCCESS,
                    payload: res.data,
                })
            console.log(res.data)
        })
    } catch (error) {
        dispatch({
            type: O.REVIEW_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

export const addToOrderItem = (id, color, size, quantity, username) => async (dispatch) =>
{
    const product = id
    const user = username.id

    const body = JSON.stringify({product, color, size, quantity, user})
    try
    {
        await axios.post('/api/orderitem/', body, config).then((res) => {
            dispatch({
                type: A.ORDER_ITEM_ADD_SUCCESS,
                payload: res.data
            })
        })
    }
    catch(error)
    {
        dispatch({
            type: O.ORDER_ITEM_ADD_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

export const getOrderItems = () => async (dispatch) =>
{
    await axios.get('/api/orderitem/', config).then((res)=>
    {
        dispatch({
            type: A.ORDER_ITEM_SUCCESS,
            payload: res.data.result,
            order_total: res.data.order_total,
            cart_count: res.data.order_count,
        })
        console.log(res.data)
        localStorage.setItem('cartItem', JSON.stringify(res.data))
    })
}

export const getOrderDetail = (id) => async (dispatch, getState) =>
{
    try
    {
        dispatch({type: O.ORDER_DETAILS_REQUEST})
        const {user: {user},} = getState()
        const {data} = await axios.get(`/api/orders/${id}/`,config)
        dispatch(
        {
            type:O.ORDER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error)
    {
        dispatch({
            type: O.ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

export const orderPayment = (id, payment) => async (dispatch, getState) =>
{
    try
    {
        dispatch({type: O.ORDER_PAY_REQUEST})
        const {user: {user},} = getState()
        const {data} = await axios.put(`/api/orders/${id}/pay`,payment, config)
        dispatch(
            {
                type:O.ORDER_PAY_SUCCESS,
                payload: data,
            })
    } catch (error)
    {
        dispatch({
            type: O.ORDER_PAY_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

export const deliverOrder = (order) => async (dispatch,) =>
{
    try
    {
        dispatch({type: O.ORDER_DELIVER_REQUEST})
        const {data} = await axios.put(`/api/orders/${order.id}/deliver`, {}, config)
        dispatch(
            {
                type:O.ORDER_DELIVER_SUCCESS,
                payload: data,
            })
    } catch (error)
    {
        dispatch({
            type: O.ORDER_DELIVER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}