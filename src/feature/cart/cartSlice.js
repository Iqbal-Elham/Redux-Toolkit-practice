import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 3,
    total: 0,
    isLoading: true,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearAll: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload);
            cartItem.amount += 1;
        }, 
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload);
            cartItem.amount -= 1;
        },
        
    }
})


export const { clearAll, removeItem, increase, decrease } = cartSlice.actions; 
export default cartSlice.reducer;