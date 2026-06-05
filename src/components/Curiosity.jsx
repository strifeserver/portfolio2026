import React from "react";

const statusConfig = {
  PLANNING: {
    label: "Planning",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    dot: "bg-yellow-400",
  },
  STUDYING: {
    label: "Studying",
    color: "text-sky-400",
    bg: "bg-sky-400/10 border-sky-400/20",
    dot: "bg-sky-400",
  },
  BUILDING: {
    label: "Building",
    color: "text-syntax-keyword",
    bg: "bg-scourge-purple/10 border-scourge-purple/20",
    dot: "bg-scourge-purple",
  },
  ACTIVE: {
    label: "Active",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    dot: "bg-emerald-400",
  },
};

const Curiosity = ({ curiosity }) => {
  return (
    <section className="space-y-10 py-12" id="curiosity">
      {/* Header */}
      <div className="flex items-end justify-between border-b border-shadow-line pb-4">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
            Currently Exploring
          </h2>
          <p className="text-secondary-text text-sm mt-1 font-mono">
            // what I'm thinking about outside work hours
          </p>
        </div>
        <span className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-scourge-purple/10 border border-scourge-purple/20 text-scourge-purple text-xs font-mono">
          <span className="size-1.5 rounded-full bg-scourge-purple animate-pulse inline-block" />
          live curiosity
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {curiosity.map((item, index) => {
          const cfg = statusConfig[item.status] || statusConfig["STUDYING"];
          return (
            <div
              key={index}
              className="group relative flex flex-col gap-5 p-6 bg-deep-obsidian border border-shadow-line rounded-xl hover:border-scourge-purple/60 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-scourge-purple/0 group-hover:bg-scourge-purple/[0.03] transition-all duration-300 pointer-events-none" />

              {/* Icon + Status */}
              <div className="flex items-start justify-between gap-4">
                <div className="size-12 flex items-center justify-center rounded-lg bg-soft-black border border-shadow-line group-hover:border-scourge-purple/40 transition-colors duration-300 flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl text-bone-highlight group-hover:text-scourge-purple transition-colors duration-300">
                    {item.icon}
                  </span>
                </div>
                <span
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-[10px] font-mono font-bold uppercase tracking-widest ${cfg.bg} ${cfg.color}`}
                >
                  <span className={`size-1.5 rounded-full ${cfg.dot} animate-pulse inline-block`} />
                  {cfg.label}
                </span>
              </div>

              {/* Title + Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-bone-highlight transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Note */}
              {item.note && (
                <div className="flex items-start gap-2 p-3 rounded-lg bg-soft-black border border-shadow-line">
                  <span className="material-symbols-outlined text-base text-scourge-purple flex-shrink-0 mt-0.5">
                    sticky_note_2
                  </span>
                  <p className="text-xs text-secondary-text font-mono leading-relaxed">
                    {item.note}
                  </p>
                </div>
              )}

              {/* Tags */}
              {item.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-syntax-function px-2 py-0.5 border border-shadow-line bg-soft-black rounded hover:border-scourge-purple/40 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer blurb */}
      <div className="flex items-center gap-3 pt-2">
        <div className="h-px flex-1 bg-shadow-line" />
        <p className="text-[11px] font-mono text-secondary-text whitespace-nowrap">
          always learning, always building
        </p>
        <div className="h-px flex-1 bg-shadow-line" />
      </div>
    </section>
  );
};

export default Curiosity;
