import React from "react";

function Navbar() {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className="fixed z-[999] w-full px-20 py-8 flex justify-between">
      {/* <div className="logo text-2xl font-bold tracking-wide text-gray-300 mt-[-7px]"> */}
            <div className="logo text-2xl font-bold tracking-wide text-white mt-[-7px]">

        Portfolio<span className="text-blue-500 font-bold">.</span>
      </div>
      <div className="links flex gap-15">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="text-lg capitalize text-white font-light relative group"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
