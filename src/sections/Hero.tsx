import SearchBar from '@/components/SearchBar';
import Mockup from "@/components/Mockup";
import CtaBtn from "@/components/CtaBtn";
import Textbox1 from "@/components/Textbox1";
import Textbox2 from "@/components/Textbox2";
import NumBox from "@/components/NumBox";
import IconBox from "@/components/IconBox";
import SocialIconBox from '@/components/SocialIconBox';


export default function Hero() {
  return (
    <div className="bg-gradient-to-tr from-violet-600 via-violet-750 to-indigo-800 overflow-x-clip lg:rounded-xl overflow-clip ">
      {/* Headline */}

        <div className="py-3 flex items-center justify-center bg-black/50 text-[#FEFAFA] text-lg font-medium tracking-tight border-b-2 border-[#E9FF7A] sm:text-3xl sm:py-8 md:text-4xl md:py-10 lg:text-6xl lg:py-12">
                    <h1>
                        <span className="border-b-1 border-[#E9FF7A]">AI-DRIVEN</span> 
                        <span className="text-white/80"> TRAINING FOR TEAMS</span>
                    </h1>
        </div>
      
      
       


          
        <div className="py-8 px-4 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 md:py-16 max-w-[1380px] mx-auto">

        <div className="flex flex-col items-center justify-center py-8 gap-8  md:order-3 lg:order-3 md:items-end md:py-0">
          <SearchBar /> 
          <Textbox1 />
          <IconBox />
        </div>
        <div className="flex flex-col items-center justify-center py-8  md:order-1 md:col-span-2 lg:col-span-1 lg:order-2">
          <Mockup />
          <CtaBtn/>
        </div>
        
       <div className="flex flex-col items-center justify-center py-8 gap-8  md:order-2 lg:order-1 md:items-start md:py-0  md:justify-start">
          <NumBox />
          <Textbox2 />
          <SocialIconBox />
        </div>
         
              
        </div>
      </div>
        
     
  )
}
