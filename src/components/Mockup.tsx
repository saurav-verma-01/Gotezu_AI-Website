import Image from 'next/image';
import MockupImg from '@/assets/953shots_so 1.svg';

function Mockup() {
  return (
    <div className="flex items-center justify-center">    
            <Image src={MockupImg} alt="Product Mockup" />
        </div>
  )
}

export default Mockup



