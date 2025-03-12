import React from 'react'
import Header from './Pages/Header'
import HeroSection from './Pages/Home'
import VideoSection from './Pages/videosection'
import MarqueeSlider from './Pages/Marquee'
import Selectedtag from './Pages/Selectedtag'

export default function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <VideoSection/>
      <MarqueeSlider/>
      <Selectedtag/>
    </div>
  )
}
