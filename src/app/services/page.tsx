"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    { title: "Web Development", desc: "Custom websites with Next.js, React, TypeScript" },
    { title: "UI/UX Design", desc: "Beautiful, intuitive interfaces" },
    { title: "Responsive Design", desc: "Mobile-first approach" },
    { title: "Landing Pages", desc: "High-converting pages" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-portfolio">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold mb-6">Services</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="glass-card p-6">
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-foreground/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}