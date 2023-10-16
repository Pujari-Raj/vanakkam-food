import React from "react";
import { useSelector } from "react-redux";
import {
  selectCarouselData,
  selectCarouselStatus,
} from "../utilities/HomeSlice";
import {
  CAROUSEL_BANNER_URL,
  CATEGORY_ITEMS_URL,
} from "../constants/constants";

const Carousel = () => {
  const { carouselCards, categoryCards } = useSelector(selectCarouselData);
  const status = useSelector(selectCarouselStatus);

  return (
    <div className="mt-4 w-full px-4">
      {status === "success" ? (
        carouselCards?.length > 0 && (
          <div className="mt-6">
            <div className="text-2xl font-bold text-black">
              Best offers for you
            </div>
            <div className="carouselContainer mt-4 flex h-full gap-x-4 overflow-x-auto">
              {carouselCards?.map((item) => {
                return (
                  <div className="contents cursor-pointer" key={item?.imageId}>
                    <img
                      className="h-[200px] w-[300px] sm:h-[250px] sm:w-[425px]"
                      src={CAROUSEL_BANNER_URL + item?.imageId}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )
      ) : (
        <div className="mt-6">
          <div className="text-2xl font-bold text-black">
            Best offers for you
          </div>
          <div className="carouselContainer mt-4 flex h-full gap-x-4 overflow-x-auto">
            <div>
              <div className="shine h-[250px] w-[425px] rounded-2xl"></div>
            </div>
            <div>
              <div className="shine h-[250px] w-[425px] rounded-2xl"></div>
            </div>
            <div>
              <div className="shine h-[250px] w-[425px] rounded-2xl"></div>
            </div>
          </div>
        </div>
      )}
      {status === "success" ? (
        categoryCards?.length > 0 && (
          <div className="mt-8 w-full">
            <div className="text-2xl font-bold text-black">
              What's on your mind?
            </div>
            <div className="carouselContainer mt-2 flex h-full gap-x-4 overflow-x-auto">
              {categoryCards?.map((item) => {
                return (
                  <div className="contents cursor-pointer" key={item?.imageId}>
                    <img
                      className="h-[180px] w-[144px]"
                      src={CATEGORY_ITEMS_URL + item?.imageId}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )
      ) : (
        <div className="mt-8 w-full">
          <div className="pb-4 text-2xl font-bold text-black">
            What's on your mind?
          </div>
          <div className="carouselContainer mt-2 flex h-full gap-x-4 overflow-x-auto">
            <div className="cursor-pointer">
              <div className="shine h-[145px] w-[144px] rounded-full"></div>
            </div>
            <div className="cursor-pointer">
              <div className="shine h-[145px] w-[144px] rounded-full"></div>
            </div>
            <div className="cursor-pointer">
              <div className="shine h-[145px] w-[144px] rounded-full"></div>
            </div>
            <div className="cursor-pointer">
              <div className="shine h-[145px] w-[144px] rounded-full"></div>
            </div>
            <div className="cursor-pointer">
              <div className="shine h-[145px] w-[144px] rounded-full"></div>
            </div>
            <div className="cursor-pointer">
              <div className="shine h-[145px] w-[144px] rounded-full"></div>
            </div>
            <div className="cursor-pointer">
              <div className="shine h-[145px] w-[144px] rounded-full"></div>
            </div>
          </div>
        </div>
      )}
      <hr className="my-8 border border-solid border-[#f0f0f5]" />
    </div>
  );
};

export default Carousel;
