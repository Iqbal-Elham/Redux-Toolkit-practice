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
        }
    }
})


export const { clearAll } = cartSlice.actions; 
export default cartSlice.reducer;