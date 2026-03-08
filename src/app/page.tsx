"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/studio-data";
import { useLanguage } from "@/context/LanguageContext";
import ServiceCard from "@/components/ui/ServiceCard";
import { 
  faLaptopCode, 
  faPaintBrush, 
  faMobile, 
  faBullhorn,
  faChartLine,
  faServer
} from "@fortawesome/free-solid-svg-icons";

const services = [
  { icon: faLaptopCode, title: "Web Development", titleZh: "網頁開發", description: "Custom websites built with modern technologies like Next.js, React, and TypeScript.", descriptionZh: "使用 Next.js、React 和 TypeScript 等現代技術打造客製化網站。" },
  { icon: faPaintBrush, title: "UI/UX Design", titleZh: "UI/UX 設計", description: "Beautiful, intuitive interfaces that engage users and drive conversions.", descriptionZh: "美觀、直觀的介面，吸引用戶並提高轉換率。" },
  { icon: faMobile, title: "Responsive Design", titleZh: "響應式設計", description: "Mobile-first websites that look great on all devices.", descriptionZh: "行動優先的網站，在各種設備上都能呈現最佳效果。" },
  { icon: faBullhorn, title: "Landing Pages", titleZh: "到達頁面", description: "High-converting landing pages for your marketing campaigns.", descriptionZh: "為您的行銷活動打造高轉換率的到達頁面。" },
  { icon: faChartLine, title: "Consulting", titleZh: "顧問諮詢", description: "Technical advice to help you make better digital decisions.", descriptionZh: "技術建議，幫助您做出更好的數位決策。" },
  { icon: faServer, title: "Deployment", titleZh: "部署上線", description: "Fast, secure deployment to Vercel, Netlify, or your preferred host.", descriptionZh: "快速、安全地部署到 Vercel、Netlify 或您偏好的主機。" },
];

const projectImages: Record<string, string> = {
  "aurelia-fine-dining": "/images/aurelia.png",
  "iron-forge-gym": "/images/ironforge.png",
  "velocity-athletics": "/images/velocity.png",
  "soundwave-studio": "/images/soundwave.png",
  "northbridge-corporate-site": "/images/site1.png",
  "olive-and-oak-restaurant": "/images/site2.png",
  "atelier-nova-designer-portfolio": "/images/site3.png",
  "city-tech-summit-registration": "/images/site4.png",
  "la-tavola-italiana": "/images/site5.png",
  "green-garden-vege-restaurant": "/images/greenroots.png",
};

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container-portfolio relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                {language === "zh" ? "可接受專案" : "Available for projects"}
              </span>
            </motion.div>

            <motion.h1 
              className="font-display text-5xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {language === "zh" ? "打造現代化" : "Building Modern"}
              <br />
              <span className="gradient-text">{language === "zh" ? "網站體驗" : "Web Experiences"}</span>
            </motion.h1>

            <motion.p 
              className="text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {language === "zh" 
                ? "為您打造美觀、互動性強且高效能的網站，幫助企業在數位世界中脫穎而出。"
                : "I craft beautiful, interactive, and performant websites that help businesses stand out in the digital world."}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="/projects" className="btn-primary">
                <i className="fas fa-briefcase mr-2"></i>
                {language === "zh" ? "查看作品" : "View Work"}
              </a>
              <a href="/contact" className="btn-outline">
                <i className="fas fa-paper-plane mr-2"></i>
                {language === "zh" ? "聯絡我" : "Get in Touch"}
              </a>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-12 mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { number: "50+", label: language === "zh" ? "專案" : "Projects" },
                { number: "5+", label: language === "zh" ? "年經驗" : "Years" },
                { number: "100%", label: language === "zh" ? "滿意度" : "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold gradient-text">{stat.number}</p>
                  <p className="text-sm text-foreground/50">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-muted/30">
        <div className="container-portfolio">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <p className="text-indigo-500 text-sm uppercase tracking-widest mb-2">
              {language === "zh" ? "近期作品" : "Recent Work"}
            </p>
            <h2 className="font-display text-4xl font-bold">
              {language === "zh" ? "精選專案" : "Featured Projects"}
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.slug}
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-0 overflow-hidden group cursor-pointer block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={projectImages[project.slug] || "/images/site1.png"} 
                    alt={project.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-indigo-500 transition-colors">
                    {project.name[language]}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3 line-clamp-2">
                    {project.description[language]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/projects" className="btn-outline">
              {language === "zh" ? "查看全部專案" : "View All Projects"} <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container-portfolio">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <p className="text-indigo-500 text-sm uppercase tracking-widest mb-2">
              {language === "zh" ? "專長領域" : "What I Do"}
            </p>
            <h2 className="font-display text-4xl font-bold">
              {language === "zh" ? "服務項目" : "Services"}
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                icon={service.icon}
                title={language === "zh" ? service.titleZh : service.title}
                description={language === "zh" ? service.descriptionZh : service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container-portfolio">
          <motion.div 
            className="glass-panel p-12 lg:p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              {language === "zh" ? "準備好打造驚人的網站了嗎？" : "Ready to Build Something Amazing?"}
            </h2>
            <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
              {language === "zh" 
                ? "讓我們討論您的專案，打造一個能幫助您業務成長的網站。"
                : "Let's discuss your project and create something that will help your business grow."}
            </p>
            <a href="/contact" className="btn-primary">
              <i className="fas fa-paper-plane mr-2"></i>
              {language === "zh" ? "開始專案" : "Start a Project"}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}