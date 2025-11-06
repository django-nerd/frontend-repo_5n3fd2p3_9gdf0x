import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-lg font-bold tracking-wide text-white" style={{textShadow:'0 0 10px rgba(168,85,247,0.6)'}}>PRACHI</a>
        <nav className="flex items-center gap-6 text-sm text-slate-200">
          <a href="#about" className="hover:text-cyan-300">About</a>
          <a href="#portfolio" className="hover:text-cyan-300">Portfolio</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
