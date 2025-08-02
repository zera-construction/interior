import { motion } from "framer-motion";
import thumb1 from "../assets/images/thumb-1.webp"
import thumb2 from '../assets/images/thumb-2.webp';
import thumb9 from '../assets/images/thumb-9.webp';
import thumb3 from '../assets/images/thumb-4.webp';



import { useState } from "react";


const ProjectStats = () => {

  const [cardClicked, setCartClick] = useState(false);
  const [topCard, setTopCard] = useState(thumb1)

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center space-x-20 bg-white dark:bg-black text-black dark:text-white px-6 md:px-16 py-12 gap-8 font-mozilla">

      {/* Left Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="w-full md:w-1/2 flex relative justify-center items-center bg-red-500"
        onClick={() => setCartClick(prev => !prev)}
      >
        <div className="relative rounded-3xl shadow-2xl w-full flex justify-center items-center">
          <span class="material-symbols-outlined right-16 absolute text-9xl text-black dark:text-white rotate-[45deg]">
            rotate_right
          </span>
          <img
            src={thumb1}
            alt="Interior Design"
            className={`rounded-3xl shadow-2xl w-full md:w-[300px] object-cover absolute transition-all duration-500 ${cardClicked ? " left-[0px]  rotate-0 hover:-mt-10" : "left-0"}`}
            onClick={() => setTopCard(thumb1)}
          />
          <img
            src={thumb2}
            alt="Interior Design"
            className={`rounded-3xl shadow-2xl w-full md:w-[300px] object-cover absolute transition-all duration-500 ${cardClicked ? " left-[25px]  rotate-[5deg] hover:-mt-10" : "left-0"}`}
            onClick={() => setTopCard(thumb2)}

          />
          <img
            src={thumb9}
            alt="Interior Design"
            className={`rounded-3xl shadow-2xl w-full md:w-[300px] object-cover absolute transition-all duration-500 ${cardClicked ? " left-[50px]  rotate-[10deg] hover:-mt-10" : "left-0"}`}
            onClick={() => setTopCard(thumb9)}

          />
          <img
            src={thumb3}
            alt="Interior Design"
            className={`rounded-3xl shadow-2xl w-full md:w-[300px] object-cover absolute transition-all duration-500 ${cardClicked ? " left-[75px]  rotate-[15deg] hover:-mt-10" : "left-0"}`}
            onClick={() => setTopCard(thumb3)}

          />
          <img
            src={topCard}
            alt="Interior Design"
            className={`rounded-3xl shadow-2xl w-full md:w-[300px] object-cover absolute transition-all duration-500 ${cardClicked ? " left-[100px]  rotate-[20deg]" : "left-0"}`}
            onClick={() => setTopCard(topCard)}

          />
        </div>

      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="w-full md:w-1/2 flex flex-col gap-8 items-start items-end">
        <h2 className="text-2xl md:text-2xl font-light leading-relaxed text-right text-black dark:text-gray-400">
          The key difference between ordinary and special, <span className="text-gray-400 dark:text-white">No matter the season, our spaces
            are as nuanced as the lifestyles they reflect, <br /> </span>
          don’t just dream it.
        </h2>

        {/* Stats */}
        <div className="flex gap-6 md:gap-12 font-dmSans">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl">300+</h3>
            <p className="text-gray-400 text-xs">Success project</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl">200+</h3>
            <p className="text-gray-400 text-xs">Product launches</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-3xl">180K</h3>
            <p className="text-gray-400 text-xs">Happy customer</p>
          </div>
        </div>

        {/* About Button */}
        <button className="mt-6 px-6 py-3 border border-black dark:border-white rounded-full flex items-center gap-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition hover:gap-4 transition-all duration-300 ease-in-out mr-2 hover:mr-0">
          About Us <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </motion.div>
    </section>
  );
};

export default ProjectStats;
