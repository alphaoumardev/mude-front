import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL, UPDATE_PROFILE_SUCCESS,
} from '../Types'


const accessToken = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const profileStorage = localStorage.getItem('profile')? JSON.parse(localStorage.getItem('profile')):null

export const authReducer = (state= {error:null, profile: profileStorage, token: accessToken}, action)=>
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
                profile: action.payload,
            }
        case UPDATE_PROFILE_SUCCESS:
            return{
                ...state,
                profile:{
                    ...action.payload,
                    ...state.profile
                }
            }
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
        case REGISTER_FAIL:
            return {
                ...state,
                error: action.payload,
                profile:null,
                token: null,
            };

        case LOGOUT_SUCCESS:
            localStorage.clear()
            sessionStorage.clear()
            return{
                ...state,
                profile: null,
                token: null,
                error: action.payload
            }
        default:
            return state
    }
}

