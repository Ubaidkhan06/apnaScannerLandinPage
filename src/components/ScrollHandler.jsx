"use client";
import { useEffect } from "react";

const ScrollHandler = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Calculate the index of the section to scroll to
      const sectionIndex = Math.round(scrollPosition / windowHeight);

      // Get the target section element using the ID
      const targetSection = document.getElementById(
        `section${sectionIndex + 1}`
      );

      if (targetSection) {
        const targetOffset = targetSection.offsetTop;
        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
      }
    };

    // Add event listener to handle scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default ScrollHandler;
