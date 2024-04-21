'use client'

//  Imports
// ===========================================================

// Libraries
import { useState } from 'react';
import clsx from 'clsx';

// Hooks
import useEvent from '@/hooks/use-event';

// Components
import { MotionEnterTop } from '@/components/shared/MotionEnter';

// Constants
import { discord, twitter, github, email } from '@/constants/socials';


//  Constants (local)
// ===========================================================

const socials = [discord, twitter, github, email];


//  Header
// ===========================================================

function Header() {
  const [isOn, setOn] = useState(false);
  useEvent('scroll', () => {
    (window.scrollY > 100) ? (
      setOn(true)
    ) : (
      setOn(false)
    )
  });

  return (
    <header
      className={clsx(
        'fixed top-0 z-[100] w-full flex flex-row justify-end px-3 py-1',
        isOn && 'backdrop-blur-[2px]'
      )}
    >
      <div className="w-fit h-fit flex gap-4">
        {socials.map((e, index) => {
          const { text, Icon, props } = e;
          return (
            <MotionEnterTop key={`header-a-${text}`} delay={0.2*index} duration={1}>
              <a {...props} className="flex items-center gap-2 p-1 
                transition-all ease-in-out duration-500 text-secondary hover:text-primary
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
