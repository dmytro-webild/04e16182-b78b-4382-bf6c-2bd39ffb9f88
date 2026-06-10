import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'BeyondLove - Professional Matching & Dating Service HK',
  description: 'Find your ideal partner with BeyondLove\'s personalized one-to-one matchmaking and expert relationship coaching in Hong Kong. Your journey to lasting love starts here.',
  keywords: ["dating service Hong Kong, matching, professional matchmaking, relationship coaching, marriage consultant, BeyondLove, HK dating, single page dating"],
  openGraph: {
    "title": "BeyondLove - Professional Matching & Dating Service HK",
    "description": "Find your ideal partner with BeyondLove's personalized one-to-one matchmaking and expert relationship coaching in Hong Kong. Your journey to lasting love starts here.",
    "url": "https://beyondlove.com.hk",
    "siteName": "BeyondLove",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/happy-smiling-couple-diversity-love-moment-together_1150-9296.jpg",
        "alt": "Happy couple laughing, BeyondLove logo"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "BeyondLove - Professional Matching & Dating Service HK",
    "description": "Find your ideal partner with BeyondLove's personalized one-to-one matchmaking and expert relationship coaching in Hong Kong. Your journey to lasting love starts here.",
    "images": [
      "http://img.b2bpic.net/free-photo/happy-smiling-couple-diversity-love-moment-together_1150-9296.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
