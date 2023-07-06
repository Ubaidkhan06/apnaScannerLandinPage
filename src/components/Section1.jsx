"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { container, item } from "@/app/page";
import { Player } from "@lottiefiles/react-lottie-player";

const Section1 = ({ title, content, imageList, file }) => {
  return (
    <>
      <div className="flex  p-8 justify-evenly items-center h-screen">
        <motion.div
          initial={"hidden"}
          variants={container}
          whileInView={"visible"}
          viewport={{ once: true }}
          className="flex justify-center items-center flex-wrap gap-8 w-6/12 bg-primaryPurple p-4"
          style={{ borderRadius: "57% 43% 42% 58% / 59% 30% 70% 41% " }}
        >
          {!file ? (
            imageList?.map((ele) => (
              <motion.div
                key={ele.name}
                variants={item}
                whileHover={{ scale: 1.15, zIndex: 1 }}
                className="mockup-window bg-paleBlue w-72 h-auto  "
              >
                <div className="flex justify-center bg-primaryPurple">
                  <Image
                    src={ele?.image}
                    width={500}
                    height={500}
                    alt="logo"
                    className=""
                  />
                </div>
              </motion.div>
            ))
          ) : (
            <Player
              src={file}
              loop
              autoplay
              style={{ height: "600px", width: "600px" }}
            />
          )}
        </motion.div>
        <motion.div className="w-[539px]">
          <motion.h1 className="text-4xl font-medium">{title}</motion.h1>
          <motion.p className="mt-4 text-xl leading-relaxed">
            {content}
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default Section1;
