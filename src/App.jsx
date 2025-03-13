import React from 'react'
import Header from './Pages/Header'
import HeroSection from './Pages/Home'
import VideoSection from './Pages/videosection'
import MarqueeSlider from './Pages/Marquee'
import Selectedtag from './Pages/Selectedtag'
import Ourcases from './Pages/Ourcases'
import './App.css'
import WhyChooseUs from './Pages/whychoose'
import Imagemarqueeslide from './Pages/imagemarqueeslide'
import Questionandanswer from './Pages/Questionandanswer'
import Footer from './Pages/Footer'

export default function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <VideoSection/>
      <MarqueeSlider/>
      <Selectedtag/>
      <Ourcases/>
      <WhyChooseUs/>
      <Imagemarqueeslide/>
      <Questionandanswer/>
      <Footer/>
    </div>
  )
}