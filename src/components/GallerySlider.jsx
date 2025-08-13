import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const galleryImages = [
  { id: 1, src: "https://img.freepik.com/premium-photo/interior-design-living-room-luxury-home_31965-134312.jpg", alt: "Living Room 1", span: 1 },
  // { id: 2, src: "https://img.freepik.com/premium-photo/room-with-couch-lamp-table_1288816-3764.jpg?semt=ais_hybrid&w=740", alt: "Living Room 2" },
  { id: 3, src: "https://img.freepik.com/premium-photo/dark-living-room-interior-with-luxury-gray-sofa_31965-102441.jpg", alt: "Living Room 3", span: 1 },
  { id: 4, src: "https://png.pngtree.com/thumb_back/fh260/background/20231002/pngtree-vintage-inspired-indoor-setting-featuring-a-3d-rendered-mockup-poster-sleek-image_13525762.png", alt: "Living Room 4", span: 2 },
];

const GallerySlider = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const titleControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {

    if (isInView) {
      titleControls.start({ y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } });
      imageControls.start("visible");
    } else {
      titleControls.start({ y: 30, opacity: 0 });
      imageControls.start("hidden");
    }
  }, [isInView, titleControls, imageControls]);

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
    visible: { y: 0, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className="w-full text-white flex flex-col items-center justify-center sm:px-6 md:px-16">
      {/* Title Section */}
      <motion.div animate={titleControls} initial={{ y: 30, opacity: 0 }} className="w-full flex justify-between items-center mb-6 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-light leading-snug font-mozilla font-normal">
          <span className="text-black dark:text-white">Decorate</span>{" "}
          <span className="text-gray-500 dark:text-gray-400">to make it feel homey</span>{" "}
          <span className="text-black dark:text-white">every inch of the house</span>{" "}
        </h2>
        <p className="hidden md:block text-gray-600 dark:text-gray-400 sm:text-right max-w-[300px] leading-relaxed text-sm">
          Carve out a little piece of paradise with some of our top picks, the home of your dreams begins with the perfect palette for every room.
        </p>
      </motion.div>

      {/* Image Gallery */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={imageControls}
        className="w-full grid grid-cols-2 sm:grid-cols-3 grid-raw-2 gap-4"
      >
        {galleryImages.map((image, index) => (
          <motion.div key={image.id} variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.5 }}
            className={`relative group overflow-hidden rounded-xl bg-red-500 col-span-${image.span} sm:col-span-1`}
            onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(null)}>
            <img src={image.src} alt={image.alt} className="object-cover w-full h-[200px] sm:h-full group-hover:scale-105 transition-transform duration-500 ease-in-out" />
            {activeIndex === index && (
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 py-3 border border-white dark:border-black rounded-full text-sm flex items-center gap-2 bg-black bg-opacity-50 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all duration-300 hover:gap-4">
                  Learn More <span className="material-symbols-outlined">arrow_forward_ios</span>
                </div>
              </button>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Text */}
      <p className="md:hidden text-gray-400 text-center mt-6 text-sm max-w-md">
        Carve out a little piece of paradise with some of our top picks, the home of your dreams begins with the perfect palette for every room.
      </p>
    </section>
  );
};

export default GallerySlider;
