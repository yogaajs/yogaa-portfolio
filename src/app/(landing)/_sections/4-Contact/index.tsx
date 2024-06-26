//  Imports
// ===========================================================

// Components
import { MotionEnterOpacity } from '@/components/shared/MotionEnter';
import * as SectionTitle from '@/components/shared/SectionTitle';

// Locals
import Conversation from './components/Conversation';
import { linkedin, discord, twitter, github, email } from '@/constants/socials';


//  Constants
// ===========================================================

const socials = [twitter, discord, github, email];


//  Component
// ===========================================================

function Section() {
    return (
        <section 
            id="contact" 
            className="
                relative w-full 
                flex flex-col justify-center items-center gap-6
                py-20
            "
        >
            <div className="w-full max-w-[900px] p-3">
                <SectionTitle.h2
                    id="03"
                    title="What's next?"
                    description="Always open to new opportunities and collaborations! 
                    Feel free to reach out if you have an idea to explore, a need, or just want to say hello!"
                />
            </div>
            <div className="w-full max-w-[1000px] flex flex-col-reverse gap-6 p-3 tablet:flex-row items-start">
                <div className="w-full h-fit flex flex-col justify-center items-center tablet:items-start gap-6">
                    <p className="font-f1 font-light text-base text-white text-center tablet:text-left">
                        Drop me a line through social media, follow me or chat directly here with YogaaBot—whatever works for you. 
                        Just let me know what you need, and YogaaBot will ensure I get your message!
                    </p>
                    <div className="w-full h-fit flex flex-col justify-center items-center tablet:items-start">
                        {socials.map(e => {
                            const { text, Icon, props } = e;

                            return (
                                <a key={`contact-a-${text}`} {...props} className="flex items-center gap-2 
                                    p-1 transition-all ease-in-out duration-300 text-secondary hover:text-primary
                                ">
                                    <Icon className="text-xl" />
                                    <span className="font-f3"> 
                                        {text}
                                    </span>
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="w-full max-w-[500px]">
                    <MotionEnterOpacity delay={0.5} duration={1}>
                        <Conversation />
                    </MotionEnterOpacity>
                </div>
            </div>
        </section>
    )
}

export default Section;
