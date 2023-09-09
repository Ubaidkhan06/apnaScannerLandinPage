"use client";
import { framerContainer, framerItem } from "@/utils/constants";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const Pricing = ({ content }) => {
  return (
    <div id="pricing" className="hero min-h-screen bg-gradient-to-b from-base-100 to-base-300">
      <div className="hero-content flex-col md:flex-row md:gap-40">
        <motion.div
          variants={framerContainer}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondaryPurple to-tertiaryPurple p-4"
          style={{ borderRadius: "57% 43% 42% 58% / 59% 30% 70% 41% " }}
        >
          <div className="flex justify-center items-center gap-2">
            <Player
              src={require("@/lottiefiles/price.json")}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
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
            className="text-3xl font-bold text-center md:text-left md:text-5xl bg-gradient-to-r from-secondaryPurple to-tertiaryPurple bg-clip-text text-transparent"
          >
            Pricing
          </motion.h1>
          <motion.div
            variants={framerItem}
            className="py-6 text-center md:text-left md:text-xl md:leading-relaxed"
          >
            <h1>{content?.name}</h1>
            <p>{content?.monthly_price}</p>
            <p>{content?.yearly_price}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
