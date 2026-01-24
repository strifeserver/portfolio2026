import React from "react";

const Contact = () => {
  return (
    <section className="py-20 border-t border-shadow-line">
      <div className="bg-scourge-purple p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-scourge-purple/20">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">
            Ready to deploy?
          </h2>
          <p className="font-medium opacity-80">
            Let's build something world-class together.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-void-black text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform flex items-center gap-3 border border-shadow-line">
            <span className="material-symbols-outlined text-bone-highlight">
              alternate_email
            </span>
            Email Me
          </button>
          <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all">
            View Github
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
