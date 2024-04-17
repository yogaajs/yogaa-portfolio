//  Imports
// ===========================================================

// Components
import ScrollTop from '@/components/common/ScrollTop';

// Sections
import Hero from './_sections/1-Hero';
import Projects from './_sections/2-Projects';
import Skills from './_sections/3-Skills';
import Contact from './_sections/4-Contact';


//  Constants
// ===========================================================

const isProduction = true;


//  Page
// ===========================================================

export default function Page() {
  return (
    <main className="relative w-full h-fit">
      <Hero /> 
      <div className="relative w-full h-fit bg-base-100 rounded-t-3xl shadow-[0_-5px_100px_rgba(0,0,0)]">
        <Projects />
        <Skills />
        <Contact />
      </div>
      <ScrollTop />
    </main>
  )
}
