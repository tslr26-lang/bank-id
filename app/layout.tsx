import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "תעודת זהות בנקאית — כך תדעו אם הבנק גובה מכם עמלות",
  description:
    "מדריך מהיר ופשוט: כך תוציאו תעודת זהות בנקאית ותבדקו אם אתם משלמים עמלות לבנק — ומה לעשות אם כן.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={assistant.className}>{children}</body>
    </html>
  );
}
