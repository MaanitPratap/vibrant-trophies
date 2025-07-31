import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Navigation } from "@/components/Navigation";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VibrantTrophies - Your Gaming Achievements Hub for VibrantMinds",
  description: "Track your achievements and streaks across 6 amazing games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-background text-foreground`}>
        <UserProvider>
          <Navigation />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
