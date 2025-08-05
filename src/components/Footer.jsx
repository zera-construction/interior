import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import footerWhiteLogo from "../assets/logos/zera_white_logo.png";
import footerBlackLogo from "../assets/logos/zera_black_logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const imageScale = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.3 } },
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });

  const footerLinks = [
    {
      title: "About Us",
      links: [
        { name: "Our Story", url: "/about" },
        { name: "Our Projects", url: "/projects" },
        { name: "Meet the Team", url: "/team" },
        { name: "Careers", url: "/careers" },
        { name: "Contact Us", url: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Interior Design", url: "/services/interior-design" },
        { name: "Architectural Design", url: "/services/architecture" },
        { name: "Space Planning", url: "/services/space-planning" },
        { name: "Renovation & Remodeling", url: "/services/renovation" },
        { name: "Project Management", url: "/services/project-management" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Portfolio", url: "/portfolio" },
        { name: "Design Blog", url: "/blog" },
        { name: "Client Testimonials", url: "/testimonials" },
        { name: "FAQs", url: "/faq" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: "Instagram", url: "https://www.instagram.com/", external: true },
        { name: "Facebook", url: "https://www.facebook.com/", external: true },
        { name: "LinkedIn", url: "https://www.linkedin.com/", external: true },
        { name: "Pinterest", url: "https://www.pinterest.com/", external: true },
      ],
    },
  ];

  return (
    <footer ref={ref} className="w-full px-6 md:px-16 py-16 flex flex-col items-center border-t border-gray-500">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20"
      >
        {/* Left Text */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-light leading-snug font-mozilla text-black dark:text-white">
            Engage with Us in <span className="text-gray-500 dark:text-gray-400">Conversation.</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
            In a global world based on communication, a brand must look beyond its borders,
            open up to new experiences, and dare to be different. Meeting the brightest minds of one’s time is the most effective way to nurture creativity.
          </p>
        </div>

        {/* Right Image */}
        <motion.div
          variants={imageScale}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-auto h-64 md:h-80 rounded-3xl overflow-hidden"
        >
          <img
            src="https://img.freepik.com/premium-photo/black-room-with-black-couch-coffee-table_818261-179.jpg"
            alt="Footer Visual"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Links Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-7xl mt-16 grid grid-cols-2 md:grid-cols-5 gap-10 text-center md:text-left"
      >
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-black dark:text-white text-lg mb-3 font-mozilla">{section.title}</h3>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.url}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="hover:text-black dark:hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Logo Section */}
        <div className="md:col-span-1 flex justify-center md:justify-end items-center">
          <div>
            {/* Light Mode Logo */}
            <img
              src={footerBlackLogo}
              alt="Zera Logo"
              className="w-32 md:w-40 block dark:hidden"
            />

            {/* Dark Mode Logo */}
            <img
              src={footerWhiteLogo}
              alt="Zera Logo"
              className="w-32 md:w-40 hidden dark:block"
            />
          </div>

        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
