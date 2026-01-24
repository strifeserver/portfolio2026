import React from "react";

const Hero = ({ hero }) => {
  return (
    <section className="relative group" id="hero">
      <div className="hidden md:block absolute -left-8 top-0 h-full w-[1px] bg-shadow-line"></div>
      <div className="space-y-6">
        <p
          className="text-scourge-purple font-mono text-xs md:text-sm tracking-widest uppercase mb-4"
          data-line="01"
        >
          {hero.greeting}
        </p>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
          {hero.mainTitle} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-scourge-purple to-arcane-violet">
            {hero.highlightTitle}
          </span>
          <span className="cursor-blink"></span>
        </h1>
        <div className="max-w-2xl mt-8">
          <p className="text-lg md:text-xl text-secondary-text leading-relaxed">
            {hero.description.split(hero.name).map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="text-necro-glow necro-text-glow font-bold underline decoration-scourge-purple decoration-4">
                    {hero.name}
                  </span>
                )}
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="flex gap-4 pt-4">
          {hero.topSkills.map((skill, index) => {
            const colors = [
              "text-syntax-keyword",
              "text-syntax-function",
              "text-syntax-string",
            ];
            return (
              <div
                key={skill}
                className={`px-3 py-1 bg-soft-black border border-shadow-line rounded text-xs font-mono uppercase ${colors[index % colors.length]}`}
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
