import { Nunito } from "next/font/google";
import "@/styles/globals.css";
import baseMetaData from "@/lib/baseMetaData";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = baseMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${nunito.className} ${nunito.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
