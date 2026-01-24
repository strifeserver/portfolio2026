import React, { useState, useMemo } from "react";
import ProjectModal from "./ProjectModal";
import settings from "../data/settings.json";

const PersonalProjects = ({ personalProjects }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (!searchTerm.trim()) return personalProjects;

    const lowerSearch = searchTerm.toLowerCase();
    return personalProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(lowerSearch) ||
        project.tags.some((tag) => tag.toLowerCase().includes(lowerSearch)),
    );
  }, [personalProjects, searchTerm]);

  // Initial show projects based on settings
  // If expanded, show all
  const displayedProjects = isExpanded
    ? filteredProjects
    : filteredProjects.slice(0, settings.secondaryArchivesInitialCount);

  // Scrollable if more than 6 projects and expanded
  const isScrollable = isExpanded && filteredProjects.length > 6;

  return (
    <>
      <section className="space-y-8 pb-20" id="secondary">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
          <div className="flex items-center gap-4">
            <span className="text-secondary-text material-symbols-outlined">
              segment
            </span>
            <h2 className="text-xl font-black text-white uppercase tracking-widest">
              Other Projects
            </h2>
          </div>

          <div className="relative group w-full md:w-64">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-secondary-text text-sm group-focus-within:text-scourge-purple transition-colors">
              search
            </span>
            <input
              type="text"
              placeholder="Search by title or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-deep-obsidian border border-shadow-line rounded py-2 pl-10 pr-4 text-xs text-white placeholder:text-secondary-text outline-none focus:border-scourge-purple transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-secondary-text text-sm hover:text-white transition-colors"
              >
                close
              </button>
            )}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-12 text-center border border-dashed border-shadow-line rounded-lg">
            <p className="text-secondary-text text-sm">
              No projects found matching your search. /dev/null
            </p>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
              isScrollable
                ? "max-h-[800px] overflow-y-auto pr-2 custom-scrollbar"
                : ""
            }`}
          >
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="group bg-soft-black border border-shadow-line rounded-lg flex flex-col hover:border-scourge-purple cursor-pointer transition-all overflow-hidden"
              >
                <div className="aspect-video w-full rounded-t bg-deep-obsidian overflow-hidden border-b border-shadow-line flex-shrink-0">
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-contain group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url("${project.image}")`,
                      opacity: 0.8,
                    }}
                  ></div>
                </div>
                <div className="p-4 space-y-3 flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-bold text-white group-hover:text-scourge-purple transition-colors line-clamp-1">
                      {project.title}
                    </h4>
                    <span className="text-[10px] font-mono text-secondary-text whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-xs text-secondary-text flex-1">
                    {project.description.length >
                    settings.secondaryArchivesDescLimit
                      ? project.description.substring(
                          0,
                          settings.secondaryArchivesDescLimit,
                        ) + "..."
                      : project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] text-syntax-keyword font-mono uppercase border border-shadow-line px-1 rounded bg-deep-obsidian/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProjects.length > settings.secondaryArchivesInitialCount &&
          !isExpanded && (
            <div className="flex justify-center pt-8">
              <button
                onClick={() => setIsExpanded(true)}
                className="px-8 py-3 bg-deep-obsidian border border-shadow-line text-secondary-text font-bold text-sm rounded hover:border-scourge-purple hover:text-white transition-all uppercase tracking-widest flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">add</span>
                Load Ancient Projects
              </button>
            </div>
          )}
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

export default PersonalProjects;
