"use client";

import { motion } from "framer-motion";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ServiceCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="glass-card p-8 text-center group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
        <i className={`fas ${icon.iconName} text-2xl text-white`}></i>
      </div>
      <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/60 leading-relaxed">{description}</p>
    </motion.div>
  );
}