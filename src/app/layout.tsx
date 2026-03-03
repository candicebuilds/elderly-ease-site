import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elderly Ease | Compassionate Senior Care in Edenvale",
  description: "Reliable, heart-centered support for seniors in Edenvale and surrounds. We make asking for help feel easy.",
  keywords: "elderly care, senior support, home assistance, elderly services, aged care, Edenvale",
  icons: {
    icon: "https://cdn.builder.io/api/v1/image/assets%2F9a3eb04efb63454cb996a3397cd9e84b%2Fe8ad51425c894236833a6e7a1be1da4b?width=100&height=100",
  },
  openGraph: {
    title: "Elderly Ease | Compassionate Senior Care in Edenvale",
    description: "Reliable, heart-centered support for seniors in Edenvale and surrounds. We make asking for help feel easy.",
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
