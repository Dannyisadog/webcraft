"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Framer Motion", level: 85 },
  { name: "Node.js", level: 80 },
];

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-portfolio">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-panel p-2">
              <img 
                src="/images/founder.jpg" 
                alt="Founder"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-6 -right-6 glass-card p-4 hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-3xl font-bold gradient-text">5+</p>
              <p className="text-xs text-foreground/60">{language === "zh" ? "年經驗" : "Years Experience"}</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <p className="text-indigo-500 text-sm uppercase tracking-widest mb-2">
                {language === "zh" ? "關於我" : "About Me"}
              </p>
              <h1 className="font-display text-4xl font-bold mb-4">
                {language === "zh" ? "網頁開發者" : "Web Developer"}
              </h1>
              <p className="text-foreground/70 leading-relaxed">
                {language === "zh"
                  ? "我是一位熱愛創造美好網頁體驗的開發者。從 2019 年開始投入網頁開發，專精於 React、Next.js 和現代前端技術。我相信好的網站不僅要美觀，更要能幫助企業達成商業目標。"
                  : "I'm a developer passionate about creating beautiful web experiences. Since 2019, I've been working with React, Next.js, and modern frontend technologies. I believe great websites should not only look good but also help businesses achieve their goals."}
              </p>
              <p className="text-foreground/70 leading-relaxed mt-4">
                {language === "zh"
                  ? "我的使命是幫助企業打造現代化、高效能且具有設計感的網站，讓他們在數位世界中脫穎而出。"
                  : "My mission is to help businesses create modern, performant, and beautifully designed websites that stand out in the digital world."}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="font-display text-xl font-semibold mb-4">
                {language === "zh" ? "技術技能" : "Skills"}
              </h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "50+", label: language === "zh" ? "專案" : "Projects" },
                { number: "30+", label: language === "zh" ? "客戶" : "Clients" },
                { number: "100%", label: language === "zh" ? "滿意度" : "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <p className="font-display text-2xl font-bold gradient-text">{stat.number}</p>
                  <p className="text-xs text-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}