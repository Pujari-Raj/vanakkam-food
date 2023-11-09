import React, { useEffect, useMemo, useState } from "react";
import SearchCard from "./SearchCard";
import useFetchSearchData from "../customhooks/useFetchSearchData";
import { Search, XCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { selectLocationState } from "../utilities/AppSlice";
import { DEF_IMG_URL, SEARCH_SHIMMER_SET } from "../constants/constants";

const SearchFood = () => {
  const userLocation = useSelector(selectLocationState);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.length > 1) {
        useFetchSearchData(searchText, userLocation, setAllRestaurants);
        // console.log("all rest-"+allRestaurants[0]?.text);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const SearchShimmer = useMemo(
    () =>
      SEARCH_SHIMMER_SET?.map((imageId) => {
        return (
          <img
            className="h-[100px] w-[85px]"
            src={DEF_IMG_URL + imageId}
            key={imageId}
          />
        );
      }),
    [searchText]
  );

  return (
    <>
      <div className="mx-auto w-full px-4">
        <div className="sticky top-[68px] z-10 h-20 w-full bg-white pb-5 pt-5 md:top-20 md:h-28 md:pt-[50px]">
          <div className="mx-auto flex h-12 max-w-[800px] overflow-hidden rounded-[3px] border-[1px] border-[#282c3f4d]">
            <input
              className="h-full  w-full border-none bg-white px-5 py-2.5 text-sm font-medium outline-none "
              placeholder="Search for restaurants and food"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                e.target.value === ""
                  ? setIsSearched(false)
                  : setIsSearched(true);
              }}
            />
            <button
              className="cursor-pointer border-white bg-white px-3"
              onClick={() => {
                setIsSearched(false);
                setSearchText("");
              }}
            >
              {!isSearched ? (
                <Search className="text-xl text-[#686b78]" />
              ) : (
                <XCircle className="text-xl text-[#686b78]" />
              )}
            </button>
          </div>
        </div>
        <div className="mx-auto h-full min-h-[100vh] w-full max-w-[800px] pb-8">
          {!isSearched ? (
            <div className="relative mx-auto w-full">
              <div className="block">
                <div className="p-5 text-xl font-bold">Popular Cuisines</div>
                <div className="searchBody w-ful flex cursor-pointer gap-x-4 overflow-x-auto px-5">
                  {SearchShimmer}
                </div>
              </div>
            </div>
          ) : allRestaurants.length > 0 ? (
            <SearchCard data={allRestaurants} />
          ) : (
            <div className="pt-4 text-center text-xl font-bold text-defBlack">
              No items match your search query
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchFood;
