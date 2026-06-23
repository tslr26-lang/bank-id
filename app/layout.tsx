import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "תעודת זהות בנקאית — כך תדעו אם הבנק גובה מכם עמלות",
  description:
    "מדריך מהיר ופשוט: כך תוציאו תעודת זהות בנקאית ותבדקו אם הבנק גובה מכם עמלות — ומה לעשות אם כן.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
