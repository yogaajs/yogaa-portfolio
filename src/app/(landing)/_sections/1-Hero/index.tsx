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
                w-full h-fit max-h-[1200px]
                flex flex-col justify-center items-center
                overflow-hidden
            "
        >
            <Grid />
            <div className="relative w-full min-h-[90svh] max-w-[1300px] flex flex-col justify-center items-center">
                <div className="relative z-[1] w-full flex justify-end
                 tablet:absolute tablet:right-0 tablet:w-fit">
                    <MotionEnterRight delay={0.2} duration={1}>
                        <img
                            className="max-w-[260px] object-contain
                            mobile:max-w-[400px] laptop:max-w-[500px]"
                            src="/assets/avatar.png"
                            alt="Yogaa"
                        />
                    </MotionEnterRight> 
                </div>
                <div className="relative z-[2] w-full flex flex-col justify-center p-3">
                    <MotionEnterLeft delay={0} duration={1}>
                        <h1 className="font-f3 text-3xl tablet:text-4xl">
                            <span className="text-title">Hey! I'm </span>
                            <span className="text-primary">Yogāa</span>
                        </h1>
                    </MotionEnterLeft>
                    <MotionEnterLeft delay={0.2} duration={1}>
                        <p className="font-f3 font-normal text-3xl laptop:text-4xl text-title pt-2">
                            Coffee-to-Code converter
                        </p>
                    </MotionEnterLeft>
                    <MotionEnterBottom delay={0.4} duration={1}>
                        <p className="text-lg text-[#ccd6f6a0] max-w-[650px] pt-4">
                            I'm a full-stack developer engineer with a focus on front-end, specializing in building 
                            (and occasionally designing) digital experiences. Currently, I'm immersed in the Web3 ecosystem.
                        </p>
                    </MotionEnterBottom>
                </div>
            </div>
            <div className="relative w-full min-h-[10svh] flex justify-center items-start">
                <MotionEnterBottom delay={0.75} duration={1}>
                    <MouseScroll id="projects" />
                </MotionEnterBottom>
            </div>
        </section>
    )
}

export default Hero;
