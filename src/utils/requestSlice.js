import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "requests",
    initialState: null,
    reducers: {
        addRequests: (state, action) => action.payload,
        removeRequests: (state, action) => null
    }
})

export default requestSlice.reducer;
export const {addRequests, removeRequests} = requestSlice.actions