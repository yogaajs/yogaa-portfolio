//  Types
// ===========================================================

import type { Metadata, Viewport } from 'next';


//  Constants
// ===========================================================

export const title: string = 
  "Reverse";

export const description: string = 
  "Reverse is a Web3 KOL specialist agency focusing on collaboration management, strategic campaigns, project due diligence, and offering an expansive support hub for various projects.";

export const keywords: string[] =
  ['Reverse', 'Web3', 'KOL', 'specialist', 'agency', 'collaboration management', 'strategic campaigns', 'project due diligence', 'support hub'];
  
export const twitter: string = 
  "@ReverseAgency";

export const url: string = 
  "https://reverse-agency.ch";


//  Metadata
// ===========================================================

export const _viewport: Viewport = {
  themeColor: "#0e171e",
}

export const _metadata: Metadata = {
  title,
  description,
  keywords,
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: '/thumbnail.png',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: '/thumbnail.png',
    creator: twitter,
  },
  metadataBase: new URL(url),
}
