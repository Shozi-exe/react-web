import img from '/fontbolt.png'
import { House, FolderGit2, User, SendHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom';



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

const Nav = () => {
  return (
    <div className="z-10 relative flex justify-center mt-3 sm:mt-5 h-10 w-screen">
      <div className=" h-10 w-[80%] flex justify-between ">
        <div className="  content-center h-full sm:w-[10%] w-[20%]">
          <Link to='/'> <img className="h-7" src={img} alt=''></img> </Link>
        </div>

        <div id='dosis' className=" hover:text-gray-500 font-bold flex justify-around items-center h-full w-[50%]">
          <Link to='/' className='hover:text-red-500 hover:pointer flex items-center gap-2' href='https://www.google.com/'><House className='w-5 h-5' /> <span className='hidden sm:block'>HOME</span></Link>
          <Link to='/projects' className='hover:text-red-500 hover:pointer flex items-center gap-2' href='https://facebook.com'><FolderGit2 className=' w-5 h-5' /> <span className='hidden sm:block'>PROJECTS</span></Link>
          <Link to='/about' className='hover:text-red-500 hover:pointer flex items-center gap-2' href='https://instagram.com'><User className=' w-5 h-5' /><span className='hidden sm:block'>ABOUT</span></Link>
        </div>


        <div className="hover:text-pink-500 hover:cursor-pointer flex gap-1 items-center h-full w-[10%]">
          <button id='dosis' type="button" onClick={openGmail} className='flex justify-center gap-2 items-center'>
            <span className="hover:bg-red-500 active:bg-red-800 bg-red-600 pl-5 py-1.5 px-7 rounded-4xl text-xs sm:block hidden text-white">Contact</span>
            <SendHorizontal className='text-red-600 w-6 h-6 sm:w-5 sm:h-5' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
