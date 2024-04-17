//  Imports
// ===========================================================

// Libraries
import React from "react";


//  Types
// ===========================================================

interface CounterProps {
    children: React.ReactNode;
};


//  Component
// ===========================================================

const Card: React.FC<CounterProps> = ({ children }) => {
    return (
        <div className="
            w-full h-full
            bg-base-200
            border border-border rounded-md
            overflow-hidden
        ">
            {children}
        </div>
    )
}

export default Card;
