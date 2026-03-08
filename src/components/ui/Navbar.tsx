"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();

  const navLinks = [
    { href: "/", label: language === "zh" ? "首頁" : "Home" },
    { href: "/projects", label: language === "zh" ? "作品" : "Work" },
    { href: "/services", label: language === "zh" ? "服務" : "Services" },
    { href: "/about", label: language === "zh" ? "關於" : "About" },
    { href: "/contact", label: language === "zh" ? "聯絡" : "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [pathname, language]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
    >
      <div className="container-portfolio flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center">
            <i className="fas fa-code text-white"></i>
          </div>
          <span className="font-display text-xl font-bold">
            Web<span className="gradient-text">Craft</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.href ? "text-indigo-500" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div 
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" 
                  layoutId="nav-indicator" 
                />
              )}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <button 
            className="w-10 h-10 rounded-lg glass-card flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden absolute top-full left-0 right-0 glass-panel border-t-0"
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="container-portfolio flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    pathname === link.href ? "bg-indigo-500/10 text-indigo-500" : "hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}