import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const prevBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = prevBehavior;
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <footer className="border-t border-white/10 bg-[#07070D] py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} PRACHI — All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
