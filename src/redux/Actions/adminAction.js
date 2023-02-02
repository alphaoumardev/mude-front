import * as O from '../Types'
import axios from "axios";

const localToken = localStorage.getItem('token')
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localToken}`,
        'Accept': 'application/json'
    }
}

export const getAllOrdersAction = (page) => async (dispatch) =>
{
    if(localToken)
    {
        try
        {
            await axios.get(`/api/all-orders/?page=${page}`, config).then(res =>
            {
                dispatch(
                    {
                        type: O.S_GET_ORDERS,
                        payload: res.data
                    })
                // console.log(res.data)
            })
        } catch (error)
        {
            dispatch({
                type: O.F_GET_ORDERS,
                payload: "Something went wrong"
            })
        }
    }
}

export const getProductCategoryAction = () => async (dispatch) =>
{
    try
    {
        await axios.get(`/api/mptt-categories/`).then(res =>
        {
            dispatch(
                {
                    type: O.S_GET_CATEGORIES,
                    payload: res.data
                })
            // console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch({
            type: O.F_GET_CATEGORIES,
            payload: "Something went wrong"
        })
    }
}

export const addProductAction = (category, brand, name, sku, description,
                                 price, status, stock, onsale, discount,
                                 color, size, tag, length, material, occasion) => async (dispatch) =>
{
    const body = {category, brand, name, sku, description,
                    price, status, stock, onsale, discount,
                    color, size, tag, length, material, occasion}
    try
    {
        await axios.post(`/api/add-product/`).then(res =>
        {
            dispatch(
                {
                    type: O.S_ADDPRODUCT,
                    payload: res.data
                })
            // console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch({
            type: O.F_ADDPRODUCT,
            payload: "Something went wrong"
        })
    }
}
