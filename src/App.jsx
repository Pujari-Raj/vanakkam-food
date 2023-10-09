import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Offers from "./pages/Offers";
import Body from "./components/Body";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Header />
          <Body/>
        <Footer />
        <Routes>
          </Routes>
      </BrowserRouter> */}
      <LandingPage/>
    </>
  );
}

export default App;
