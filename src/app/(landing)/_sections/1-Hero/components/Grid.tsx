'use client'

//  Imports
// ===========================================================

import React, { useState, useEffect } from 'react';


//  Constants
// ===========================================================

const lineClassName = "absolute bg-[#ccd6f610] transition-width ease-in-out";


//  App
// ===========================================================

const Background: React.FC = () => {
  const [lines, setLines] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [size, setSize] = useState<number>(0);

  useEffect(()=> {
    // This timeout will change `size` to 100 after 50ms
    const timeoutId = setTimeout(() => setSize(100), 50);

    // Handle window resize event
    const handleResize = () => {
      // Get number of lines
      const x = Math.ceil(window.innerWidth / 100);
      const y = Math.ceil(window.innerHeight / 120);
      
      // Round up to the nearest even number
      const evenX = x % 2 === 0 ? x : x + 1;
      const evenY = y % 2 === 0 ? y : y + 1;
  
      setLines({ x: evenX, y: evenY });
    }

    // Execute once on mount
    handleResize();
    
    // Setup the event listener for resizing
    window.addEventListener('resize', handleResize);
    
    // Cleanup function to remove the event listener and clear the timeout
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);


  return (
    <div className="fixed inset-0 h-lvh z-[0] flex justify-center items-center">
      <div className="absolute w-full h-full flex flex-col justify-evenly">
        {Array.from({ length: lines.y }).map((number, index) => {
          const randomDuration = Math.floor(Math.random() * 2000) + 1000;
          const randomDelay = Math.floor(Math.random() * 2000);
          const randomPos = Math.random() < 0.5 ? 'left-0' : 'right-0';
          return (
            <div key={`grid-y-${index}`} className="relative w-full h-0.5">
              <div
                className={`h-full ${lineClassName} ${randomPos}`}
                style={{ width: `${size}%`, transitionDelay: `${randomDelay}ms`, transitionDuration: `${randomDuration}ms` }}
              />
            </div>
          )
        })}
      </div>
      <div className="absolute w-full h-full flex flex-row justify-evenly">
        {Array.from({ length: lines.x }).map((number, index) => {
          const randomDuration = Math.floor(Math.random() * 2000) + 1000;
          const randomDelay = Math.floor(Math.random() * 2000);
          const randomPos = Math.random() < 0.5 ? 'top-0' : 'bottom-0';
          return (
            <div key={`grid-x-${index}`} className="relative w-0.5 h-full">
              <div
                className={`w-full ${lineClassName} ${randomPos}`}
                style={{ height: `${size}%`, transitionDelay: `${randomDelay}ms`, transitionDuration: `${randomDuration}ms` }}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Background;
