import React from 'react'
import html from '/html.png'
import css from '/css-3.png'
import js from '/js.png'
import react from '/atom.png'
import cpp from '/c-.png'

const Footer = () => {
  return (

    <div className=' z-8 h-15 w-full overflow-hidden'>
      <div className=' flex h-15 w-[200vw] sm:[600vw] md:[800px]  animate-scroll whitespace-nowrap'>
        <div className=' flex justify-around  h-15 sm:w-350 md:w-450  w-120'>
          <img className='h-10 sm:h-15 w-10 sm:w-15' src={html} alt="" />
          <img className='h-10 sm:h-15 w-10 sm:w-15' src={css} alt="" />
          <img className='h-10 sm:h-15 w-10 sm:w-15' src={js} alt="" />
          <img className='h-10 sm:h-15 w-10 sm:w-15' src={react} alt="" />
        </div>
        <div className=' flex justify-around  h-15 sm:w-350 md:w-450 w-120'>
          <img className='h-10 sm:h-15 w-10 sm:w-15' src={html} alt="" />
          <img className='h-10 sm:h-15 w-10 sm:w-15' src={css} alt="" />
          <img className='h-10 sm:h-15 w-10 sm:w-15' src={js} alt="" />
          <img className='h-10 sm:h-15 w-10 sm:w-15' src={react} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
