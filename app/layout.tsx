import "./globals.css";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Chatbot from "./components/Chatbot";

export const metadata = {
  title: "Amplinova",
  description: "Amplinova - IT & Digital Marketing Solutions",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />

        {children}

        <Footer />

        {/* <Chatbot /> */}
        <SpeedInsights />
      </body>
    </html>
  );
}