import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deep Auto Electricals — Trust On Quality since 1998",
  description: "IATF 16949 & ISO 9001 certified manufacturer of automotive wire harnesses, cables, terminals, PVC sleeves, sheet metal and moulded parts in Delhi NCR.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
