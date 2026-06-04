import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sadik Ali | Senior Frontend Developer",
  description: "Portfolio of Sadik Ali, a Senior Frontend Developer specializing in React.js, Next.js, TypeScript, and Flutter.",
  keywords: ["Sadik Ali", "Frontend Developer", "React", "Next.js", "Portfolio"],
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
