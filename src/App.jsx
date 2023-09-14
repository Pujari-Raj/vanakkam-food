import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Offers from './pages/Offers'

function App() {

  return (
    <>
    <BrowserRouter>
     <Header/>

     <Footer/>
     <Routes>
     {/* <Route path='/Offer' exact element={Offers} /> */}
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
