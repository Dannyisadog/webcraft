import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-display" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "WebCraft | 網站設計與開發",
  description: "打造現代化的網站體驗，結合創意設計與優質程式碼。",
  keywords: ["網站開發", "作品集", "自由工作者", "React", "Next.js"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} min-h-screen bg-gradient-mesh`}>
        <AntdRegistry>
          <ThemeProvider>
            <LanguageProvider>
              <Navbar />
              {children}
            </LanguageProvider>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}