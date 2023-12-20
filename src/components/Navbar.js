import React, { useState } from 'react';
import logo from "../assets/111-removebg.png";
import { Link } from "react-router-dom";

import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = (props) => {
  const [showLinks, setShowLinks] = useState(false);


  return (
    <div className='flex w-11/12 flex-col md:flex-row justify-between items-center px-4 mx-auto '>

      {/* Logo at left corner */}
      <div className='flex items-center md:items-start md:mb-0 '>
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
      </div>

      {/* Button for small screens */}
      <button
        className='md:hidden text-richblack-300 focus:outline-none absolute top-4 right-4'
        onClick={() => setShowLinks(!showLinks)}
      >
    
        {showLinks ? <RxCross2 /> : <FiAlignJustify />}
      </button>

      <nav className={`mt-4 md:mt-0 ${showLinks ? 'block' : 'hidden'} md:flex md:items-center`}>
        <ul className='text-cyan-700 text-2sm font-bold opacity-75 flex flex-col md:flex-row gap-x-6'>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/">About</Link>
          </li> */}
          <li>
            <Link to='/footer'>Contact</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
