//  Imports
// ===========================================================

import { title } from '@/metadata';
import ThemeSwitcher from '@/components/ui/theme-switcher';

import { linkedin, twitter, github, email } from '@/constants/socials';


//  Constants
// ===========================================================

const socials = [linkedin, twitter, github, email];


//  Container
// ===========================================================

function Footer() {
  return (
    <footer className="
      relative z-[1] 
      w-full h-fit 
      flex flex-col tablet:flex-row
      bg-base-100
    ">
      <div className="w-full p-3">
        <p className="text-title text-md text-left font-thin">
          © {new Date().getFullYear()} - {title}. All rights reserved.
        </p>
      </div>
      <div className="w-fit flex justify-center items-center p-3">
        <div className="w-full h-fit flex flex-row">
          {socials.map(e => {
            const { text, Icon, props } = e;

            return (
              <a {...props} className="
                w-fit h-fit 
                flex items-center gap-2 
                p-1 hover:gap-4 transition-all ease-in-out duration-300
                group
              ">
                <Icon className="text-xl text-title group-hover:-translate-y-1" />
              </a>
            )
          })}
        </div>
        <ThemeSwitcher />
      </div> 
    </footer>
  );
}

export default Footer;
