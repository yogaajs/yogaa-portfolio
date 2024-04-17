//  Types
// ===========================================================

import type { Metadata, Viewport } from 'next';


//  Constants
// ===========================================================

export const title: string = 
  "Yogaa | Portfolio";

export const description: string = 
  "Hey! My name is Yogaa, I'm a full-stack developer engineer.";

export const keywords: string[] =
  ['developer', 'frontend', 'backend', 'engineer', 'full-stack', 'blockchain', 'freelance', 'web2', 'web3'];
  
export const twitter: string = 
  "@YogaaJS";

export const url: string = 
  "https://yogaa.dev";


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
