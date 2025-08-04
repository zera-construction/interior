import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const galleryImages = [
  { id: 1, src: "https://img.freepik.com/premium-photo/interior-design-living-room-luxury-home_31965-134312.jpg", alt: "Living Room 1" },
  // { id: 2, src: "https://img.freepik.com/premium-photo/room-with-couch-lamp-table_1288816-3764.jpg?semt=ais_hybrid&w=740", alt: "Living Room 2" },
  { id: 3, src: "https://img.freepik.com/premium-photo/dark-living-room-interior-with-luxury-gray-sofa_31965-102441.jpg", alt: "Living Room 3" },
  { id: 4, src: "https://png.pngtree.com/thumb_back/fh260/background/20231002/pngtree-vintage-inspired-indoor-setting-featuring-a-3d-rendered-mockup-poster-sleek-image_13525762.png", alt: "Living Room 4" },
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
    <section ref={ref} className="w-full min-h-screen text-white flex flex-col items-center justify-center px-6 md:px-16">
      {/* Title Section */}
      <motion.div animate={titleControls} initial={{ y: 30, opacity: 0 }} className="w-full flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-6xl leading-snug font-mozilla">
          <span className="bg-gradient-to-r from-black to-gray-200 dark:from-gray-500 dark:to-white bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x mb-8">Decorate</span>{" "}
          <span className="text-black dark:text-white">every inch of the house</span>{" "}
          <span className="bg-gradient-to-r from-black to-gray-200 dark:from-gray-500 dark:to-white bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x mb-8">to make it feel homey</span>
        </h2>
        <p className="hidden md:block text-gray-400 text-right max-w-[300px] leading-relaxed text-sm">
          Carve out a little piece of paradise with some of our top picks, the home of your dreams begins with the perfect palette for every room.
        </p>
      </motion.div>

      {/* Image Gallery */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={imageControls}
        className="w-full grid grid-cols-2 md:grid-cols-3 grid-raw-2 gap-4"
      >
        {galleryImages.map((image, index) => (
          <motion.div key={image.id} variants={itemVariants} className="relative group overflow-hidden rounded-2xl"
            onMouseEnter={() => setActiveIndex(index)} onMouseLeave={ ()=>setActiveIndex(null)}>
            <img src={image.src} alt={image.alt} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out" />
            {activeIndex === index && (
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 py-3 border border-white rounded-full text-sm flex items-center gap-2 bg-black bg-opacity-50 hover:bg-white hover:text-black transition-all duration-300">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
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
