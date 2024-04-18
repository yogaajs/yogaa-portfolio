//  Imports
// ===========================================================

// Components
import { MotionEnterOpacity } from '@/components/shared/MotionEnter';
import * as SectionTitle from '@/components/shared/SectionTitle';

// Locals
import Skill from './components/Skill';


//  Component
// ===========================================================

function Section() {
    const year_web = new Date().getFullYear() - 2019;
    const year_all = new Date().getFullYear() - 2014;

    return (
        <section 
            id="skills" 
            className="
                relative w-full 
                flex flex-col justify-center items-center gap-6
                py-20
                
            "
        >
            <div className="w-full max-w-[900px] p-3">
                <SectionTitle.h2
                    id="02"
                    title="Wondering about my expertise?"
                    description="I love crafting perfect experiences from scratch, 
                    tailored just for your customers! Let's build something amazing together."
                />
            </div>
            <div className="w-full max-w-[1000px] grid p-3">
                <div className="w-full grid mobile:grid-cols-2 laptop:grid-cols-3 gap-3">
                    <Skill title="Programming Languages" value={8} src="/assets/skills/languages.jpg">
                        <p>
                            JavaScript, TypeScript, HTML, CSS, Solidity, PHP, C, C#, Swift...
                        </p>
                    </Skill>
                    <Skill title="Frameworks" value={5} src="/assets/skills/frameworks.png">
                        <p>
                            React, Next.js, Express.js, Electron.js, React Native...
                        </p>
                    </Skill>
                    <Skill title="Libraries" value={9} src="/assets/skills/libraries.png">
                        <p>
                            Tailwind, Bootstrap, Zustand, Redux, Framer, Viem, Ether.js, Web3.js, Wagmi...
                        </p>
                    </Skill>
                    <div className="laptop:col-span-2">
                        <Skill title="Tools & Platforms" value={21} src="/assets/skills/tools.png">
                            <p>
                                GitHub, Vercel, Figma, Firebase, Supabase, 
                                APIs (Telegram, Discord, Twitter, Google), Vultr (VPS), Notion,
                                Alchemy, Quicknode, Infura, Moralis, IPFS ---
                                Git, Webpack, Remix (IDE), Stripe, MongoDB, GraphQL, REST API...
                            </p>
                        </Skill>
                    </div>
                    <Skill title="Years of Experience" value={year_web} src="">
                        <p>
                            {year_web} years of experience in web development and blockchain technology, and over {year_all}+ years in programming.
                        </p>
                    </Skill>
                </div>
            </div>
            <div className="w-full h-full flex justify-center p-3">
                <MotionEnterOpacity delay={0.5} duration={1}>
                    <p className="font-f1 font-light text-base text-center text-white italic">
                        Is a library, tool or platform missing? I love learning, so that’s no problem at all!
                    </p>
                </MotionEnterOpacity>
            </div>
        </section>
    )
}

export default Section;
