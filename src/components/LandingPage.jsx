import React, { useCallback, useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { LocateFixed, MapPin } from 'lucide-react';
import { useDispatch } from "react-redux";
import { FETCH_ADDRESS_URL } from "../constants/constants";
import { addLocation } from "../utilities/AppSlice";
import useCurrentLocation  from "../customhooks/useCurrentLocation";
import useSearchLocation from "../customhooks/useSearchLocation";

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args)
    }, wait);
  };
};

const LandingPage = () => {

  //
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [searchData, setSearchData] = useState([]);

  const fetchAddressBySearch = async (placeid) => {
    const res = await fetch(`${FETCH_ADDRESS_URL}${placeid}}`);
    const {data} = await res.json();
    console.log("FETCH_ADDRESS_URL-",data);
    const city = data[0]?.address_components?.filter(
      (item) => item?.types[0] === "city"
    );
    dispatch(
      addLocation({
        lat: data[0]?.geometry?.location?.lat,
        long: data[1]?.geometry?.location?.long,
        city: city[0]?.long_name,
        address: data[0]?.formatted_address,
      })
    );
    window.location.reload();
    
  }

  const handleSearch = useCallback(
    debounce(
      (searchQuery) => useSearchLocation(searchQuery, setSearchData),
      500,
    ),
    [],
  );

  // console.log(searchData);
  const [content, setContent] = useState("Unexpected guests?");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const contentOptions = [
        "Cooking gone wrong?",
        "Game night?",
        "Hungry?",
        "Movie marathon?",
        "Late night at office?",
        "Unexpected guests?",
      ];

      //
      const randomIndex = Math.floor(Math.random() * contentOptions.length);

      setContent(contentOptions[randomIndex]);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* Main-Div */}
      <section className="relative flex">
        {/* left-content */}
        <div className="h-full w-full md:h-[540px]  lg:w-[70%] xl:w-[55%]">
            <div className="ml-4 md:ml-8 lg:ml-16  md:p-8 p-8 lg:p-8 xl:ml-2">
          <div className="flex gap-0 md:gap-[13rem]  items-center ">
            <div className="">
              <img
                src="../src/assets/Vanakkam.png"
                className="w-[15rem] h-auto"
                alt="web-logo"
                srcset=""
              />
            </div>
            <div className="hidden md:flex  gap-4">
              <button className="font-bold">Login</button>
              <button className="font-bold bg-black text-white p-[0.7rem] hover:bg-orange-500">
                Sign Up
              </button>
            </div>
          </div>
          <div className="my-8 mx-2">
            <h1 className="font-extrabold text-[2rem] ">{content}</h1>
            <h2 className="font-base mt-2 text-2xl text-[#686b78]">
              Order food from favourite restaurants near you.
            </h2>
            <div className="mt-8 relative md:h-[60px]">
              <h2 className="font-medium text-[#a9abb2]">
                POPULAR CITIES IN INDIA
              </h2>
              <div className="relative mt-8 md:h-[60px]">
                <form className="flex h-full flex-col md:flex-row" 
                onSubmit={(e)=> e.preventDefault()}>
                  <label
                    htmlFor="locationInput"
                    className="relative flex h-full flex-1"
                  >
                    <input
                      className="flex-1 border-[1px] border-[#fc8019] px-4 py-3 text-lg font-semibold text-[#282c3f] outline-none focus:border-[#fc8019] 
                      focus:shadow-[0_1px_10px_0_rgba(40,44,63,0.1)] md:border-r-0 md:px-4 md:py-0"
                      type="text"
                      name="locationInput"
                      id="locationInput"
                      maxLength="40"
                      placeholder="Enter your delivery location"
                      ref={searchRef}
                      onChange={() => handleSearch(searchRef.current?.value)}
                    />
                    <button
                      className="absolute right-0 top-[1px] mr-2 flex cursor-pointer items-center gap-x-1 bg-white px-2.5 py-3 font-medium text-[#535665] hover:bg-[#e9e9eb] md:top-2"
                    onClick={() => useCurrentLocation(dispatch, addLocation)}
                    >
                      <LocateFixed/>
                      Locate Me
                    </button>
                  </label>
                  <button className="mt-2 h-full bg-[#fc8019] px-8 py-3 text-sm font-extrabold text-white  md:mt-0 md:py-0">
                    FIND FOOD
                  </button>
                </form>
                {searchData &&(
                 <div className="absolute top-[48px] z-[10] w-full  border border-t-0 border-solid border-[#d4d5d9] bg-white shadow-[0_1px_10px_0_rgba(40,44,63,0.1)] md:top-[60px]">
                 {searchData?.map((item) => {
                   return (
                     <button
                       key={item?.place_id}
                       className="group relative flex min-h-[40px] w-full cursor-pointer text-left font-normal text-[#535665]"
                       onClick={() => fetchAddressBySearch(item?.place_id)}
                     >
                       <span className="p-6 text-xl group-hover:text-defColor">
                         <MapPin/>
                       </span>
                       <span className="block h-full w-full overflow-hidden text-ellipsis whitespace-nowrap border-b border-dashed border-b-[#bebfc5] py-6 text-sm font-medium group-hover:text-defColor">
                         {item?.description}
                       </span>
                     </button>
                   );
                 })}
               </div>
                )} 
              </div>
              <div
                className="mt-4 w-[90%] flex flex-wrap gap-x-2 text-sm font-extrabold text-defGray 
                [&>*:nth-child(odd)]:text-[#36454f] [&>*:nth-child(even)]:text-[#93959f]"
              >
                <span>Ahmedabad</span>
                <span>Bangalore</span>
                <span>Chennai</span>
                <span>Delhi</span>
                <span>Gurgaon</span>
                <span>Hyderabad</span>
                <span>Kolkata</span>
                <span>Mumbai</span>
                <span>Pune</span>
                <span>& more.</span>
              </div>
            </div>
          </div>
            </div>
        </div>
        {/* right-content */}
        <div
          className="absolute bg-no-repeat h-full bg-cover bg-[100%] bg-[hsla(26,5%,70%,0.2)] left-[calc(50%_+_80px)] right-0 top-0
          bg-[url('../src/assets/main-banner.webp')] 
          w-0 md:w-[0%] lg:w-[42%] xl:w-[43.6%]"
        ></div>
      </section>
      {/*  */}
      <section className="flex h-full w-full flex-col justify-between bg-[#2b1e16] px-16 pb-16 text-white md:flex-row">
        <div className="text-center">
          <div className="">
            <img
              src="src/assets/banner.png"
              className="w-[12rem] h-auto"
              alt="web-logo"
              srcset=""
            />
          </div>
          <h2 className="text-xl font-semibold">No Minimum Order</h2>
          <p className="mt-2 text-sm text-[#e0cbc1]">
            Order in for yourself or for the group,
          </p>
          <p className="text-sm text-[#e0cbc1]">
            with no restrictions on order value
          </p>
        </div>
        <div className="text-center">
          <div className="">
            <img
              src="src/assets/mid-banner1.png"
              className="w-[15rem] h-auto"
              alt="web-logo"
              srcset=""
            />
          </div>
          <h2 className="text-xl font-semibold">Live Order Tracking</h2>
          <p className="mt-2 text-sm text-[#e0cbc1]">
            Know where your order is at all times,
          </p>
          <p className="text-sm text-[#e0cbc1]">
            from the restaurant to your doorstep
          </p>
        </div>
        <div className="text-center">
          <div className="">
            <img
              src="src/assets/mid-banner2.png"
              className="w-[15rem] h-auto"
              alt="web-logo"
              srcset=""
            />
          </div>
          <h2 className="text-xl font-semibold">Lightning-Fast Delivery</h2>
          <p className="mt-2 text-sm text-[#e0cbc1]">
            Experience Swiggy's superfast delivery
          </p>
          <p className="text-sm text-[#e0cbc1]">
            for food delivered fresh & on time
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
