import type { Metadata } from "next";
import "./reset.css";
import "./globals.css";
import type { ReactNode } from "react";
import { Header } from "@/components/Header/Header";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <title>Frontend Engineer — Website</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
