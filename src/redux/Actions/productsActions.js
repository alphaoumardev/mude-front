import * as P from '../Types'
import axios from "axios";

export const getProductByPageAction = (categoryId, page,  color, size, tag, brand, occasion, material, length) => async (dispatch) =>
{
    if(categoryId)
    {
        try
        {
            const params = {
                category:categoryId,
                color:color,
                size:size,
                lengths:length,
                tag:tag,
                occasion:occasion,
                materials:material,
                page:page,
            }
            const buildURl = (baseUrl, params)=>
            {
                let queryString = new URLSearchParams()
                for(let key in params)
                {
                    if (params[key] !== null || params[key] !== undefined)
                        if(Array.isArray(params[key]))
                        {
                            params[key].forEach(item =>
                            {
                                queryString.append(key, item)
                            })
                        }
                    else
                        {
                            queryString.append(key, params[key])
                        }
                }
                return `${baseUrl}?${queryString.toString()}`
            }
            const urlParams = buildURl('/api/filter-products-by-category/', params)
            await axios.get(urlParams).then((res) =>
            {
                dispatch({
                    type: P.S_GET_ARTICLES_BY_PAGE,
                    payload: res.data
                })
                // console.log(res.data)
            })
        }
        catch (error)
        {
            dispatch(
                {
                    type: P.F_GET_ARTICLES_BY_PAGE,
                    payload: error.response && error.response.data.detail ?
                        error.response.data.detail : error.message,
                }
            )
        }
    }
    // else
    // {
    //     // try
    //     // {
    //     //     await axios.get(`/api/filter-products-by-category/?page=${page}`).then((res)=>
    //     //     {
    //     //         dispatch({
    //     //             type: P.S_GET_ARTICLES_BY_PAGE,
    //     //             payload: res.data
    //     //         })
    //     //         // console.log(res.data)
    //     //     })
    //     // }
    //     // catch (error)
    //     // {
    //     //     dispatch(
    //     //         {
    //     //             type: P.F_GET_ARTICLES_BY_PAGE,
    //     //             payload: error.response && error.response.data.detail ?
    //     //                 error.response.data.detail : error.message,
    //     //         }
    //     //     )
    //     // }
    // }
}

export const getProductFiltersAction = () => async (dispatch) =>
{
    try
    {
        await axios.get(`/api/products_variant-filters/`, ).then((res)=>
        {
            dispatch(
                {
                type: P.S_PRODUCT_FILTERS,
                payload: res.data
            })
            // console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch(
            {
                type: P.F_PRODUCT_FILTERS,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getSingleProductAction = (id) => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_ONE_PRODUCT_REQUEST})
        await axios.get(`/api/single-product/${id}`).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_ONE_PRODUCT_SUCCESS,
                    payload: res.data
                })
            // console.log(res.data)
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_ONE_PRODUCT_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getProductBySearchAction = (search) => async (dispatch) =>
{
    try
    {
        const params = {search:search}
        if(search)
        {
            await axios.get('/api/filter-products-by-category/',{params:params}).then((res)=>
            {
                dispatch(
                    {
                        type:P.S_SEARCH_PRODUCT,
                        payload: res.data
                    })
                console.log(res.data)
            })
        }

    }catch (error)
    {
        dispatch(
            {
                type: P.F_SEARCH_PRODUCT,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}
export const getAllProductAction = (genre, type, less_price, greater_price, query=null, color=null, size=null, ) => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_ALL_PRODUCTS_REQUEST})
        if(type)
        {
           await axios.get(`/api/catename/${genre}/${type}`,).then((res)=>
           {
               dispatch(
                   {
                       type:P.GET_ALL_PRODUCTS_SUCCESS,
                       payload: res.data
                   })
           })

        }
        else if(color)
        {
            await axios.get(`/api/bycolor/?color=${color}`).then((res)=>
            {
                dispatch(
                    {
                        type:P.GET_ALL_PRODUCTS_SUCCESS,
                        payload: res.data
                    })
            })
        }
        else if(size)
        {
            await axios.get(`/api/bysize/?size=${size}`).then((res)=>
            {
                dispatch(
                    {
                        type:P.GET_ALL_PRODUCTS_SUCCESS,
                        payload: res.data
                    })
            })
        }
        else if(less_price >=13 && greater_price<=998)
        {
            await axios.get(`/api/byprice/?less_price=${less_price}&greater_price=${greater_price}`).then((res)=>
            {
                dispatch(
                    {
                        type:P.GET_ALL_PRODUCTS_SUCCESS,
                        payload: res.data
                    })
            })

        }
        else
        {

            await axios.get(`/api/all/?query=${query}`).then((res)=>
            {
                dispatch(
                    {
                        type:P.GET_ALL_PRODUCTS_SUCCESS,
                        payload: res.data,
                })
                // console.log(res.data)
            })
        }
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_ALL_PRODUCTS_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getProductsBySubcatesAction = (genre, type) => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_SUBCATES_REQUEST})
        if(type)
        {
            await axios.get(`/api/catename/${genre}/${type}`,).then((res)=>
            {
                dispatch(
                    {
                        type: P.GET_SUBCATES_SUCCESS,
                        payload: res.data,
                    }
                )
            })
        }
        else
        {
            dispatch({type:P.GET_SUBCATES_REQUEST})
            await axios.get(`/api/catename/${genre}`,).then((res)=>
            {
                dispatch(
                    {
                        type: P.GET_SUBCATES_SUCCESS,
                        payload: res.data,
                    }
                )
            })

        }
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_SUBCATES_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getProductsByVariant = (id) => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_BY_VARIANT_REQUEST})
        await axios.get('/api/byvariant/' +id,).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_BY_VARIANT_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_BY_VARIANT_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getImages = (id) => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_IMAGES_REQUEST})
        await axios.get('/api/images/' +id,).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_IMAGES_SUCCESS,
                    payload: res.data
                })

        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_IMAGES_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getColors = () => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_COLORS_REQUEST})
        await axios.get('/api/colors/',).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_COLORS_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_COLORS_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getSizes = () => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_SIZES_REQUEST})
        await axios.get('/api/sizes/',).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_SIZES_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_SIZES_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getTags = () => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_TAGS_REQUEST})
        await axios.get('/api/tags/',).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_TAGS_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_TAGS_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getNewProducts = () => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_NEWPRODUCTS_REQUEST})
        await axios.get('/api/newproducts/',).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_NEWPRODUCTS_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_NEWPRODUCTS_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getOnsales = () => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_ONSALE_REQUEST})
        await axios.get('/api/onsale/',).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_ONSALE_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_ONSALE_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}

export const getSlides = () => async (dispatch) =>
{
    try
    {
        dispatch({type:P.GET_SLIDERS_REQUEST})
        await axios.get('/api/sliders/',).then((res)=>
        {
            dispatch(
                {
                    type:P.GET_SLIDERS_SUCCESS,
                    payload: res.data
                })
        })
    }catch (error)
    {
        dispatch(
            {
                type: P.GET_SLIDERS_FAIL,
                payload: error.response && error.response.data.detail ?
                    error.response.data.detail : error.message,
            }
        )
    }
}
