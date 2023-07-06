"use client";
import { heading } from "@/utils/constants";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(heading);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  return (
    <>
      <div className=" h-[91vh] w-full flex items-center justify-between">
        <div className="pl-20 w-[1000px]">
          <motion.h1
            // initial={{ opacity: 0, x: -200 }}
            // animate={{ opacity: 1, x: 1 }}
            // transition={{ delay: 0.3, duration: 0.4 }}
            className="text-4xl font-medium"
          >
            {text}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="text-xl mt-8 leading-relaxed"
          >
            Experience the future of dining with our revolutionary automated
            restaurant system. From QR code ordering for customers to streamline
            the process, to an intuitive chef's profile for kitchen efficiency,
            and a comprehensive data insights dashboard for owners, our
            state-of-the-art technology enhances every aspect of the dining
            experience. Embrace the seamless workflow, increased customer
            satisfaction, and improved profitability that our solution brings to
            your restaurant.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="  h-full w-[900px] bg-primaryPurple flex justify-center items-center mt-0"
          style={{ borderRadius: "57% 43% 42% 58% / 59% 30% 70% 41% " }}
        >
          <Player
            speed={2}
            autoplay
            loop
            style={{ height: "500px", width: "500px" }}
            src={require("@/lottiefiles/cook.json")}
          ></Player>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
