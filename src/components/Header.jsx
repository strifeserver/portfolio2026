import React, { useState } from "react";

const Header = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-void-black/80 border-b border-shadow-line px-4 md:px-8 py-4 flex items-center justify-between">
      <div className="hidden md:flex items-center gap-4 text-xs font-mono text-secondary-text">
        <span className="text-scourge-purple">root</span>
        <span>/</span>
        <span className="text-primary-text">portfolio</span>
        <span>/</span>
        <span className="text-primary-text">dashboard.tsx</span>
      </div>
      <div className="flex items-center gap-6 relative">
        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-2 bg-scourge-purple px-4 py-2 rounded font-bold text-sm text-white hover:bg-arcane-violet transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-sm">
            alternate_email
          </span>
          <span>Email me</span>
        </button>

        {copied && (
          <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-soft-black border border-scourge-purple rounded text-[10px] text-white font-mono animate-in fade-in slide-in-from-top-1">
            Email copied
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
