import { Outfit } from "next/font/google";
import CreativeDeveloperMarquee from "./components/CreativeDeveloperMarquee/CreativeDeveloperMarquee";
import { Shapes } from "./components/Shapes/Shapes";

import { stagger, useAnimate, animate, motion } from "framer-motion";
import Rounded from "../pages/genericComponents/RoundedButton/RoundedButton";

const outfit = Outfit({ weight: ["400", "900"], subsets: ["latin"] });
export default function Home() {
  return (
    <main className="h-dvh w-dvw flex flex-col">
      <div className="flex justify-between items-center h-full px-4 mx-8">
        <div className="flex flex-col justify-center items-start px-8 text-left max-w-screen-lg">
          <div className={outfit.className}>
            <div className="gradient-name text-[88px] text-transparent animate-gradient">
              Aarsh Kariya
            </div>
          </div>

          <div className="mb-4">
            I am in love with creative websites! And I want to make you fall in
            love with yours!
          </div>

          <div className="space-x-4 flex">
            <Rounded backgroundColor="#9CAFAA">Resume</Rounded>
            <Rounded backgroundColor="#EFBC9B">Get in Touch</Rounded>
            <Rounded backgroundColor="#B67352">Schedule a call</Rounded>
          </div>
        </div>

        <Shapes />
      </div>
      <div className="absolute -bottom-16 left-0">
        <CreativeDeveloperMarquee />
      </div>
    </main>
  );
}
