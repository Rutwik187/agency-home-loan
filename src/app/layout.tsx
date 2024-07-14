"use client";
import { Monda } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Monda({ weight: "400", subsets: ["vietnamese"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
