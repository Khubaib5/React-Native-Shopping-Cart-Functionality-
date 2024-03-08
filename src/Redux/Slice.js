import { createSlice } from "@reduxjs/toolkit";
import products from "../Data/Asset Bundle/Asset Bundle/code/data/products";

const initialState = {
    products:products,
    selectedProduct: null,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        setSelectedProduct:(state, action)=>{
            const productId = action.payload
            state.selectedProduct = state.products.find((p)=>p.id === productId)
        },
    }
})

