import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false,
}

const modelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {
        openModel: (state) => {
            state.isOpen = true;
        },
        closeModel: (state) => {
            state.isOpen = false;
        }
    }
});

export default modelSlice.reducer;
export const { openModel, closeModel } = modelSlice.actions;