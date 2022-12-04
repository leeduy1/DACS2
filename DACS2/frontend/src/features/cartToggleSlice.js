import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const cartToggleSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartToggle: (state) => {
            return state = !state
        },
    },
});

export const { cartToggle } = cartToggleSlice.actions;
export default cartToggleSlice.reducer;