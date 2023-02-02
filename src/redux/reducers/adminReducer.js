import {
    S_GET_CATEGORIES, F_GET_CATEGORIES, S_GET_ORDERS, F_GET_ORDERS,
} from '../Types'

const initialState={
    orders: [],
    error: null,
    currentPage:1,
    totalPages:1,
    totalItems:1,
    // articles_per_page:1,
}
export const getAdminOdersReducer = (state=initialState, action)=>
{
    switch (action.type)
    {
        case S_GET_ORDERS:
            return{
                ...state,
                orders: action.payload.results,
                currentPage: action.payload.current_page_number,
                totalPages: action.payload.total_pages,
                totalItems: action.payload.total_orders,
                error: null
            }
        case F_GET_ORDERS:
            return{
                ...state,
                error: action.payload,
                orders: []
            }
        default:
            return state
    }
}

export const getProductCategoriesReducer = (state={categories:[]}, action)=>
{
    switch (action.type)
    {
        case S_GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload,
            }
        case F_GET_CATEGORIES:
            return{
                ...state,
                // error: action.payload,
                categories: []
            }
        default:
            return state
    }
}

export const addProductReducer = (state={categories:[]}, action)=>
{
    switch (action.type)
    {
        case S_GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload,
            }
        case F_GET_CATEGORIES:
            return{
                ...state,
                // error: action.payload,
                categories: []
            }
        default:
            return state
    }
}
