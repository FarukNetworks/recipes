import { Bree_Serif, Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";
import Header from "./components/Header";

const breeSerif = Bree_Serif({ subsets: ["latin"], weight: ["400"], display: "swap", variable: "--font-bree" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"], display:"swap", variable: "--font-roboto" });

export const metadata = {
  title: "Recipes",
  description: "Website with various cooking recepies",
};


export default function RootLayout({ children }) {
  

  return (
    <ClerkProvider>
    <html lang="en" className={`${breeSerif.variable} ${roboto.variable} font-sans`}>
      <body>
      <Header />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
    </ClerkProvider>
  );
}