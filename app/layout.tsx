import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ['400', '700', '900'],
  subsets: ["latin", "cyrillic"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Arab tilini bepul o'rganing",
  description: "Arab tilini Qur'oni Karim bilan oson va tez o'rganing. Zamonaviy uslubda arab tili va arabcha suhbatlashishni o'rganing.",
  keywords: ["Arab tili", "Arab tili kursi", "Bepul arab tili", "Qur'on tili", "Arabcha o'rganish"],
  authors: [{ name: "Arab Tili Kursi" }],
  openGraph: {
    title: "Arab tilini bepul o'rganing",
    description: "Arab tilini Qur'oni Karim bilan oson va tez o'rganing",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={montserrat.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
