//  Imports
// ===========================================================

// Components
import { MotionEnterTop } from '@/components/shared/MotionEnter';

// Socials
import { discord, telegram, twitter, github, email } from '@/constants/socials';


//  Constants
// ===========================================================

const socials = [discord, telegram, twitter, github, email];


//  Header
// ===========================================================

function Header() {
  return (
    <header className="
      fixed top-0 z-[1] 
      w-full h-fit 
      flex flex-row justify-end
      p-3
    ">
      <div className="w-fit h-fit flex gap-4">
        {socials.map((e, index) => {
            const { text, Icon, props } = e;
            return (
              <MotionEnterTop key={`header-a-${text}`} delay={0.2*index} duration={1}>
                <a {...props} className="flex items-center gap-2 
                  p-1 transition-all ease-in-out duration-300 text-secondary hover:text-primary
                ">
                    <Icon className="text-lg" />
                    <span className="hidden tablet:block font-f3 text-sm"> 
                      {text}
                    </span>
                </a>
              </MotionEnterTop>
            )
        })}
      </div>
    </header>
  );
}

export default Header;
