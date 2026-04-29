import type { Metadata, Viewport } from "next";
import { Raleway, Kumbh_Sans } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbh", 
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Audire School of Commerce | Expert Coaching for CA, CMA, ACCA",
  description: "Transformative learning experience for commerce students. Trusted by 5000+ students for CA, CMA, and ACCA coaching.",
  keywords: ["CA coaching", "CMA coaching", "ACCA coaching", "commerce education", "Audire School of Commerce"],
  authors: [{ name: "Audire" }],
  icons: {
    icon: "/logo1.png",
    apple: "/logo1.png",
  },
  openGraph: {
    title: "Audire School of Commerce",
    description: "Expert coaching for professional commerce courses.",
    url: "https://audire.edu",
    siteName: "Audire",
    locale: "en_US",
    type: "website",
  },
};

import { MotionProvider } from "@/src/components/ui/motion/MotionProvider";
import { SmoothScroll } from "@/src/components/ui/motion/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${kumbhSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <MotionProvider>
            {children}
          </MotionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
