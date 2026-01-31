import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import NavbarV2 from "@/components/landing-page-v2/navbar-v2";
import Footer from "@/components/landing-page-v2/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gyan Solutions",
  description: "Get your research paper done for Mtech/Phd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <NavbarV2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
