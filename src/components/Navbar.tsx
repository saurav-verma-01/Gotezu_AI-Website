import Logo from '@/assets/Gotezu-logo.png';
import Image from 'next/image';
import { IoMenu } from "react-icons/io5";
import { CgChevronDoubleRightO } from "react-icons/cg";

export default function Navbar() {
  return (
    <nav className=' bg-[#FEFAFA]/50  backdrop-blur-sm  shadow-lg'>
        <div className="container max-w-full">
          <div className="flex items-center justify-between py-4 sm:py-6 md:py-8">
            <Image src={Logo} alt='Gotezu Logo' className='w-32 sm:w-36 md:w-40 h-auto' />
            <div className='border-2 rounded-full flex justify-center items-center p-1 sm:hidden'>
            <IoMenu className='h-8 w-8' />
            </div>
            <nav className='hidden sm:flex justify-center items-center gap-2 md:gap-4 '>
                <a href="#" className='navlink'>About Us</a>
                <a href="#" className='navlink'>Contact Us</a>
                <button className='cta-btn text-xl  md:text-2xl py-1 md:py-1.5'>
                    <p >Hire Trainer</p>
                    <div className='bg-[#051118] text-[#E9FF7A] p-0.5 md:p-1 rounded-full'>
                        <CgChevronDoubleRightO className='w-8 h-8' />
                    </div>
                </button>
            </nav>
          </div>
        </div>
    </nav>
  )
}

