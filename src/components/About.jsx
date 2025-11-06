import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0A0A12] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-slate-300/90">
              I'm Prachi — a multidisciplinary graphic designer with a passion for bold visuals and clear brand stories. I help startups and established brands create magnetic identities, eye-catching social media designs, and campaigns that convert.
            </p>
            <p className="mt-4 text-slate-300/90">
              My style blends futuristic minimalism with vibrant neon accents, inspired by cyberpunk aesthetics. I love turning ideas into visuals that feel alive.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Branding','Social Media','Posters','Brochures','Flyers','Business Cards'].map((tag) => (
                <span key={tag} className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-cyan-400/20 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
            <h3 className="text-lg font-semibold text-cyan-200">Services</h3>
            <ul className="mt-3 space-y-3 text-slate-300/90">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" /> Custom brand identity systems</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" /> Social media content design & templates</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-violet-400" /> Marketing collateral: brochures, flyers, posters</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-sky-400" /> Business cards and print-ready assets</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
