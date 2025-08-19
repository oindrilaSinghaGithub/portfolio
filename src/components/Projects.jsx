import { useState } from "react";
import { projects } from "./ProjectData.jsx";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="projects"
      className="relative h-screen w-screen flex bg-[#0e0e12] text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Left side heading */}
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-6xl font-bold tracking-wide text-gray-200">
          Projects<span className="text-blue-500 font-bold">.</span>
        </h2>
      </div>

      {/* Right side scrollable list */}
      <div className="flex-1 flex justify-center items-center pr-16">
        <div className="w-full h-[76%] overflow-y-auto space-y-6 scrollbar-hide">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-700 pb-4 cursor-pointer transition-all hover:border-gray-500"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex gap-3 mt-2 text-sm text-gray-400 flex-wrap">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800 rounded-md text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className="text-sm flex items-center gap-2 text-gray-300 hover:text-white"
                onClick={() => setSelectedProject(project)}
              >
                Read More →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating image preview */}
      {hoveredProject && (
        <img
          src={hoveredProject.image}
          alt={hoveredProject.title}
          className="fixed w-56 h-36 object-contain pointer-events-none rounded-lg shadow-lg transition-transform duration-200 transform scale-105"
          style={{
            top: cursorPos.y + 20,
            left: cursorPos.x + 20,
          }}
        />
      )}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#1c1c22] p-8 rounded-xl w-[420px] relative shadow-2xl border border-gray-700">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-blue-400 hover:text-blue-500 text-xl font-bold"
            >
              X
            </button>

            {/* Project Title */}
            <h3 className="text-3xl font-extrabold mb-4 text-gray-100">
              {selectedProject.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Project Link */}
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md"
              >
                🔗 Visit Project
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
