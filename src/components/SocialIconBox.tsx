import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialIconBox() {
  return (
    <div className="flex px-3 py-2 bg-black/50 gap-4 w-max rounded-xl mt-14 mx-auto ">
        <div className="border-1 border-white w-8 h-8 rounded-full flex items-center justify-center"><FaWhatsapp className="w-6 h-6 text-white" /></div>
        <div className="border-1 border-white w-8 h-8 rounded-full flex items-center justify-center"><CiFacebook className="w-6 h-6 text-white" /></div>
        <div className="border-1 border-white w-8 h-8 rounded-full flex items-center justify-center"><RiTelegramLine className="w-6 h-6 text-white" /></div>
        <div className="border-1 border-white w-8 h-8 rounded-full flex items-center justify-center"><FaXTwitter className="w-6 h-6 text-white" /></div>
        
      </div>
  )
}
