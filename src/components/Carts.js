import React from 'react';

import './Carts.css'; // Import your custom CSS file
import network from "../assets/network.png"

import hand from "../assets/hand_thumbsup.png"
import support from "../assets/support.png"
import key from "../assets/key.png"

const Carts = () => {
 

  return (
    

<div className='sm:flex-row flex flex-col gap-x-6'>
  <div className="transition-all duration-300 bg-white hover:bg-gradient-to-b hover:from-green-200 hover:via-green-300 hover:to-green-400 transform hover:-translate-y-2 shadow-lg">
    <a href="#" className="block max-w-sm p-6 rounded-lg dark:border-gray-700 hover:text-black">
      <img src={hand} alt="Hands-on Experience"></img>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-500">Hands-on Experience</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">Gain practical knowledge and skills through immersive, hands-on experiences within real-world work environments.</p>
    </a>
  </div>

  <div className="transition-all duration-300 bg-white hover:bg-gradient-to-b hover:from-green-200 hover:via-green-300 hover:to-green-400 transform hover:-translate-y-2 shadow-lg">
    <a href="#" className="block max-w-sm p-6 rounded-lg dark:border-gray-700 hover:text-black">
      <img src={network} alt="Tailored Internships"></img>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-500">Tailored Internships</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">Customized internships designed to match your skills and aspirations. Explore opportunities aligned with your career goals.</p>
    </a>
  </div>

  <div className="transition-all duration-300 bg-white hover:bg-gradient-to-b hover:from-green-200 hover:via-green-300 hover:to-green-400 transform hover:-translate-y-2 shadow-lg">
    <a href="#" className="block max-w-sm p-6 rounded-lg dark:border-gray-700 hover:text-black">
      <img src={support} alt="Expert Mentorship"></img>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-500">Expert Mentorship</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">Receive guidance and mentorship from industry professionals, nurturing your growth and honing your talents.</p>
    </a>
  </div>

  <div className="transition-all duration-300 bg-white hover:bg-gradient-to-b hover:from-green-200 hover:via-green-300 hover:to-green-400 transform hover:-translate-y-2 shadow-lg">
    <a href="#" className="block max-w-sm p-6 rounded-lg dark:border-gray-700 hover:text-black">
      <img src={key} alt="Diverse Opportunities"></img>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-gray-500">Diverse Opportunities</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">Access a diverse range of internship placements across various industries, opening doors to endless possibilities.</p>
    </a>
  </div>
</div>
  );
};

export default Carts;
