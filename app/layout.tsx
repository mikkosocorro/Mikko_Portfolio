import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mikko Socorro | BSIT 2nd Year Student",
    template: "%s | Mikko Socorro",
  },
  description:
    "Portfolio of Mikko Socorro, a BSIT 2nd year student building ideas, learning today, and creating a better tomorrow.",
};

export const viewport: Viewport = {
  themeColor: "#05070d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen bg-ink font-sans text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
