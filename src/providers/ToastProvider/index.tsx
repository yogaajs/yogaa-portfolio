//  Libraries
// ===========================================================

import { Toaster } from 'sonner';


//  Exports
// ===========================================================

export default function ToastProvider() {
	return (
    <Toaster 
      position="top-right"
      richColors
      closeButton
      expand
    />
  );
}
