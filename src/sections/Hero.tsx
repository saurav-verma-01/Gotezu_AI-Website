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

          
        <div className="py-8 px-4 bg-pink-800">
        {/* Search Bar */}
        <SearchBar />
    
        {/* Mockup Picture */}
        <Mockup />

        {/* CTA Button */}
        <div className="flex items-center justify-center py-4">
       <CtaBtn/>
       </div>
   
    
        
        {/* Text Box 1 */}    
       <Textbox1 />
      
       {/* Text Box 2 */}
        <Textbox2 />
       
        {/* NumBox */}
        <NumBox />

        {/* Icon Box */}
        <IconBox />
          
        {/* Social Icons Box */}
        <SocialIconBox />
      
        </div>
    </div>
  )
}
