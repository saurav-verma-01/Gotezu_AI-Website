import About from "@/sections/About";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";



export default function page() {
  return (
    <>
    <Header />
    <div className="lg:p-8">
      <Hero />
      <About />
    </div>
   
    </>
  )
}
