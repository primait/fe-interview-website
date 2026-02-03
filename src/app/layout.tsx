import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { Header } from "@/components/Header/Header";

const googleSans = Google_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Engineer — Website",
  description: "Web site created using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={googleSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
