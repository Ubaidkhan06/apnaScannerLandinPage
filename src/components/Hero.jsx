"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = ({ heading, content }) => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(heading);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }
  }, [index]);
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse">
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-secondaryPurple to-tertiaryPurple md:h-auto md:w-8/12 lg:h-auto lg:w-9/12"
          style={{ borderRadius: "57% 43% 42% 58% / 59% 30% 70% 41% " }}
        >
          <Player
            style={{
              height: "100%",
              width: "100%",
            }}
            speed={1}
            src={require("@/lottiefiles/cook.json")}
            loop
            autoplay
          />
        </motion.div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-secondaryPurple to-tertiaryPurple bg-clip-text text-transparent text-center md:text-left md:text-5xl">
            {text}
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="py-6 text-center md:text-left md:text-xl md:leading-relaxed"
          >
            {content}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: 1 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
            className="btn bg-gradient-to-r from-secondaryPurple to-tertiaryPurple btn-block md:btn-wide"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
