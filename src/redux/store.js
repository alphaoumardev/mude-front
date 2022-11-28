import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./reducers/authReducer.js";
import {cartReducer} from "./reducers/cartReducer.js";
import {wishlistReducer} from "./reducers/wishlistReducer.js";
import {
    getAllProductsReducer, getColorsReducer, getImagesReducer, getNewProductsReducer,
    getOneProductReducer, getOnsaleProductsReducer,
    getProductBySubcategoriesReducer, getproductByVariantReducer, getProductsByCatNameReducer,
    getProductsByPagegReducer, getSizesReducer, getSlidersReducer, getTagsReducer
} from "./reducers/productsReducer.js";
import {
    create_addressReducer,
    getMyorderReducer, getReviewReducer,
    getShippingAddressReducer,
    orderCreateReducer
} from "./reducers/orderReducer.js";
import {getHeaderCatergoriesReducer} from "./reducers/headerReducer.js";

export const store = configureStore({
    reducer: {
        authReducer:authReducer,
        getHeaderCatergoriesReducer:getHeaderCatergoriesReducer,

        cartReducer ,
        wishlistReducer,

        getAllProductsReducer,
        getProductsByPagegReducer,
        getOneProductReducer,
        getProductBySubcategoriesReducer,
        getproductByVariantReducer,
        getImagesReducer,
        getProductsByCatNameReducer,
        getColorsReducer,
        getSizesReducer,
        getTagsReducer,
        getNewProductsReducer,
        getOnsaleProductsReducer,
        getSlidersReducer,

        create_addressReducer,
        getShippingAddressReducer,

        orderCreateReducer,
        getMyorderReducer,
        getReviewReducer

    }
})
