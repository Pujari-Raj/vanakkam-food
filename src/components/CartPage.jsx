import React from "react";
import { priceItemCalculator } from "../customhooks/useFetchSearchMenu";
import {
  DEF_IMG_URL,
  NONVEG_ICON_URL,
  VEG_ICON_URL,
} from "../constants/constants";
import {
  selectCartItem,
  selectRestInfo,
  addItem,
  removeItem,
} from "../utilities/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItem);
  const restDetails = useSelector(selectRestInfo);

  let { totalCost } = priceItemCalculator(cartItems);

  function deliveryFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("hiddenText");
    if (checkBox.checked === true) {
      text.innerText =
        "Our delivery partner will call to confirm. Please ensure that your address has all the required details.";
    } else {
      text.innerText =
        " Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)";
    }
  }

  return (
    <>
      <div className="cartContainer">
        {cartItems?.length === 0 ? (
          <div className="cartInnerContainer">
            <div className="cartBGImage"></div>
            <div className="cartMsg">Your cart is empty</div>
            <div className="cartDesc">
              You can go to home page to view more restaurants
            </div>
            <Link to="/">
              <div className="m-2  text-center uppercase h-10 w-auto rounded px-[20px] py-[8px] font-bold bg-orangeColor text-white hover:text-gray-600 hover:bg-transparent hover:border-grayColor hover:border-2 duration-75">
                Explore restaurants near you
              </div>
            </Link>
          </div>
        ) : (
          <div className="cartFilled">
            <div className="checkOutSection">
              <Link
                to={"/restaurant/" + restDetails?.resId}
                className="no-underline"
              >
                <button className="cartRestroDetails">
                  <span className="cartRestroImgBox">
                    <img
                      className="cartRestroImg h-[50px] w-[50px] object-cover"
                      src={DEF_IMG_URL + restDetails?.dp}
                    />
                  </span>
                  <span className="cartRestroDesc">
                    <div className="cartRestroName">{restDetails?.name}</div>
                    <div className="cartRestroArea">
                      {restDetails?.areaName}
                    </div>
                  </span>
                </button>
              </Link>
              <div className="cartItemContainer">
                <div className="cartInnerItemContainer">
                  <div className="cartItemSection">
                    <div>
                      {cartItems?.map((item) => {
                        return (
                          <div className="cartItems" key={item?.id}>
                            <div className="cartItemInner">
                              <div className="cartItemName">
                                {item?.isVeg ? (
                                  <img className="h-4 w-4" src={VEG_ICON_URL} />
                                ) : (
                                  <img
                                    className="h-4 w-4"
                                    src={NONVEG_ICON_URL}
                                  />
                                )}
                                <div>{item?.name}</div>
                              </div>
                              <div className="cartItemRateSection">
                                <div className="cartQuantityBtn">
                                  {item?.qty == 0 ? (
                                    <div
                                      className="addBtn cartItemBtn"
                                      onClick={() =>
                                        dispatch(addItem(item, restDetails))
                                      }
                                    >
                                      ADD
                                    </div>
                                  ) : (
                                    <div className="itemCounter cartItemBtn">
                                      <span
                                        className="itemInnerBtn minusItemBtn"
                                        onClick={() =>
                                          dispatch(removeItem(item))
                                        }
                                      >
                                        -
                                      </span>
                                      {item?.qty}
                                      <span
                                        className="itemInnerBtn plusItemBtn "
                                        onClick={() =>
                                          dispatch(addItem(item, restDetails))
                                        }
                                      >
                                        +
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <div className="cartItemPrice">
                                  {"₹"}
                                  {(item.price
                                    ? item.price
                                    : item.finalPrice
                                    ? item.finalPrice
                                    : item.defaultPrice) / 100}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="beforeCheckContainer">
                  <div className="beforeCheckInner">
                    <div className="beforeCheckBox">
                      <input
                        type="checkbox"
                        className="checkBoxInput"
                        id="myCheck"
                        onClick={() => deliveryFunction()}
                      />
                    </div>
                    <div aria-hidden="true" className="checkBoxBody">
                      <div className="checkBoxInnerHeader">
                        Opt in for No-contact Delivery
                      </div>
                      <div className="checkBoxInnerBody" id="hiddenText">
                        Unwell, or avoiding contact? Please select no-contact
                        delivery. Partner will safely place the order outside
                        your door (not for COD)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cartCostSection">
                  <div className="billDetails">Bill Details</div>
                  <div className="costnDelSection">
                    <div className="">Item Total</div>
                    <div>{totalCost / 100}</div>
                  </div>
                  <div className="costnDelSection">
                    <div className="">
                      Delivery Fee |{" "}
                      {restDetails?.distance ? restDetails?.distance : "1 Km"}
                    </div>
                    <div>
                      {"₹"}
                      {restDetails?.delFees
                        ? restDetails?.delFees / 100
                        : Number(30)}
                    </div>
                  </div>
                  <div className="costnDelSection">
                    <div className="">Govt Taxes & Other Charges</div>
                    <div>
                      {"₹"}
                      {restDetails?.delFees
                        ? restDetails?.delFees / 200
                        : Number(15)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="totalPayoutSec">
                <div className="totalPayoutInner">
                  <div>TO PAY</div>
                  <div>
                    {"₹"}
                    {Math.round(
                      (totalCost +
                        (restDetails?.delFees
                          ? restDetails?.delFees
                          : Number(30)) *
                          1.5) /
                        100
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
