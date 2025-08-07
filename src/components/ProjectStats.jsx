import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";

import thumb1 from "../assets/images/thumb-1.webp";
import thumb2 from "../assets/images/thumb-2.webp";
import thumb9 from "../assets/images/thumb-9.webp";
import thumb3 from "../assets/images/thumb-4.webp";

const ProjectStats = () => {
  const [cardClicked, setCartClick] = useState(false);
  const [topCard, setTopCard] = useState(thumb1);

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
      className="w-full min-h-screen flex flex-col sm:flex-row items-center md:space-x-20 text-black dark:text-white sm:px-6 md:px-16 py-12 gap-8 font-mozilla"
    >
      <div className="flex gap-6 md:gap-12 font-dmSans block sm:hidden">
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl sm:text-3xl">
            <CountUp start={isInView ? 0 : null} end={99} duration={1.5} /> <span className="text-gray-500">+</span>
          </h3>
          <p className="text-gray-400 text-xs">Success project</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl sm:text-3xl">
            <CountUp start={isInView ? 0 : null} end={199} duration={1.5} /> <span className="text-gray-500">+</span>
          </h3>
          <p className="text-gray-400 text-xs">Product launches</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl sm:text-3xl">
            <CountUp start={isInView ? 0 : null} end={999} duration={1.5} /> <span className="text-gray-500">+</span>
          </h3>
          <p className="text-gray-400 text-xs">Happy customer</p>
        </div>
      </div>
      {/* Left Image */}
      <motion.div
        animate={leftControls}
        className="w-full h-auto md:w-1/2 flex justify-center items-center relative bg-"
        onClick={() => setCartClick((prev) => !prev)}
      >
        <div className="relative w-full max-w-[300px] h-[300px] rounded-3xl shadow-2xl w-full flex justify-center items-center">
          <span className="material-symbols-outlined -right-5 sm:-right-16 absolute text-9xl text-black dark:text-white rotate-[45deg]">
            rotate_right
          </span>
          <img
            src={thumb1}
            alt="Interior Design"
            className={`rounded-3xl shadow-2xl w-full max-w-[220px] sm:max-w-[300px] object-cover absolute transition-all duration-500 ${cardClicked ? " left-[0px]  rotate-0 hover:-mt-10" : "left-0"}`}
            onClick={() => setTopCard(thumb1)}
          />
          <img
            src={thumb2}
            alt="Interior Design"
            className={`rounded-3xl shadow-2xl w-full max-w-[220px] sm:max-w-[300px] object-cover absolute transition-all duration-500 ${cardClicked ? " left-[25px]  rotate-[5deg] hover:-mt-10" : "left-0"}`}
            onClick={() => setTopCard(thumb2)}
          />
          <img
            src={thumb9}
            alt="Interior Design"
            className={`rounded-3xl shadow-2xl w-full max-w-[220px] sm:max-w-[300px] object-cover absolute transition-all duration-500 ${cardClicked ? " left-[50px]  rotate-[10deg] hover:-mt-10" : "left-0"}`}
            onClick={() => setTopCard(thumb9)}
          />
          <img
            src={thumb3}
            alt="Interior Design"
            className={`rounded-3xl shadow-2xl w-full max-w-[220px] sm:max-w-[300px] object-cover absolute transition-all duration-500 ${cardClicked ? " left-[75px]  rotate-[15deg] hover:-mt-10" : "left-0"}`}
            onClick={() => setTopCard(thumb3)}
          />
          <img
            src={topCard}
            alt="Interior Design"
            className={`rounded-3xl shadow-2xl w-full max-w-[220px] sm:max-w-[300px] object-cover absolute transition-all duration-500 ${cardClicked ? " left-[100px]  rotate-[20deg]" : "left-0"}`}
            onClick={() => setTopCard(topCard)}
          />
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        animate={rightControls}
        className="w-full md:w-1/2 flex flex-col gap-8 items-start md:items-end text-start md:text-right"
      >
        <h2 className="text-xl md:text-2xl font-light leading-relaxed text-black dark:text-gray-400">
          The key difference between ordinary and special,{" "}
          <span className="text-gray-400 dark:text-white">
            No matter the season, our spaces are as nuanced as the lifestyles they reflect, <br />
          </span>
          don’t just dream it.
        </h2>

        {/* Stats */}
        <div className="flex gap-6 md:gap-12 font-dmSans hidden sm:block items-center">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-2xl sm:text-3xl">
              <CountUp start={isInView ? 0 : null} end={99} duration={1.5} /> <span className="text-gray-500">+</span>
            </h3>
            <p className="text-gray-400 text-xs">Success project</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-2xl sm:text-3xl">
              <CountUp start={isInView ? 0 : null} end={199} duration={1.5} /> <span className="text-gray-500">+</span>
            </h3>
            <p className="text-gray-400 text-xs">Product launches</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl transition">
              <CountUp start={isInView ? 0 : null} end={999} duration={1.5} /> <span className="text-gray-500">+</span>
            </h3>
            <p className="text-gray-400 text-xs">Happy customer</p>
          </div>
        </div>

        {/* About Button */}
        <button className="mt-4 px-6 py-3 border border-black dark:border-white rounded-full flex items-end gap-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition hover:gap-4 transition-all duration-300 ease-in-out mr-2 hover:mr-0">
          About Us <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </motion.div>
    </section>
  );
};

export default ProjectStats;
