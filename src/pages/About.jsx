import React from 'react'
import Nav from '../components/Nav'
import Info from '../components/Info'
import Card from '../components/Card'
import me from '/shozi.jpeg'

const About = () => {

  return (
    <div className='absolute h-screen sm:h-screen w-full p-0 m-0 bg-radial  from-[#fdd5bc] from-30% to-[#ffffff]'>
      <Nav />
      <div className='m-15 gap-5 flex justify-center items-center'><img src={me} className='h-50 w-40 rounded-tl-4xl  rounded-br-4xl' />
        <h2 className='font-bold text-pink-500 text-center text-5xl'><span className='text-black text-5xl'>HELLO !</span> <span className='text-gray-500 text-4xl'>I AM </span>SHOZAB ABBAS</h2></div>
      <div>
        <div className='flex justify-center items-center'>
          <div className='select-none text-center text-2xl overflow-hidden rounded-2xl h-90 w-90 sm:w-150 md:w-200'>
            <div className='pt-10 bg-gray-100 h-30  w-full hover:h-full hover:duration-150 active:duration-150 active:h-full'>HOLD ME</div>
            <div className='pt-10 bg-gray-200 h-30 border-t-2 border-gray-200 w-full hover:h-full hover:-translate-y-30 hover:duration-150 active:duration-150 active:-translate-y-30 active:h-full'>HOLD ME</div>
            <div className='pt-10 bg-gray-300 h-30 border-t-2 border-gray-200 w-full hover:h-full hover:-translate-y-60 hover:duration-150 active:duration-150 active:-translate-y-60 active:h-full'>HOLD ME</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About