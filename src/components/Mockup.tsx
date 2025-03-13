import Image from 'next/image';
import MockupImg from '@/assets/953shots_so 1.svg';

function Mockup() {
  return (
    <div className="flex items-center justify-center">    
            <Image src={MockupImg} alt="Product Mockup"className='transform scale-125 -translate-y-4 lg:scale-140 lg:-translate-y-8' />
        </div>
  )
}

export default Mockup



