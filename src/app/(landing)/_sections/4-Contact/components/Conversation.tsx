/* eslint-disable @next/next/no-img-element */
'use client';

//  Imports
// ===========================================================

// Libraries
import React, { useState, ChangeEvent, FormEvent, Fragment } from 'react';
import { TbReload, TbArrowRight } from "react-icons/tb";

// Components
import { MotionEnterOpacity } from '@/components/shared/MotionEnter';

// Locals
import Card from '@/components/shared/Card';


//  Components (local)
// ===========================================================

function Bubble({ user, yogaa } : { user?: string; yogaa?: string }) {
    const isYogaa = (!user && yogaa);
    const position = isYogaa ? " items-start" : " items-end";
    const settings = isYogaa ? " bg-neutral rounded-bl-none" : " bg-accent rounded-br-none";

    return (
        <div className={`w-full h-fit p-2 flex flex-col ${position}`}>
            <div className={`w-[80%] h-fit p-2 flex ${settings} rounded-lg`}>
                <p className="text-white text-sm">
                    {user || yogaa}
                </p>
            </div>
        </div>
    )
}

function Input({ setValue } : { setValue: (value: string) => void; }) {
    const [inputValue, setInputValue] = useState<string>('');

    // Handler for input changes with type annotation
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setInputValue(event.target.value);
    };
  
    // Handler for form submission with type annotation
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      setValue(inputValue);
      setInputValue('');
    };
  

    return (
        <form onSubmit={handleSubmit} className="w-full h-fit flex items-stretch border-t border-border">
            <input 
                className="w-full"
                placeholder="Type your message..."
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button type="submit" className="bg-accent px-3">
                <TbArrowRight className="text-2xl text-white" />
            </button>
        </form>
    )
}


//  Component
// ===========================================================

function Conversation() {
    const [responses, setResponses] = useState<{ type: string; text: string; }[]>([
        {
            type: "yogaa",
            text: "Hey, I'm yogaa's AI assistant. Quickly tell me what you're looking for or what you need?"
        },
    ]);

    // Handler for input changes with type annotation
    const handleReset = (): void => {
        setResponses([{
            type: "yogaa",
            text: "Hey, I'm yoga's AI assistant. Quickly tell me what you're looking for or what you need?"
        }]);
    };

    // Handler for input changes with type annotation
    const handleInputChange = (value: string): void => {
        if (responses.length === 1) {
            setResponses(prevState => [...prevState, { type: "user", text: value }]);
            setTimeout(() => {
                setResponses(prevState => [
                    ...prevState,
                    {
                        type: "yogaa",
                        text: "OK! Please share with me a quick way to get back to you, such as email, Telegram, WhatsApp..."
                    }
                ])
            }, 1000)
        } else {
            setResponses(prevState => [...prevState, { type: "user", text: value }]);
            setTimeout(() => {
                setResponses(prevState => [
                    ...prevState,
                    {
                        type: "yogaa",
                        text: "Thanks! I've forwarded this to Yogaa. See you later!"
                    }
                ])
            }, 1000)
        }
    };


    return (
        <Card>
            <div className="relative w-full h-full min-h-[275px] bg-base-300 flex flex-col">
                <div className="w-full h-fit flex items-center gap-2 px-2 py-1 border-b border-border">
                    <img
                        className="w-6 h-6 rounded-full bg-[#ffffff30]"
                        src="/assets/avatar.png"
                        alt="yogaaGPT"
                    />
                    <div className="w-full px-1">
                        <p className="text-md text-secondary font-f3 leading-none">
                            YogaaGPT
                        </p>
                    </div>
                    <button
                        type="button" 
                        className={`p-2 rounded-full text-neutral-content hover:text-primary ${(responses.length > 1) ? "" : "invisible"}`}
                        onClick={handleReset}
                    >
                        <TbReload className="text-2xl" />
                    </button> 
                </div>
                <div className="w-full grow flex flex-col p-2">
                    {responses.map((e, index) => {
                        const { type, text } = e;
                        const props = { [type]: text };

                        return (
                            <Fragment key={text}>
                                <MotionEnterOpacity delay={0} duration={1}>
                                    <Bubble {...props} />
                                </MotionEnterOpacity>
                            </Fragment>
                        )
                    })}
                </div>
                {responses.length < 4 &&
                    <Input setValue={handleInputChange} />            
                }
            </div>
        </Card>
    )
}

export default Conversation;