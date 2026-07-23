import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OASE CUP #1 | Mobile Legends Tournament",
    template: "%s | OASE"
  },
  description:
    "OASE CUP #1 Mini Turnamen Mobile Legends di Lapo Oase depan Terminal Porsea, Sabtu 01 Agustus 2026 pukul 10.00 WIB, total prize pool Rp2.100.000."
};

export const viewport: Viewport = {
  themeColor: "#07080c"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
