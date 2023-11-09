import React from "react";
import { Link } from "react-router-dom";
import { DEF_IMG_URL } from "../constants/constants";

const SearchCard = ({ data }) => {
  let resId = "";
  // console.log("search-data=>"+data);

  return (
    <div>
      {data?.map((restaurants) => {
        let url = JSON.parse(restaurants?.metadata)?.data?.primaryRestaurantId;
        if (url) resId = `/restaurant/${url}`;
        return (
          <Link to={resId} key={restaurants?.metadata}>
            <div className="mt-1 flex h-full w-full items-center gap-x-2 rounded p-2 hover:bg-gray-100">
              <div className="h-16 w-16">
                <img
                  className="h-full w-full rounded-md"
                  src={DEF_IMG_URL + restaurants?.cloudinaryId}
                />
              </div>
              <div className="text-sm text-defBlack no-underline">
                <p>{restaurants?.text}</p>
                <p className="text-xs text-[#7e808c]">
                  {restaurants?.tagToDisplay}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchCard;
