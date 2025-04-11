import React from 'react'
import Aboutpage from './Aboutsection/Aboutus'
import MarqueeSlider from '../Pages/Marquee'
import Aboutimage from './Aboutsection/Aboutimage'
import Aboutinfosection from './Aboutsection/AboutSection'
import './css/About.css'

const Aboutsection = () => {
  return (
    <div className='about-section-bg'>
      <Aboutpage/>
      <MarqueeSlider/>
      <Aboutinfosection/>
      <Aboutimage/>
    </div>
  )
}

export default Aboutsection
