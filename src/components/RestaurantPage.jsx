import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectLocationState } from "../utilities/AppSlice";
import useFetchRestMenu from "../customhooks/useFetchRestMenu";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantPageShimmer from "./RestaurantPageShimmer";
import RestaurantBrowseMenu from "./RestaurantBrowseMenu";
import CartModal from "./CartModal";

const RestaurantPage = () => {
  const { resId } = useParams();
  const userLocation = useSelector(selectLocationState);
  const [data, setData] = useState([]);

  useEffect(() => {
    useFetchRestMenu({
      lat: userLocation?.lat,
      long: userLocation?.long,
      resId: resId,
      setData: setData,
    });

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    document.getElementById("header").style.position = "inherit";

    if (mediaQuery.matches) {
      document.getElementById("mobileNav").style.display = "none";
      document.getElementById("shortHeader").style.display = "none";
    }

    return () => {
      document.getElementById("header").style.position = "sticky";
      if (mediaQuery.matches) {
        document.getElementById("mobileNav").style.display = "block";
        document.getElementById("shortHeader").style.display = "block";
      }
    };
  }, []);

  return data?.info ? (
    <>
      <div className="mx-auto my-2 flex min-h-[800px] max-w-[800px] flex-col md:my-5 md:px-4">
        <RestaurantInfo data={data} />
        <div className="h-full w-full px-4 py-8">
          <RestaurantMenu
            data={data?.restList}
            restInfo={{
              name: data?.info?.name,
              areaName: data?.info?.areaName,
              resId: data?.info?.id,
              dp: data?.info?.cloudinaryImageId,
              distance: data?.info?.sla?.lastMileTravelString,
              delFees: data?.info?.feeDetails?.totalFee,
            }}
          />
          {/* BrowseMenu-section  */}
          <RestaurantBrowseMenu data={data?.restList}/>
        </div>
      </div>
      <CartModal/>
    </>
  ) : (
    <>
      <RestaurantPageShimmer />
    </>
  );
};

export default RestaurantPage;
