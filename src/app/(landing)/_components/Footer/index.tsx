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
      bg-base-100
    ">
      <div className="p-3">
        <p className="text-title text-sm text-center font-thin">
          © {new Date().getFullYear()} - {title}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
