import EmpowerImg from '@/assets/Empower.png';
import Image from 'next/image';

export default function Empower() {
  return (
    <div className='bg-[#F9F9F9] py-16'>
        <div className='max-w-[1380px] mx-auto px-4   place-items-center gap-20 md:gap-0 grid grid-cols-1 md:grid-cols-2 '>
        <div className='w-full h-full flex items-center justify-end'>
            <Image src={EmpowerImg} alt='Empower Image'  />
        </div>
        <div className='px-4 grid grid-cols-1 gap-10 place-items-center md:gap-6'>
            <div className='features-card'>
                <h3 className='text-xl font-semibold'>Empower Your Learning Journey</h3>
                <p className='text-base'>At Gotezu, we provide a seamless platform that connects you with top trainers in various fields. Our user-friendly interface ensures you can easily find the right training to elevate your skills.</p>
            </div>
            <div className='features-card'>
                <h3 className='text-xl font-semibold'>Diverse Training Categories</h3>
                <p className='text-base'>At Explore a wide range of training categories tailored to meet your professional needs. Whether you're looking for leadership development or technical skills, we have something for everyone.</p>
            </div>
            <div className='features-card'>
                <h3 className='text-xl font-semibold'>Transparent Pricing Model</h3>
                <p className='text-base'>At Gotezu believes in clear and upfront pricing for all our training services. No hidden fees, just straightforward costs that help you budget effectively.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
