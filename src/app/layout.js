import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata = {
  title: "Troscan Clone | Next.js & Framer Motion | codewithsaidul",
  description:
    "Pixel-perfect clone of the Troscan Framer website. A frontend development showcase built with Next.js, Tailwind CSS, and Framer Motion for dynamic animations and responsiveness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} antialiased`}>{children}</body>
    </html>
  );
}
