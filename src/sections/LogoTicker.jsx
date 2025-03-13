import Client1 from '@/assets/logos/client-1-removebg-preview.png';
import Client2 from '@/assets/logos/client-2-removebg-preview.png';
import Client3 from '@/assets/logos/client-3-removebg-preview.png';
import Client4 from '@/assets/logos/client-4-removebg-preview.png';
import Client5 from '@/assets/logos/client-5-removebg-preview.png';
import Client6 from '@/assets/logos/client-6-removebg-preview.png';
import Client7 from '@/assets/logos/client-7-removebg-preview.png';
import Client8 from '@/assets/logos/client-8-removebg-preview.png';
import Client9 from '@/assets/logos/client-9-removebg-preview.png';
import Client10 from '@/assets/logos/client-10-removebg-preview.png';
import Client11 from '@/assets/logos/client-11-removebg-preview.png';
import Client12 from '@/assets/logos/client-12-removebg-preview.png';
import Client13 from '@/assets/logos/client-13-removebg-preview-1.png';
import Client14 from '@/assets/logos/client-14-removebg-preview.png';
import Client16 from '@/assets/logos/client-16-removebg-preview.png';


import Image from 'next/image';

export default function LogoTicker() {
  return (
    <div className=" py-8 flex flex-col items-center justify-center gap-4 md:gap-10 lg:gap-12 bg-white md:py-12 lg:py-16 overflow-clip md:gap-8">
      <div className="px-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl  text-center tracking-tight font-semibold">Trusted by Industry Leaders Worldwide</h2>
      </div>
      <div className='py-6 [mask-image:linear-gradient(to_right,transparent,black,transparent)] [--webkit-mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
        <div className='flex overflow-hidden flex-none gap-6 px-6 md:gap-8 lg:gap-12'>
          <Image src={Client1} alt="Client Logo" className='logo-ticker-images' />
          <Image src={Client2} alt="Client Logo" className='logo-ticker-images' />
          <Image src={Client3} alt="Client Logo" className='logo-ticker-images'  />
          <Image src={Client4} alt="Client Logo" className='logo-ticker-images' />
          <Image src={Client5} alt="Client Logo" className='logo-ticker-images' />
          <Image src={Client6} alt="Client Logo" className='logo-ticker-images' />
          <Image src={Client7} alt="Client Logo" className='logo-ticker-images'  />
          <Image src={Client8} alt="Client Logo" className='logo-ticker-images' />
          <Image src={Client9} alt="Client Logo" className='logo-ticker-images' />
          <Image src={Client10} alt="Client Logo" className='logo-ticker-images' />
          <Image src={Client11} alt="Client Logo" className='logo-ticker-images'  />
          <Image src={Client12} alt="Client Logo" className='logo-ticker-images' />
          <Image src={Client13} alt="Client Logo" className='logo-ticker-images' />
          <Image src={Client14} alt="Client Logo" className='logo-ticker-images' />
          <Image src={Client16} alt="Client Logo" className='logo-ticker-images'  />
        </div>
      </div>
    </div>
  )
}
