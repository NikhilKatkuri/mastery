import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { baseMetadata, viewPort } from "@/lib/baseMetaData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = baseMetadata;
export const viewport = viewPort;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} ${inter.variable} scrollbar-hide text-foreground  h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
