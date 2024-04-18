'use client'

//  Imports
// ===========================================================

// Libraries
import React, { useState, useEffect } from 'react'

// Local
import styles from './styles.module.css'


//  Component
// ===========================================================

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return showButton ? (
        <button 
            type="button" 
            className={styles.button}
            onClick={scrollToTop}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 19V6"/>
                <path d="M5 12l7-7 7 7"/>
            </svg>
        </button>
    ) : (null)
}

export default ScrollToTop
