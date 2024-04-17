//  Libraries
// ===========================================================

// Local
import localFont from 'next/font/local';

// Google
import { Roboto, Roboto_Mono, Ubuntu_Mono } from 'next/font/google';

 
//  Fonts (google)
// ===========================================================

export const f1 = Roboto({ 
    weight: ['100', '300', '400', '500'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-f1'
});

export const f2 = Roboto_Mono({ 
    weight: ['100', '200', '300', '400', '500'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-f2'
});

export const f3 = Ubuntu_Mono({ 
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-f3'
});
