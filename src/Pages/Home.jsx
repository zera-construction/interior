import React from 'react'
import Header from '../components/Header.jsx'
import HerorSection from '../components/HerorSection.jsx'

function Home() {
  return (
    <div className='min-h-screen bg:white dark:bg-black text-gray-800 dark:text-gray-200 px-6'>
      <Header />
      <HerorSection />
    </div>
  )
}

export default Home
