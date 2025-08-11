export const metadata = {
  title: "فروشگاه آنلاین من",
  description: "خرید آنلاین انواع لوازم الکترونیکی با بهترین قیمت",
  keywords: ["فروشگاه", "لپ تاپ", "گوشی", "لوازم جانبی"],
  authors: [{ name: "عهدیه حیدری" }],
  openGraph: {
    title: "فروشگاه آنلاین من",
    description: "بهترین فروشگاه برای خرید لوازم الکترونیکی",
    url: "https://myshop.com",
    siteName: "فروشگاه من",

    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
