import Logo from '@/assets/Gotezu-logo.png';
import Image from 'next/image';
import { IoMenu } from "react-icons/io5";
import { CgChevronDoubleRightO } from "react-icons/cg";

export default function Navbar() {
  return (
    <nav>
        <div className="container max-w-full">
          <div className="flex items-center justify-between py-4 sm:py-6 md:py-8">
            <Image src={Logo} alt='Gotezu Logo' className='w-32 sm:w-36 md:w-40 h-auto' />
            <div className='border-2 rounded-full flex justify-center items-center p-1 sm:hidden'>
            <IoMenu className='h-8 w-8' />
            </div>
            <nav className='hidden sm:flex justify-center items-center gap-2 md:gap-4 '>
                <a href="#" className='navlink'>About Us</a>
                <a href="#" className='navlink'>Contact Us</a>
                <button className='border-none rounded-full py-1.25 md:py-2 px-2 flex items-center font-semibold justify-between text-xl gap-4 bg-[#E9FF7A] sm:px-2 sm:w-44 sm:text-lg md:w-52 lg:w-60 md:px-3'>
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

