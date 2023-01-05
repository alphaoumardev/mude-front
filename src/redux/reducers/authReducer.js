import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS,
    USER_PROFILE,
    LOGOUT_FAIL, UPDATE_PROFILE_SUCCESS, S_CONTACT_US,
} from '../Types'


const accessToken = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const profileStorage = localStorage.getItem('customer')? JSON.parse(localStorage.getItem('customer')):null

export const authReducer = (state= {error:null, customer: profileStorage, token: accessToken}, action)=>
{
    switch (action.type)
    {
        case REGISTER_SUCCESS:
            return{
                ...state,
                error: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                token: action.payload.token,
                customer: action.payload,
            }
        case USER_PROFILE:
            return{
                ...state,
                token: action.payload.token,
                customer: action.payload,
            }
        case UPDATE_PROFILE_SUCCESS:
            return{
                ...state,
                customer:{
                    ...action.payload,
                    ...state.customer
                }
            }
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
        case REGISTER_FAIL:
            return {
                ...state,
                error: action.payload,
                customer:null,
                token: null,
            };

        case LOGOUT_SUCCESS:
            localStorage.clear()
            sessionStorage.clear()
            return{
                ...state,
                customer: null,
                token: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const contactUsReducer = (state={messages:[]}, action) => {
    switch (action.type)
    {
        case S_CONTACT_US:
            return {
                ...state,
                messages: action.payload,
            }
        case F_CONTACT_US:
            return {
                ...state,
                messages: [],
            }
        default:
            return state
    }
}
