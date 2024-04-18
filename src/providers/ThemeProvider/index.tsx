"use client"

//  Imports
// ===========================================================

import { ThemeProvider } from 'next-themes';
import React, { useState, useEffect } from 'react';


//  Types
// ===========================================================

interface Props {
    children: React.ReactNode;
}


//  Context
// ===========================================================

const Context: React.FC<Props> = ({ children }) => {
    const [mounted, setMounted] = useState<boolean>(false);

    // Effect to set mounted to true after initial mount
    useEffect(() => {
        setMounted(true);
    }, []);

    // Return children without ThemeProvider if not mounted yet
    if (!mounted) {
        return <>{children}</>;
    }

    // Return ThemeProvider with children when mounted
    return (
        <ThemeProvider enableSystem={true} attribute='class'>
            {children}
        </ThemeProvider>
    );
}

export default Context;
