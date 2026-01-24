import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        className="space-y-10 bg-deep-obsidian p-8 rounded-xl border border-shadow-line"
        id="featured"
      >
        <div className="flex items-end justify-between border-b border-shadow-line pb-4">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
            Featured Projects
          </h2>
          <p className="text-xs font-mono text-secondary-text" hidden>
            Total: {projects.length.toString().padStart(2, "0")} Items
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-soft-black border border-shadow-line rounded-lg overflow-hidden hover:border-scourge-purple cursor-pointer transition-all"
            >
              <div className="aspect-video w-full overflow-hidden bg-void-black">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-contain transform group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url("${project.image}")` }}
                ></div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white group-hover:text-scourge-purple transition-colors">
                    {project.title}
                  </h3>
                  <span className="material-symbols-outlined text-scourge-purple group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    arrow_outward
                  </span>
                </div>
                <p className="text-sm text-secondary-text line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 border border-scourge-purple/30 text-syntax-function rounded bg-scourge-purple/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
