import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Trusty Rusty | Sacramento's Trusted Handyman — Assembly, Repairs, Electrical & More",
  description:
    "Need a reliable handyman in Sacramento? Trusty Rusty offers furniture assembly, TV mounting, minor electrical & plumbing, painting, and more. 5.0 rated Top Pro on Thumbtack. Fast response, fair pricing. Call (279) 799-6872",
  openGraph: {
    title: "Trusty Rusty | Sacramento's Trusted Handyman",
    description:
      "Assembly, repairs, electrical, plumbing, painting & more. 5.0 rated Top Pro on Thumbtack. Call (279) 799-6872",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${dmSans.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
