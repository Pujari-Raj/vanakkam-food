import React, { useState } from "react";
import Accordion from "./Accordion";
import { Leaf } from "lucide-react";
import { TOP_PICKS_ITEM_URL } from "../constants/constants";

// VegSection
const VegSection = ({ data, isVeg, setIsVeg }) => {
  return data?.isPureVeg ? (
    <div className="flex items-center gap-x-2 border-b-[0.5px] border-b-[#d3d3d3] pb-4 text-xs font-semibold text-[#3d4152]">
      <Leaf className="text-xl text-green-600" />
      PURE VEG
    </div>
  ) : (
    <div className="flex items-center gap-x-2 border-b-[0.5px] border-b-[#d3d3d3] pb-4 text-sm font-bold text-[#3d4152]">
      Veg Only
      <label className="switch relative inline-block h-[17px] w-[35px]">
        <input type="checkbox" />
        <span className="slider" onClick={() => setIsVeg(!isVeg)}></span>
      </label>
    </div>
  );
};

// ToppicksMenu

const TopPicksMenu = ({ data }) => {
  return (
    <div className="border-b-8 border-b-[#f1f1f6] pb-8">
      <div className="py-4 text-lg font-bold text-[#3e4152]">{data?.title}</div>
      <div className="topPicks flex gap-x-5 overflow-y-hidden overflow-x-scroll">
        {data?.carousel?.map((item) => {
          return (
            <img
              src={TOP_PICKS_ITEM_URL + item?.creativeId}
              key={item?.bannerId}
              className="h-[270px] w-[240px] rounded-[20px] md:h-[337px] md:w-[300px]"
            />
          );
        })}
      </div>
    </div>
  );
};

const RestaurantMenu = ({ data, restInfo }) => {
  const [isVeg, setIsVeg] = useState(true);

  const accordionData = data?.map((item) => {
    if (item?.card?.card?.vegOnlyDetails) {
      return (
        <VegSection
          data={item?.card?.card}
          isVeg={isVeg}
          setIsVeg={setIsVeg}
          key={item?.card?.card?.vegOnlyDetails?.title}
        />
      );
    } else if (item?.card?.card?.carousel) {
      return (
        <TopPicksMenu data={item?.card?.card} key={item?.card?.card?.title} />
      );
    } else if (item?.card?.card?.itemCards || item?.card?.card?.categories) {
      return (
        <Accordion
          data={item?.card?.card}
          isVeg={isVeg}
          key={item?.card?.card?.title}
          restInfo={restInfo}
        />
      );
    }
  });

  return (
    <section>
      <div className="">{accordionData}</div>
    </section>
  );
};

export default RestaurantMenu;
