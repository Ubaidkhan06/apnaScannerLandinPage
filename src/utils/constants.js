"use client"
import {motion} from "framer-motion"

export const heading = "Automated Restaurant Management System";
export const title = "Automate your restaurants";
export const content =
  "Serve your guests with lightning speed and save big on human resources and costly primaryPurples, as our cutting-edge restaurant automation system takes your efficiency to the next level!";

export const adminPanelScreenShots = [
  { name: "menuScreen", image: "/images/ownerMenu.png" },
  { name: "statusScreen", image: "/images/ownerStatus.png" },
  { name: "tableScreen", image: "/images/ownerTable.png" },
  { name: "userScreen", image: "/images/ownerUser.png" },
];

export const section2Content = `Elevate your restaurant management with our dedicated owner dashboard. Seamlessly handle multiple restaurants in one space, update menus , manage staff effortlessly, and gain valuable insights on every table, all in real-time. Take control of your operations like never before.`;

export const section2Title = `Dedicated dashboard for owner`;

export const guestUIScreenShots = [
  { name: "ss1", image: "/images/guestss1.png" },
  { name: "ss2", image: "/images/guestss2.png" },
];

export const section3Title = "Dashboard for data insights";
export const section3Content =
  "Unleash the power of data with our dedicated owner dashboard. Gain valuable insights on daily and monthly sales, track new and repeat customers, identify popular dishes, and optimize table management. Take charge of your restaurant's success with comprehensive data-driven insights at your fingertips.";

export const section4Title = "Dedicated dashboard for Chef and Waiter";
export const section4Content =
  "Effortlessly manage orders with our dedicated chef and waiter dashboards. Maximize speed, minimize errors, and deliver exceptional service with streamlined order management. Stay organized and in control with a user-friendly interface designed specifically for your kitchen and waitstaff.";

export const framerContainer = {
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

export const framerItem = {
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

export const tempContent = (
  <motion.ul
    initial={"hidden"}
    whileInView={"visible"}
    variants={framerContainer}
    viewport={{ once: true }}
  >
    {arr?.map((ele, idx) => (
      <motion.li key={idx} className="mt-1" variants={framerItem}>
        {ele}
      </motion.li>
    ))}
  </motion.ul>
);


export const navbarItems = ["About", "Features", "Pricing", "Contact"]