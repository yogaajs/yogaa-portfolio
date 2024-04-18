//  Libraries
// ===========================================================

import { Toaster as Sonner } from 'sonner';


//  Context
// ===========================================================

function Toaster() {
	return (
    <Sonner 
      position="top-right"
      richColors
      closeButton
      expand
    />
  );
}

export default Toaster;
