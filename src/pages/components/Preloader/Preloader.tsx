import { useEffect, useState } from "react";
import gsap from "gsap";

const Preloader: React.FC = () => {
  const [preloaderShown, setPreloaderShown] = useState<boolean>(false);

  useEffect(() => {
    const progressBar = document.querySelector(".progress-bar") as HTMLElement;
    const progressText = document.querySelector(
      ".progress-text"
    ) as HTMLElement;

    // Check if preloader has been shown before
    const preloaderPreviouslyShown = localStorage.getItem("preloaderShown");
    if (!preloaderPreviouslyShown) {
      gsap.to(progressBar, {
        duration: 2,
        width: "100%",
        ease: "power2.inOut",
        onUpdate: (progress) => {
          const percentage = Math.round(progress.progress() * 100);
          progressText.textContent = `${percentage}%`;
        },
        onComplete: () => {
          // Animation completed, set preloaderShown state to true and save in local storage
          setPreloaderShown(true);
          localStorage.setItem("preloaderShown", "true");
        },
      });
    } else {
      // Preloader has been shown before, set state to true
      setPreloaderShown(true);
    }
  }, []);

  return (
    !preloaderShown && (
      <div className="preloader-container">
        <div className="progress-bar"></div>
        <div className="progress-text">0%</div>
      </div>
    )
  );
};

export default Preloader;
