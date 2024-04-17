'use client'

//  Imports
// ===========================================================

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa6";


//  Component
// ===========================================================

function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smooth scrolling
        });
    };


    return showButton ? (
        <button 
            type="button" 
            className="
                fixed z-[100]
                bottom-2 tablet:bottom-5
                right-2 tablet:right-5
                rounded-full bg-[#00000050] hover:bg-[#ffffff80]
                p-3
            "
            onClick={scrollToTop}
        >
            <FaArrowUp className="text-white text-lg tablet:text-2xl" />
        </button>
    ) : null;
};

export default ScrollToTop;
