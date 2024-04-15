import React from 'react';
import { SM_OFFER_ICON_URL } from "../constants/constants";

const OffersBoxes = ({item}) => {
  return (
    <div className='mr-3'>
        <div className="flex h-full min-w-[200px] cursor-pointer items-center rounded-lg border border-[#e9e9eb] px-[25px] py-2.5 text-left shadow-[0_1px_2px_#0000000a]">
        {item?.info?.offerTag && (
          <div className="flatDeals border-l border-solid border-l-[#e9e9eb] pl-1 text-center text-[9px] font-bold text-[#e46d47]">
            <span>{item?.info?.offerTag}</span>
          </div>
        )}
        <div className="ml-2 flex flex-col justify-center">
          <p className="flex items-center whitespace-nowrap text-sm font-bold text-[#686b78]">
            <img
              src={SM_OFFER_ICON_URL + item?.info?.offerLogo}
              className="mr-2 h-5 w-5"
            />
            {item?.info?.header}
          </p>
          <p className="mt-1 max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-semibold text-[#93959f]">
            {item?.info?.couponCode} | {item?.info?.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default OffersBoxes;