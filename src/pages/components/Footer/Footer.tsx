import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  GithubLogo,
  XLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-white py-8 flex flex-col items-center space-y-4 rounded-t-3xl"
    >
      <h2 className="text-xl font-bold text-center">
        Let&apos;s talk about your project:
      </h2>
      <a
        href="mailto:aarshcreativedev@gmail.com"
        className="text-center underline"
      >
        aarshcreativedev@gmail.com
      </a>
      <div className="flex space-x-4">
        <a
          href="https://github.com/AarshKariya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo className="w-6 h-6 hover:text-gray-400 transition-colors duration-300" />
        </a>
        <a
          href="https://twitter.com/AarshKariya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XLogo className="w-6 h-6 hover:text-gray-400 transition-colors duration-300" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo className="w-6 h-6 hover:text-gray-400 transition-colors duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/aarsh-kariya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo className="w-6 h-6 hover:text-gray-400 transition-colors duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
