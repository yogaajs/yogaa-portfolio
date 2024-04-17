'use client'

//  Imports
// ===========================================================

// Libraries
import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';


//  Types
// ===========================================================

interface CounterProps {
    className?: string;
    value: number;
    unit?: string;
};


//  Component
// ===========================================================

const Counter: React.FC<CounterProps> = ({ className, value, unit }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <p ref={ref} className={className}>
            {isInView ? (
                <CountUp end={value} duration={3} />
            ) : ( 
                0
            )}
            {unit}
        </p> 
    )
}

export default Counter;
