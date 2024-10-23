// layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow"; 

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
  description: "Experience the rich flavors of authentic Ethiopian coffee with Sheba Coffee. Sourced from the finest coffee-growing regions in Ethiopia, our premium coffee beans offer a unique and unforgettable taste. Order your coffee today!",
  keywords:["ethiopian coffees","queen sheba","roasted coffee","Queen of Sheba coffee","Ethiopian coffee suppliers","Ethiopian coffee flavors","Freshly roasted Ethiopian coffee","Best Ethiopian coffee"],
  icons:{
    icon:["/favicon.ico?v=4"],
    apple:["/apple-touch-icon.png?v=4"],
    shortcut:["/apple-touch-icon.png"]
  },
  manifest:"/site.webmanifest",
  openGraph: {
    title: 'Sheba Coffee - Ethiopian Coffee',
    description: 'Sheba Coffee offers authentic Ethiopian coffee sourced from the finest coffee-growing regions. Experience the unique flavors of Ethiopia.',
    url: 'https://shebacoffeeethiopia.com',
    siteName: 'Sheba Coffee',
    images: [
      {
        url: '/images/logo2.jpg',
        width: 800,
        height: 600,
        alt: 'Sheba Coffee',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sheba Coffee - Ethiopian Coffee',
    description: 'Sheba Coffee offers authentic Ethiopian coffee sourced from the finest coffee-growing regions.',
    images: ['/images/logo2.jpg'],
  },
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
        <Arrow /> 
      </body>
    </html>
  );
}
