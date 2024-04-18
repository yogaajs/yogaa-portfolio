'use client'

//  Imports
// ===========================================================

import React, { useState } from 'react';
import { FaXmark } from "react-icons/fa6";


//  Container
// ===========================================================

function Info() {
  const [isVisible, setVisibility] = useState(true);
  const message = "The site is under construction..."

  return (
    isVisible ? (
      <div className="fixed z-[100] top-0 w-full h-fit p-2">
        <button
          onClick={() => setVisibility(false)}  
          className="w-full h-fit bg-[#000] rounded flex flex-col items-center tablet:flex-row p-4 gap-4"
        >
          <p className="w-full font-f3 text-white text-center tablet:text-left text-xl">
            {message}
          </p>
          <div className="text-2xl">
            <FaXmark className="text-[#fff]" />
          </div>
        </button>
      </div>
    ) : ( null )
  )
}

export default Info;
