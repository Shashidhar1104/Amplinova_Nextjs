import "./globals.css";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
        {children}
        {/* <Chatbot /> */}
        <SpeedInsights />
      </body>
    </html>
  );
}