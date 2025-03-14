import Trainer from "@/assets/Trainer.png";
import Image from "next/image";
import { LuCircleArrowOutDownRight } from "react-icons/lu";

export default function MeetTrainers() {
  return (
    <div className='w-full bg-gradient-to-bl from-[#5239C3] to-[#AE5DD4]  py-4 lg:pb-0'>
        <div className="max-w-[1380px] mx-auto grid grid-cols-1 place-items-center relative">
        
        <div className="bg-black/50 py-6 w-full max-w-lg rounded-lg tracking-tight flex items-center justify-center lg:order-4 lg:max-w-full lg:rounded-none lg:bg-white/30 lg:py-12 lg:tracking-tighter ">
            <h3 className="text-2xl font-semibold text-white text-center max-w-[240px] lg:text-6xl lg:max-w-full">MEET OUR EXPERT TRAINERS</h3>
        </div>
        <div className="p-6 flex items-center justify-center lg:order-2 pb-0">
        <Image src={Trainer} alt="Trainer Image" />
        </div>
        <div className="bg-black/40 w-full max-w-2xl py-5 px-6 text-center flex items-center justify-center text-white tracking-tight rounded-lg lg:order-1 lg:max-w-4xl lg:bg-white/10 lg:backdrop-blur-sm">
        <p className="text-lg md:text-xl lg:text-3xl">Discover the perfect trainer for your corporate needs and elevate your team's potential today!</p>
        </div>
        <div className='flex items-center justify-center mt-6 lg:order-3 lg:absolute bottom-32 lg:scale-110'>
                    <button className="cta-btn text-3xl md:text-4xl py-2 md:py-3 lg:text-3xl md:-rotate-3 lg:-rotate-5 scale-105 lg:scale-110 ">
                        <p>EXPLORE</p>
                        <div className='bg-[#051118] text-[#E9FF7A] p-1  rounded-full'>
                            <LuCircleArrowOutDownRight  className='w-8 h-8' />
                        </div>
                    </button>
            </div>
            </div>
    </div>
  )
}
