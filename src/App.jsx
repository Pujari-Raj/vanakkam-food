import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Offers from "./pages/Offers";
import Body from "./components/Body";
import LandingPage from "./components/LandingPage";
import useCurrentLocation from "./customhooks/useCurrentLocation";
import { useSelector } from "react-redux";
import { selectLocationState } from "./utilities/AppSlice";
import store from "./utilities/store";

import Demo  from "./components/Demo";

function App() {

  // const userLocation = useSelector(selectLocationState);
  // store.dispatch(
    
  // );

  return (
    <>
      {/* <BrowserRouter>
        <Header />
          <Body/>
        <Footer />
        <Routes>
          </Routes>
      </BrowserRouter> */}
      {/* <LandingPage/> */}
      <Header/>
      <Demo/>
      <Footer/>
    </>
  );
}

export default App;
