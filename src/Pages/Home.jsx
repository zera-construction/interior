import React from 'react'
import Header from '../components/Header.jsx'
import HeroSection from '../components/HeroSection.jsx'
import ProjectStats from '../components/ProjectStats.jsx'
import VideoSection from '../components/VideoSection.jsx'
import ServicesList from '../components/ServicesList.jsx'
import GallarySlider from '../components/GallerySlider.jsx'
import StartProject from '../components/StartProject.jsx'
import Collections from "../components/collections.jsx"
import Footer from '../components/Footer.jsx'


function Home() {
  return (
    <div className='min-h-screen bg-background px-6'>
      <Header />
      <HeroSection />
      <ProjectStats />
      <VideoSection />
      <ServicesList />
      <GallarySlider />
      <Collections />
      <StartProject />
      <Footer />
      <Header />
    </div>
  )
}

export default Home
