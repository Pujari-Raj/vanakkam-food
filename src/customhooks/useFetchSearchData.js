import { SEARCH_REST_URL } from "../constants/constants";

const useFetchSearchData = async (
  searchText,
  userLocation,
  setAllRestaurants
) => {
  fetch(
    `${SEARCH_REST_URL}lat=${userLocation?.lat}&lng=${userLocation?.long}&str=${searchText}`
  )
    .then((res) => res.json())
    .then((data) => setAllRestaurants(data?.data?.suggestions))
    .catch((error) => console.log(error));
};

export default useFetchSearchData;
