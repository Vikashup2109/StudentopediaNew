import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Photo from "../assets/Manager.png"
import Owner from "../assets/Owner.png"
import { RiYoutubeFill, RiInstagramFill, RiFacebookCircleFill, RiLinkedinBoxFill, RiExternalLinkFill } from 'react-icons/ri'
// import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi'

const Footer = () => {
     return (
          <>
               <footer className='w-full bg-[#141414] pt-8 pb-2 text-white'>
                    <div className='w-11/12 md:w-10/12 lg:w-7/12 mx-auto items-center space-y-8'>
                         <div className='flex flex-col md:flex-row items-center justify-between'>
                              <div className='py-6 sm:py-0 md:w-2/6 justify-center'>
                                   <img src={Logo} alt='Logo' className='hidden sm:block w-60 rounded-xl sm:pb-8' />
                                   <a href="/" className='text-3xl block sm:hidden'>Studentopedia</a>

                              </div>
                              <div className='text-center'>
                                   <div className='flex gap-10 items-center text-lg'>
                                        <RiYoutubeFill className='text-3xl md:text-5xl' />
                                        <RiInstagramFill className='text-3xl md:text-5xl' />
                                        <RiFacebookCircleFill className='text-3xl md:text-5xl' />
                                        <RiLinkedinBoxFill className='text-3xl md:text-5xl' />
                                   </div>
                              </div>
                         </div>
                         <div className='flex flex-col md:flex-row gap-16 mx-auto md:justify-between items-center text-white'>
                              <div className='flex items-center gap-6'>
                                   <img src={Owner} alt="Owner" className='w-10 sm:w-12 rounded-xl' />
                                   <Link to="/harshitShakya">
                                        <div className='flex flex-col'>
                                             <span className='text-sm sm:text-sm font-mono'>Owned by</span>
                                             <span className='text-sm sm:text-sm font-mono flex items-center gap-2'>Jitendra Singh Shakya <RiExternalLinkFill /></span>
                                        </div>
                                   </Link>
                              </div>
                              <div className='flex items-center gap-6'>
                                   <img src={Photo} alt="Owner" className='w-10 sm:w-12 rounded-xl' />
                                   <Link to="/harshitShakya">
                                        <div className='flex flex-col'>
                                             <span className='text-sm sm:text-sm font-mono'>Managed by</span>
                                             <span className='text-sm sm:text-sm font-mono flex items-center gap-2'>Harshit Shakya <RiExternalLinkFill /></span>
                                        </div>
                                   </Link>
                              </div>
                              <div className='space-y-6'>
                                   <div className='items-center my-auto flex gap-10 justify-around'>
                                        <Link to="/aboutUs">
                                             <button type="submit" className='text-sm px-3 py-1.5 rounded-xl border-2 border-white  text-white hover:bg-white hover:!text-[#141414] cursor-pointer'>About Us</button>
                                        </Link>
                                        <Link to="/donation">
                                             <button type="submit" className='text-sm px-3 py-1.5 rounded-xl border-2 border-white  text-white hover:bg-white hover:!text-[#141414] cursor-pointer'>Donate Us</button>
                                        </Link>
                                   </div>
                                   <div className='font-mono text-xs flex justify-center gap-1 opacity-40 items-center'>
                                        <span>Developed By: </span>
                                        <a href="https://vikash.vercel.app/" target="_blank" className='flex' rel="noreferrer">
                                             <span>  Vikash Upadhyay</span>
                                             <RiExternalLinkFill />
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className='mx-auto w-fit pt-8'>
                              <span className='text-center text-sm'>Copyright © 2023 Studentopedia. All rights Reserved.</span>
                         </div>
                    </div>
               </footer>
          </>
     )
}

export default Footer