import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";

const store = configureStore({
    reducer: {
        AppData : AppSlice,
    },
})

export default store;