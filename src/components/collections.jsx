import { motion } from "framer-motion";

const collections = [
    { name: "Mondrian", img: "https://i.pinimg.com/236x/31/df/6d/31df6d4bba89c7a5c03af3cad77ff021.jpg", link: "#", height: "300px" },
    { name: "Nirnia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvg6P5tCCCiJm6vtX5vTOdDK6rVK1n1YFlUyq6Ah2d1jAjF8NMjblJu-zuMjZpt98YVFk&usqp=CAU", link: "#", height: "200px" },
    { name: "Artex", img: "https://blenderartists.org/uploads/default/original/4X/5/8/6/586926be34d2b354898fcf0b92d7d70dcd38d0de.jpeg", link: "#", height: "200px" },
    { name: "Brera", img: "https://edwardgeorgelondon.com/wp-content/uploads/content/dark_living_rooms_cozy.png", link: "#", height: "300px" },
    { name: "Alea Pro", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0ZAdpfk2MOFpyUzd89-T5stKkkV5UnK2qVUpL1DABCZhuIZez3yt0yZ-GKI_Xb1q14c&usqp=CAU", link: "#", height: "300px" },
    { name: "Nirnia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeJHscioT1vGyOx5NcPCCN1wIGKLJ2j5aceI40EpFHNpt53HT1Td0_LEP5ZiIsqpzr6w&usqp=CAU", link: "#", height: "200px" },
    { name: "Mondrian", img: "https://i.pinimg.com/236x/31/df/6d/31df6d4bba89c7a5c03af3cad77ff021.jpg", link: "#", height: "200px" },
    { name: "Nirnia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvg6P5tCCCiJm6vtX5vTOdDK6rVK1n1YFlUyq6Ah2d1jAjF8NMjblJu-zuMjZpt98YVFk&usqp=CAU", link: "#", height: "300px" },

];

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
    }),
};

const ProudlyCollection = () => {
    return (
        <section className="w-full sm:px-6 md:px-16 py-20">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                <div>
                    <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-light leading-snug font-mozilla font-normal">
                        <span className="text-black dark:text-white">Explore</span>{" "}
                        <span className="text-gray-500 dark:text-gray-400">Our</span>{" "}
                        <span className="text-black dark:text-white">Proudly</span>{" "}
                        <span className="text-gray-500 dark:text-gray-400">Collection</span>
                    </h2>
                    <div className="hidden sm:block">
                        <p className="text-gray-600 mt-4 max-w-md">
                            Poliform will showcase its vision of contemporary architecture, interior design trends, and innovative living at Salone del Mobile. Milano 2024.
                        </p>
                        <button className="mt-4 px-6 py-3 text-black dark:text-white border border-black dark:border-white rounded-full flex items-center gap-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition hover:gap-4 transition-all duration-300 ease-in-out mr-2 hover:mr-0">
                            View More <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto columns-2 lg:columns-4 gap-2 sm:gap-6 space-y-4 sm:space-y-6">
                {collections.map((item, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        className="break-inside-avoid"
                    >
                        <a
                            href={item.link}
                            className="block group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer w-full"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 h-48 sm:h-[${item.height}]`}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition" />
                            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 flex items-center justify-between w-[85%]">
                                <span className="text-white text:sm sm:text-lg font-mozilla">{item.name}</span>
                                <span className="material-symbols-outlined w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white text-black text-sm sm:text-xl transition group-hover:rotate-[-40deg]">
                                    arrow_forward_ios
                                </span>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
            <div className="sm:hidden flex flex-col items-start text-sart">
                <p className="text-gray-600 mt-4 max-w-md">
                    Poliform will showcase its vision of contemporary architecture, interior design trends, and innovative living at Salone del Mobile. Milano 2024.
                </p>
                <button className="mt-4 px-6 py-3 text-black dark:text-white border border-black dark:border-white rounded-full flex items-center gap-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition hover:gap-4 transition-all duration-300 ease-in-out mr-2 hover:mr-0">
                    View More <span className="material-symbols-outlined">arrow_forward_ios</span>
                </button>
            </div>



        </section>
    );
};

export default ProudlyCollection;
