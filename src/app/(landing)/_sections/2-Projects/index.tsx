//  Imports
// ===========================================================

// Components
import * as SectionTitle from '@/components/shared/SectionTitle';

// Local
import Project from './components/Project';
import * as constants from './constants';


//  Component
// ===========================================================

function Section() {
    return (
        <section 
            id="projects" 
            className="
                relative w-full 
                flex flex-col justify-center items-center gap-6
                py-20
            "
        >
            <div className="w-full max-w-[900px] p-3">
                <SectionTitle.h2
                    id="01"
                    title="Curious about my work?"
                    description="I've worked on projects across Web 2.0 and Web 3.0, from landing pages 
                    and applications to SaaS platforms and bots. If you are curious to learn more about 
                    my work, please do not hesitate to contact me! In the meantime, here are some highlights..."
                />
            </div>
            <ul className="w-full max-w-[1000px] flex flex-col justify-center px-3">
                {constants.projects.map((data, index) => (
                    <Project key={`project-${index}`} {...data} />
                ))}
            </ul>
        </section>
    )
}

export default Section;
