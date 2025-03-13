import { CgChevronDoubleRightO } from "react-icons/cg";

export default function CtaBtn() {
  return (
    <button className="cta-btn text-3xl md:text-4xl py-2 md:py-3 lg:text-3xl md:-rotate-3 lg:-rotate-5 scale-105 lg:scale-110 ">
    <p>BOOK NOW</p>
    <div className='bg-[#051118] text-[#E9FF7A] p-0.5 md:p-1 rounded-full'>
        <CgChevronDoubleRightO className='w-8 h-8' />
    </div>
</button>
  )
}
