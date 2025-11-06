import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // For now, just simulate success and open mailto
      const mailto = `mailto:prachinautiyal001@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom:%20${encodeURIComponent(form.email)}`;
      window.location.href = mailto;
      setStatus('Message composed in your email client.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="w-full bg-[#0A0A12] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-slate-300/90">Have a project in mind or need a fresh brand identity? I'd love to hear from you.</p>
            <a href="mailto:prachinautiyal001@gmail.com" className="mt-4 inline-block text-cyan-300 underline underline-offset-4 hover:text-cyan-200">prachinautiyal001@gmail.com</a>
            <div className="mt-6 rounded-xl border border-fuchsia-400/20 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 text-sm text-slate-300/90 shadow-[0_0_30px_rgba(168,85,247,0.12)]">
              <p className="font-medium text-white">Collaboration Notes</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 opacity-90">
                <li>Clear goals and timelines</li>
                <li>Brand references or moodboards</li>
                <li>Deliverables and formats needed</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-slate-300">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-slate-200 placeholder-slate-500 outline-none ring-0 focus:border-cyan-400/60"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-slate-300">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-slate-200 placeholder-slate-500 outline-none ring-0 focus:border-cyan-400/60"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-slate-200 placeholder-slate-500 outline-none ring-0 focus:border-cyan-400/60"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button type="submit" className="mt-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-2 font-semibold text-black shadow-[0_0_25px_rgba(168,85,247,0.35)] transition hover:opacity-90">
                Send Message
              </button>
              {status && <p className="text-sm text-slate-300">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
