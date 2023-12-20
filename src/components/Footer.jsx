import React from 'react'
import logo from '../assets/logo.png'
import { TfiEmail } from "react-icons/tfi";


const Footer = () => {
  return (
    <div className='' id="footer">
            <div className='mx-auto lg:flex items-center justify-between py-10  w-11/12 text-gray-600'>
            {/* first Div */}
            <div className=' lg:w-[20%] w-11/12 items-center justify-center mx-auto py-4'>
                <img width={150} src={logo} alt='Logo Image' className=' mx-auto'/>
                <p className=' text-center'>Our goal is to empower the next generation of tech leaders. 
                    Our internship program offers hands-on experience in different fields.</p>
            </div>

            {/* Second Div */}
            <div className=' lg:w-[20%] w-11/12 items-center justify-center flex gap-2 py-4 flex-col mx-auto'>
                <h2 className=' text-xl font-medium pb-4 '>Find more</h2>
                <p className=' text-base font-medium'><a href="/">Home</a></p>
                <p className=' text-base font-medium'><a href="/">About us</a></p>
                <p className=' text-base font-medium'> <a href="/">Contact us</a></p>
                <p className=' text-base font-medium'><a href="/">VIP</a></p>
            </div>

            {/* Third Div */}
            <div className=' lg:w-[20%] w-11/12 items-center justify-center flex gap-2 py-4 flex-col mx-auto'>
                <h2 className=' text-xl font-medium pb-4'>Follow us</h2>
                <p className=' text-base font-medium'><a href="https://www.linkedin.com/in/inter-ease-05aa122a5"
                target='_blank' rel='noopener noreferrer'>Linkdin</a></p>
                <p className=' text-base font-medium' 
                target='_blank' rel='noopener noreferrer'>Telegram</p>
                <p className=' text-base font-medium'><a href="https://www.instagram.com/interneasee?igshid=NGVhN2U2NjQ0Yg== "
                target='_blank' rel='noopener noreferrer'>Instagram</a></p>
            </div>

            {/* Forth Div */}
            <div className=' lg:w-[20%] w-11/12 items-center justify-center flex gap-2 py-4 flex-col mx-auto'>
                <h2 className=' text-xl font-medium pb-4'>Address</h2>
                <p className=' text-base font-medium flex items-center gap-2'
                ><TfiEmail /><a href="mailto:internease.contact@gmail.com">internease.contact@gmail.com</a></p>
            </div>

            {/* Base */}

        </div>
        <p className='mx-auto lg:flex text-center w-11/12 items-center justify-center text-gray-600 py-4'>Copyright © 2023 
        Inter Ease. All rights reserved by&nbsp;<span className=' font-bold'>InternEase</span></p>
    </div>
  )
}

export default Footer