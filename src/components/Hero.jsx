import React, { useEffect, useRef, useState } from "react";
import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

export default function HeroNoGsap() {
  const itemHeight = 48;
  const animationDuration = 600;

  // Titles state
  const [titles, setTitles] = useState([
    "FRONTEND DEVELOPER",
    "BACKEND DEVELOPER",
    "FULL STACK DEVELOPER",
  ]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const innerRef = useRef(null);

  // Titles rotating effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) return;
      setIsAnimating(true);
      setTranslateY(-itemHeight);

      setTimeout(() => {
        setTitles((prev) => {
          const newTitles = [...prev];
          const first = newTitles.shift();
          newTitles.push(first);
          return newTitles;
        });
        setTranslateY(0);
        setIsAnimating(false);
      }, animationDuration);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-8 md:px-20">
      
      {/* LEFT SIDE (Text) */}
      <motion.div
        className="flex-1 flex flex-col justify-center items-center ml-[100px] md:items-start text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[48px] md:text-7xl leading-tight font-black mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Oindrila Singha
        </motion.h1>

        <div className="flex items-center gap-4">
          <motion.div
            className="text-2xl ml-[10px] md:text-3xl md-[19px] text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Your Next
          </motion.div>

          <div
            style={{
              height: itemHeight,
              width: 300,
              overflow: "hidden",
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
            aria-hidden
          >
            <div
              ref={innerRef}
              style={{
                display: "flex",
                flexDirection: "column",
                transform: `translateY(${translateY}px)`,
                transition: isAnimating
                  ? `transform ${animationDuration}ms cubic-bezier(0.83,0,0.17,1)`
                  : "none",
              }}
            >
              {titles.map((title, idx) => (
                <div
                  key={title}
                  style={{
                    height: itemHeight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: "1.7rem",
                    fontWeight: 640,
                    width: 300,
                    background: "linear-gradient(to right, #00bfff, #00ffff)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          className="text-gray-300 max-w-md ml-[10px] mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Building Seamless Digital Experiences with Passion and
          Transforming Ideas into Interactive Web Solutions.
        </motion.p>
      </motion.div>

      {/* RIGHT SIDE (Profile Image) */}
      <motion.div
        className="flex-1 flex justify-cover mr-[100px] md:justify-end mt-8 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
      >
        <motion.img
          src={profile}
          alt="Profile"
          className="w-[320px] h-[320px] md:w-[420px] md:h-[420px]  rounded-full object-cover scale-111  border-4 border-gray-800"
          style={{ objectPosition: "0% 10%" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>
    </section>
  );
}
