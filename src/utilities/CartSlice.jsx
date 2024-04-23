import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restInfo: null,
  items: [],
  error: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: {
      reducer(state, action) {
        const { cartItem, restInfo } = action.payload;
        if (state.restInfo) {
          if (state.restInfo.resId !== restInfo.resId) {
            state.error = true;
            return;
          }
          state.restInfo = restInfo;
        } else {
          state.restInfo = restInfo;
        }
        
        const item = state.items.find((item) => item?.id === cartItem?.id);
        if (item) {
          item.qty = item?.qty + 1;
        } else {
          const tempObj = { ...cartItem };
          tempObj.qty = 1;
          state.items.push(tempObj);
        }
      },
      prepare(cartItem, restInfo) {
        return {
          payload: {
            cartItem,
            restInfo,
          },
        };
      },
    },
    removeItem: {
      reducer(state, action) {
        const { cartItem } = action.payload;
        const item = state.items.find((item) => item?.id === cartItem?.id);
        if (item) {
          if (item.qty > 1) item.qty = item.qty - 1;
          else if (item.qty === 1) {
            const arr = state.items.filter((items) => items?.id !== item?.id);
            state.items = arr;
          }
        }
        if (state.items.length === 0) state.restInfo = null;
      },
      prepare(cartItem) {
        return {
          payload: {
            cartItem,
          },
        };
      },
    },
    clearCart(state, action){
        state.items = [];
        state.restInfo = null;
        state.error = false;
    },
    setError(state, action){
        state.error = action.payload;
    }
  },
});


export const selectCartItem = (state) => state.Cart.items;
export const selectRestInfo = (state) => state.Cart?.restInfo;
export const selectErrorState = (state) => state.Cart?.error;

export const {addItem, removeItem, clearCart, setError}  = CartSlice.actions;
export default CartSlice.reducer;