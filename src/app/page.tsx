import About from "@/sections/About";
import Empower from "@/sections/Empower";
import Features from "@/sections/Features";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LogoTicker from '@/sections/LogoTicker';
import MeetTrainers from "@/sections/MeetTrainers";



export default function page() {
  return (
    <>
    <Header />
    <div className="lg:p-8">
      <Hero />
      <About />
      <LogoTicker />
      <Features />
      <MeetTrainers />
      <Empower />
    </div>
   
    </>
  )
}
