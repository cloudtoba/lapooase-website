import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lapo Oase",
    template: "%s | Lapo Oase"
  },
  description: "Lapo Oase landing page for Batak food, drinks, snacks, and warm everyday promos."
};

export const viewport: Viewport = {
  themeColor: "#11100d"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
