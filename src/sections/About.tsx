import Image from 'next/image'
import React from 'react'
import FrameA from '@/assets/Frame 10.png';
import FrameB from '@/assets/Frame 8.png';
import { FiSearch } from "react-icons/fi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";
import { LuCircleArrowOutDownRight } from "react-icons/lu";


export default function About() {
  return (
    <div className='py-8 bg-[#F9F9F9] lg:rounded-xl lg:shadow-sm'>
        <div className='max-w-[1380px] mx-auto grid grid-cols-1 place-items-center lg:grid-cols-2'>
            {/* Header Section */}
            <div className="py-8 text-center max-w-lg md:max-w-xl lg:max-w-3xl px-6 flex flex-col gap-8 lg:col-span-2 md:gap-10 md:py-10">
                <h2 className='text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl'>The Easiest Way to Hire Expert Trainers</h2>
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>At Gotezu, we prioritize simplicity in connecting you with top trainers. Our platform is designed to make the hiring process efficient and effective.</p>
            </div>

            {/* Image Section */}

            <div className='p-4 grid grid-cols-1 gap-8 place-items-center lg:grid-cols-5 lg:gap-4 max-w-[640px]  w-full'>
                <div className='px-4 lg:col-span-3 lg:px-0 w-full h-full '>
                    <Image src={FrameA} alt="Frame A Image" className='w-full h-full' />
                </div>
                <div className='px-4 max-w-[540px] lg:px-0 lg:h-full lg:w-full lg:col-span-2'>
                    <div className='bg-gradient-to-b from-[#5239C3] to-[#AE5DD4] rounded-2xl overflow-clip w-full h-full '>
                        <div className='w-full h-full bg-black/40 px-8 py-8 lg:px-4 text-white/90 flex items-center text-lg '>                   
                            <p className=''>At Gotezu, we prioritize simplicity in connecting you with top trainers. Our platform is designed to make the hiring process efficient and effective.</p>
                        </div>
                    </div>
                </div>
                <Image src={FrameB} alt="Frame A Image" className='lg:col-span-5 w-full h-full'  />
            </div>

            {/* Cards Section */}
            <div className='flex flex-col gap-10 max-w-[640px]'>
            <div className='py-8 px-4 grid grid-cols-1 gap-12 place-items-center sm:grid-cols-2 sm:gap-6 '>
                <div className='p-4 bg-white  rounded-2xl shadow-md flex flex-col h-full max-w-[340px]'>
                    <FiSearch className='w-12 h-12 mb-6'/>
                    <h2 className='text-2xl mb-4'>Search & Explore</h2>
                    <p className='text-lg flex-grow'>Browse through a diverse range of industry experts ready to elevate your team's skills.</p>
                </div>
                <div className='p-4 bg-white   rounded-2xl shadow-md flex flex-col h-full max-w-[340px]'>
                    <FaChalkboardTeacher className='w-12 h-12 mb-6'/>
                    <h2 className='text-2xl mb-4'>Customized Training</h2>
                    <p className='text-lg flex-grow'>Get tailored training programs designed to meet your specific objectives and challenges.</p>
                </div>
                <div className='p-4 bg-white   rounded-2xl shadow-md flex flex-col h-full max-w-[340px]'>
                    <AiOutlineSchedule className='w-12 h-12 mb-6'/>
                    <h2 className='text-2xl mb-4'>Select & Book</h2>
                    <p className='text-lg flex-grow'>Choose the perfect trainer for your needs and easily schedule your training session.</p>
                </div>
                <div className='p-4 bg-white   rounded-2xl shadow-md flex flex-col h-full max-w-[340px]'>
                    <FaMedal className='w-12 h-12 mb-6'/>
                    <h2 className='text-2xl mb-4'>Achieve Success</h2>
                    <p className='text-lg flex-grow'>Empower your team to excel with expert guidance and watch them reach new heights.</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <button className="cta-btn text-3xl md:text-4xl py-2 md:py-3 lg:text-3xl md:-rotate-3 lg:-rotate-5 scale-105 lg:scale-110 ">
                    <p>LEARN MORE</p>
                    <div className='bg-[#051118] text-[#E9FF7A] p-1  rounded-full'>
                        <LuCircleArrowOutDownRight  className='w-8 h-8' />
                    </div>
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}
