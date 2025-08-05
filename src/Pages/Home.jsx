import React from 'react'
import Header from '../components/Header.jsx'
import HerorSection from '../components/HerorSection.jsx'
import ProjectStats from '../components/ProjectStats.jsx'
import VideoSection from '../components/VideoSection.jsx'
import ServicesList from '../components/ServicesList.jsx'
import GallarySlider from '../components/GallerySlider.jsx'
import StartProject from '../components/StartProject.jsx'
import Collections from "../components/collections.jsx"
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div className='min-h-screen bg:white dark:bg-black text-gray-800 dark:text-gray-200 px-6 w-[100vw] overflow-hidden'>
      <Header />
      <HerorSection />
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
