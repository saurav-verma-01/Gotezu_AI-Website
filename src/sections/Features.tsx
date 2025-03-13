import Features1 from '@/assets/Features-3 1.png';
import Features2 from '@/assets/Frame 14.png';
import Image from 'next/image';
import { LuCircleArrowOutDownRight } from "react-icons/lu";

export default function Features() {
  return (
    <div className=' py-12 px-4 grid grid-cols-1 place-items-center bg-[#F9F9F9]  md:py-16 lg:rounded-xl lg:shadow-sm'>
{/* */}
<div className='max-w-[1380px] mx-auto'>
        <div className='text-center tracking-tight py-8 md:py-12 lg:py-20'>
            <h2 className='text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl'>Why Gotezu is Your Ideal Partner for Corporate Training Solutions</h2>
        </div>
    

   
    <div className='grid grid-cols-1 place-items-center lg:grid-cols-2 g:gap-8'>
        <div className='overflow-hidden rounded-xl mb-16 '>
            <Image src={Features1} alt='Features Image'  />
        </div>
        <div className='tracking-tight grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 md:gap-5 lg:gap-8'>
            <div className='features-card '>
                <h3 className='font-semibold text-xl'>Unlock Your Team's Potential</h3>
                <p className='text-lg'>At Gotezu, we connect you with experienced trainers who deliver impactful, customized training solutions to help your team achieve lasting results and growth.</p>
            </div>
            <div className='features-card '>
                <h3 className='font-semibold text-xl'>Customized Training Tailored to Your Goals</h3>
                <p className='text-lg'>Our training programs are crafted to address the unique challenges and goals of your business, ensuring impactful results tailored to your needs.</p>
            </div>
            <div className='max-w-sm h-full'>
                <Image src={Features2} alt="Features 2 Image" className='h-full object-fit' />
            </div>
            <div className='features-card '>
                <h3 className='font-semibold text-xl'>Transparent Pricing with No Hidden Costs.</h3>
                <p className='text-lg'>We offer honest, competitive pricing to help you plan your budget effectively and confidently.</p>
            </div>
        </div>
       
    </div>

    <div className='flex items-center justify-center mt-12'>
            <button className="cta-btn text-3xl md:text-4xl py-2 md:py-3 lg:text-3xl md:-rotate-3 lg:-rotate-5 scale-105 lg:scale-110 ">
                <p>LEARN MORE</p>
                <div className='bg-[#051118] text-[#E9FF7A] p-1  rounded-full'>
                    <LuCircleArrowOutDownRight  className='w-8 h-8' />
                </div>
            </button>
    </div>
    </div>
    </div>
   
  )
}
