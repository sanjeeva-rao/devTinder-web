import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import feeSlice from "./feedSlice"
const appStore = configureStore({
    reducer: {
        user: userSlice,
        feed: feeSlice
    }
})

export default appStore;