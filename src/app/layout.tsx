// layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow"; // Import the Arrow component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    absolute:"",
    default:"Sheba Coffee",
    template:"%s  |  Sheba Coffee"
  },
  description: "Single-origin Ethiopian coffees provider",
  keywords:["ethiopian coffees","queen sheba","roasted coffee","Queen of Sheba coffee","Ethiopian coffee suppliers","Ethiopian coffee flavors","Freshly roasted Ethiopian coffee","Best Ethiopian coffee"],
  icons:{
    icon:["/favicon.ico?v=4"],
    apple:["/apple-touch-icon.png?v=4"],
    shortcut:["/apple-touch-icon.png"]
  },
  manifest:"/site.webmanifest"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="relative z-0">{children}</main>
        <Footer />
        <Arrow /> {/* Add the Arrow component here */}
      </body>
    </html>
  );
}
