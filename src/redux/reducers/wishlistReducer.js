import * as W from '../Types'

export const wishlistReducer = (state ={wishlistItem:[]}, action)=>
{
    switch (action.type)
    {
        case W.WISHLIST_ADD_ITEM:
        case W.WISHLIST_UPDATE_ITEM:
            return{
                ...state,
                wishlistItem: action.payload
            }
        case W.WISHLIST_GET_ITEMS:
            return{
                ...state,
                wishlistItem: action.payload,
            }
        case W.WISHLIST_REMOVE_ITEM:
            return{
                ...state,
                wishlistItem: action.payload,
                    // state.cartItem.filter(index => index.product !== action.payload),
            }
        case W.WISHLIST_CLEAR_ITEMS:
            return{
                ...state,
                wishlistItem: [],
            }
        default:
            return state
    }
}
