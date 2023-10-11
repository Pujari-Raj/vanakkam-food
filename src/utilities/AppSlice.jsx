import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLocation: null || JSON.parse(localStorage.getItem("userLocation")),
}

const AppSlice = createSlice({
    name: "appData",
    initialState,
    reducers:{
        addLocation(state, action){
            state.userLocation = action.payload;
            localStorage.setItem("userLocation", JSON.stringify(state.userLocation));
        },
    },
});

export const selectLocationState = (store) => store.AppData.userLocation;
export const { addLocation } = AppSlice.actions 
export default AppSlice.reducer;