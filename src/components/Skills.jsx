import React from 'react';

function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'MongoDB',
    'Node.js',
    'Express.js',
    'Tailwind CSS',
    'Responsive Design'
  ];

  return (
    <div className="h-screen w-screen bg-black text-white flex">
      {/* Left side heading */}
      <div className="flex-1 flex items-center justify-center px-8">
        <h2 className="text-6xl font-bold tracking-wide ml-[-100px] bg-white to-cyan-400 bg-clip-text text-transparent animate-fadeIn">
          Skills<span className="text-blue-500 font-bold">.</span>
        </h2>
      </div>

      {/* Right side skills list */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="flex flex-wrap justify-center gap-6 max-w-lg animate-slideUp">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 rounded-full font-semibold text-lg shadow-md 
                         bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
                         border border-blue-400/40 backdrop-blur-md 
                         hover:from-blue-500/40 hover:to-cyan-500/40
                         hover:scale-110 hover:shadow-cyan-400/50
                         transition-all duration-300 ease-out"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
