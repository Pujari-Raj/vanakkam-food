import React from "react";
import { CDN_URL } from "../constants/constants";
import { Star } from "lucide-react"

const RestaurantCard = (props) => {

    const {resData} = props;

    const {
        
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        sla,
        areaName,
    } = resData?.info

  return (
    <>
        <div key={resData?.info.id} className="w-[300px]  shadow-[0_2.8rem_2.8rem_rgba(0,0,0,0.075)] rounded-2xl mb-8 transition duration-300 ease-in-out hover:scale-y-105">
          <img
            src={CDN_URL + cloudinaryImageId}
            alt="resturant image"
            className="h-[200px] w-full rounded-2xl object-cover"
          />
          <div className="p-4">
            <p className=" items-center text-lg line-clamp-2 font-bold">
              {name} &nbsp; 
            </p>

            <div className="mt-4">
              {cuisines.slice(0, 3).map((cusine) => {
              return (
                <span className="mb-2 mr-2 inline-block rounded-full  bg-gray-300 px-3 py-1 text-[10px] font-bold text-gray-900">
                  {cusine}
                </span>
              );
            })}
              <br />
              <span className="flex items-center"> <Star color="white" fill="white" className='h-[1.4rem] w-[1.4rem] bg-green-400 rounded-xl p-[4px] mr-2'/> {avgRating}</span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold text-white">
                {areaName}
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-brand-purple px-3 py-1 text-[10px] font-bold text-white bg-black">
               {sla.deliveryTime} Minutes
              </span>
            </div>
          </div>
        </div>
    </>
  );
};

export default RestaurantCard;
