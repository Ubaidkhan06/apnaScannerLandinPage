"use client";
import { framerContainer, framerItem } from "@/utils/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const Section1 = ({ imageList, title, content }) => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col md:flex-row md:gap-40">
        <motion.div
          variants={framerContainer}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          className="bg-error p-4"
          style={{ borderRadius: "57% 43% 42% 58% / 59% 30% 70% 41% " }}
        >
          <motion.div variants={framerItem} className="flex gap-2">
            {imageList?.map((ele) => (
              <Image
                key={ele.name}
                src={ele.image}
                width={500}
                height={500}
                alt="ss"
                className="w-32 h-auto md:w-64 md:h-auto"
              />
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          variants={framerContainer}
          initial={"hidden"}
          whileInView={"visible"}
          className="z-10 md:w-[500px]"
        >
          <motion.h1
            variants={framerItem}
            className="text-3xl font-bold text-center md:text-left md:text-5xl bg-error bg-clip-text text-transparent"
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

export default Section1;
