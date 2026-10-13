import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import BackToChat from "@/components/BackToChat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jing Guo — Lead Product Designer",
  description:
    "Lead Product Designer at Yelp, focused on user contribution, engagement, and community ecosystems at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} text-white antialiased`} style={{ background: "#086C66" }}>
        <Nav />
        <main>{children}</main>
        <BackToChat />
      </body>
    </html>
  );
}
