import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShipSmart – Optimize Shipping Costs Across Carriers",
  description: "Compare real-time shipping rates across UPS, FedEx, and USPS. Save up to 40% on shipping costs with smart carrier selection and package optimization."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d339fde7-2d50-48a4-9caf-f9e369d21520"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
