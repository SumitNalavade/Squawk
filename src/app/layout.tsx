import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Squawk",
  description: "Create custom AI agents trained on your content. Add them to your site. No coding required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
