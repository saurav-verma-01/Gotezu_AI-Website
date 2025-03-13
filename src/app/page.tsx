import About from "@/sections/About";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LogoTicker from '@/sections/LogoTicker';



export default function page() {
  return (
    <>
    <Header />
    <div className="lg:p-8">
      <Hero />
      <About />
      <LogoTicker />
    </div>
   
    </>
  )
}
