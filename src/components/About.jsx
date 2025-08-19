import React from "react";
import { motion } from "framer-motion";

function About() {
  const sentences = [
    "I am a passionate Frontend & Backend Developer with a love for building clean, user-friendly web applications.",
    "I enjoy turning complex problems into simple, elegant solutions using modern technologies like React, Node.js, and Tailwind CSS.",
    "When I’m not coding, I love exploring design trends, learning new frameworks, and experimenting with creative projects.",
    "My goal is to create digital experiences that are both functional and delightful for users.",
    "I believe in continuous learning, collaborating with others, and building projects that make a difference."
  ];

  return (
    <div id="about" className="h-screen w-screen bg-[#0e0e12] flex text-white">
      {/* Left section */}
      <div className="flex-1 flex ml-[5px] items-center justify-center">
        <h2 className="text-5xl font-bold">
          About Me<span className="text-blue-500 font-bold">.</span>
        </h2>
      </div>

      {/* Right section */}
      <div className="flex-1 flex items-center justify-center px-12">
        <div className="max-w-md space-y-4">
          {sentences.map((line, i) => (
            <motion.p
              key={i}
              initial={{ rotateX: -90, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: i * 0.6, duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }} // 👈 ensures it triggers when ~30% visible
              className="text-base text-gray-300 text-justify leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
