// app/layout.jsx
import "./globals.css";
import { Inter, League_Spartan } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "QW̄N | Qaw̄amūn.com",
  description: "QW̄N — Qaw̄amūn. Forged by FAITH. Driven by DUTY. Hardened by HONOR.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL("https://qawamun.com"),
  openGraph: {
    title: "QW̄N — Qaw̄amūn",
    description: "Forged by FAITH. Driven by DUTY. Hardened by HONOR.",
    url: "https://qawamun.com",
    siteName: "QW̄N | Qaw̄amūn.com",
    images: ["/images/qwnlogo_black_transp.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QW̄N — Qaw̄amūn",
    description: "Forged by FAITH. Driven by DUTY. Hardened by HONOR.",
    images: ["/images/qwnlogo_black_transp.png"],
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const league = League_Spartan({ subsets: ["latin"], variable: "--font-league", display: "swap" });




export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${league.variable}`}>
      <body className="min-h-dvh bg-qwn-carbon text-neutral-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
