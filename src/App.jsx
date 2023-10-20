import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Body from "./components/Body";
import LandingPage from "./components/LandingPage";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";
import { selectLocationState } from "./utilities/AppSlice";
import store from "./utilities/store";
import { fetchData } from "./utilities/HomeSlice";
import Help from "./pages/Help";
import RestaurantPage from "./components/RestaurantPage";

function App() {

  const userLocation = useSelector(selectLocationState);
  store.dispatch(
    fetchData({ lat: userLocation?.lat, long: userLocation?.long }),
  );

  return (
    <Routes>
      {userLocation? (
        <Route path="/" element={<Body/>}>
          <Route index path="/" element={<HomePage/>} />
          <Route path="restaurant">
            <Route index path=":resId" element={<RestaurantPage/>} />
          </Route>
        </Route>
      ): (
        <Route index path="/" element={<LandingPage/>} />
      )}
    </Routes>
  );
}

export default App;
