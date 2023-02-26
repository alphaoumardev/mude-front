import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_REQUEST,
    REGISTER_FAIL,
    REGISTER_SUCCESS,

    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL, S_CONTACT_US, F_CONTACT_US,
    CART_CLEAR_ITEMS, ORDER_MY_FAIL, USER_PROFILE, WISHLIST_CLEAR_ITEMS
} from '../Types'
import axios from "axios";

const localToken = localStorage.getItem('token')

export const postActionPayloadError = (type, error) => ({
        type: type,
        payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
});
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localToken}`,
        'Accept': 'application/json'
    }
}
const signconfig ={ headers: {'Content-Type': 'application/json'}}

export const signup = (username, email, password, re_password)=> async dispatch =>
{
    const body = JSON.stringify({username, email, password, re_password})
    try
    {
        dispatch({type:REGISTER_REQUEST})

        await axios.post('/api/signup/', body, signconfig).then((res)=>
        {
            dispatch(
                {
                    type:REGISTER_SUCCESS,
                    payload:res.data
                })
        })
    }
    catch (error)
    {
        dispatch(postActionPayloadError(REGISTER_FAIL, error))
    }
}


export const login = (username, password) => async dispatch =>
{

    const body = JSON.stringify({username, password})
    try
    {
        dispatch({ type: LOGIN_REQUEST });

        await axios.post('/api/signin/', body, signconfig).then((res)=>
        {
            dispatch(
                {
                    type:LOGIN_SUCCESS,
                    payload: res.data,
                })
            console.log(res.data)
            localStorage.setItem('profile', JSON.stringify(res.data))
            dispatch(getCustomerProfile())
        })


    }
    catch (error)
    {
        dispatch(postActionPayloadError(LOGIN_FAIL, error))
    }
}

export const logout = () => async dispatch =>
{
    try
    {
        const body = JSON.stringify({})

        await axios.post('/api/logout/', body, config).then(() =>
        {
            localStorage.clear()
            dispatch({type:LOGOUT_REQUEST})
            dispatch({type:LOGOUT_SUCCESS})
            dispatch({type:ORDER_MY_FAIL})
            dispatch({type:CART_CLEAR_ITEMS})
            dispatch({type:WISHLIST_CLEAR_ITEMS})
            window.location.pathname="/login"
        })
    } catch (error)
    {
        dispatch(postActionPayloadError(LOGOUT_FAIL, error))
        console.log(error)
    }
}

export const getCustomerProfile = ()=> async dispatch =>
{
    if(localToken)
    {
        try
        {
            await axios.get('/api/customer-profile/', config).then((res)=>
            {
                dispatch(
                    {
                        type: USER_PROFILE,
                        payload: res.data,
                    })
            })
        }
        catch (error)
        {
            console.error(error)
            dispatch(
                {
                    // type: USER_PROFILE_FAIL,
                    payload: res.data,
                })
        }
    }
}

export const postContactUs = (customer, subject, content) => async dispatch =>
{
    if(localToken)
    {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localToken}`,
                'Accept': 'application/json'
            }
        }
        try
        {
            const body = JSON.stringify({customer, subject, content} )
            await axios.post('/api/contact-us/', body, config).then(res=>
            {
                dispatch(
                    {
                        type: S_CONTACT_US,
                        payload: res.data,
                    })
                // console.log(res.data)
            })
        }
        catch (error)
        {
            dispatch({type: F_CONTACT_US, payload: error})
        }
    }else
    {
        dispatch({type: F_CONTACT_US, payload:[]})
    }
}


    export const updateProfile = (customer, nickname, contact, gender, avatar)=> async dispatch =>
{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localToken}`,
            'Accept': 'application/json'
        }
    }
    const body = JSON.stringify({customer, nickname, contact, gender, avatar})
    try
    {
        await axios.patch('/api/customer-profile/', body, config).then((res)=>
        {
            dispatch(
                {
                    type: UPDATE_PROFILE_SUCCESS,
                    payload: res.data,
                })
            // console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch(postActionPayloadError(UPDATE_PROFILE_FAIL, error))
    }
}


// TODO:These apply to the profile actions menager
export const updateUserProfile = (first_name, last_name, email, password)=> async dispatch =>
{

    const body = JSON.stringify({first_name, last_name, email, password})
    try
    {
        await axios.patch('/api/auth/users/me/', body, config).then((res)=>
        {
            dispatch({type:UPDATE_PROFILE_SUCCESS, payload: res.data,})
            console.log(res.data)
        })
    }
    catch (error)
    {
        dispatch(postActionPayloadError(UPDATE_PROFILE_FAIL, error))
    }
}

export const checkIfAuthenticated = () => async dispatch =>
{
    if(localStorage.getItem('access'))
    {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        const body = JSON.stringify(localStorage.getItem('access'))
        try
        {
            await axios.post('/api/auth/jwt/verify/',body, config).then((res)=>
                {
                    console.log(res.data)
                    // console.log(20)

                    if(res.data.code !== 'token_not_valid')
                    {
                        dispatch({type:AUTHENTICATED_SUCCESS})
                    }
                    else if(body)
                    {
                        dispatch({type:AUTHENTICATED_SUCCESS})
                    }

                    else
                    {
                        dispatch({type:AUTHENTICATED_FAIL})
                    }
                }
            )
        }
        catch (error)
        {
            dispatch({type: AUTHENTICATED_FAIL,})
        }
    }else
    {
        dispatch({type: AUTHENTICATED_FAIL,})
    }
}

export const refreshToken = (refresh)=> async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({refresh})
    try
    {
        await axios.post('/api/auth/jwt/refresh/', body, config)
        dispatch({type:REFRESH_TOKEN,})
    }
    catch (error)
    {
        dispatch(postActionPayloadError(REFRESH_FAIL, error))
    }
}

export const verify = (uid, token)=> async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({uid, token})
    try
    {
        await axios.post('/api/auth/users/activation/', body, config)
        dispatch({type:ACTIVATION_SUCCESS,})
    }
    catch (error)
    {
        dispatch(postActionPayloadError(ACTIVATION_FAIL, error))
    }
}

export const reset_password = (email,)=> async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({email,})
    try
    {
        await axios.post('/api/auth/users/reset_password/', body, config)
        // dispatch({type:PASSWORD_RESET_SUCCESS,})
    }
    catch (error)
    {
        // dispatch({type: PASSWORD_RESET_FAIL,})
    }
}

export const reset_password_confirm = (uid, token, new_password, re_password) => async dispatch =>
{
    const config ={ headers: {'Content-Type': 'application/json'}}
    const body = JSON.stringify({uid, token, new_password, re_password})
    try
    {
        await axios.post('/api/auth/users/reset_password_confirm/', body, config)
        dispatch({type:PASSWORD_RESET_CONFIRM_SUCCESS,})
    }
    catch (error)
    {
        dispatch({type: PASSWORD_RESET_CONFIRM_FAIL, payload: error})
    }
}

export const googleAuthenticate = (state, code) => async dispatch =>
{
    try
    {
        if(state && code && !localStorage.getItem('access'))
        {
            const config ={ headers: {'Content-Type': 'application/x-form-urlencoded'}}
        }
        const details = {'state': state, 'code': code}
        const formBody = Object.keys(details).map(key =>
        encodeURIComponent(key) + '=' +
        encodeURIComponent(details[key])).join('&')

        const res = await axios.post(`/api/auth/o/google-oauth2/?${formBody}`, config)
        dispatch({type:GOOGLE_AUTH_SUCCESS, payload: res.data})
    }
    catch (error)
    {
        dispatch({type: GOOGLE_AUTH_FAIL,})
    }
}

export const facebookAuthenticate = (state, code) => async dispatch =>
{
    if(state && code && !localStorage.getItem('access'))
    {
        const config ={ headers: {'Content-Type': 'application/x-form-urlencoded'}}
    }
    const details = {'state': state, 'code': code}
    const formBody = Object.keys(details).map(key =>
        encodeURIComponent(key) + '=' +
        encodeURIComponent(details[key])).join('&')
    try
    {
        const res = await axios.post(`/api/auth/o/facebook/?${formBody}`, config)
        dispatch({type:FACEBOOK_AUTH_SUCCESS, payload: res.data})
        dispatch(load_user())
    }
    catch (error)
    {
        dispatch({type: FACEBOOK_AUTH_FAIL,})
    }
}

// The user profile info


