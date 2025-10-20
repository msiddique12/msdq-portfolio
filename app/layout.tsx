import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Siddique | AI Engineer & Developer",
  description: "CS student at UT Dallas building AI systems. Shipped ML tools at Amazon AGI, won a major hackathon sponsored by AWS, NVIDIA, and Anthropic. Exploring the intersection of AI and practical software.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="py-10 overflow-x-clip">{children}</main>
      </body>
    </html>
  );
}
