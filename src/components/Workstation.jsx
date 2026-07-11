import React from "react";

const specIconMap = {
  memory: "memory",
  developer_board: "developer_board",
  tv: "tv",
  storage: "storage",
  bolt: "bolt",
};

const Workstation = ({ workstation }) => {
  const { headline, subheadline, specs, monitors } = workstation;

  return (
    <section className="space-y-10 py-12" id="dev-rig">
      {/* Section header */}
      <div className="flex items-end justify-between border-b border-shadow-line pb-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
            <span className="material-symbols-outlined text-scourge-purple text-3xl">
              computer
            </span>
            {headline}
          </h2>
          <p className="text-secondary-text text-sm max-w-xl">{subheadline}</p>
        </div>
        <span className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-700/30 text-emerald-400 text-xs font-mono">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Online
        </span>
      </div>

      {/* Specs grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="group relative flex items-start gap-4 p-5 bg-deep-obsidian border border-shadow-line rounded-xl hover:border-scourge-purple/50 transition-all duration-300 overflow-hidden"
          >
            {/* Subtle gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-scourge-purple/0 to-scourge-purple/0 group-hover:from-scourge-purple/5 group-hover:to-transparent transition-all duration-500 rounded-xl pointer-events-none" />

            <div className="flex-shrink-0 size-10 rounded-lg bg-scourge-purple/10 border border-scourge-purple/20 flex items-center justify-center group-hover:bg-scourge-purple/20 transition-colors duration-300">
              <span className="material-symbols-outlined text-scourge-purple text-xl">
                {spec.icon}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-mono text-secondary-text uppercase tracking-widest mb-0.5">
                {spec.category}
              </p>
              <p className="text-white font-bold text-sm leading-tight truncate">
                {spec.value}
              </p>
              <p className="text-[11px] text-secondary-text mt-1 font-mono">
                {spec.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Monitors row */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono text-secondary-text uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-scourge-purple">
            monitor
          </span>
          Display Setup — Triple Monitor
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {monitors.map((mon, index) => (
            <div
              key={index}
              className="group flex flex-col gap-1.5 p-4 bg-deep-obsidian border border-shadow-line rounded-xl hover:border-scourge-purple/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-scourge-purple uppercase tracking-widest">
                  {mon.label}
                </span>
                {index === 0 && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-scourge-purple/10 border border-scourge-purple/20 text-scourge-purple">
                    Main
                  </span>
                )}
              </div>
              <p className="text-white font-bold text-sm">{mon.value}</p>
              <p className="text-[11px] text-secondary-text font-mono">
                {mon.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="flex items-start gap-3 p-4 rounded-xl border border-shadow-line bg-deep-obsidian/50">
        <span className="material-symbols-outlined text-bone-highlight text-lg flex-shrink-0 mt-0.5">
          info
        </span>
        <p className="text-secondary-text text-sm leading-relaxed">
          This rig is my active development environment and is available for
          remote work arrangements. If your organization provides a work unit, it
          can be connected to 2 or 3 of the monitors or used alongside the
          existing setup.
        </p>
      </div>
    </section>
  );
};

export default Workstation;
