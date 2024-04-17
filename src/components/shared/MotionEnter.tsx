'use client'

//  Imports
// ===========================================================

// Components
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";


//  Constants
// ===========================================================

const viewProps = { amount: 1, once: true };


//  Types
// ===========================================================

interface ContentProps {
    className?: string;
    children: React.ReactNode;
    delay: number;
    duration: number;
}


//  Component
// ===========================================================

export const MotionEnterTop: React.FC<ContentProps> = ({ className, children, delay, duration }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, viewProps);

    return (
        <div className={className} ref={ref}>
            {isInView &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        y: [-100, 0],
                        opacity: [0, 1]
                    }}
                    transition={{
                        ease: [0, 0, 0.58, 1],
                        delay: delay,
                        duration: duration,
                    }}
                >
                    {children}
                </motion.div> 
            }
        </div>
    )
}

export const MotionEnterBottom: React.FC<ContentProps> = ({ className, children, delay, duration }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, viewProps);

    return (
        <div className={className} ref={ref}>
            {isInView &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        y: [100, 0],
                        opacity: [0, 1]
                    }}
                    transition={{
                        ease: [0, 0, 0.58, 1],
                        delay: delay,
                        duration: duration,
                    }}
                >
                    {children}
                </motion.div> 
            }
        </div>
    )
}

export const MotionEnterLeft: React.FC<ContentProps> = ({ className, children, delay, duration }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, viewProps);

    return (
        <div className={className} ref={ref}>
            {isInView &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [-100, 0],
                        opacity: [0, 1]
                    }}
                    transition={{
                        ease: [0, 0, 0.58, 1],
                        delay: delay,
                        duration: duration,
                    }}
                >
                    {children}
                </motion.div> 
            }
        </div>
    )
}

export const MotionEnterRight: React.FC<ContentProps> = ({ className, children, delay, duration }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, viewProps);

    return (
        <div className={className} ref={ref}>
            {isInView &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        x: [100, 0],
                        opacity: [0, 1]
                    }}
                    transition={{
                        ease: [0, 0, 0.58, 1],
                        delay: delay,
                        duration: duration,
                    }}
                >
                    {children}
                </motion.div> 
            }
        </div>
    )
}

export const MotionEnterOpacity: React.FC<ContentProps> = ({ className, children, delay, duration }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, viewProps);

    return (
        <div className={className} ref={ref}>
            {isInView &&
                <motion.div
                    className="w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1]
                    }}
                    transition={{
                        ease: [0, 0, 0.58, 1],
                        delay: delay,
                        duration: duration,
                    }}
                >
                    {children}
                </motion.div> 
            }
        </div>
    )
}
