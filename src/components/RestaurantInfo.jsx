import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Star,Clock8 ,Bike, BadgeIndianRupee} from "lucide-react";
import OffersBoxes from "./OffersBoxes";

const RestaurantInfo = ({ data }) => {
  const { info, offers, restList } = data;
  const restInfo = {
    name: info?.name,
    areaName: info?.areaName,
    resId: info?.id,
    dp: info?.cloudinaryImageId,
    distance: info?.sla?.lastMileTravelString,
    delFees: info?.feeDetails?.totalFee,
  };
  // console.log("offers-data "+info);

  return (
    <div>
      <div className="flex h-10 items-center justify-between pt-2 text-[11px] text-[#93959f]">
        <div className="hidden md:block">
          <span>
            <Link to={"/"}>Home</Link>
          </span>
          <span>{"/" + info?.city}</span>
          <span>{"/" + info?.name}</span>
        </div>
        <div className="md:hidden">
          <Link to="/">
            <ArrowLeft className="ml-4 h-8 w-7 text-[#3d4152]" />
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="search" state={[restList, restInfo]}>
            <Search className="mr-4 h-7 w-7 text-[#3d4152]  font-bold" />
          </Link>
        </div>
      </div>
      <div className="mx-4 my-0 flex h-full justify-between border-b border-dashed border-b-[#d3d3d3] px-0 py-5">
        <div className="">
          <p className="mb-2 text-[1.2rem] font-bold">{info?.name}</p>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[13px] text-[#7e808c]">
            {info?.cuisines?.join(", ")}
          </p>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[13px] text-[#7e808c]">
            {info?.areaName +
              ", " +
              (info?.sla?.lastMileTravelString &&
                info?.sla?.lastMileTravelString)}
          </p>
          <div className="mt-3 text-sm text-[#7e808c] flex items-center justify-center">
          <Bike className="mr-2 h-[1.15rem] w-[1.15rem] text-[#3d4152]  font-bold" />
            {info?.feeDetails?.message}
          </div>
        </div>
        <div className="">
          <div className="max-w-[100px] cursor-pointer rounded-md border border-[#e9e9eb] p-2 text-center shadow-[0_1px_5px_#f9f9f9]">
            <div className="flex items-center justify-center border-b  border-b-[#e9e9eb] pb-2 font-bold text-green-600">
              <Star />
              {info?.avgRating}
            </div>
            <p className="pt-2 text-[10px] font-medium text-[#8b8d97]">
              {info?.totalRatingsString}
            </p>
          </div>
        </div>
      </div>
      <div className="relative mx-0 my-4 flex px-4 py-0 text-sm font-[900] text-[#3e4152]">
        <span className="mr-6 flex items-center gap-x-2  ">
          <Clock8 className={"h-4 w-4"} />
          {info?.sla?.slaString || info?.orderabilityCommunication?.title?.text}
        </span>
        <span className="mr-6 flex items-center gap-x-2 ">
          <BadgeIndianRupee className={"h-5 w-5"} />
          {info?.costForTwoMessage}
        </span>
      </div>
      {info?.orderabilityCommunication?.message?.text && (
        <div className="relative mb-4 rounded-lg bg-[#f1f1f6] py-3.5 pl-4 pr-[18px] font-normal text-[#f57e47]">
          {info?.orderabilityCommunication?.message?.text}
        </div>
      )}
      <div className="offerContainer mx-2 my-0 flex overflow-y-hidden overflow-x-scroll bg-red-500">
        {offers?.map((item) => {
          return <OffersBoxes item={item} key={item?.info?.offerIds[2]} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantInfo;
