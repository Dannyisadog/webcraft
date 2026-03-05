import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelcraft.studio"),
  title: {
    default: "Web Crafting | Modern Business Websites",
    template: "%s | Web Crafting",
  },
  description:
    "Web Crafting builds fast, modern, custom websites for real businesses.",
  keywords: [
    "web development studio",
    "custom websites",
    "Next.js agency",
    "freelance web developer",
    "Web Crafting",
  ],
  openGraph: {
    title: "Web Crafting",
    description: "Custom website development for businesses by founder Danny.",
    url: "https://pixelcraft.studio",
    siteName: "Web Crafting",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} bg-(--color-bg) text-(--color-text) antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
