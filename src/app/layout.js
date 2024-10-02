import localFont from "next/font/local";
import "./globals.css";

const calibreRegular = localFont({
  src: "../../public/fonts/test-calibre-regular.woff2",
  variable: "--font-calibre-regular",
  weight: "100 900",
});

export const metadata = {
  title: 'The Casper - Affordable Mattress for Every Budget | Casper',
  icons: '/favicon.ico',
  description:
    'Find the perfect mattress for your needs and budget with The Casper, an affordable option to get Casper comfort at a cozy price.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${calibreRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
