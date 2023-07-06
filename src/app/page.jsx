"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import Section1 from "@/components/Section1";
import { adminPanelScreenShots, content, guestUIScreenShots, section2Content, section2Title, section3Content, section3Title, section4Content, section4Title, title } from "@/utils/constants";

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

let arr = [
  "- Guest can order food in 4 clicks",
  "- Operate with or without a waiter",
  "- Gets sales analytics in finger tips",
  "- Seamless control, real-time insights, anytime, anywhere.",
  "- Unlock growth, boost sales, and make data-driven Decisions",
  "- Master Peak Hours and Customer Cravings with Data Insights",
];

const tempContent = (
  <motion.ul
    initial={"hidden"}
    whileInView={"visible"}
    variants={container}
    viewport={{ once: true }}
  >
    {arr?.map((ele) => (
      <motion.li className="mt-1" variants={item}>
        {ele}
      </motion.li>
    ))}
  </motion.ul>
);

export default function Home() {
  return (
    <>
      <Navbar>
        <div className="container">
          <section className="item">
            <Hero />
          </section>
          <section className="item" id="section2">
            <Section
              title={"Why Apna Scanner ?"}
              content={tempContent}
              imageList={guestUIScreenShots}
            />
          </section>
          <section className="item" id="section3">
            <Section1
              title={section2Title}
              content={section2Content}
              imageList={adminPanelScreenShots}
            />
          </section>
          <section className="item" id="section4">
            <Section
              title={section3Title}
              content={section3Content}
              file={require("@/lottiefiles/dashboard.json")}
            />
          </section>
          <section className="item" id="section5">
            <Section1
              title={section4Title}
              content={section4Content}
              imageList={adminPanelScreenShots}
            />
          </section>
          <section className="item" id="section6">
            <Pricing />
          </section>
        </div>

        {/* <ScrollHandler /> */}
      </Navbar>
    </>
  );
}
