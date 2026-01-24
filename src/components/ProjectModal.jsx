import React, { useEffect, useState } from "react";
import settings from "../data/settings.json";

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const images = project.images || [project.image];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("keydown", handleEsc);
    window.addEventListener("resize", handleResize);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-void-black/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full h-full sm:h-auto bg-deep-obsidian border-x sm:border border-shadow-line sm:rounded-xl shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col max-h-screen overflow-hidden transition-all duration-300"
        style={{
          maxWidth: !isMobile ? `${settings.modalMaxWidth}px` : "100%",
          maxHeight: !isMobile ? `${settings.modalMaxHeight}px` : "100vh",
          transform: !isMobile
            ? `translateY(-${settings.modalVerticalOffset}px)`
            : "none",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Larger for mobile touch */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-3 bg-void-black/60 hover:bg-void-black text-secondary-text hover:text-white rounded-full transition-colors border border-shadow-line backdrop-blur-sm shadow-lg"
        >
          <span className="material-symbols-outlined block text-2xl">
            close
          </span>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto custom-scrollbar flex-1 pb-20 sm:pb-0">
          {/* Image Section / Carousel */}
          <div className="w-full h-[350px] bg-void-black relative flex-shrink-0 group">
            <div className="w-full h-full overflow-hidden">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain transition-all duration-500"
              />
            </div>

            {hasMultipleImages && (
              <>
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-void-black/40 hover:bg-void-black/80 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 border border-shadow-line"
                >
                  <span className="material-symbols-outlined block">
                    chevron_left
                  </span>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-void-black/40 hover:bg-void-black/80 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 border border-shadow-line"
                >
                  <span className="material-symbols-outlined block">
                    chevron_right
                  </span>
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(i);
                      }}
                      className={`size-2 rounded-full transition-all ${
                        i === currentImageIndex
                          ? "bg-scourge-purple w-4"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-void-black/40 to-transparent pointer-events-none z-10"></div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter italic">
                  {project.title}
                </h2>
                {project.year && (
                  <span className="text-xs md:text-sm font-mono text-secondary-text bg-soft-black px-2 py-1 rounded inline-block w-fit">
                    [{project.year}]
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] md:text-[10px] px-2 py-0.5 border border-scourge-purple/30 text-syntax-function rounded bg-scourge-purple/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm md:text-base text-secondary-text leading-relaxed">
              {project.description}
            </p>

            {(project.role || project.contributions) && (
              <div className="space-y-4 pt-4 border-t border-shadow-line">
                {project.role && (
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono text-scourge-purple uppercase tracking-widest">
                      Role
                    </h4>
                    <p className="text-sm text-white font-medium">
                      {project.role}
                    </p>
                  </div>
                )}

                {project.contributions && project.contributions.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono text-scourge-purple uppercase tracking-widest">
                      Major Contributions
                    </h4>
                    <ul className="space-y-2">
                      {project.contributions.map((contribution, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-secondary-text italic leading-relaxed"
                        >
                          <span className="text-scourge-purple mt-1 flex-shrink-0">
                            •
                          </span>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {project.link && project.link !== "#" && (
              <div className="pt-4 border-t border-shadow-line flex justify-end">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-scourge-purple text-white font-bold rounded-lg hover:bg-arcane-violet transition-colors group w-full sm:w-auto justify-center"
                >
                  <span>Live Preview</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    arrow_outward
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default ProjectModal;
