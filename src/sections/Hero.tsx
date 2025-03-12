import { FiSearch } from "react-icons/fi";
import Mockup from '@/assets/953shots_so 1.svg';
import Image from "next/image";
import { CgChevronDoubleRightO } from "react-icons/cg";
import Image1 from '@/assets/circle-1-removebg-preview 1.svg';
import Image2 from '@/assets/circle-2-removebg-preview 1.svg';
import Image3 from '@/assets/circle-3-removebg-preview 1.png';
import Image4 from '@/assets/circle-4-removebg-preview 1.png';

import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";


export default function Hero() {
  return (
    <div className="bg-gradient-to-tr from-violet-600 via-violet-750 to-indigo-800">

        {/* Headline */}

        <div className="py-3 flex items-center justify-center bg-black/30 text-[#FEFAFA] text-lg font-medium tracking-tight border-b-2 border-[#E9FF7A] md:text-xl md:py-4">
            <h1>
                <span className="border-b-1 border-[#E9FF7A]">AI-DRIVEN</span> 
                <span className="text-white/80"> TRAINING FOR TEAMS</span>
            </h1>
        </div>

          {/* Search Box */}
          <div className="px-5  py-8">
        <div className="px-4 py-6 md:py-8">
        <form className="border-2 border-[#E9FF7A] rounded-xl py-1 pl-2 pr-4 text-sm flex items-center justify-between gap-2 text-white max-w-lg mx-auto bg-black/30 " >
        <input type="text" name="search-trainer" id="search-trainer" placeholder="Search Trainers" className="outline-none text-sm text-white py-1  placeholder:text-gray-300 pl-4" />
        
        <div className="flex  bg-[#E9FF7A] rounded-full p-2">
        <FiSearch className="w-6 h-6 text-[#051118]" />
        </div>
        </form>
        </div>

{/* Mockup Picture */}
        <div className="flex items-center justify-center">    
            <Image src={Mockup} alt="Product Mockup" />
        </div>
        {/* CTA Button */}

       <div className="flex items-center justify-center py-4">
        <button className="cta-btn text-2xl md:text-4xl py-2 md:py-3">
            <p>BOOK NOW</p>
            <div className='bg-[#051118] text-[#E9FF7A] p-0.5 md:p-1 rounded-full'>
                <CgChevronDoubleRightO className='w-8 h-8' />
            </div>
        </button>
       </div>
       {/* Text Box 1 */}
    
       <div className="text-white/85 text-sm px-4 py-4 bg-black/50  border-2 border-[#E9FF7A] rounded-xl max-w-[480px] mt-12 mb-8">
            <p>Gotezu offers a cutting-edge platform for corporate training, connecting you with top trainers and tailored programs. Elevate your workforce's skills and performance with our innovative, AI-powered solutions.</p>
        </div>
      
       {/* Text Box 2 */}
   
       <div className="text-white/85 text-sm px-4 py-4  bg-black/50 border-2 border-[#E9FF7A] rounded-xl max-w-[320px]">
            <p>Unlock team potential with expert-led, tailored training solutions for measurable success.</p>
        </div>

        <div className="text-white tracking-tight bg-black/50 py-8 px-8 w-max border-2 border-[#E9FF7A] rounded-xl mt-8 flex flex-col gap-4">
            <div className="flex flex-col justify-center items-start gap-0">
                <div className="text-3xl flex items-center justify-center">
                <h2>20k</h2>
                <span>+</span>
                </div>
                <p className="text-white/70 text-sm">VR Content Library</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-0">
                <div className="text-3xl flex items-center justify-center">
                <h2>100k</h2>
                <span>+</span>
                </div>
                <p className="text-white/70 text-sm">Positive Review</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-0">
                <div className="text-3xl flex items-center justify-center">
                <h2>500k</h2>
                <span>+</span>
                </div>
                <p className="text-white/70 text-sm">Active Users</p>
            </div>
            </div>  
      
       
        <div className="grid grid-cols-2 grid-rows-2 gap-2 p-4 border-2 border-[#E9FF7A] bg-black/50 w-52 h-52 rounded-[20px] mt-6 self-end" >
            
                <Image src={Image1} className="w-20 h-20  p-1 border-2 border-[#E9FF7A] rounded-full" alt="Icon box image 1" />
                <Image src={Image2} className="w-20 h-20 p-1 border-2 border-[#E9FF7A] rounded-full" alt="Icon box image 2" />
                <Image src={Image3} className="w-20 h-20 p-1 border-2 border-[#E9FF7A] rounded-full" alt="Icon box image 3" />
                <Image src={Image4} className="w-20 h-20 bg-[#E9FF7A] p-1 border-2 border-[#E9FF7A] rounded-full" alt="Icon box image 4" />
          
            
        </div>
      {/* Social Icons Box */}

      <div className="flex px-3 py-2 bg-black/50 gap-4 w-max rounded-xl mt-14 mx-auto ">
        <div className="border-1 border-white w-8 h-8 rounded-full flex items-center justify-center"><FaWhatsapp className="w-6 h-6 text-white" /></div>
        <div className="border-1 border-white w-8 h-8 rounded-full flex items-center justify-center"><CiFacebook className="w-6 h-6 text-white" /></div>
        <div className="border-1 border-white w-8 h-8 rounded-full flex items-center justify-center"><RiTelegramLine className="w-6 h-6 text-white" /></div>
        <div className="border-1 border-white w-8 h-8 rounded-full flex items-center justify-center"><FaXTwitter className="w-6 h-6 text-white" /></div>
        
      </div>
        </div>
    </div>
  )
}
