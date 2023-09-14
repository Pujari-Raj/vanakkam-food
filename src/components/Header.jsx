import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
// import { ROUTES_ARR } from "../constants/routes.constant";
import { PercentCircle, ShoppingCart, User, HeartHandshake } from "lucide-react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };
  return (
    <>
      <nav className="w-full shadow-[rgba(0,_0,_0,_0.24)_0px_1px_8px]">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center">
                {/* <span className="text-xl font-bold">Logo</span> */}
                <a href="/">
                  <img
                    className="object-fill w-[13rem]"
                    srcSet="./src/assets/Vanakkam.png"
                    alt="website-logo"
                  />
                </a>
              </div>
              {/* Pages */}
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to=""
                    className="flex text-gray-500 hover:text-orange-500 hover:font-semibold px-3 py-2 capitalize font-semibold"
                  >
                    <PercentCircle style={{marginRight: "5px"}} /> Offers
                  </Link>
                  <Link
                    to=""
                    className="flex text-gray-500 hover:text-orange-500 hover:font-semibold px-3 py-2 capitalize font-semibold"
                  >
                    <HeartHandshake  style={{marginRight: "5px"}}  /> Help
                  </Link>
                  <Link
                    to=""
                    className="flex text-gray-500 hover:text-orange-500 hover:font-semibold px-3 py-2 capitalize font-semibold"
                  >
                    <User  style={{marginRight: "5px"}}  /> SignIn
                  </Link>
                  <Link
                    to=""
                    className="flex text-gray-500 hover:text-orange-500 hover:font-semibold px-3 py-2 capitalize font-semibold"
                  >
                    <ShoppingCart  style={{marginRight: "5px"}}  /> Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
