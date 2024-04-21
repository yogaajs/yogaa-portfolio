import { useEffect } from 'react';

// Custom Hook
const useEvent = (eventName: string, handleEvent: EventListenerOrEventListenerObject): void => {
  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener(eventName, handleEvent);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener(eventName, handleEvent);
    };
  }, []);
};

export default useEvent;
