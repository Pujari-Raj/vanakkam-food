import React from "react";
import { NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import {
  PercentCircle,
  ShoppingCart,
  Square,
  User,
  HeartHandshake,
  ChevronDown,
  Search,
} from "lucide-react";
import { useSelector } from "react-redux";
import { selectLocationState } from "../utilities/AppSlice";

const mobileHeader = ({ toggle, toggleTwo }) => {
  const location = useSelector(selectLocationState);

  return (
    <>
      <header
        className="sticky top-0 z-20 block h-full w-full border-b border-[#e9e9eb] bg-white shadow-[0_15px_40px_-20px_#282c3f26] md:hidden"
        id="shortHeader"
      >
        <div className="flex h-full items-center justify-between px-4 py-2">
          <div className="flex flex-col" onClick={toggle}>
            <div className="flex items-center text-xl font-bold text-defBlack group-hover:text-defColor">
              <MapPin className="mr-1 text-2xl" />
              <span>{location?.city}</span>
            </div>
            <div className="flex items-center">
              <span className="textEllipse w-full overflow-hidden text-ellipsis break-words text-defGray">
                {location?.address}
              </span>
              <ChevronDown className="mr-4 text-2xl text-defColor" />
            </div>
          </div>
          <NavLink to="/">
            <img
              className="object-fill w-[13rem]"
              srcSet="./src/assets/Vanakkam.png"
              alt="website-logo"
            />
          </NavLink>
        </div>
      </header>
      <footer
        className="fixed bottom-0 left-0 z-20 block w-full border-t border-[#e9e9eb] bg-white md:hidden"
        id="mobileNav"
      >
        <div className="relative flex flex-row justify-evenly bg-white text-xs font-medium uppercase text-defGray">
          <NavLink to="/" className="w-full py-2">
            {({ isActive }) => (
              <div
                className={`flex flex-col items-center gap-y-[1px] ${
                  isActive ? "text-orangeColor" : "text-blackColor"
                }`}
              >
                
                <img
              className="object-cover w-[1.5rem]"
              srcSet="./src/assets/mobile-banner.png"
              alt="website-logo"
            />
                Home
              </div>
            )}
          </NavLink>
          <NavLink to="/search" className="w-full py-2">
            {({ isActive }) => (
              <div
                className={`flex flex-col items-center gap-y-[1px]  ${
                  isActive ? "text-orangeColor" : "text-blackColor"
                }`}
              >
                <Search
                  className={`h-5 w-5 ${
                    isActive ? "text-orangeColor" : "text-blackColor"
                  }`}
                />
                Search
              </div>
            )}
          </NavLink>
          <NavLink onClick={toggleTwo} className="group w-full py-2">
            <div className="flex flex-col items-center gap-y-[1px] group-hover:text-defBlack">
              <User
                className={"h-5 w-5 fill-defGray group-hover:fill-defBlack"}
              />
              Signin
            </div>
          </NavLink>
          <NavLink to="/cart" className="w-full py-2">
            {({ isActive }) => (
              <div
                className={`flex flex-col items-center gap-y-[1px]  ${
              isActive ? "text-orangeColor" : "text-blackColor"
                }`}
              >
                <span className="relative">
                  <Square
                    className={`h-5 w-5 stroke-[3px] fill-white ${
                      isActive ? "text-orangeColor" : "text-blackColor"
                    }`}
                  />
                  <span
                    className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-sm font-semibold "
                    id="cartCounter"
                  >
                    {/* {totalItems} */}
                    0
                  </span>
                </span>
                <span>Cart</span>
              </div>
            )}
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default mobileHeader;
