import { REST_MENU_URL } from "../constants/constants";

const useFetchRestMenu = async ({ resId, lat, long, setData }) => {
  const rest = await fetch(
    `${REST_MENU_URL}&lat=${lat}&lng=${long}&restaurantId=${resId}`
  );

  const data = await rest.json();

  setData({
    info: data?.data?.cards[0]?.card?.card?.info,
    offers: data?.data?.cards[1]?.card?.gridElements?.infoWithStyle?.offers,
    restList:
      data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
      data?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
  });
};

export default useFetchRestMenu;