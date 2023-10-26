import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectErrorState, setError, clearCart } from "../utilities/CartSlice";

const CartModal = () => {
  const dispatch = useDispatch();
  const errorState = useSelector(selectErrorState);

  return (
    errorState && (
      <div className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto overflow-x-hidden bg-transparent transition duration-300">
        <div className="relative mx-auto mb-10 min-w-[300px] max-w-[520px] bg-white p-[30px] shadow-[0_2px_20px_0_#282c3f80]">
          <div className="relative">
            <div className="text-lg font-bold">Items already in cart</div>
            <div className="pt-1 text-sm text-defGray">
              Your cart contains items from other restaurant. Would you like to
              reset your cart for adding items from this restaurant?
            </div>
            <div className="flex justify-between gap-x-4 pt-6 text-base font-bold ">
              <button
                className="text-greenColor border-defGreen w-full border-2 py-3 uppercase hover:shadow-[0_4px_14px_#d4d5d9]"
                onClick={() => dispatch(setError(false))}
              >
                No
              </button>
              <button
                className="bg-greenColor w-full py-3 uppercase text-white hover:shadow-[0_4px_14px_#d4d5d9]"
                onClick={() => dispatch(clearCart())}
              >
                yes, start afresh
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CartModal;
