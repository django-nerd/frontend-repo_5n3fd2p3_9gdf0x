import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden bg-[#080810]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glow gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      <div className="pointer-events-none absolute -inset-x-10 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.25),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center sm:pt-32">
        <h1
          className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
          style={{
            textShadow:
              '0 0 10px rgba(168,85,247,0.6), 0 0 20px rgba(56,189,248,0.35), 0 0 40px rgba(59,130,246,0.25)'
          }}
        >
          PRACHI
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-200/90 sm:text-lg">
          Creative Graphic Designer specializing in social media & branding.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#portfolio"
            className="rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-black shadow-[0_0_25px_rgba(168,85,247,0.35)] transition hover:opacity-90"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="rounded-md border border-cyan-300/50 px-5 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-300/10"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
