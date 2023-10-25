import React, { useState } from "react";
import { Utensils, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import RestaurantBottomMenu from "./RestaurantBottomMenu";
import { useSelector } from "react-redux";
import { selectCartItem } from "../utilities/CartSlice";
import { priceItemCalculator } from "../customhooks/useFetchSearchMenu";

const RestaurantBrowseMenu = ({ data }) => {
  const cartItems = useSelector(selectCartItem);

  let { totalCost, totalItems } = priceItemCalculator(cartItems);

  var cartBottomMenu = document.getElementById("stickyBottomMenu");

  var restMenuBtnContainer = document.getElementById("restMenuBtnContainer");

  if (cartItems.length > 0) {
    cartBottomMenu?.classList?.add("stickyBottomMenuVisible");
    restMenuBtnContainer?.classList?.add("restMenuVisible");
  } else if (
    cartBottomMenu?.classList?.contains("stickyBottomMenuVisible") &&
    cartItems.length == 0
  ) {
    cartBottomMenu?.classList?.remove("stickyBottomMenuVisible");
    restMenuBtnContainer?.classList?.remove("restMenuVisible");
  }

  const [menuNavState, setMenuNavState] = useState(false);
  const menuNavToggleClickHandler = () => {
    console.log('Browse Menu clicked');
    setMenuNavState(!menuNavState);
  };

  return (
    <>
      <div className="stickyBottomMenuContainer ">
        <div className="restMenuBtnInnerContainer" id="restMenuBtnContainer">
          <div className="restMenuBtnContainer">
            <div
              className="restMenuBtn"
              onClick={() => menuNavToggleClickHandler()}
            >
              <Utensils className="mr-4 h-[19px] w-[19px]  text-white" />
              Browse Menu
            </div>
          </div>
        </div>
        <div className="stickyBottomMenu" id="stickyBottomMenu">
        <Link to="/cart/">
            <button className="stickyMenuStyleContainer">
              <span className="stickyMenuInnerBody">
                {totalItems +
                  (totalItems > 1 ? " Items" : " Item") +
                  " | ₹" +
                  totalCost / 100}
                <span className="bottomMenuRight">
                  view cart
                  <ShoppingBag className="text-white" />
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
      <RestaurantBottomMenu open={menuNavState} toggle={menuNavToggleClickHandler} data={data} />
    </>
  );
};

export default RestaurantBrowseMenu;
