import { League_Spartan } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
})

export const metadata = {
  title: "FanPit",
  description: "Join SpoilerSphere to share fan theories, reveal spoilers responsibly, and connect with fellow enthusiasts—all in one secure, fun hub. Sign up now and dive into the conversation!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${leagueSpartan.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
