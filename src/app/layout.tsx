import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | Premium Developer Portfolio`,
  description: PERSONAL_INFO.bio,
  keywords: [
    "Fady Kaiser", ".NET Developer", "ASP.NET Core Web API",
    "React.js Developer", "Next.js Developer", "Full-Stack Developer",
    "Egypt", "Software Engineer", "Clean Architecture", "Onion Architecture"
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  openGraph: {
    title: `${PERSONAL_INFO.name} | Full-Stack .NET Developer`,
    description: PERSONAL_INFO.bio,
    type: "website",
    locale: "en_US",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#030712] text-[#f3f4f6] font-sans flex flex-col antialiased">
        {/* Glow Effects Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[150px]" />
          <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-secondary/10 blur-[100px]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.4]" />
        </div>
        
        {children}
      </body>
    </html>
  );
}