import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import videoThumbnail from "../assets/images/videoThumb.webp";

const VideoSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      leftControls.start({ x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } });
      rightControls.start({ x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } });
    } else {
      leftControls.start({ x: -100, opacity: 0 });
      rightControls.start({ x: 100, opacity: 0 });
    }
  }, [isInView, leftControls, rightControls]);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col-reverse sm:flex-col md:flex-row items-center justify-center text-white sm:px-6 md:px-16 py-12 gap-8 font-sans"
    >
      {/* Left Content */}
      <motion.div
        animate={leftControls}
        className="w-full md:w-1/2 flex flex-col gap-6 items-start"
      >
        <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-light leading-snug font-mozilla font-normal">
          <span className="text-black dark:text-white">Capture</span>{" "}
          <span className="text-gray-500 dark:text-gray-400">the spirit of</span>{" "}
          <span className="text-black dark:text-white">spring</span>{" "}
          <span className="text-gray-500 dark:text-gray-400">in your home</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          We provide guidance and direction in your interior design project, inspire
          your space through art and design, create a space that reflects who you are.
        </p>
        <button className="mt-4 px-6 py-3 text-black dark:text-white border border-black dark:border-white rounded-full flex items-center gap-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition hover:gap-4 transition-all duration-300 ease-in-out mr-2 hover:mr-0">
          Learn More <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </motion.div>

      {/* Right Video Thumbnail */}
      <motion.div
        animate={rightControls}
        className="w-full md:w-1/2 relative flex justify-center items-center"
      >
        <img
          src={videoThumbnail}
          alt="Interior Video"
          className="rounded-3xl object-cover w-full md:w-[500px] bg-gray-800" // Added background for placeholder view
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-white rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition duration-300 backdrop-blur-sm">
            <span className="material-symbols-outlined text-4xl">play_arrow</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
