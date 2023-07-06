"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { container, item } from "@/app/page";
import { Player } from "@lottiefiles/react-lottie-player";

const Section = ({ title, content, imageList, file }) => {
  return (
    <>
      <div className="flex p-8 justify-evenly items-center h-screen">
        <div className="">
          <motion.h1
            initial={{ opacity: 0, x: -300 }}
            transition={{ delay: 0.5, duration: 0.2 }}
            whileInView={{ opacity: 1, x: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-4 text-xl leading-relaxed"
          >
            {content}
          </motion.div>
        </div>
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          variants={container}
          // transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-2 bg-primaryPurple p-8"
          style={{ borderRadius: "57% 43% 42% 58% / 59% 30% 70% 41% " }}
        >
          {!file ? (
            imageList?.map((ele) => (
              <motion.div key={ele.name} variants={item} className="h-[600px] w-80">
                <Image
                  key={ele.name}
                  src={ele.image}
                  width={500}
                  height={500}
                  alt="logo"
                  className="object-fill h-full w-full"
                />
              </motion.div>
            ))
          ) : (
            <Player
              src={file}
              loop
              autoplay
              style={{ height: "600px", width: "700px" }}
            />
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Section;
