/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

//  Imports
// ===========================================================

// Components
import MouseScroll from '@/components/common/MouseScroll';
import { MotionEnterBottom, MotionEnterLeft, MotionEnterRight } from '@/components/shared/MotionEnter';

// Local
import Grid from './components/Grid';


//  Component
// ===========================================================

function Hero() {
    return (
        <section
            id="hero" 
            className="
                sticky top-0 
                w-full min-h-lvh max-h-[1000px]
                flex flex-col justify-center items-center
                overflow-hidden
            "
        >
            <Grid />
            <div className="relative w-full h-[85lvh] max-w-[1300px] flex flex-col justify-center items-center">
                <div className="relative z-[1] w-full flex justify-end
                 tablet:absolute tablet:right-0 tablet:w-fit">
                    <MotionEnterRight delay={0.2} duration={1}>
                        <img
                            className="max-w-[300px] object-contain
                            mobile:max-w-[400px] laptop:max-w-[500px]"
                            src="/assets/avatar.png"
                            alt="Yogaa"
                        />
                    </MotionEnterRight> 
                </div>
                <div className="relative z-[2] w-full flex flex-col justify-center p-3">
                    <MotionEnterLeft delay={0} duration={1}>
                        <p className="font-f3 text-2xl tablet:text-3xl text-primary">
                            Hi,
                        </p>
                    </MotionEnterLeft>
                    <MotionEnterLeft delay={0.2} duration={1}>
                        <h1 className="font-f3">
                            <span className="text-title text-3xl tablet:text-4xl">my name is </span>
                            <span className="text-primary text-4xl tablet:text-5xl">Yogaa</span>
                        </h1>
                    </MotionEnterLeft>
                    <MotionEnterLeft delay={0.4} duration={1}>
                        <p className="font-f3 font-normal text-3xl laptop:text-4xl text-title pt-2">
                            I build absurd decentralized things
                        </p>
                    </MotionEnterLeft>
                    <MotionEnterBottom delay={0.6} duration={1}>
                        <p className="text-lg text-[#ccd6f6a0] max-w-[650px] pt-4">
                            I'm a full-stack developer engineer specializing in building (and occasionally designing) digital 
                            experiences. Currently, I'm focused on building accessible, user-centered products within the Web3 ecosystem.
                        </p>
                    </MotionEnterBottom>
                </div>
            </div>
            <div className="relative w-full h-[15lvh] flex justify-center items-start">
                <MotionEnterBottom delay={0.75} duration={1}>
                    <MouseScroll id="projects" />
                </MotionEnterBottom>
            </div>
        </section>
    )
}

export default Hero;
