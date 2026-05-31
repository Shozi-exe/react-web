import React from 'react'
import { Link } from 'react-router-dom'
import git from '/github.png'
import gmail from '/gmail.png'
import insta from '/instagram.png'
import { MoveRight } from 'lucide-react'

function openGmail() {
  const email = "shozabdocx@gmail.com";
  const subject = "Visited !!!";
  const body = "Hello Shozab I visited your website";

  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // Open mobile mail app
    const mailtoLink =
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  } else {
    // Open Gmail in Chrome/browser on PC
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  }
}

const Info = () => {
  return (
    <div className=' h-[80vh] sm:h-[90vh] w-full  flex justify-center items-center'>
      <div className=' h-[70%] w-[80%] flex flex-col justify-evenly  items-center '>

        <div id='dosis' className=' text-gray-900 font-bold sm:text-7xl text-6xl text-center'>
          <h1 className='mainh'>SHOZAB ABBAS</h1>
        </div>
        <div id='rubik' className='text-sm overflow-scroll scrollbar-none text-gray-700 text-justify'>
          <p className="hidden sm:block">
            Shozi is a passionate and determined Computer Science student with a strong interest in modern technology and creative development. He is currently learning HTML, CSS, JavaScript, React, Tailwind CSS, C++, and Three.js to strengthen his programming and frontend development skills. He enjoys building interactive websites, experimenting with animations, and exploring innovative digital ideas. Beyond coding, he likes meaningful conversations, humor, and continuously improving himself both personally and professionally. His curiosity, consistency, and creative mindset motivate him to grow into a skilled software developer capable of creating impactful and visually engaging projects.            </p>
          <p className='sm:hidden'>
            Shozi is a curious Computer Science student learning HTML, CSS, JavaScript, React, Tailwind CSS, C++, and Three.js while exploring creativity, web development, animations, and modern technology with passion.            </p>
        </div>
        <Link to='/projects' className=' z-10 flex justify-center items-center gap-2 bg-red-600 hover:bg-red-500 hover:cursor-pointer active:bg-red-800 text-white h-10 w-60 pt-1 rounded-4xl text-center font-medium text-md'>
          <button id='dosis' className="uppercase">Goto Projects</button><MoveRight />
        </Link>

        <div id='dosis' className=' z-10 flex justify-evenly w-full uppercase font-medium text-md'>
          <a href='https://github.com/Shozi-exe' target='_blank' rel='noreferrer' className='hover:text-red-500 flex justify-center gap-2 items-center w-30'><img className="h-7 w-7" src={git} alt='GitHub'></img><span className='hidden sm:block'>Github</span></a>
          <button type='button' onClick={openGmail} className='hover:text-red-500 flex justify-center cursor-pointer gap-2 items-center w-30'><img className="h-7 w-7" src={gmail} alt='Gmail'></img><span className='hidden sm:block'>GMAIL</span></button>
          <a href='https://www.instagram.com/shozab.exe/' target='_blank' rel='noreferrer' className='hover:text-red-500 flex justify-center gap-2 items-center w-30'><img className="h-7 w-7" src={insta} alt='Instagram'></img><span className='hidden sm:block'>Instagram</span></a>
        </div>
      </div>
    </div>
  )
}

export default Info
