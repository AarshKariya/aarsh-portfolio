import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "./components/NavigationBar/NavigationBar";

import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "./components/Transition/Transition";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="bg-[#FEFBF6]">
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
          <NavigationBar />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
