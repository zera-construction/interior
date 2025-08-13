import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const StartProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const circleVariants = {
    hidden: { scale: 0.5 },
    visible: { scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

   const [showButton, setShowButton] = useState(false);

  return (
    <section ref={ref} className="w-full min-h-[500px] text-white flex flex-col items-center justify-center px-6 md:px-16 relative font-mozilla mb-10">

      {/* Big Heading */}
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate={controls}
        className="absolute top-0 text-6xl md:text-[130px] leading-tight font-mozilla z-10
             bg-gradient-to-r from-black to-gray-200 dark:from-gray-500 dark:to-white 
             bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x"
      >
        Start Project
      </motion.h1>

      {/* Image Section */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={controls}
        className="w-auto max-w-6xl absolute top-28 z-20"
      >
        <div className="relative flex justify-center"
          onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)}>
          <img
            src="https://img.freepik.com/premium-photo/room-with-couch-lamp-table_1288816-3764.jpg?semt=ais_hybrid&w=740"
            alt="Project Interior"
            className="w-[90%] rounded-3xl object-cover"
          />
          {showButton && (
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="px-6 py-3 border border-white dark:border-black rounded-full text-sm flex items-center gap-2 bg-black bg-opacity-50 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all duration-300 hover:gap-6">
                Learn More <span className="material-symbols-outlined">arrow_forward_ios</span>
              </div>
            </button>
          )}
        </div>


      </motion.div>

      {/* Glowing Circle CTA */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={controls}
        className="absolute bottom-20 z-20 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-gray-400 via-black to-white flex items-center justify-center cursor-pointer hover:scale-110 "
      >
      </motion.div>
    </section>
  );
};

export default StartProject;
