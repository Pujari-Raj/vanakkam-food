import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  PercentCircle,
  User,
  ChevronDown,
  Search,
} from "lucide-react";
import { useSelector } from "react-redux";
import { selectLocationState } from "../utilities/AppSlice";
import { cartItemCalculator } from "../customhooks/useFetchSearchMenu";
import { selectCartItem, selectRestInfo } from "../utilities/CartSlice";

import {
  CartBtn,
} from "../assets/SVG";
import {
  DEF_IMG_URL,
  NONVEG_ICON_URL,
  VEG_ICON_URL,
} from "../constants/constants";

const Header = (props) => {
  const location = useSelector(selectLocationState);
  const address = location.address;
  const addressparts = address.split(",");
  const area = addressparts.shift();
  const restOfAddress = addressparts.join(',');

  const cartItems = useSelector(selectCartItem);
  const restInfo = useSelector(selectRestInfo);
  const { totalCost, totalItems } = cartItemCalculator(cartItems);

  var cartButton = document.getElementById("cartNavBtn");
  var cartCounter = document.getElementById("cartCounter");
  
  if (cartItems?.length != 0) {
    cartButton?.classList.add("activeSet");
    cartCounter?.classList.add("cartCountActive");
  } else if (
    cartButton?.classList.contains("activeSet") &&
    cartCounter?.classList.contains("cartCountActive") &&
    cartItems?.length == 0
  ) {
    cartButton?.classList.remove("activeSet");
    cartCounter?.classList.remove("cartCountActive");
  }
  
  //

  return (
    <>
      <nav className="w-full shadow-[rgba(0,_0,_0,_0.24)_0px_1px_8px] hidden md:block" id="header">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center  h-16 w-full">
            <div className="flex-1 flex items-center justify-between">
              <div className=" flex items-center">
                <NavLink to="/">
                  <img
                    className="object-fill w-[13rem]"
                    // srcSet="./src/assets/Vanakkam.png"
                    src={"./src/assets/Vanakkam.png"}
                    alt="website-logo"
                  />
                </NavLink>
                <div
                  className="group flex items-center cursor-pointer gap-x-[3px] tracking-tighter lg:ml-4 lg:gap-x-2"
                  onClick={props.toggle}
                >
                  <span className="text-lg mt-[0.15rem] font-extrabold text-blackColor group-hover:text-orangeColor underline">
                    {/* {location?.city} */}
                    {area}
                  </span>
                  <span className="hidden md:contents">
                    <span className="textEllipse w-[8rem] overflow-hidden text-ellipsis break-words text-gray-500 text-[0.98rem]
                    lg:w-full lg:max-w-[16rem]">
                    {restOfAddress}
                    {/* {location?.address} */}
                    </span>
                  </span>
                  <span className="text-2xl text-orangeColor">
                    <ChevronDown />
                  </span>
                </div>
              </div>
              
              <ul className="flex h-full items-center gap-x-2 font-semibold text-primary md:gap-x-6 lg:gap-x-8 ">
                <NavLink to="search">
                  {({ isActive }) => (
                    <li className="group flex items-center gap-x-1 md:gap-x-3">
                      <Search
                        className={`h-[17px] w-[17px] group-hover:text-orangeColor ${
                          isActive ? "text-orangeColor" : "text-blackColor"
                        }`}
                      />
                      <span
                        className={`group-hover:text-orangeColor ${
                          isActive ? "text-orangeColor" : "text-blackColor"
                        }`}
                      >
                        Search
                      </span>
                    </li>
                  )}
                </NavLink>
                <NavLink>
                  <li className="group flex items-center gap-x-1 md:gap-x-3">
                    <PercentCircle
                      className={
                        "h-[19px] w-[19px] fill-primary group-hover:text-orangeColor"
                      }
                    />
                    <span className="group-hover:text-orangeColor ">Offers </span>
                  </li>
                </NavLink>
                {/* <NavLink to="help">
                  {({ isActive }) => (
                    <li className="group flex items-center gap-x-1 md:gap-x-3">
                      <User
                        className={`h-[19px] w-[19px] group-hover:text-orangeColor  ${
                          isActive ? "text-orangeColor" : "text-blackColor"
                        }`}
                      />
                      <span
                        className={`group-hover:text-orangeColor ${
                          isActive ? "text-orangeColor" : "text-blackColor"
                        }`}
                      >
                        About
                      </span>
                    </li>
                  )}
                </NavLink> */}
                <NavLink to="#" onClick={props.toggleTwo}>
                  <li className="group flex items-center gap-x-1 md:gap-x-3">
                    <User
                      className={
                        "h-[19px] w-[18px] fill-primary group-hover:text-orangeColor"
                      }
                    />
                    <span className="group-hover:text-orangeColor ">Login </span>
                  </li>
                </NavLink>
                <li className="cartItem group relative flex h-full">
                  <NavLink
                    to="cart"
                    className="flex items-center gap-x-1 md:gap-x-3"
                  >
                    <span className="relative">
                      <CartBtn
                        classList={
                          "h-[30px] w-[25px] fill-white stroke-[#02060cbf] stroke-[3px] group-hover:stroke-orangeColor group-hover:fill-white"
                        }
                        idName={"cartNavBtn"}
                      />
                      <span
                        className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-sm font-semibold group-hover:text-orangeColor"
                        id="cartCounter"
                      >
                        {totalItems}
                      </span>
                    </span>
                    <span className="group-hover:text-orangeColor">Cart</span>
                  </NavLink>
                  {/* Cart (hover-func) */}
                  <div className="cartMenu invisible absolute right-0 top-full z-[1] flex w-auto rounded-sm border-t-2 border-solid border-t-[#fc8019] bg-white px-7 py-6 opacity-0 shadow-[0_2px_20px_0_#93959f]">
                    <span className="cartArrow"></span>
                    {cartItems?.length == 0 ? (
                      <div className="w-[280px] px-[14px] pb-[14px] pt-[7px]">
                        <div className="text-3xl font-semibold tracking-tighter text-[#7e808c]">
                          Cart Empty
                        </div>
                        <div className=" mt-4 max-w-[218px] text-base font-light text-[#93959f]">
                          Good food is always cooking! Go ahead, order some
                          yummy items from the menu.
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-[280px]">
                        <div className="relative pb-5">
                          <div className="relative float-left h-[66px] w-[66px] cursor-pointer overflow-hidden">
                            <img
                              className="h-[66px] w-[66px] object-cover"
                              src={DEF_IMG_URL + restInfo?.dp}
                            />
                          </div>
                          <div className="ml-20 h-[66px] overflow-hidden pr-[30px] after:absolute after:bottom-0 after:left-0 after:right-[-30px] after:border-b after:border-b-[#d4d5d9] after:content-['']">
                            <div className="overflow-hidden text-ellipsis whitespace-nowrap pt-0.5 text-base font-medium text-[#282c3f]">
                              {restInfo?.name}
                            </div>
                            <div className="-mt-px overflow-hidden text-ellipsis whitespace-nowrap text-xs font-light text-[#7e808c]">
                              {restInfo?.areaName}
                            </div>
                            <NavLink to={"/restaurant/" + restInfo?.resId}>
                              <div className="mt-2 cursor-pointer text-xs font-semibold uppercase text-[#5d8ed5] hover:font-bold">
                                view full menu
                              </div>
                            </NavLink>
                          </div>
                        </div>
                        <div className="max-h-[230px] min-h-[60px] overflow-y-auto border-b border-dashed border-b-[#a9abb2] px-0 pb-3 pt-4">
                          {cartItems?.map((item) => {
                            return (
                              <div
                                className="mx-0 mb-[15px] mt-3 flex items-center text-[15px]"
                                key={item.id}
                              >
                                {item?.isVeg ? (
                                  <img
                                    className="mr-2 h-4 w-4"
                                    src={VEG_ICON_URL}
                                  />
                                ) : (
                                  <img
                                    className="mr-2 h-4 w-4"
                                    src={NONVEG_ICON_URL}
                                  />
                                )}
                                <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium text-[#3d4152]">
                                  {item?.name}
                                  {" x "}
                                  {item?.qty}
                                </div>
                                <div className="w-[60px] text-right text-xs font-light text-[#686b78]">
                                  {"₹ "}
                                  {(item?.price
                                    ? item?.price
                                    : item?.finalPrice
                                    ? item?.finalPrice
                                    : item?.defaultPrice) / 100}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex flex-col px-0 py-4 text-[#282c3f]">
                          <div className="flex items-center">
                            <div className="flex-1 text-sm font-medium">
                              Sub total
                            </div>
                            <div className="text-sm font-medium">
                              {"₹ "}
                              {totalCost / 100}
                            </div>
                          </div>
                          <div className="text-xs font-light text-[#7e808c]">
                            Extra charges may apply
                          </div>
                        </div>
                        <NavLink to="/cart">
                          <div className="mb-1 w-full translate-y-0 cursor-pointer bg-[#fc8019] p-2.5 text-center text-sm font-semibold uppercase text-white transition-transform duration-[0.8s] ease-[cubic-bezier(0.2,1,0.2,1)] hover:relative hover:shadow-[0_4px_14px_#d4d5d9]">
                            Checkout
                          </div>
                        </NavLink>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
