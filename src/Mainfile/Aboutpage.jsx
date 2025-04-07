import React from 'react'
import Aboutpage from './Aboutsection/Aboutus'
import MarqueeSlider from '../Pages/Marquee'
import Aboutimage from './Aboutsection/Aboutimage'
import Aboutinfosection from './Aboutsection/AboutSection'

const Aboutsection = () => {
  return (
    <div>
      <Aboutpage/>
      <MarqueeSlider/>
      <Aboutinfosection/>
      <Aboutimage/>
    </div>
  )
}

export default Aboutsection
