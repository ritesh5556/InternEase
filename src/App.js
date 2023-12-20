import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

import { useEffect, useState } from 'react'

import Courses from "./pages/Courses";
import Footer from "./components/Footer";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  return (
    <div className=" items-center justify-center mx-auto w-11/12 flex flex-col mt-2  ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/courses" element= {<Courses isLoggedIn={isLoggedIn}/>} />

        {/* <Footer/> */}
        

      </Routes>
      
      <Footer ></Footer>

    </div>
    )
}

export default App;
