import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MainHeader } from "./components/MainHeader";
import { Footer } from "./components/Footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"]
});

export const metadata: Metadata = {
  title: "Ekron Frontend | Web Development Portfolio",
  description: "Xabier Remirez Portfolio: Professional web development and digital experiences for 10+ years. Blending creativity and functionality to deliver stunning digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
