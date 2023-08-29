"use client";
import { framerContainer, framerItem } from "@/utils/constants";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import Image from "next/image";

const Section2 = ({ title, content, imageList, check }) => {
  return (
    <div className="hero min-h-screen bg-gradient-to-b from-base-300 to-base-100">
      <div className="hero-content flex-col md:flex-row-reverse md:gap-40 md:justify-between">
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          variants={framerContainer}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondaryPurple to-tertiaryPurple p-4"
          style={{ borderRadius: "57% 43% 42% 58% / 59% 30% 70% 41% " }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            {!check ? (
              imageList?.map((ele) => (
                <motion.div
                  key={ele.name}
                  variants={framerItem}
                  whileHover={{ scale: 1.15, zIndex: 1 }}
                  className="md:mockup-window bg-neutral-50"
                >
                  <div className="flex flex-wrap justify-center bg-gradient-to-r from-secondaryPurple to-tertiaryPurple">
                    <Image
                      src={ele?.image}
                      width={500}
                      height={500}
                      alt="logo"
                      className="w-32 md:w-64 h-auto"
                    />
                  </div>
                </motion.div>
              ))
            ) : (
              <Player src={check} loop autoplay />
            )}
          </div>
        </motion.div>
        {/* text content */}
        <motion.div
          viewport={{ once: true }}
          variants={framerContainer}
          initial={"hidden"}
          whileInView={"visible"}
          className="z-10 md:w-[1050px]"
        >
          <motion.h1
            variants={framerItem}
            className="text-3xl font-bold text-center md:text-left md:text-5xl bg-gradient-to-r from-secondaryPurple to-tertiaryPurple bg-clip-text text-transparent"
          >
            {title}
          </motion.h1>
          <motion.div
            variants={framerItem}
            className="py-6 text-center md:text-left md:text-xl md:leading-relaxed"
          >
            {content}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
