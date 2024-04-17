/* eslint-disable @next/next/no-img-element */

//  Imports
// ===========================================================

// Libraries
import React from "react";

// Component
import Card from '@/components/shared/Card';

// Locals
import Counter from './Counter';


//  Types
// ===========================================================

interface CounterProps {
    children: React.ReactNode;
    value: number;
    title: string;
    src: string;
};


//  Component
// ===========================================================

const Skill: React.FC<CounterProps> = ({ children, value, title, src }) => {
    return (
        <Card>
            <div className="
                space-y-3
                p-3
                transition ease-in-out duration-300
                group
            ">
                <div className="relative w-full h-32 rounded-md overflow-hidden">
                    {src &&
                        <div className="absolute w-full h-full flex items-center justify-center blur-[2px] group-hover:blur-[1px]">
                            <img
                                className="object-cover opacity-40 group-hover:opacity-80 group-hover:scale-110 transition ease-in-out duration-300"
                                src={src}
                                alt={title}
                            />
                        </div>                    
                    }
                    <div className="absolute top-5 left-5">
                        <Counter className="text-4xl text-white font-f3" value={value} unit="+" />
                        <p className="text-xl text-white font-f3">{title}</p>
                    </div>
                </div>
                <div className="w-full h-fit p-1 text-grey font-light">
                    {children}
                </div>
            </div>
        </Card>
    )
}

export default Skill;
