import React from 'react'
import Header from './Pages/Header'
import HeroSection from './Pages/Home'
import VideoSection from './Pages/videosection'
import MarqueeSlider from './Pages/Marquee'

import Ourcases from './Pages/Ourcases'
import './App.css'
import WhyChooseUs from './Pages/whychoose'
import Imagemarqueeslide from './Pages/imagemarqueeslide'
import Questionandanswer from './Pages/Questionandanswer'
import Footer from './Pages/Footer'
import Bestchoices from './Pages/Bestchoices'
import Textimage from './Pages/textimage'
import Cardeffort from './Pages/cardeffort'

export default function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <VideoSection/>
      <MarqueeSlider/>
      <Textimage/>
      <Ourcases/>
      <WhyChooseUs/>
      <Imagemarqueeslide/>
      <Questionandanswer/>
      <Cardeffort/>
      <Bestchoices/>
      <Footer/>
    </div>
  )
}