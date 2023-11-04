import React, { useCallback, useState } from 'react';
import Header from './Header';
import MobileHeader from "./mobileHeader";
import Footer from "./Footer";
import LocationDrawer from "./LocationDrawer";
import SigninDrawer from "./SigninDrawer";
import { Outlet } from 'react-router-dom';
import UseCheckOnline from "../customhooks/useCheckOnline";

const Body = () => {

  const [locationDrawer, setLocationDrawer] = useState(false);
  const [signinDrawer, setSigninDrawer] = useState(false);
  const toggleOne = useCallback(() => {
    setLocationDrawer(!locationDrawer);
  }, [locationDrawer]);
  const toggleTwo = useCallback(() => {
    setSigninDrawer(!signinDrawer);
  }, [signinDrawer]);
  

  return (
    <>
      <Header toggle={toggleOne} toggleTwo={toggleTwo}/>
      <MobileHeader toggle={toggleOne} toggleTwo={toggleTwo}/>
      <LocationDrawer open={locationDrawer} toggle={toggleOne}/>
      <SigninDrawer openTwo={signinDrawer} toggleTwo={toggleTwo} />
      <Outlet/>
      <UseCheckOnline/>
      <Footer/>
    </>
    
  )
}

export default Body