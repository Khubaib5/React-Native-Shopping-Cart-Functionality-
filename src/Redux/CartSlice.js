import { createSlice, createSelector } from "@reduxjs/toolkit";
import cart from "../Data/Asset Bundle/Asset Bundle/code/data/cart";

const initialState = {
    items:[],
    deliveryFee : 15,
    freeDelivery: 200,
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const newProduct = action.payload.product
            const cartItem = state.items.find((p)=> p.product.id === newProduct.id)
            if(cartItem){
                cartItem.quantity += 1
            }else{
                state.items.push({product: newProduct, quantity:1});
            }

        },
        removeCart:(state, action)=>{},
        changeQuantity:(state, action)=>{
            const {productId, amount} = action.payload
            const cartItem = state.items.find((p)=>p.product.id === productId )
            if(cartItem){
                cartItem.quantity += amount
            }

            if(cartItem.quantity <=0){
                state.items = state.items.filter((item)=>item !== cartItem) 
            }
        },

    }
})

export const selectedNumberofItems = (state)=> state.cart.items.length 
export const selectSubTotal = (state)=>state.cart.items.reduce(
    (sum,cartItem)=> sum+cartItem.product.price * cartItem.quantity, 0
)

const cartSelector = (state)=> state.cart

export const selectDeliveryPrice = createSelector(
    selectSubTotal,
    cartSelector,
    (subtotal, cart) => (subtotal > cart.freeDelivery ? 0 : cart.deliveryFee)
)

export const selectTotal = createSelector(
    selectSubTotal,
    selectDeliveryPrice,
    (subtotal, fees) => (subtotal + fees)
)
