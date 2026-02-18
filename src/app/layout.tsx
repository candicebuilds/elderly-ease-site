import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elderly Ease - Compassionate Care Support for Seniors",
  description: "Reliable, non-personal care assistance for elderly individuals. From daily tasks to companionship. Because asking for help should feel easy.",
  keywords: "elderly care, senior support, home assistance, elderly services, aged care",
  openGraph: {
    title: "Elderly Ease - Compassionate Care Support",
    description: "Reliable support for elderly individuals with dignity and connection",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
