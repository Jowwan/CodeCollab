import { Geist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "CodeCollab",
  description:
    "CodeCollab: Connect, Collaborate, Create. Live chat with fellow developers and showcase your projects online. Build your network, share your work, and find inspiration in a community designed for coders. Join CodeCollab today!",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/codecollab.png" sizes="any" />
      </head>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col items-center bg-gradient-to-t from-blue-200 to-cyan-800">
            <Nav />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
