"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-portfolio">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-4xl font-bold mb-6">Get in Touch</h1>
          <div className="glass-panel p-8 max-w-xl">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/20 focus:border-indigo-500 focus:outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/20 focus:border-indigo-500 focus:outline-none" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-background border border-foreground/20 focus:border-indigo-500 focus:outline-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}