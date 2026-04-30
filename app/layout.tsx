import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "2030 Manifesto — The Human Premium",
  description:
    "A vision for design in 2030: from execution to curating vibes. Human-in-the-loop judgment as the premium.",
  openGraph: {
    title: "2030 Manifesto — The Human Premium",
    description:
      "Design shifts from technician to Vibe Director. Context and resonance define the Human Premium.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans min-h-screen overflow-x-hidden">
        <a
          href="#main"
          className="skip-link focus-ring sr-only rounded-md bg-ink text-sm text-frost"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
