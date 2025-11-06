import React from 'react';

const items = [
  {
    title: 'Instagram Post',
    type: 'Social Media',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1374&auto=format&fit=crop',
  },
  {
    title: 'Business Card',
    type: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1628891439478-c613e85af7d6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCdXNpbmVzcyUyMENhcmR8ZW58MHwwfHx8MTc2MjQyMDA4OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Brochure',
    type: 'Print',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1374&auto=format&fit=crop',
  },
  {
    title: 'Flyer',
    type: 'Marketing',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1374&auto=format&fit=crop',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full bg-[#080810] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">Portfolio</h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_60%)]" />
              <div className="absolute inset-x-0 bottom-0 space-y-1 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs uppercase tracking-wider text-cyan-200/80">{item.type}</p>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
