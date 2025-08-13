import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from 'framer-motion';

const services = [
  { title: "Space Planning & Design", image: "https://img.freepik.com/premium-photo/living-room-concept-black-color-with-furniture-highlighted-black-white_7023-2575.jpg?w=360"  },
  { title: "Interior detailing", image: "https://img.freepik.com/premium-photo/living-room-concept-black-color-with-furniture-highlighted-black-white_7023-2575.jpg?w=360" },
  { title: "Furniture layout", image: "https://img.freepik.com/premium-photo/living-room-concept-black-color-with-furniture-highlighted-black-white_7023-2575.jpg?w=360" },
  { title: "Doors & Windows", image: "https://img.freepik.com/premium-photo/living-room-concept-black-color-with-furniture-highlighted-black-white_7023-2575.jpg?w=360" },
  { title: "Green & Sustainable Interiors", image: "https://img.freepik.com/premium-photo/living-room-concept-black-color-with-furniture-highlighted-black-white_7023-2575.jpg?w=360" },
];

const ServicesList = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const titleControls = useAnimation();
  const listControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      titleControls.start({ y: 0, opacity: 1, transition: { duration: 2, ease: "easeOut" } });
      listControls.start("visible");
    } else {
      titleControls.start({ y: 30, opacity: 0 });
      listControls.start("hidden");
    }
  }, [isInView, titleControls, listControls]);

  // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div ref={sectionRef} className="w-full text-white flex flex-col justify-center items-center sm:px-6 md:px-16 text-normal overflow-hidden py-10">
      <motion.h2
        animate={titleControls}
        initial={{ y: 30, opacity: 0 }}
        className="text-5xl md:text-8xl leading-tight font-mozilla bg-gradient-to-r from-black to-gray-200 dark:from-gray-500 dark:to-white bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x mb-8"
      >
        Services
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={listControls}
        className="w-full flex flex-col items-center"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            onMouseEnter={() => setActiveIndex(index)} onMouseLeave={ ()=>setActiveIndex(null)}
            className={`w-full flex justify-between items-center border-b border-gray-400 py-10 cursor-pointer font-mozilla transition-all duration-500 group ${activeIndex === index ? "text-black dark:text-white" : "text-gray-500"
              }`}
          >
            <span className="text-sm md:text-2xl ">{service.title}</span>

            {/* Right Icon / Image */}
            <div className="flex items-center space-x-2 relative w-[300px] h-full rounded-2xl">
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-auto h-[100px] object-cover rounded-2xl transition-all duration-500 absolute right-8 sm:right-12 ${activeIndex === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5 pointer-events-none"
                    }`}
                />
              )}
              <div
                className={`w-8 h-8 rounded-full flex justify-center items-center transition-all duration-500 absolute right-0`}
              >
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesList;
