import Logo from '@/assets/Gotezu-logo.png';
import Image from 'next/image';
import { IoMenu } from "react-icons/io5";
import { CgChevronDoubleRightO } from "react-icons/cg";

export default function Navbar() {
  return (
    <nav>
        <div className="container max-w-full">
          <div className="flex items-center justify-between py-4">
            <Image src={Logo} alt='Gotezu Logo' className='w-32 h-auto' />
            <div className='border-2 rounded-full flex justify-center items-center p-1 md:hidden'>
            <IoMenu className='h-6 w-6' />
            </div>
            <nav className='hidden md:flex justify-center items-center gap-3 lg:gap-5 tracking-tight'>
                <a href="#" className='navlink'>About Us</a>
                <a href="#" className='navlink'>Contact Us</a>
                <button className='border-none rounded-full py-2 px-2 w-52 lg:w-60 flex items-center font-semibold justify-between text-xl gap-4 bg-[#E9FF7A]'>
                    <p className='pl-2'>Hire Trainer</p>
                    <div className='bg-[#051118] text-[#E9FF7A] p-1 rounded-full'>
                        <CgChevronDoubleRightO className='w-8 h-8' />
                    </div>
                </button>
            </nav>
          </div>
        </div>
    </nav>
  )
}

