import { CgChevronDoubleRightO } from "react-icons/cg";

export default function CtaBtn() {
  return (
    <button className="cta-btn text-2xl md:text-4xl py-2 md:py-3">
    <p>BOOK NOW</p>
    <div className='bg-[#051118] text-[#E9FF7A] p-0.5 md:p-1 rounded-full'>
        <CgChevronDoubleRightO className='w-8 h-8' />
    </div>
</button>
  )
}
