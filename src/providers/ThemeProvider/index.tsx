"use client"

//  Imports
// ===========================================================

import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';


//  Types
// ===========================================================

type Props = {
    children: React.ReactNode;
}


//  Context
// ===========================================================

const Provider = ({children} : Props) => {
    const [mounted,setMounted] = useState<boolean>(false);

    useEffect (() => {
        setMounted(true);
    },[]);

    if(!mounted){
        return <>{children}</>;
    }

    return (
        <ThemeProvider enableSystem={true} attribute='class'>
            {children}
        </ThemeProvider>
    )
}

export default Provider;