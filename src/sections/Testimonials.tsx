import avatar1 from "@/assets/avatar-1-removebg-preview.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Testimonial from "@/components/Testimonial";
 


const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const column1 = testimonials.slice(0,3);
const column2 = testimonials.slice(3,6);
const column3 = testimonials.slice(6,9);



export default function Testimonials() {
  return (
    <div className="py-8 bg-[#F9F9F9]">
        <div className="max-w-[1380px] mx-auto">
        <div className="text-center tracking-tight py-8 md:py-12 lg:py-20">
            <h3 className="text-2xl font-semibold  md:text-4xl lg:text-6xl">See What our Users Say!</h3>
        </div>

        <div className="p-4">
             {/* Testimonial Columns with Conditional Rendering */}
        <div className="flex justify-center gap-6">

        {/* Column 1 (Always Visible) */}
        <div className="flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_50%,black_75%,transparent)]">
          {column1.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        {/* Column 2 (Visible on md and larger) */}
        <div className="hidden md:flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_50%,black_75%,transparent)]">
          {column2.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        {/* Column 3 (Visible on lg and larger) */}
        <div className="hidden lg:flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_50%,black_75%,transparent)]">
          {column3.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
