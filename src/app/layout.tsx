import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import localFont from "next/font/local";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const gagalin = localFont({
  src: "./Gagalin-Regular.otf",
  display: "swap",
  variable: "--font-gagalin",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Namaste-Websites",
  description:
    "Namaste-Websites - building Websites for your healthcare business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className} ${gagalin.variable}`}>
      <body>
        <Navbar />
        <div className="max-w-7xl xl:mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
