import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import HomeSlice from "./HomeSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        AppData : AppSlice,
        HomeData : HomeSlice,
        Cart : CartSlice
    },
})

export default store;