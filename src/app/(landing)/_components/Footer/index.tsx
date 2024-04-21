//  Imports
// ===========================================================

import { title } from '@/metadata';


//  Container
// ===========================================================

function Footer() {
  return (
    <footer className="relative z-[2] w-full bg-base-100 p-3">
      <p className="text-title text-sm text-center font-thin">
        © {new Date().getFullYear()} - {title}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
