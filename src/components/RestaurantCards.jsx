import React from 'react';
import { Star } from "lucide-react"
import { DATA_CARD_IMG_URL } from "../constants/constants";

const RestaurantCards = ({item}) => {
  return (
    <>
    <div className="flex h-full w-full grid-flow-row justify-stretch sm:grid shadow-[0_2.8rem_2.8rem_rgba(0,0,0,0.075)] rounded-2xl mb-8 transition duration-300 ease-in-out hover:scale-y-105">
      <div className="relative">
        <div className="h-28 w-28 sm:h-full sm:w-full">
          <img
            className="h-28 w-28 rounded-2xl object-cover sm:h-full sm:max-h-[170px] sm:min-h-[130px] sm:w-full"
            src={DATA_CARD_IMG_URL + item?.info?.cloudinaryImageId}
          />
        </div>
        <div className="absolute inset-0 hidden h-full w-full content-end rounded-2xl bg-[linear-gradient(rgba(27,30,36,0)_0%,rgb(27,30,36)_84.21%)] p-2 text-left drop-shadow-dataCardFilter sm:grid">
          {item?.info?.aggregatedDiscountInfoV3?.header ? (
            <div className="textEllipse w-full overflow-hidden text-ellipsis break-words text-xl font-extrabold text-[#ffffffeb]">
              {item?.info?.aggregatedDiscountInfoV3?.header +
                " " +
                item?.info?.aggregatedDiscountInfoV3?.subHeader}
            </div>
          ) : (
            <div className="textEllipse w-full overflow-hidden text-ellipsis break-words text-xl font-extrabold text-[#ffffffeb]">
              {item?.info?.aggregatedDiscountInfoV2?.header &&
                item?.info?.aggregatedDiscountInfoV2?.header}
            </div>
          )}
        </div>
      </div>
      <div className="p-2">
        <div className="textEllipse w-full overflow-hidden text-ellipsis break-words text-xl font-medium tracking-tight text-[#02060cbf]">
          {item?.info?.name}
        </div>
        <div className="flex items-center text-base font-semibold">
          <span className="text-xl text-green-600">
            {/* <MdStars /> */}
            <Star color="white" fill="white" className='h-[1.4rem] w-[1.4rem] bg-green-400 rounded-xl p-[4px] mr-2'/>
          </span>
          <span className="text-base text-[#02060cbf]">
            {item?.info?.avgRatingString}
          </span>
        </div>
        <div className="textEllipse w-full overflow-hidden text-ellipsis break-words text-defGray">
          {item?.info?.cuisines?.join(", ")}
        </div>
      </div>
    </div>
    </>
  );
}

export default RestaurantCards