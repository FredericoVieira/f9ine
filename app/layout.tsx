import { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer, Navbar } from "./components";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | F9ine",
    default: "F9ine",
  },
  description: "Portfolio and blog of Frederico Vieira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <main className="mb-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
