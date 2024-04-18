'use client'

// This file defines the Scroll component, which implements a custom virtual scrollbar 
// for the document body using the 'smooth-scrollbar' library and the OverscrollPlugin.
// The component initializes the scrollbar with specific options for overscroll effects 
// and damping. 
// Note: For this scrollbar to function properly, ensure that the body element 
// has a fixed width and height set in your CSS.
// https://idiotwu.github.io/smooth-scrollbar/


// Imports
// ===========================================================

import React, { useRef, useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'


// Options
// ===========================================================

const overscrollOptions = {
  enable: true, // Enables overscroll effect
  effect: 'glow', // 'bounce'
  damping: 0.1, // Damping factor for overscroll
  maxOverscroll: 10, // Maximum overscroll distance
  glowColor: '#000' // Color of the glow effect
}

const scrollOptions = {
  damping: 0.06, // Damping factor for the scrollbar
  thumbMinSize: 20,
  renderByPixels: true,
  alwaysShowTracks: true,
  continuousScrolling: true,
  wheelEventTarget: null,
  plugins: {
    overscroll: { ...overscrollOptions } // Spread operator to include overscroll options
  }
}


// Types
// ===========================================================

interface Props {
  children: React.ReactNode;
}


// Virtual ScrollBar Component
// ===========================================================


const VirtualSmoothScroll: React.FC<Props> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);

    if (scrollRef.current) {
      const scrollbar = Scrollbar.init(scrollRef.current, scrollOptions);

      return () => {
        scrollbar.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} style={{ width: '100dvw', height: '100dvh' }}>
      {children}
    </div>
  );
};

export default VirtualSmoothScroll;