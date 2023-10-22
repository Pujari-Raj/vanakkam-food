import React, { useEffect, useRef, useState } from "react";
import { filterItems } from "../customhooks/useFetchSearchMenu";
import { Search, ArrowLeft, XCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import MenuItemBox from "./MenuItemBox";

const RestaurantSearch = () => {
  const { state } = useLocation();
  const inputRef = useRef();
  const [searchText, setSearchText] = useState("");
  const [isSearched, setIsSearched] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const unfilteredData = filterItems(state[0]);

  useEffect(() => {
    inputRef.current.focus();
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    // if (mediaQuery.matches)
    //   document.getElementById("shortHeader").style.display = "none";
    // return () => {
    //   if (mediaQuery.matches)
    //     document.getElementById("shortHeader").style.display = "block";
    // };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
        const data = searchData(searchText, unfilteredData);
        setFilteredRestaurants(data);
        setIsSearched(data);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText])
  
  const searchData = (searchQuery, rawData) => {
    let filterData = rawData.filter((restaurant) => 
        restaurant?.info?.name?.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    // if (searchData == "") {
    //     filterData = []
    // }
    if (searchQuery == "") filterData = [];
    return filterData;
  }

  const clearsearchData = () => {
    setSearchText("");
  }

  return (
    <>
    <div className="mx-auto my-5 flex min-h-[800px] max-w-[800px] flex-col px-4">
      <form
        className="h-19 mb-4 flex w-full items-center border-b border-[#e9e9eb] pb-1"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Link to={"/restaurant/" + state[1]?.resId}>
          <ArrowLeft className="h-8 w-6 text-[#3d4152]" />
        </Link>
        <input
          className="h-full w-full border-none bg-white px-5 py-2.5 text-base font-light outline-none "
          placeholder={`Search in ${state[1]?.name}`}
          ref={inputRef}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="cursor-pointer border-white bg-white px-3">
          {isSearched.length > 0 ? (
            <XCircle className="text-xl text-[#686b78]" onClick={() => clearsearchData()} />
            ) : (
              <Search className="text-xl text-[#686b78]" />    
          )}
        </button>
      </form>
      <div className="h-full w-full pb-8">
        {filteredRestaurants?.map((item, idx) => {
          return <MenuItemBox data={item} restInfo={state[1]} key={idx} />;
        })}
      </div>
    </div>
    </>
  );
};

export default RestaurantSearch;
