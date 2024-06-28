import type { Metadata } from "next";
import { Inter } from "next/font/google";
import favicon from "@/../public/assets/favicon.ico"
import faviconn from "./../../public/assets/favicon.ico"
import { Poppins } from "next/font/google";
import ".././globals.css";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import { Toaster } from "react-hot-toast";
import AuthProvider from './../../context/AuthProvider';
const poppins = Poppins({ weight: ["300", "400","500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Designity",
  description:
    "Streamline outsourcing & find elite tech talent in India. Teamify simplifies staffing & project-based solutions. Save time & money, focus on what matters.",
  authors: [{ name: "Kushagra Rai" }],
  keywords: [
    "India outsourcing",
    "tech talent outsourcing",
    "staff augmentation",
    "project-based outsourcing",
    "developers India",
    "offshore development India",
    "Teamify",
    "IT outsourcing India",
    "remote tech teams",
  ],
  openGraph: {
    title:"Unleash Your Project's Potential: Expert Tech Teams with Teamify (India)",
    description:"Streamline outsourcing & find elite tech talent in India. Teamify simplifies staffing & project-based solutions. Save time & money, focus on what matters."
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <AuthProvider>
      <body className={poppins.className}>
      <Toaster
  position="bottom-left"
  reverseOrder={false}
/>
        <Header />
        {children}
        <Footer/>
      </body>
  </AuthProvider>
    </html>
  );
}
