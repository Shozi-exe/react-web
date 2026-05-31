import React from 'react'
import Nav from '../components/Nav'
import Info from '../components/Info'
import Card from '../components/Card'
import Footer from '../components/footer'
import Mouse from '../components/Mouse'

const Proj = () => {

  return (
    <div className=' select-none absolute h-screen w-full p-0 m-0 bg-radial  from-[#fdd5bc] from-30% to-[#ffffff]'>
      <Nav />
      <div className='sm:h-[70vh]  h-[60vh]  mt-10 mb-15 sm:mt-15 sm:mb-0 md:mb-0 content-center overflow-scroll scroll-smooth scrollbar-none'>
        <div className='flex justify-around h-70 sm:h-90 md:h-100 sm:w-[270vw] min-[400px]:w-[400vw] w-[800vw] '>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Proj
