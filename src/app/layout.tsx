import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import Header from "@/components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carpathian travel",
  description:
    "We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/images/ogp/ogp.jpg" />
      </Head>
      <body className={`${inter.className} text-primary-text-color`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
