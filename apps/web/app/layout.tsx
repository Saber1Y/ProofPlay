import type { Metadata } from "next";
import Link from "next/link";
import { WalletButton } from "@/components/WalletButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proof of Play",
  description: "Somnia-powered fantasy football rooms"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="site-header">
            <Link href="/" className="brand">
              <span className="brand-badge">PoP</span>
              <span>Proof of Play</span>
            </Link>

            <div className="header-actions">
              <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/rooms">Rooms</Link>
                <Link href="/rooms/create">Create Room</Link>
              </nav>
              <WalletButton connected={false} />
            </div>
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
