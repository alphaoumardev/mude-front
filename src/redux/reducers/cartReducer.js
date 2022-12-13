import * as T from '../Types'

export const cartReducer = (state = {cart_item:[], order_total:0, cart_count: 0}, action)=>
{
    switch (action.type)
    {

        case T.CART_ADD_ITEM:
            // const newItem = action.payload
            // const exitItem = state.cart_item.find(index=> index.product === newItem.product)
            // if(exitItem)
            // {
            return{
                ...state,
                cart_item: action.payload
                        // state.cart_item.map(index =>index.product===exitItem.product ? newItem : index)
                }
            // }else
            // {
            //     return{
            //         ...state,
            //         cart_item: [...state.cart_item, newItem]
            //     }
            // }
        case T.CART_ADD_FAIL:
            return{
                ...state,
                cart_item: []
            }
        case T.CART_GET_ITEMS:
            return{
                ...state,
                cart_item: action.payload,
                order_total: action.order_total,
                cart_count: action.cart_count,
            }

        case T.CART_UPDATE_ITEM:
            return{
                ...state,
                cart_item: action.payload
            }
        case T.CART_REMOVE_ITEM:
            return{
                ...state,
                cart_item: action.payload
                    // state.cart_item.filter(index => index.product !== action.payload)
            }
        case T.CART_CLEAR_ITEMS:
            return{
                ...state,
                cart_item: []
            }
        default:
            return state
    }
}

