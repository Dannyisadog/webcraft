import {
  faArrowRight,
  faBolt,
  faChartLine,
  faCode,
  faCompassDrafting,
  faGaugeHigh,
  faLaptopCode,
  faMagnifyingGlassChart,
  faObjectGroup,
  faPaperPlane,
  faPenRuler,
  faRocket,
  faScrewdriverWrench,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { LocalizedText } from "@/lib/i18n";

export type ProjectCategory =
  | "Corporate"
  | "Restaurant"
  | "Portfolio"
  | "Event"
  | "Landing Page";

export type Project = {
  slug: string;
  name: LocalizedText;
  industry: LocalizedText;
  category: ProjectCategory;
  description: LocalizedText;
  technologies: string[];
  liveDemo: string;
  image: string;
  problemSolved: LocalizedText;
  keyFeatures: LocalizedText[];
  screenshots: string[];
  featured?: boolean;
};

export type Service = {
  title: LocalizedText;
  icon: IconDefinition;
  description: LocalizedText;
  process: LocalizedText;
  deliverables: LocalizedText[];
};

export type Testimonial = {
  name: string;
  role: LocalizedText;
  company: string;
  quote: LocalizedText;
};

export const navLinks = [
  { href: "/", label: { en: "Home", zh: "首頁" } },
  { href: "/projects", label: { en: "Projects", zh: "作品" } },
  { href: "/services", label: { en: "Services", zh: "服務" } },
  { href: "/about", label: { en: "About", zh: "關於" } },
  { href: "/contact", label: { en: "Contact", zh: "聯絡" } },
];

export const projectCategories: ProjectCategory[] = [
  "Corporate",
  "Restaurant",
  "Portfolio",
  "Event",
  "Landing Page",
];

export const projectCategoryLabels: Record<ProjectCategory, LocalizedText> = {
  Corporate: { en: "Corporate", zh: "企業網站" },
  Restaurant: { en: "Restaurant", zh: "餐飲網站" },
  Portfolio: { en: "Portfolio", zh: "作品集網站" },
  Event: { en: "Event", zh: "活動網站" },
  "Landing Page": { en: "Landing Page", zh: "著陸頁" },
};

export const projects: Project[] = [
  {
    slug: "northbridge-corporate-site",
    name: {
      en: "Northbridge Corporate Website",
      zh: "Northbridge 企業形象網站",
    },
    industry: { en: "Business Consulting", zh: "商業顧問" },
    category: "Corporate",
    description: {
      en: "A conversion-focused corporate website with clear service architecture, trust indicators, and lead capture for enterprise clients.",
      zh: "以轉換為導向的企業網站，清楚呈現服務架構、信任元素與企業客戶洽詢流程。",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveDemo: "https://webcraft-company-branding.vercel.app/",
    image: "/images/site1.png",
    problemSolved: {
      en: "Northbridge had an outdated site with unclear messaging and weak lead generation. The new platform clarified positioning and improved the inquiry flow.",
      zh: "Northbridge 舊站資訊混亂且名單轉換低，新網站重新梳理定位並優化詢問流程。",
    },
    keyFeatures: [
      { en: "Responsive design", zh: "響應式版型" },
      { en: "SEO optimization", zh: "SEO 優化" },
      { en: "Fast page load", zh: "快速載入" },
      { en: "Modular CMS-ready layout", zh: "模組化且可串 CMS" },
    ],
    screenshots: [
      "/images/project-corporate.svg",
      "/images/project-corporate-dashboard.svg",
    ],
    featured: true,
  },
  {
    slug: "olive-and-oak-restaurant",
    name: { en: "Olive & Oak Restaurant Site", zh: "Olive & Oak 餐廳官網" },
    industry: { en: "Hospitality", zh: "餐旅業" },
    category: "Restaurant",
    description: {
      en: "An elegant restaurant website featuring digital menus, reservation pathways, and story-driven visuals to increase bookings.",
      zh: "優雅的餐廳網站，整合線上菜單、訂位流程與品牌故事，提升訂位轉換。",
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveDemo: "https://webcraft-restaurant-site.vercel.app/",
    image: "/images/site2.png",
    problemSolved: {
      en: "The restaurant relied on social media only. We built a branded destination for menus, events, and online reservations.",
      zh: "餐廳過度依賴社群曝光，我們打造可承接菜單、活動與訂位的品牌官網。",
    },
    keyFeatures: [
      { en: "Menu sections with dietary tags", zh: "菜單分類與飲食標籤" },
      { en: "Mobile-first reservation flow", zh: "手機優先訂位流程" },
      { en: "Performance-focused image loading", zh: "高效圖片載入" },
      { en: "Integrated event promotions", zh: "活動宣傳整合" },
    ],
    screenshots: [
      "/images/project-restaurant.svg",
      "/images/project-restaurant-menu.svg",
    ],
    featured: true,
  },
  {
    slug: "atelier-nova-designer-portfolio",
    name: { en: "Atelier Nova Portfolio", zh: "Atelier Nova 設計師作品集" },
    industry: { en: "Design", zh: "設計" },
    category: "Portfolio",
    description: {
      en: "A minimal portfolio experience with expressive typography, smooth transitions, and project storytelling for a product designer.",
      zh: "為產品設計師打造極簡作品集體驗，以字體表現、過場動效與案例敘事突出專業度。",
    },
    technologies: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS"],
    liveDemo: "https://webcraft-designer-portfolio.vercel.app/",
    image: "/images/site3.png",
    problemSolved: {
      en: "The client needed a distinct identity and better quality leads. We designed a portfolio funnel around clarity, credibility, and quick contact.",
      zh: "客戶需要更鮮明的識別與高品質詢問，我們以清楚結構與信任感建立有效轉換漏斗。",
    },
    keyFeatures: [
      { en: "Case study-centric structure", zh: "案例導向結構" },
      { en: "Dynamic project highlights", zh: "動態作品亮點" },
      { en: "Accessibility-aware color contrast", zh: "無障礙對比設計" },
      { en: "Interactive prototype embeds", zh: "互動原型嵌入" },
    ],
    screenshots: [
      "/images/project-portfolio.svg",
      "/images/project-portfolio-gallery.svg",
    ],
    featured: true,
  },
  {
    slug: "city-tech-summit-registration",
    name: {
      en: "City Tech Summit Event Website",
      zh: "City Tech Summit 活動官網",
    },
    industry: { en: "Events", zh: "活動產業" },
    category: "Event",
    description: {
      en: "A high-traffic event site with speaker pages, ticket tiers, schedule browsing, and sponsor visibility for a regional tech summit.",
      zh: "高流量活動網站，整合講者頁、票價方案、議程瀏覽與贊助曝光。",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveDemo: "https://webcraft-event-register.vercel.app/",
    image: "/images/site4.png",
    problemSolved: {
      en: "The organizers needed to unify schedule, ticketing, and sponsor exposure while handling traffic peaks near launch.",
      zh: "主辦方需要在上線高峰時，同步管理議程、售票與贊助曝光。",
    },
    keyFeatures: [
      { en: "Real-time agenda sections", zh: "即時議程區塊" },
      { en: "Structured ticket conversion pages", zh: "票券轉換頁設計" },
      { en: "Sponsor showcase modules", zh: "贊助商展示模組" },
      { en: "Scalable component architecture", zh: "可擴充元件架構" },
    ],
    screenshots: [
      "/images/project-event.svg",
      "/images/project-event-schedule.svg",
    ],
  },
];

export const services: Service[] = [
  {
    title: { en: "Website Design", zh: "網站設計" },
    icon: faPenRuler,
    description: {
      en: "We design business websites that align brand identity with clear, outcome-focused user journeys.",
      zh: "設計兼顧品牌識別與商業目標的網站，讓使用者旅程更清晰。",
    },
    process: {
      en: "Discovery workshop, visual direction, wireframes, and high-fidelity UI approval.",
      zh: "需求探索、視覺方向、線框規劃與高擬真 UI 確認。",
    },
    deliverables: [
      { en: "Homepage + core page mockups", zh: "首頁與核心頁面設計稿" },
      { en: "Design system foundations", zh: "設計系統基礎" },
      { en: "Responsive layout specs", zh: "響應式版型規格" },
    ],
  },
  {
    title: { en: "Frontend Development", zh: "前端開發" },
    icon: faCode,
    description: {
      en: "Production-grade frontend implementation using modern React and Next.js architecture.",
      zh: "以 React 與 Next.js 打造可上線的高品質前端架構。",
    },
    process: {
      en: "Component planning, iterative build sprints, QA, and deployment handoff.",
      zh: "元件規劃、迭代開發、QA 驗證與部署交付。",
    },
    deliverables: [
      { en: "Reusable component library", zh: "可重用元件庫" },
      { en: "App Router page templates", zh: "App Router 頁面模板" },
      { en: "Performance-tuned frontend", zh: "效能優化前端" },
    ],
  },
  {
    title: { en: "UI/UX Implementation", zh: "UI/UX 實作" },
    icon: faObjectGroup,
    description: {
      en: "We transform approved visuals into polished, accessible, and intuitive digital experiences.",
      zh: "將設計稿落地為細緻、易用且符合無障礙的實際體驗。",
    },
    process: {
      en: "Interaction mapping, accessibility pass, responsive refinement, and usability tuning.",
      zh: "互動流程規劃、無障礙檢查、響應式調整與可用性優化。",
    },
    deliverables: [
      { en: "Interactive UI states", zh: "互動 UI 狀態" },
      { en: "Accessible form patterns", zh: "無障礙表單模式" },
      { en: "Mobile and desktop optimization", zh: "桌機與手機體驗優化" },
    ],
  },
  {
    title: { en: "Landing Page Development", zh: "著陸頁開發" },
    icon: faRocket,
    description: {
      en: "High-impact landing pages built for launches, ads, and campaign conversions.",
      zh: "為產品上線與行銷活動打造高轉換著陸頁。",
    },
    process: {
      en: "Offer architecture, copy hierarchy, rapid build, and conversion testing support.",
      zh: "主張架構、文案層級、快速開發與轉換測試支援。",
    },
    deliverables: [
      { en: "Campaign-specific page", zh: "活動專屬頁面" },
      { en: "Lead capture integration", zh: "名單收集整合" },
      { en: "Analytics event setup", zh: "分析事件設定" },
    ],
  },
  {
    title: { en: "Website Optimization", zh: "網站優化" },
    icon: faMagnifyingGlassChart,
    description: {
      en: "Technical and UX improvements that increase speed, discoverability, and conversion quality.",
      zh: "透過技術與體驗優化，提升速度、可見度與轉換品質。",
    },
    process: {
      en: "Audit baseline metrics, prioritize opportunities, implement fixes, and report gains.",
      zh: "盤點指標、排序優先級、執行改善並追蹤成效。",
    },
    deliverables: [
      { en: "Core Web Vitals improvements", zh: "Core Web Vitals 改善" },
      { en: "SEO technical enhancements", zh: "SEO 技術優化" },
      { en: "Conversion flow recommendations", zh: "轉換流程建議" },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Maya Chen",
    role: { en: "Marketing Director", zh: "行銷總監" },
    company: "Northbridge Consulting",
    quote: {
      en: "Web Crafting translated our complex services into a site that feels premium and converts consistently. The process was sharp and collaborative.",
      zh: "Web Crafting 把我們複雜的服務內容清楚轉化成高質感網站，轉換效果穩定，合作流程也非常順暢。",
    },
  },
  {
    name: "Leo Martinez",
    role: { en: "Founder", zh: "創辦人" },
    company: "Olive & Oak",
    quote: {
      en: "Reservations increased within weeks. The new site captures our brand perfectly and makes it easy for guests to take action.",
      zh: "新站上線幾週後訂位就明顯成長，品牌調性也被完整呈現，顧客更容易完成行動。",
    },
  },
  {
    name: "Aisha Rahman",
    role: { en: "Product Lead", zh: "產品負責人" },
    company: "Lumina",
    quote: {
      en: "Danny delivered a landing page that improved paid campaign ROI and gave us a scalable base for future launches.",
      zh: "Danny 打造的著陸頁提升了投放 ROI，也讓我們後續上線活動有可延伸的基礎。",
    },
  },
];

export const aboutHighlights = [
  {
    title: { en: "Founder-led execution", zh: "創辦人親自執行" },
    description: {
      en: "Danny works directly with every client, balancing strategy, design detail, and development quality.",
      zh: "Danny 直接與每位客戶合作，兼顧策略、設計細節與開發品質。",
    },
    icon: faCompassDrafting,
  },
  {
    title: { en: "Business-first frontend", zh: "商業導向前端" },
    description: {
      en: "Every page is crafted to support measurable goals: leads, bookings, and stronger digital credibility.",
      zh: "每一頁都圍繞可衡量目標打造：名單、預約與品牌信任。",
    },
    icon: faBolt,
  },
  {
    title: { en: "Future-ready architecture", zh: "可擴充架構" },
    description: {
      en: "Projects are built with reusable patterns so your site can scale as your business grows.",
      zh: "以可重用模式建置，讓網站能隨業務成長持續擴充。",
    },
    icon: faScrewdriverWrench,
  },
];

export const technologyStack = [
  { name: { en: "Next.js", zh: "Next.js" }, icon: faWandMagicSparkles },
  { name: { en: "React", zh: "React" }, icon: faCode },
  { name: { en: "Tailwind CSS", zh: "Tailwind CSS" }, icon: faArrowRight },
  { name: { en: "TypeScript", zh: "TypeScript" }, icon: faPaperPlane },
];
