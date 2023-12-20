// src/components/ResponsiveDivs.js
import React from 'react';

import { Link } from 'react-router-dom';
import Carts from "../components/Carts"
import "./Home.css"
import ml1234 from '../assets/ml1234.jpg'

const Home = () => {
  return (
    
    <div className=' lg:flex flex-col justify-center items-center py-4 w-11/12'>

      {/* content and image */}
      <div className=' sm:flex-row flex flex-col w-11/12  gap-2  items-center justify-center    lg:h-[610px]'>
           {/* content */}
          <div className='flex  justify-center items-center lg:w-[60%] w-[95%]'>
            <div className='-tracking-4 space-y-4  leading-[3.25rem] mx-auto lg:flex lg:items-left justify-center flex-col'>
              <h1 className='font-normal lg:text-5xl lg:pt-0 pt-35 text-3xl lg:text-left text-center'>
              Unlock Your Potential With  

                <span className='font-medium '>'Intern Ease'</span>

              </h1>

              <p className='text-cyan-800 pb-6 leading-[1.8] text-lg font-semibold opacity-70 text-cen leading-[1.8rem]'>
                Our goal is to empower the next generation of tech leaders. Our <br></br>internship program offers hands-on
                experience in different fields.
              </p>
              {/* bg-gradient-to-br from-green-500 via-green-600 to-green-700 */}
              
              <div className=' lg:w-fit w-full m-0 flex items-center justify-center'>
                <Link to={"courses"}  >

                <button className=" py-4 px-10 text-sm font-sans relative overflow-hidden group bg-gradient-to-br bg-green-500 rounded-md text-white font-bold 
                uppercase transition-transform transform-gpu duration-500 hover:scale-105 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 ">
                  GET STARTED
                </button>

                </Link>
              </div>

            </div>

          </div>

          {/* image */}

          <div className='lg:w-[50%]  mx-auto flex items-center justify-center'>

            <img  width={500} src={ml1234}/>

          </div>
      </div>

        <Carts></Carts>

    </div>
   

  );
};

export default Home;
