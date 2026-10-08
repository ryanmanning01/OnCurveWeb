import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ONCurve — Real Progress. Real Perspective.",
  description:
    "See your GLP-1 weight-loss progress in context with published clinical trial data.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
