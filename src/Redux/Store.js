import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./Slice";
import { CartSlice } from "./CartSlice";

export const store = configureStore({
    reducer:{
        products:productSlice.reducer,
        cart : CartSlice.reducer
    },
})