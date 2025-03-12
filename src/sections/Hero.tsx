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
    <div className="bg-gradient-to-tr from-violet-600 via-violet-750 to-indigo-800">

        {/* Headline */}

        <div className="py-3 flex items-center justify-center bg-black/50 text-[#FEFAFA] text-lg font-medium tracking-tight border-b-2 border-[#E9FF7A] md:text-xl md:py-4">
            <h1>
                <span className="border-b-1 border-[#E9FF7A]">AI-DRIVEN</span> 
                <span className="text-white/80"> TRAINING FOR TEAMS</span>
            </h1>
        </div>

          
        <div className="py-8 px-4 max-w-xl mx-auto md:max-w-8/10">

        <div className="flex flex-col items-center justify-center py-8 gap-8 md:flex-row-reverse md:items-start md:justify-between">
          <SearchBar /> 
          <Textbox1 />
        </div>
        <div className="flex flex-col items-center justify-center py-8">
          <Mockup />
          <CtaBtn/>
        </div>
       <div className='sm:flex items-start justify-between'>
       <div className="flex flex-col items-start justify-center py-8 gap-8 ">
          <NumBox />
          <Textbox2 />
          
        </div>
        <div className="flex flex-col items-center justify-center py-8 gap-8">
          <IconBox />
          <SocialIconBox />
        </div>
       </div>
         
                         

              
        
        

        

        
          
        
      
        </div>
    </div>
  )
}
