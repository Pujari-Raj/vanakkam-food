import React, { useState } from "react";
import { Link, Route, NavLink } from "react-router-dom";
// import { ROUTES_ARR } from "../constants/routes.constant";
import {
  PercentCircle,
  ShoppingCart,
  User,
  HeartHandshake,
  ChevronDown,
  Search
} from "lucide-react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <nav className="w-full shadow-[rgba(0,_0,_0,_0.24)_0px_1px_8px]">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center  h-16 w-full">
            <div className="flex-1 flex items-center justify-between">
              <div className=" flex items-center">
                {/* <span className="text-xl font-bold">Logo</span> */}
                <a href="/">
                  <img
                    className="object-fill w-[13rem]"
                    srcSet="./src/assets/Vanakkam.png"
                    alt="website-logo"
                  />
                </a>
                <div
                  className="group flex cursor-pointer gap-x-[3px] tracking-tighter lg:ml-8 lg:gap-x-2"
                  onClick=""
                >
                  <span className="text-sm mt-[0.15rem] font-bold text-blackColor group-hover:text-orangeColor">
                    Mumbai
                  </span>
                  <span className="hidden md:contents">
                    <span className="textEllipse w-[8rem] overflow-hidden text-ellipsis break-words text-defGray lg:w-full lg:max-w-[14rem]">
                      Lorem ipsum dolor sit amet consectetur.
                    </span>
                  </span>
                  <span className="text-2xl text-orangeColor">
                    <ChevronDown />
                  </span>
                </div>
              </div>

              {/* Pages */}
              <div className="hidden sm:block sm:ml-6">
                <ul className="flex space-x-1 h-full items-center gap-x-2 font-semibold  md:gap-x-6 lg:gap-x-2">
                  <NavLink
                    to=""
                  >
                  {({isActive}) =>(
                    <li className="group flex items-center gap-x-1 md:gap-x-3">
                    <Search className={`w-[1.3rem] h-[1.3rem] 
                    text-blackColor hover:text-orangeColor
                    ${isActive ?"text-orangeColor": "text-blackColor" }`}
                     /> 
                    <span className={`text-blackColor hover:text-orangeColor
                    group-hover:text-orangeColor ${
                    isActive ? "text-orangeColor" : "text-blackColor"
                  }`}>
                    Search
                    </span>
                    </li>
                  )}  
                  
                  </NavLink>
                  <NavLink
                    to=""
                    className={`flex text-gray-500 hover:text-orange-500 hover:font-semibold px-3 py-2 capitalize font-medium
                    text-base  `}
                  >
                  {({isActive}) =>(
                    <li className="group flex items-center gap-x-1 md:gap-x-3">
                    <PercentCircle className={`w-[1.3rem] h-[1.3rem] 
                    ${isActive ?"text-orangeColor": "text-blackColor" }`}
                     /> 
                    <span className={`group-hover:text-defColor ${
                    isActive ? "text-orangeColor" : "text-blackColor"
                  }`}>
                    Offers
                    </span>
                    </li>
                  )}  
                  
                  </NavLink>
                  <NavLink
                    to=""
                    className={`flex text-gray-500 hover:text-orange-500 hover:font-semibold px-3 py-2 capitalize font-medium
                    text-base  `}
                  >
                  {({isActive}) =>(
                    <li className="group flex items-center gap-x-1 md:gap-x-3">
                    <HeartHandshake className={`w-[1.3rem] h-[1.3rem] 
                    ${isActive ?"text-orangeColor": "text-blackColor" }`}
                     /> 
                    <span className={`group-hover:text-defColor ${
                    isActive ? "text-orangeColor" : "text-blackColor"
                  }`}>
                    Help
                    </span>
                    </li>
                  )}  
                  
                  </NavLink>
                  <NavLink
                    to=""
                    className={`flex text-gray-500 hover:text-orange-500 hover:font-semibold px-3 py-2 capitalize font-medium
                    text-base  `}
                  >
                  {({isActive}) =>(
                    <li className="group flex items-center gap-x-1 md:gap-x-3">
                    <User className={`w-[1.3rem] h-[1.3rem] 
                    ${isActive ?"text-orangeColor": "text-blackColor" }`}
                     /> 
                    <span className={`group-hover:text-defColor ${
                    isActive ? "text-orangeColor" : "text-blackColor"
                  }`}>
                    SignIn
                    </span>
                    </li>
                  )}  
                  </NavLink>
                  <NavLink
                    to=""
                    className={`flex text-gray-500 hover:text-orange-500 hover:font-semibold px-3 py-2 capitalize font-medium
                    text-base`}
                  >
                  {({isActive}) =>(
                    <li className="group flex items-center gap-x-1 md:gap-x-3">
                    <ShoppingCart className={`w-[1.3rem] h-[1.3rem] 
                    ${isActive ?"text-orangeColor": "text-blackColor" }`}
                     /> 
                    <span className={`group-hover:text-defColor ${
                    isActive ? "text-orangeColor" : "text-blackColor"
                  }`}>
                    Cart
                    </span>
                    </li>
                  )}  
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
