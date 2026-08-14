import type { Metadata, Viewport } from "next";
import { Abhaya_Libre, Work_Sans } from "next/font/google";
import "./globals.css";

// Display face — used for headings and editorial moments (quotes, big stats)
const abhayaLibre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-abhaya",
  display: "swap",
});

// Body/UI face — nav, buttons, captions, paragraph copy, and the
// "Ada Psychiatry" logotype (confirmed Work Sans SemiBold in the Figma file)
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ada Psychiatry | Compassionate Mental Health Care",
  description:
    "Ada Psychiatry offers in-person and virtual psychiatric care — psychiatric evaluation, medication management, therapy, MAT, and more.",
  keywords: [
    "psychiatry",
    "mental health",
    "psychiatric care",
    "virtual appointments",
    "medication management",
    "depression treatment",
    "anxiety treatment",
    "ADHD treatment",
    "bipolar disorder",
    "addiction recovery",
    "weight loss management",
  ],
  metadataBase: new URL("https://adapsychiatry.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adapsychiatry.com",
    siteName: "Ada Psychiatry",
    title: "Ada Psychiatry | Compassionate Mental Health Care",
    description:
      "Ada Psychiatry offers in-person and virtual psychiatric care — psychiatric evaluation, medication management, therapy, MAT, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ada Psychiatry | Compassionate Mental Health Care",
    description:
      "Ada Psychiatry offers in-person and virtual psychiatric care — psychiatric evaluation, medication management, therapy, MAT, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${abhayaLibre.variable} ${workSans.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
