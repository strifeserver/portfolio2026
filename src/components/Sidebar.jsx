import React, { useState } from "react";
import navigations from "../data/navigations.json";
import settings from "../data/settings.json";

const Sidebar = ({ profile, email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="w-full md:w-20 lg:w-64 border-t md:border-t-0 md:border-r border-shadow-line flex flex-row md:flex-col items-center md:items-start py-2 md:py-8 bg-void-black/90 backdrop-blur-md md:bg-void-black z-50 fixed bottom-0 md:relative md:bottom-auto transition-all duration-300">
      {/* Branding */}
      <div className="hidden md:flex px-4 lg:px-6 mb-8 lg:mb-12 items-center gap-3">
        <div className="size-8 lg:size-10 bg-scourge-purple rounded flex items-center justify-center text-white flex-shrink-0">
          <span className="material-symbols-outlined text-xl lg:text-2xl font-bold">
            terminal
          </span>
        </div>
        <h1 className="text-lg font-black tracking-tight text-white uppercase hidden lg:block whitespace-nowrap">
          {profile.name}
        </h1>
      </div>

      <nav className="w-full flex-1 flex flex-row md:flex-col justify-around md:justify-start gap-1">
        {navigations
          .filter((item) => !item.is_hidden)
          .map((item) => (
            <a
              key={item.href}
              className={`group flex flex-col md:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-4 px-3 lg:px-6 py-2 lg:py-4 text-secondary-text hover:text-arcane-violet transition-all ${
                item.href === "#hero"
                  ? "sidebar-active text-scourge-purple"
                  : ""
              }`}
              href={
                item.href === "#" && item.is_external
                  ? profile.resume
                  : item.href
              }
              {...(item.is_external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span
                className={`material-symbols-outlined text-xl lg:text-2xl ${item.href === "#hero" ? "text-[var(--bone-highlight)]" : ""}`}
              >
                {item.icon}
              </span>
              <span className="text-[10px] lg:text-sm font-bold uppercase tracking-widest hidden lg:block">
                {item.name}
              </span>
            </a>
          ))}
      </nav>

      {/* Footer / Status */}
      <div className="hidden md:flex flex-col items-center lg:items-start px-4 lg:px-6 w-full space-y-4">
        {/* Status Box - Only on large screens */}
        <div className="hidden lg:block p-4 rounded-lg bg-soft-black border border-shadow-line w-full">
          <p className="text-[10px] text-secondary-text uppercase tracking-tighter mb-2">
            Current Status
          </p>
          <div className="flex items-center gap-2">
            <div
              className="size-2 rounded-full animate-pulse"
              style={{ backgroundColor: settings.statusIndicatorColor }}
            ></div>
            <p className="text-xs font-medium text-white">{profile.status}</p>
          </div>
        </div>

        {/* Action / Social Profile */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between w-full relative">
          <button
            onClick={handleCopyEmail}
            className="size-10 lg:size-12 flex items-center justify-center rounded-lg bg-soft-black border border-shadow-line hover:border-scourge-purple transition-colors active:scale-90 flex-shrink-0"
            title="Copy Email"
          >
            <span className="material-symbols-outlined text-xl lg:text-2xl text-bone-highlight">
              mail
            </span>
          </button>

          {copied && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 mb-2 px-3 py-1 bg-soft-black border border-scourge-purple rounded text-[10px] text-white font-mono animate-in fade-in slide-in-from-bottom-1 whitespace-nowrap">
              Email copied
            </div>
          )}

          <div className="hidden lg:block h-[1px] flex-1 bg-shadow-line"></div>

          <div className="relative">
            <div
              className="size-10 lg:size-12 bg-center bg-no-repeat bg-cover rounded-full border-2 border-scourge-purple flex-shrink-0"
              style={{ backgroundImage: `url("${profile.photo}")` }}
            ></div>
            {/* Pulsing status dot for mini-sidebar */}
            <div
              className="lg:hidden absolute -top-1 -right-1 size-3 rounded-full border-2 border-void-black animate-pulse"
              style={{ backgroundColor: settings.statusIndicatorColor }}
            ></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
