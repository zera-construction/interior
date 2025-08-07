import { motion } from 'framer-motion';
import { useState } from 'react';

import thumb1 from '../assets/images/thumb-1.webp';
import thumb2 from '../assets/images/thumb-2.webp';
import thumb3 from '../assets/images/thumb-3.webp';
import thumb4 from '../assets/images/thumb-4.webp';
import thumb5 from '../assets/images/thumb-5.webp';
import thumb6 from '../assets/images/thumb-6.webp';
import thumb7 from '../assets/images/thumb-7.webp';
import thumb8 from '../assets/images/thumb-8.webp';
import thumb9 from '../assets/images/thumb-9.webp';
import thumb10 from '../assets/images/thumb-10.webp'


const HeroSection = () => {

  const thumbnails = [
    thumb1,
    thumb2,
    thumb3,
    thumb4,
    thumb5,
    thumb6,
    thumb7,
    thumb8,
    thumb9,
    thumb10,
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [mainThumbm, setMainThumb] = useState(thumbnails[0])

  const handlePrev = () => {
    setStartIndex((prev) => {
      const newIndex = prev === 0 ? thumbnails.length - 4 : prev - 1;
      setMainThumb(thumbnails[newIndex]);
      return newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prev) => {
      const newIndex = (prev + 4 >= thumbnails.length) ? 0 : prev + 1;
      setMainThumb(thumbnails[newIndex]);
      return newIndex;
    });
  };

  return (
    <section
      className="relative w-full text-white flex flex-col"
      style={{ height: 'calc(100vh - 70px)' }}
    >
      <div className="absolute w-auto h-auto z-20 top-[14%] right-[20%]">
        <motion.img
          src={mainThumbm}
          alt="Interior Design Room"
          className="w-[300px] h-full object-cover rounded-3xl shadow-xl"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Glow Ball */}
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [1, 0.7, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-4 right-24 w-24 h-24 rounded-full 
        bg-gradient-to-br from-gray-400 via-white-400 to-gray-200 blur-md
        drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"      />


      <div className="relative h-full flex flex-col items-start sm:px-6 text-left -mt-8">
        <motion.h1
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          className="absolute text-6xl md:text-[130px] leading-tight font-mozilla z-10
             bg-gradient-to-r from-black to-gray-200 dark:from-gray-500 dark:to-white 
             bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x"
        >
          Transform
        </motion.h1>

        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
          className="absolute text-6xl md:text-[130px] leading-tight font-mozilla mt-28 z-30
             bg-gradient-to-l from-black to-gray-300 dark:from-gray-500 dark:to-white 
             bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x"
        >
          your space
        </motion.h1>


        <div className="flex w-[55%] justify-between items-center absolute bottom-[25%] z-30 ml-5">
          <p className="text-gray-800 dark:text-gray-400">Design & Build Experts <br /> Since 2020</p>
          <div className='flex gap-6'>
            <button className="px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105
                   text-white dark:text-black
                   bg-gradient-to-r from-gray-400 dark:from-gray-400 to-black dark:to-white 
                   bg-[length:200%_200%] bg-left animate-gradient-x
                   transition-all duration-500 ease-in-out">
              Start Project <span className="material-symbols-outlined">arrow_forward_ios</span>
            </button>
            <button className="px-6 py-3 border-2 border-gray-400 dark:border-white text-gray-400 dark:text-white rounded-full flex items-center gap-2 hover:scale-105 transition duration-500 ease-in-out">
              Learn More <span className="material-symbols-outlined">arrow_forward_ios</span>
            </button>
          </div>
        </div>

        <p className="max-w-md text-gray-400 dark:text-gray-200 absolute bottom-1/3 right-0 w-60 z-30">
          The mind creates the beautiful, the heart creates the home, home sweet home
        </p>

        {/* Image Slider Thumbnails */}
        <div className="flex w-full sm:w-[50%] justify-center gap-2 mt-8 items-center absolute -bottom-8 left-0 z-30 p-4 right-1/2">
          <div className='flex items-center justify-center relative'>
            <button
              onClick={handlePrev}
              className="w-14 h-8 flex items-center justify-center absolute -left-7 p-2 border border-black dark:border-white rounded-full hover:bg-gray-500/20  dark:hover:text-black transition bg-black/20 dark:bg-white/10
              bg-white/20 dark:bg-black/50
             backdrop-blur-md 
             border border-white/50 dark:border-white/20
             rounded-3xl shadow-2xl dark:shadow-white/30"
            >
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>

            <div className="flex gap-2 overflow-hidden">
              {thumbnails.slice(startIndex, startIndex + 4).map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index}`}
                  className="w-20 h-full object-cover rounded-lg"
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-14 h-8 flex items-center justify-center absolute -right-7 p-2 border border-black dark:border-white rounded-full hover:bg-gray-500/20  dark:hover:text-black transition bg-black/20 dark:bg-white/10
              bg-white/20 dark:bg-black/50
             backdrop-blur-md 
             border border-white/50 dark:border-white/20
             rounded-3xl shadow-2xl dark:shadow-white/30"
            >
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 transform -translate-x-1/2">
          <motion.span
            className="material-symbols-outlined text-3xl"
            animate={{
              y: [0, 10, 0],  // Move up by 10px and return
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            arrow_cool_down
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;