import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import AppWrapper from "../components/AppWrapper";
import Script from "next/script";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TLR Video Downloader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppWrapper >
        {children}
      </AppWrapper>
    
        </body>
    </html>
  );
}
