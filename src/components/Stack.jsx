import React from "react";

const Stack = ({ stack }) => {
  return (
    <section className="space-y-10 py-12" id="tech-stack">
      <div className="flex items-end justify-between border-b border-shadow-line pb-4">
        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {stack.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-deep-obsidian border border-shadow-line rounded-lg hover:border-scourge-purple group transition-all duration-300"
          >
            <span className="material-symbols-outlined text-4xl text-bone-highlight group-hover:text-scourge-purple transition-all duration-300 transform group-hover:scale-110 mb-3">
              {item.icon}
            </span>
            <span className="text-sm font-mono text-secondary-text font-bold uppercase tracking-wider text-center">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
