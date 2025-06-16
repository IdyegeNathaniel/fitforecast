import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"]
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "FitForcast",
  description: "Weather forecast and appropriate fit for the weather ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${outfit.className} antialiased overflow-x-hidden dark scrollbar-thin scrollbar-track-nature-green scrollbar-thumb-nature-green`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
