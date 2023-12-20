import React from 'react'
import { CiCirclePlus } from "react-icons/ci";


const CourseCards = ({image, heading, buttonlink}) => {

    const redirectToNewURL = () => {
        window.open(`${buttonlink}`, '_blank');
    };

  return (
    <div className=' border-[1px] border-blue-950 rounded-xl p-2'>
        <img className='object-contain rounded-xl  ' 
          width={300} src={image} alt={`${heading} image`} />
        <div className='flex flex-col rounded-xl hover:scale-105 transition-all duration-200 cursor-pointer relative -bottom-4 bg-white w-[80%] mx-auto'>
            <span className='text-[20px] font-bold text-center hover:text-green-500 my-1'>{heading}</span>
            <button onClick={redirectToNewURL}
              // className='hover:text-orange-400 transition-all duration-200 cursor-pointer'
              className='items-center justify-center flex gap-1 hover:bg-green-500 transition-all duration-500
               hover:text-white w-[80%] mx-auto p-2 rounded-lg mb-2'
            >
                Apply Now 
                <CiCirclePlus className=' text-xl'/>
            </button>
        </div>
    </div>
  )
}

export default CourseCards