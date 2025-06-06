import BackToTopButton from "@/components/layout/back-to-top-button/back-to-top-button";
import Header from "@/components/layout/header/header";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-root">
      <body
        className={`theme-wrapper ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
