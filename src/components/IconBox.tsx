import Image from 'next/image'
import Image1 from '@/assets/circle-1-removebg-preview 1.svg';
import Image2 from '@/assets/circle-2-removebg-preview 1.svg';
import Image3 from '@/assets/circle-3-removebg-preview 1.png';
import Image4 from '@/assets/circle-4-removebg-preview 1.png';

export default function IconBox() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 p-4 border-2 border-[#E9FF7A] bg-black/50 w-52 h-52 rounded-[20px] mt-6 " >
            
            <Image src={Image1} className="w-20 h-20  p-1 border-2 border-[#E9FF7A] rounded-full" alt="Icon box image 1" />
            <Image src={Image2} className="w-20 h-20 p-1 border-2 border-[#E9FF7A] rounded-full" alt="Icon box image 2" />
            <Image src={Image3} className="w-20 h-20 p-1 border-2 border-[#E9FF7A] rounded-full" alt="Icon box image 3" />
            <Image src={Image4} className="w-20 h-20 bg-[#E9FF7A] p-1 border-2 border-[#E9FF7A] rounded-full" alt="Icon box image 4" />            
        </div>
  )
}
