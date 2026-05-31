import React from 'react'
import pic from '/pic.jpg'

const Card = () => {
  return (
    <div className=' z-10 h-70 w-55 min-[400px]:w-45 md:w-60 lg:w-80 sm:h-80 md:h-100 hover:scale-110'>
      <div className='h-55 md:h-75 border-gray-100 border-10 bg-cover bg-center overflow-hidden '><img src={pic}></img></div>
      <div className='bg-gray-100  h-20 pl-3'>
        <h1 id='dosis' className='text-md font-bold text-black'>Project # 1</h1>
        <p id='rubik' className='font-light text-sm text-gray-500' >This Project is games</p>
      </div>

    </div>
  )
}

export default Card
