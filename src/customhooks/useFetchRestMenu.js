import { REST_MENU_URL } from "../constants/constants";

const useFetchRestMenu = async ({ resId, lat, long, setData }) => {
  const rest = await fetch(
    `${REST_MENU_URL}&lat=${lat}&lng=${long}&restaurantId=${resId}`
  );

  const jsondata = await rest.json();
  // console.log('rest-jsondata-in-hook', jsondata);

  // API DATA CHECK
  // console.log("REST-MENU-API",jsondata?.data?.cards);

  setData({
    // previous code
    // info: jsondata?.data?.cards[2]?.card?.card?.info,

    //new
    info: jsondata?.data?.cards?.find((card) =>
      card?.card?.card["@type"]?.includes("food.v2.Restaurant")
    )?.card?.card?.info,

    offers: jsondata?.data?.cards?.find((card) =>
      card?.card?.card["@type"]?.includes("widgets.v2.GridWidget")
    )?.card?.card?.gridElements?.infoWithStyle?.offers,

    restList: jsondata?.data?.cards?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards,
  });
};

export default useFetchRestMenu;
