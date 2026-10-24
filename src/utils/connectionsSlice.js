import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
    name: "connections",
    initialState: null,
    reducers: {
        addConnections: (state, action) => action.payload,
        romoveConnections: (state, action) => null
    }
})

export default connectionsSlice.reducer;
export const {addConnections, romoveConnections} = connectionsSlice.actions