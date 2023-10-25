import React,{useMemo} from "react";
import { IndianRupee } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";

import { VEG_ICON_URL, NONVEG_ICON_URL, DEF_IMG_URL } from "../constants/constants";
import { addItem, removeItem, selectCartItem } from "../utilities/CartSlice";

const MenuItemBox = ({ data, restInfo }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItem);
  const currentItem = useMemo(
    () => cartItems.find((item) => item.id == data?.info?.id),
    [cartItems],
  );


  return (
    <div className="mx-0 my-5 flex justify-between border-b-[0.5px] border-b-[#d3d3d3] px-0 pb-5 pt-0">
      <div className="md:w-[80%]">
        <div className="">
          {data?.info?.isVeg ? (
            <img className="h-5 w-5" src={VEG_ICON_URL} />
          ) : (
            <img className="h-5 w-5" src={NONVEG_ICON_URL} />
          )}
        </div>
        <div className="break-words text-base font-medium text-[#3e4152]">
          {data?.info?.name}
        </div>
        <div className="mt-[2px] flex items-center text-sm font-normal text-[#3e4152]">
          <IndianRupee className={"h-[0.85rem] w-[0.85rem]"}  />
          {(data?.info?.price
            ? data?.info?.price
            : data?.info?.finalPrice
            ? data?.info?.finalPrice
            : data?.info?.defaultPrice) / 100}
        </div>
        <div className=" mt-2 w-[98%] text-sm leading-[1.3] tracking-tighter text-[#282c3f73]">
          {data?.info?.description}
        </div>
      </div>
      <div className="flex  flex-col items-center justify-center md:w-[20%]">
        {data?.info?.imageId && (
          <img
            className="mb-[-30px] h-[96px] min-h-[96px] w-[118px] min-w-[118px] rounded-md"
            src={DEF_IMG_URL + data?.info?.imageId}
          />
        )}
        {!currentItem ? (
          <div
            className="flex h-9 w-24 cursor-pointer items-center justify-center rounded border border-solid border-[#d4d5d9] bg-white text-[13px] font-semibold text-[#60b246] shadow-[0_3px_8px_#e9e9eb]"
            onClick={() => dispatch(addItem(data?.info, restInfo))}
          >
            ADD
          </div>
        ) : (
          <div className="flex h-9 w-24 cursor-pointer items-center justify-around rounded border border-solid border-[#d4d5d9] bg-white  text-sm text-[#60b246] shadow-[0_3px_8px_#e9e9eb]">
            <span
              className="text-[18px] text-[#bebfc5]"
              onClick={() => dispatch(removeItem(data?.info))}
            >
              -
            </span>
            {currentItem?.qty}
            <span
              className="animate-[0.2s_ease] text-[18px] hover:scale-125"
              onClick={() => dispatch(addItem(data?.info, restInfo))}
            >
              +
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItemBox;
