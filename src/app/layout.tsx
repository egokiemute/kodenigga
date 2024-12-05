import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: "--font-sans"});
const calistoga = Calistoga({ subsets: ['latin'], variable: "--font-serif", weight: ["400"]});

export const metadata: Metadata = {
  title: "A software developer",
  description: "Crafting websites that are beautiful, compelling & performant for disruptive startups and creators.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-white/30 text-gray-900 antialiased font-sans")}>{children}</body>
    </html>
  );
}
