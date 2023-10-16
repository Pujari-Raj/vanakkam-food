import React from "react";
import { LOGIN_ICON_URL } from "../constants/constants";
import { X } from "lucide-react";

const SigninDrawer = ({ openTwo, toggleTwo }) => {
  let drawerClasses =
    "h-full w-full lg:w-[562px] z-[1001] bg-white transition-transform duration-[0.3s] ease-[ease-out] fixed translate-x-full right-0 top-0";
  let backdrop;
  if (openTwo) {
    drawerClasses =
      "h-full w-full lg:w-[562px] z-[1001] bg-white transition-transform duration-[0.3s] ease-[ease-out] fixed right-0 top-0 overflow-y-scroll translate-x-0 shadow-[1px_0_7px_#00000080]";
    backdrop = (
      <div
        className="fixed right-0 top-0 z-[1000] h-full w-full bg-[#282c3e99]"
        onClick={toggleTwo}
      ></div>
    );
    document?.body?.classList?.add("drawerOpen");
  } else if (!openTwo && document?.body?.classList?.contains("drawerOpen")) {
    document?.body?.classList?.remove("drawerOpen");
  }
  return (
    <>
      <div className={drawerClasses}>
        <div className="pl-8 pr-8 pt-8 lg:pl-40">
          <div className="inline-block cursor-pointer text-lg">
            <X onClick={toggleTwo} />
          </div>
          <div className="drawerSiginHead">
            <div className="text-3xl font-medium mt-[25px]">Login</div>
            <div className="relative mt-2.5">or create an account</div>
            <div className="h-0.5 bg-black w-[10%] mt-5"></div>
            <img
              className="h-[100px] w-[100px] absolute right-0 -top-2.5"
              src={LOGIN_ICON_URL}
            />
          </div>
          <div className="drawerSiginBody">
            <div className="drawerSiginInput">
              <input
                className="phoneInput"
                type="tel"
                name="mobile"
                maxLength="10"
                placeholder="Phone number"
              ></input>
            </div>
            <div className="loginBtn">Login</div>
            <div className="policySection">
              By clicking on Login, I accept the
              <a>Terms & Conditions</a> & <a>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninDrawer;
