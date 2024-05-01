import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "./components/NavigationBar/NavigationBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#FEFBF6]">
      <Component {...pageProps} />
      <NavigationBar />
    </div>
  );
}
