import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "بلک‌دایس | فروشگاه بردگیم و بازی فکری",
  description: "فروشگاه آنلاین بردگیم و بازی های فکری ایرانی و خارجی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={vazirmatn.className + " bg-base-100"}>
        {children}

        <Footer className="mt-5" />
      </body>
    </html>
  );
}
