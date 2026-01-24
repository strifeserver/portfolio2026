import React from "react";

const Footer = ({ profile }) => {
  return (
    <footer className="pb-12 flex justify-between items-center text-[10px] font-mono text-secondary-text uppercase tracking-widest">
      <p>
        © {new Date().getFullYear()} {profile.name.toUpperCase()} — BUILT WITH
        REACT
      </p>
      <div className="flex gap-4">
        {Object.entries(profile.socials).map(([name, link], index, arr) => (
          <React.Fragment key={name}>
            <a
              className="hover:text-arcane-violet transition-colors capitalize"
              href={link}
            >
              {name}
            </a>
            {index < arr.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
