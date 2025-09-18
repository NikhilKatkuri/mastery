import { Nunito } from "next/font/google";
import "@/styles/globals.css";
import { baseMetadata, viewPort } from "@/lib/baseMetaData";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
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
      <body className={` ${nunito.className} ${nunito.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
