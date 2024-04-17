'use client'

//  Imports
// ===========================================================

import React, { useState } from 'react';
import { FaXmark } from "react-icons/fa6";


//  Container
// ===========================================================

function Info() {
  const [isVisible, setIsVisible] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="
      fixed z-[100] top-0
      w-full h-fit
      bg-[#000]
      flex flex-col items-center tablet:flex-row
    ">
      <div className="w-full p-6">
        {/* CONTENT */}
      </div>
      <button 
        onClick={() => setIsVisible(false)} 
        className="text-2xl p-6"
      >
        <FaXmark className="text-[#fff] hover:text-[#ffffffa0]" />
      </button>
    </div>
  );
}

export default Info;
