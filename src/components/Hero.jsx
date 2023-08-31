import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen  mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]"> M.Fatih </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
            I bring web applications to life with captivating{" "}
            <br className="sm:block hidden" /> user interfaces and immersive 3D
            visuals, <br className="sm:block hidden" /> just like the one you're
            experiencing now.
            <div className="w-full flex">
              <motion.p className="mt-3 mr-0 text-secondary text-[15px] max-w-3xl leading-[30px]">
                *If you want to take a closer look at the codes, press enter and start rotating the scroll part of the mouse :) To cancel, press enter again and the mouse scroll will scroll up and down the page again.
              </motion.p>
            </div>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 25, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
