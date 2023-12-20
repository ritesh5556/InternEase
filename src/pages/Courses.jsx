import React from 'react'
import CourseCards from '../components/CourseCards'
import wb from '../assets/wd.png'
import ad from '../assets/ad.png'
import ds from '../assets/ds.png'
import ml from '../assets/ml.png'
import fs from '../assets/fs.png'
import appdeveloper_1 from '../assets/appdeveloper_1.jpg'
import ml_2 from '../assets/ml_2.jpg'
import html_css_desk from '../assets/html_css_desk.jpg'
import html_css from '../assets/html_css.jpg'
import dsimg from '../assets/dsimg.jpg'
import html_css22 from '../assets/html_css22.png'
import ml1234 from '../assets/ml1234.jpg'
import ds1234 from '../assets/ds1234.jpg'
import fs1234 from '../assets/fs1234.jpg'

// import Footer from './components/Footer'



const Courses = () => {

  const FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSe0DwxM1TXQKZO8mdDp1VEykL4OZya6A0qEa9QgdSoMPbN__Q/viewform?vc=0&c=0&w=1&flr=0";
  return (
    <div>
      <div className=' mx-auto w-full items-center justify-center mt-10 bg-gradient-to-b from-white via-white to-yellow-200 pb-10'>
        <div className=' w-full flex mx-auto text-2xl font-bold justify-center items-center py-4'>INTERNSHIPS WE OFFER !</div>

        {/* Courses */}
        <div className=' w-11/12 flex gap-10 mx-auto my-4 h-full items-center justify-center flex-wrap'>
          <CourseCards image={html_css_desk} heading={"Web Development (Basic)"} buttonlink={FORM_LINK}/>
          <CourseCards image={ml1234} heading={"Machine Learning"} buttonlink={FORM_LINK}/>
          <CourseCards image={fs1234} heading={"Full Stack Web-Development"} buttonlink={FORM_LINK}/>
          <CourseCards image={ds1234} heading={"Data Science"} buttonlink={FORM_LINK}/>
          <CourseCards image={appdeveloper_1} heading={"App Development"} buttonlink={FORM_LINK}/>
        </div>

        {/* Footer */}
      </div>
      {/* <Footer/> */}


    </div>
  )
}

export default Courses