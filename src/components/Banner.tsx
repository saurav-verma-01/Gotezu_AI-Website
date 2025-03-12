import { FaArrowRightLong } from "react-icons/fa6";

export default function Banner() {
  return (
    <div className="bg-[#051118] text-[#FEFAFA] text-sm py-3 flex items-center justify-center gap-2">
        <p className="hidden md:block text-white/70">Streamline your Workflow and boost your Productivity</p>
        <div className="flex items-center justify-center gap-2">
            <p>Unlock team potential with Gotezu</p>
            <FaArrowRightLong  className="h-4 w-4 inline-flex justify-center items-center text-[#E9FF7A]"/>
        </div>
    </div>
  )
}
