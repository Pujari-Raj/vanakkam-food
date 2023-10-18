import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import HomeSlice from "./HomeSlice";

const store = configureStore({
    reducer: {
        AppData : AppSlice,
        HomeData : HomeSlice
    },
})

export default store;