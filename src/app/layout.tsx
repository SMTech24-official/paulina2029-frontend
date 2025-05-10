import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUiProvider } from "@/lib/providers/NextUIProvider";

import ScrollToTopButton from "@/components/ui/ScrollToTopButton/ScrollToTopButton";
import Footer from "@/components/shared/Footer/Footer";

import { Toaster } from "sonner";
import Navbar from "@/components/shared/Navbar/Navbar";
import ReduxProvider from "@/redux/Provider";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "",
  description:
    "Award Winning Service For London Gutter Cleaning, Repairs & Replacement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable} antialiased`}
      >
        <NextUiProvider>
          <ReduxProvider>
            <>
              <Toaster />
              <Navbar />
              {children}

              <Footer />
              <ScrollToTopButton />
            </>
          </ReduxProvider>
        </NextUiProvider>
      </body>
    </html>
  );
}
