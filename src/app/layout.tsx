//  Imports
// ===========================================================

// Styles
import '@/styles/globals.css';

// Configs
import { _viewport, _metadata } from '@/metadata';
import { f1, f2, f3 } from '@/fonts';

// Contexts
import ThemeProvider from "@/providers/ThemeProvider";
import Toaster from "@/containers/Toaster";



//  Metadata & Viewport
// ===========================================================

export const viewport = _viewport;
export const metadata = _metadata;


//  Root Layout
// ===========================================================

export default function RootLayout({
  children,
} : {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${f1.variable} ${f2.variable} ${f3.variable}`}>
      <body className="font-f1 bg-base-100">
        {/* <ThemeProvider> */}
          {children}
        {/* </ThemeProvider> */}
        <Toaster />
      </body>
    </html>
  )
}
