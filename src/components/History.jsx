import React from "react";

const History = ({ history }) => {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8 py-16" id="past">
      <div className="mb-12 md:mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
          History
          <span
            hidden
            className="text-xs font-mono text-scourge-purple bg-scourge-purple/10 px-2 py-1 rounded border border-scourge-purple/20"
          >
            v
          </span>
        </h2>
        <p className="text-secondary-text max-w-xl">
          Detailed archive of professional milestones
        </p>
      </div>

      <div className="space-y-0 relative">
        {history.map((item, index) => (
          <div
            key={index}
            className="timeline-item group relative flex gap-8 pb-12"
          >
            <div className="timeline-line relative flex flex-col items-center">
              <div
                className={`size-4 rounded-full border-2 ${item.status === "CURRENT" ? "border-scourge-purple" : "border-shadow-line"} bg-void-black z-10 transition-transform group-hover:scale-125 group-hover:border-scourge-purple`}
              ></div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <span className="font-mono text-sm text-scourge-purple font-bold tracking-tight">
                  {item.period}
                </span>
                <div className="flex gap-2">
                  <span
                    className={`px-2 py-0.5 rounded bg-deep-obsidian border border-shadow-line text-[10px] font-mono ${item.status === "CURRENT" ? "text-syntax-keyword" : item.status === "EDUCATION" ? "text-bone-highlight" : "text-secondary-text"}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-scourge-purple transition-colors">
                {item.title}
              </h3>
              <p className="text-secondary-text leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-syntax-function px-2 py-0.5 border border-shadow-line bg-soft-black rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-24 py-12 border-t border-shadow-line">
        <div className="bg-deep-obsidian border border-shadow-line p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white uppercase tracking-tight">
              Looking for technical details?
            </h4>
            <p className="text-sm text-secondary-text">
              Download the full terminal-formatted resume as PDF.
            </p>
          </div>
          <button className="bg-scourge-purple hover:bg-arcane-violet text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all">
            <span className="material-symbols-outlined text-sm">download</span>
            Get_Resume.pdf
          </button>
        </div>
      </section>
    </section>
  );
};

export default History;
