import {
  S_HEADER_CATEGORY, F_HEADER_CATEGORY,
} from '../Types'

export const getHeaderCatergoriesReducer = (state= {error:null, catenames:[]}, action)=>
{
    switch (action.type)
    {
        case S_HEADER_CATEGORY:
            return{
                ...state,
                catenames: action.payload,
                error: null
            }
        case F_HEADER_CATEGORY:
            return{
                ...state,
                error: action.payload,
                catenames: []
            }
        default:
            return state
    }
}

