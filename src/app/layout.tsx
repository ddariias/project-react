import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MoviesPage from "@/containers/MoviesPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

      <MoviesPage/>

      {children}

      </body>
    </html>
  );
}
