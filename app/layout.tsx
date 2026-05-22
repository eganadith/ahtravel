import { LOGO } from "@/lib/constants";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@/styles/globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahtraveltourism.com"),
  icons: {
    icon: [{ url: LOGO.onLight.src, type: "image/png" }],
    apple: LOGO.onLight.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${lato.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
