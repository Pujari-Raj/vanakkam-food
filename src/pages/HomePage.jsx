import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import RestaurantCards from "../components/RestaurantCards";
import { selectLocationState } from "../utilities/AppSlice";
import {
  selectRestCards,
  selectHomeStatus,
  fetchMoreData,
  selectPageNum,
  updatePage,
  selectAvailStatus,
  selectRestChainCards,
} from "../utilities/HomeSlice";
import { UNAVAIL_LOC_URL } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import MoreRestaurantsShimmer from "../components/MoreRestaurantsShimmer";

const HomePage = () => {
  const dispatch = useDispatch();
  const restchainCards = useSelector(selectRestChainCards);
  const userLocation = useSelector(selectLocationState);
  const restaurants = useSelector(selectRestCards);
  const status = useSelector(selectHomeStatus);
  const page = useSelector(selectPageNum);
  const serviceStatus = useSelector(selectAvailStatus);
  // console.log(restaurants.length);
  // console.log(restchainCards.length);

  const [onlineRestaurants, setOnlineRestaurants] = useState(
    restchainCards.slice(0, 5)
  );
  console.log("onlineRestaurants-length initially- ", onlineRestaurants.length);
  // console.log("onlineRestaurants->",restchainCards);
  const [index, setIndex] = useState(5);
  const [loadingShimmer, setLoadingShimmer] = useState(false);

  const getMoreRestaurants = () => {
    setLoadingShimmer(true);
    if (index < restchainCards.length) {
      setTimeout(() => {
        var data = restchainCards.slice(index, index + 5);
        setOnlineRestaurants(onlineRestaurants.concat(data));
        setIndex(index + 5);
        setLoadingShimmer(false);
      }, 2000)
      // console.log("getMoreRestaurants-data",data);
    }
  };

  // console.log(
  //   "index-length",
  //   index
  // );
  useEffect(() => {
    setOnlineRestaurants(restchainCards.slice(0, 5));
  }, [restchainCards]);

  if (serviceStatus) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-start">
        <div className="">
          <img src={UNAVAIL_LOC_URL} className="mt-24 h-64 w-56" />
        </div>
        <div className="pt-8 text-center">
          <div className="text-xl font-bold text-defBlack">
            Location Unserviceable
          </div>
          <div className="texl base font-normal text-defGray">
            We don’t have any services here till now. Try changing location.
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className=" mx-auto w-full max-w-[1200px]">
        <Carousel />
        <div className="hidden md:block px-4 w-full">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold text-black">
              {`Top restaurant chains in ${userLocation?.city}`}
            </h1>
            {/* Carousel-Slider */}
            <div className="gap-4 mr-0 hidden md:flex">
              <div
                className="left_slide_btn cursor-pointer pt-2 pb-1 px-2 rounded-[100%] bg-[#E2E2E7] transition ease-linear duration-500"
                onClick={(e) => {
                  // console.log("left_slide_btn clicked");
                  const slider = document.getElementById("slider-3");
                  if (
                    e.target.matches(".left_slide_btn") ||
                    e.target.closest(".left_slide_btn")
                  ) {
                    slider.scrollLeft -= 220;
                  }
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  aria-hidden="true"
                  strokecolor="rgba(2, 6, 12, 0.92)"
                  fillcolor="rgba(2, 6, 12, 0.92)"
                >
                  <path
                    d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z"
                    fill="rgba(2, 6, 12, 0.92)"
                    fillOpacity="0.92"
                  ></path>
                </svg>
              </div>
              <div
                className="right_slide_btn cursor-pointer pt-2 pb-1 px-2 rounded-[100%] bg-[#E2E2E7]"
                onClick={(e) => {
                  // console.log("right_slide_btn clicked");
                  const slider = document.getElementById("slider-3");
                  if (
                    e.target.matches(".right_slide_btn") ||
                    e.target.closest(".right_slide_btn")
                  ) {
                    slider.scrollLeft += 220;
                  }
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  aria-hidden="true"
                  strokecolor="rgba(2, 6, 12, 0.92)"
                  fillcolor="rgba(2, 6, 12, 0.92)"
                >
                  <path
                    d="M10.5164 3.43418C10.1934 3.13273 9.68714 3.15022 9.3857 3.47324C9.08425 3.79626 9.10174 4.30249 9.42476 4.60394L12.9012 7.84819C13.04 7.97772 13.1626 8.09234 13.2709 8.19527L2.89142 8.19527C2.44959 8.19527 2.09142 8.55344 2.09142 8.99527C2.09142 9.4371 2.44959 9.79527 2.89142 9.79527L13.3186 9.79527C13.1988 9.90964 13.0607 10.0388 12.9012 10.1877L9.46718 13.3924C9.14416 13.6939 9.12668 14.2001 9.42813 14.5231C9.72958 14.8462 10.2358 14.8636 10.5588 14.5622L14.0304 11.3224C14.4386 10.9415 14.8033 10.6012 15.0586 10.2874C15.3364 9.94598 15.5684 9.5378 15.5684 9.01793C15.5684 8.49807 15.3363 8.08989 15.0586 7.74849C14.8033 7.43463 14.4386 7.09437 14.0304 6.71354L10.5164 3.43418Z"
                    fill="rgba(2, 6, 12, 0.92)"
                    fillOpacity="0.92"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            className="carouselContainer my-6 py-4 flex gap-8 overflow-x-auto"
            id="slider-3"
          >
            {/* 9-rest  */}
            {restaurants?.map((item) => {
              return (
                <Link
                  to={"restaurant/" + item?.info?.id}
                  key={item?.info?.id}
                  className="min-w-[240px] grow max-w-[48%]"
                >
                  <RestaurantCards item={item} />
                </Link>
              );
            })}
            {status === "loading" && (
              <>
                <div className="container-card_shimmer shine min-w-[230px] h-[280px] rounded-2xl ">
                  <div className="rest_img shine  h-[55%]"></div>

                  <div className="rest_info_card h-1/4">
                    <p className="name_of_hotel_shimmer wrapper_shimmer"></p>
                    <div className=" wrapper_shimmer content-line"></div>
                    <div className=" wrapper_shimmer content-line"></div>
                  </div>
                </div>
                <div className="container-card_shimmer shine min-w-[230px] h-[280px] rounded-2xl ">
                  <div className="rest_img shine  h-[55%]"></div>

                  <div className="rest_info_card h-1/4">
                    <p className="name_of_hotel_shimmer wrapper_shimmer"></p>
                    <div className=" wrapper_shimmer content-line"></div>
                    <div className=" wrapper_shimmer content-line"></div>
                  </div>
                </div>
                <div className="container-card_shimmer shine min-w-[230px] h-[280px] rounded-2xl ">
                  <div className="rest_img shine  h-[55%]"></div>

                  <div className="rest_info_card h-1/4">
                    <p className="name_of_hotel_shimmer wrapper_shimmer"></p>
                    <div className=" wrapper_shimmer content-line"></div>
                    <div className=" wrapper_shimmer content-line"></div>
                  </div>
                </div>
                <div className="container-card_shimmer shine min-w-[230px] h-[280px] rounded-2xl ">
                  <div className="rest_img shine  h-[55%]"></div>

                  <div className="rest_info_card h-1/4">
                    <p className="name_of_hotel_shimmer wrapper_shimmer"></p>
                    <div className=" wrapper_shimmer content-line"></div>
                    <div className=" wrapper_shimmer content-line"></div>
                  </div>
                </div>
                <div className="container-card_shimmer shine min-w-[230px] h-[280px] rounded-2xl ">
                  <div className="rest_img shine  h-[55%]"></div>

                  <div className="rest_info_card h-1/4">
                    <p className="name_of_hotel_shimmer wrapper_shimmer"></p>
                    <div className=" wrapper_shimmer content-line"></div>
                    <div className=" wrapper_shimmer content-line"></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="px-4">
          <h1 className="text-2xl font-bold text-black">
            {`Restaurants with online food delivery in ${userLocation?.city}`}
          </h1>
          <div
            className="my-8 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-x-8 gap-y-4 md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)]
          "
          >
            {/* 20-rest */}
            {onlineRestaurants?.map((item) => {
              return (
                <Link to={"restaurant/" + item?.info?.id} key={item?.info?.id}>
                  <RestaurantCards item={item} />
                </Link>
              );
            })}
            {loadingShimmer && (
              <MoreRestaurantsShimmer/>
            )}
            {status === "loading" && (
              <>
                <div className="container-card_shimmer1 shine min-w-[150px] h-[280px] rounded-2xl ">
                  <div className="rest_img shine  h-[55%]"></div>

                  <div className="rest_info_card h-1/4">
                    <p className="name_of_hotel_shimmer wrapper_shimmer"></p>
                    <div className=" wrapper_shimmer content-line"></div>
                    <div className=" wrapper_shimmer content-line"></div>
                  </div>
                </div>
                <div className="container-card_shimmer1 shine min-w-[150px] h-[280px] rounded-2xl ">
                  <div className="rest_img shine  h-[55%]"></div>

                  <div className="rest_info_card h-1/4">
                    <p className="name_of_hotel_shimmer wrapper_shimmer"></p>
                    <div className=" wrapper_shimmer content-line"></div>
                    <div className=" wrapper_shimmer content-line"></div>
                  </div>
                </div>
                <div className="container-card_shimmer1 shine min-w-[150px] h-[280px] rounded-2xl ">
                  <div className="rest_img shine  h-[55%]"></div>

                  <div className="rest_info_card h-1/4">
                    <p className="name_of_hotel_shimmer wrapper_shimmer"></p>
                    <div className=" wrapper_shimmer content-line"></div>
                    <div className=" wrapper_shimmer content-line"></div>
                  </div>
                </div>
                <div className="container-card_shimmer1 shine min-w-[150px] h-[280px] rounded-2xl ">
                  <div className="rest_img shine  h-[55%]"></div>

                  <div className="rest_info_card h-1/4">
                    <p className="name_of_hotel_shimmer wrapper_shimmer"></p>
                    <div className=" wrapper_shimmer content-line"></div>
                    <div className=" wrapper_shimmer content-line"></div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="my-10 flex justify-center">
            {page <= 200 && index <restchainCards.length && (
              <button
                className="mt-8  text-center uppercase h-10 w-auto rounded px-[20px] py-[8px] font-bold bg-orangeColor text-white hover:text-gray-600 hover:bg-transparent hover:border-grayColor hover:border-2 duration-75"
                onClick={() => {
                  //   dispatch(updatePage());
                  //   dispatch(
                  //     fetchMoreData({
                  //       lat: userLocation?.lat,
                  //       long: userLocation?.long,
                  //       page: page,
                  //     })
                  //   );
                  // }
                  getMoreRestaurants();
                }}
              >
                Explore ({restchainCards.length - index}+ more) Restaurants 
              </button>
            )
            
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
