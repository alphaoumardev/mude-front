import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./reducers/authReducer.js";
import {cartReducer} from "./reducers/cartReducer.js";
import {wishlistReducer} from "./reducers/wishlistReducer.js";
import {
    getAllProductsReducer,
    getColorsReducer,
    getImagesReducer,
    getNewProductsReducer,
    getOnsaleProductsReducer,
    getProductBySubcategoriesReducer,
    getproductByVariantReducer,
    getProductsByCatNameReducer,
    getProductsByPagegReducer,
    getSizesReducer,
    getSlidersReducer,
    getTagsReducer,
    getProductsFiltersReducer,
    getSingleProductReducer
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

        getProductsByPagegReducer:getProductsByPagegReducer,
        getProductsFiltersReducer:getProductsFiltersReducer,
        getSingleProductReducer:getSingleProductReducer,

        cartReducer ,
        wishlistReducer,

        getAllProductsReducer,
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
