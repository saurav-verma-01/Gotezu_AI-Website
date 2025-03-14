import Image from "next/image";
import { IoStar } from "react-icons/io5";

// Define the props that Testimonial component will accept
interface TestimonialProps {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
  }


export default function Testimonial({ text, imageSrc, name, username }: TestimonialProps) {
  return (
    <div className="bg-gradient-to-tr from-[#7F0EBA] to-[#240C89] text-white py-8 px-4 rounded-2xl flex flex-col gap-5 max-w-[360px]  justify-center">
                <div className="tracking-tight font-semibold px-4">
                <p className="text-sm ">&quot;{text}&quot;</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center ">
                        <div className="w-16 h-16 rounded-full border-2 border-[#E9FF7A] flex items-center justify-center">
                            <Image src={imageSrc} alt={name} width={64} height={64} />
                        </div>
                        <div>
                            <p className="text-[12px] font-semibold">{name}</p>
                            <p className="text-[12px] font-semibold text-white/60">{username}</p>
                        </div>
                    </div>
                    <div className="px-2 py-1 rounded-full bg-white/20 flex gap-1 w-max h-max">
                    {[...Array(5)].map((_, index) => (
                        <IoStar key={index} className="w-4 h-4 text-[#E9FF7A]" />
                    ))}
                    </div>
                </div>

            </div>
  )
}
