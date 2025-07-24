import { Outfit } from "next/font/google";
import CreativeDeveloperMarquee from "./components/CreativeDeveloperMarquee/CreativeDeveloperMarquee";
import Shapes from "./components/Shapes/Shapes";

import { stagger, useAnimate, animate, motion } from "framer-motion";
import Rounded from "../pages/genericComponents/RoundedButton/RoundedButton";

import { useRouter } from "next/router";

const outfit = Outfit({ weight: ["400", "900"], subsets: ["latin"] });
export default function Home() {
  const router = useRouter();

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1M-fnhaZGgmw4PyjwbRJkyXRihRyzNitw/view?usp=sharing",
      "_blank",
      "noopener noreferrer"
    );
  };

  const handleEmailClick = () => {
    router.push("mailto:aarshcreativedev@gmail.com");
  };

  return (
    <main className="h-screen w-screen flex flex-col overflow-hidden overflow-y-hidden">
      <div className="flex justify-between items-center flex-grow px-4 mx-8">
        <div className="flex flex-col justify-center items-start px-8 text-left max-w-screen-lg">
          <div className={outfit.className}>
            <div className="gradient-name text-[122px] text-transparent animate-gradient">
              Aarsh Kariya
            </div>
          </div>

          <div className="mb-4">
            I am in love with creative websites! And I want to make you fall in
            love with yours!
          </div>

          <div className="space-x-4 flex">
            <Rounded backgroundColor="#9CAFAA" onClick={handleResumeClick}>
              Resume
            </Rounded>
            <Rounded backgroundColor="#EFBC9B" onClick={handleEmailClick}>
              Get in Touch
            </Rounded>
            <Rounded backgroundColor="#B67352">Schedule a call</Rounded>
          </div>
        </div>

        <Shapes />
      </div>
      <div className="absolute -bottom-20 left-0">
        <div className="marquee-container">
          <CreativeDeveloperMarquee />
        </div>
      </div>
    </main>
  );
}
