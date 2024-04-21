'use client' 

//  Imports
// ===========================================================

// Libraries
import { useState, useEffect } from "react";


//  Types
// ===========================================================

interface TitleProps {
    text: string;  // Specify that 'text' should be a string
}


//  Component
// ===========================================================

const ConsoleText: React.FC<TitleProps> = ({ text }) => {
    const [sliceIndex, setSliceIndex] = useState<number>(0);
    const [typingIntervalID, setTypingIntervalID] = useState<NodeJS.Timeout | number | undefined>(undefined);
  
    useEffect(() => {
        const tID = setInterval(() => {
            setSliceIndex((i) => i + 1);
        }, 25);
        setTypingIntervalID(tID);
    
        return () => clearInterval(tID);
    }, []);
  
    useEffect(() => {
        if (sliceIndex >= text.length) {
            clearInterval(typingIntervalID);
        }
    }, [sliceIndex]);
  
    // Hide
    if (sliceIndex === 0) {
        return (
            <span className="invisible">
                {text.slice(sliceIndex)}
            </span>
        )
    }

    // Show
    return (
        <span className="whitespace-pre-line">
            <span className="">
                {text.slice(0, sliceIndex-1)}
            </span>
            <span className="relative">
                {text.slice(sliceIndex-1, sliceIndex)}
                <span className="animate-blink1s absolute left-1/2 transform -translate-x-1/2">_</span>
            </span>
            <span className="invisible">
                {text.slice(sliceIndex)}
            </span>
        </span>
    );
};

export default ConsoleText;