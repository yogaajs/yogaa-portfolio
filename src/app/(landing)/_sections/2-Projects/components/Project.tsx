//  Imports
// ===========================================================

// Libraries
import React from "react";

// Components
import { MotionEnterLeft, MotionEnterBottom } from '@/components/shared/MotionEnter';


//  Types
// ===========================================================

interface Props {
    type: string;
    title: string;
    description: string;
    skills: string[];
    video: string;
};


//  Component
// ===========================================================

const Project: React.FC<Props> = ({ type, title, description, skills, video }) => {
    return (
        <li className="
            relative 
            w-full 
            flex flex-col items-center gap-3 
            laptop:odd:flex-row laptop:even:flex-row-reverse
            group
            py-16
        ">
            <div className="w-full flex 
            group-odd:justify-end group-even:justify-start">
                <div className="w-full max-w-[600px] flex items-center rounded-lg overflow-hidden border-2 border-[#20313c] overflow-hidden">
                    <video autoPlay muted loop src={video}
                        style={{ width: '100%', height: 'auto' }}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="relative laptop:absolute z-[1] w-full h-full flex items-center 
            group-odd:justify-start group-even:justify-end">
                <div className="z-[1] max-w-[450px] flex flex-col gap-3">
                    <MotionEnterBottom delay={0} duration={1}>
                        <div className="w-full group-odd:text-left group-even:text-right">
                            <p className="text-base text-primary font-f3 leading-none">
                                {type}
                            </p>
                            <p className="text-3xl text-secondary font-f3 leading-none">
                                {title}
                            </p>
                        </div>
                    </MotionEnterBottom>
                    <MotionEnterBottom delay={0.2} duration={1}>
                        <div className="w-full bg-[#20313c] rounded p-4">
                            <p className="text-md text-secondary font-f1">
                                {description}
                            </p>
                        </div>
                    </MotionEnterBottom>
                    {/* <MotionEnterBottom delay={0.4} duration={1}>
                        <div className="w-full flex flex-wrap gap-4 px-4 group-odd:justify-start group-even:justify-end">
                            {skills.map(e => (
                                <p
                                    key={`${type}-${e}`} 
                                    className="text-sm text-secondary font-f3"
                                >
                                    {e}
                                </p>
                            ))}
                        </div>
                    </MotionEnterBottom> */}
                </div>
            </div>
        </li>
    )
}

export default Project;
