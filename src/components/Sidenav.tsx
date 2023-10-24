import { useState } from 'react'
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'
import SamuelCV from '../assets/SamuelCV.pdf'
import '../App.css'
const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav}
                className='fixed top-4 right-4 z-[99] md:hidden' />
            {
                nav ? (
                    <div className='fixed w-full h-screen flex flex-col justify-center items-center z-20 bg-white/70'>
                        <a
                            href="#main" className='w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className="pl-4">Home</span>
                        </a>
                        <a onClick={handleNav}
                            href="#work" className='w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20} />
                            <span className="pl-4">Work</span>
                        </a>
                        <a onClick={handleNav}
                            href="#projects" className='w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject size={20} />
                            <span className="pl-4">Projects</span>
                        </a>
                        <a onClick={handleNav}
                            href={SamuelCV} target="_blank" className='w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <BsPerson size={20} />
                            <span className="pl-4">Resume</span>
                        </a>
                        <a href="#contact" className='w-[60%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className="pl-4">Contact</span>
                        </a>
                    </div>
                ) : (
                    <div className='md:block hidden fixed top-[15%] z-10 '>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex flex-col items-center '>
                                <a href="#main" className="flex justify-center items-center rounded-md shadow-md bg-gray-100/50 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <AiOutlineHome size={20} />
                                </a>
                                
                            </div>
                            <p className='flex flex-row text-[10px] ease-in duration-300 font-semibold'>Home</p>
                            <div className='flex flex-col items-center  '>
                                <a href="#work" className="flex justify-center items-center rounded-md shadow-md bg-gray-100/50 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <GrProjects size={20} className="" />
                                </a>
                            </div>
                            <p className='flex flex-row text-[10px] ease-in duration-300 font-semibold'>Work</p>
                            <div className='flex flex-col items-center '>
                                <a href="#projects" className="flex justify-center items-center rounded-md shadow-md bg-gray-100/50 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <AiOutlineProject size={20} className="hover:white" />
                                </a>
                            </div>
                            <p className='flex flex-row text-[10px] ease-in duration-300 font-semibold'>Projects</p>
                            <div className='flex flex-col items-center '>
                                <a href={SamuelCV} target="_blank" className="flex justify-center items-center rounded-md shadow-lg bg-gray-100/50 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <BsPerson size={20} />
                                </a>
                            </div>
                            <p className='flex flex-row text-[10px] ease-in duration-300 font-semibold'>Resume</p>
                            <div className='flex flex-col items-center'>
                                <a href="#contact" className="flex justify-center items-center rounded-md shadow-lg bg-gray-100/50 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <AiOutlineMail size={20} />
                                </a>
                            </div>
                            <p className='flex flex-row text-[10px] ease-in duration-300 font-semibold'>Contact</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Sidenav