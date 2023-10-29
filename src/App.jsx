import "./App.css";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Body from "./components/Body";
import LandingPage from "./components/LandingPage";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";
import { selectLocationState } from "./utilities/AppSlice";
import store from "./utilities/store";
import { fetchData } from "./utilities/HomeSlice";
import RestaurantPage from "./components/RestaurantPage";
import RestaurantSearch from "./components/RestaurantSearch";
import SearchFood from "./components/SearchFood";
import CartPage from "./components/CartPage";

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
            <Route path=":resId/search" element={<RestaurantSearch/>} />
          </Route>
          <Route path="search" element={<SearchFood/>} />
          <Route path="cart" element={<CartPage/>} />
        </Route>
      ): (
        <Route index path="/" element={<LandingPage/>} />
      )}
    </Routes>
  );
}

export default App;
