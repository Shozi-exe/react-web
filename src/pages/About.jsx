import React from 'react'
import Nav from '../components/Nav'
import Info from '../components/Info'
import Card from '../components/Card'
import me from '/shozi.jpeg'

const About = () => {

  return (
    <div className='select-none absolute h-screen sm:h-screen w-full p-0 m-0 bg-radial  from-[#fdd5bc] from-30% to-[#ffffff]'>
      <Nav />
      <div className='m-15 gap-5 flex justify-center items-center'><img src={me} className='h-50 w-40 rounded-tl-4xl  rounded-br-4xl' />
        <h2 className='font-bold text-black text-center leading-15 [word-spacing:10px] tracking-wider text-5xl'><span className='text-pink-500 text-5xl tracking-normal'>HELLO !<br></br></span> <span className='text-gray-400 text-3xl tracking-normal'>I AM </span>SHOZAB ABBAS</h2></div>
      <div>
        <div className='flex justify-center items-center'>
          <div className='select-none text-center text-2xl border-2 border-gray-400  overflow-hidden rounded-2xl h-90 w-90 sm:w-150 md:w-200'>
            <div className='bg-blue-100  h-30  overflow-hidden w-full hover:h-[135%] hover:duration-150  hover:-translate-y-30 active:-translate-y-30 active:duration-120 active:h-[135%]'>

              <div className='flex gap-6 items-baseline-last h-30 w-full'>
                <h1 className='text-pink-600 font-extrabold text-9xl'>1</h1>
                <h1 className='text-5xl  text-black font-semibold'>ABOUT ME</h1>
              </div>
              <div className='flex bg-blue-100 h-60 w-full text-justify p-5 text-xl font-light'>
                <p className=''>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi odit non dignissimos ratione alias, velit odio quaerat et! Impedit autem rerum harum vel dolorum quo animi eligendi ut, cupiditate voluptatem labore saepe, at vero consequatur qui nisi temporibus pariatur!s
                </p>
              </div>
            </div>

            <div className=' bg-blue-100 h-30 overflow-hidden hover:border-none border-t-2  border-gray-400 w-full hover:h-[135%] hover:-translate-y-60 hover:duration-150 active:duration-150 active:-translate-y-60 active:h-[135%]'>
              <div className='flex gap-6 z-40 items-baseline-last h-30 w-full'>
                <h1 className='text-pink-600 font-extrabold text-9xl'>2 </h1>
                <h1 className='text-5xl text-black font-semibold'>HOBBIES</h1>

              </div>
              <div className='flex bg-blue-100 h-full w-full text-justify p-5 text-xl font-light'>
                <p className=''>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi odit non dignissimos ratione alias, velit odio quaerat et! Impedit autem rerum harum vel dolorum quo animi eligendi ut, cupiditate voluptatem labore saepe, at vero consequatur qui nisi temporibus pariatur!s
                </p>

              </div>
            </div>

            <div className=' bg-blue-100 h-30 hover:border-none border-t-2 z-50 border-gray-400 w-full hover:h-[135%] hover:-translate-y-90 hover:duration-150 active:duration-150 active:-translate-y-90 active:h-[135%]'>
              <div className='flex gap-6 z-50 items-baseline-last h-30 w-full'>
                <h1 className='text-pink-600 font-extrabold text-9xl'>3</h1>
                <h1 className='text-5xl  text-black font-semibold'>MY GOALS</h1>
              </div>
              <div className='flex bg-blue-100 h-full w-full text-justify p-5 text-xl font-light '>
                <p className=''>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi odit non dignissimos ratione alias, velit odio quaerat et! Impedit autem rerum harum vel dolorum quo animi eligendi ut, cupiditate voluptatem labore saepe, at vero consequatur qui nisi temporibus pariatur!s
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About