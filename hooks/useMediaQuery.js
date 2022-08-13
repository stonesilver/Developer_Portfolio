import { useState, useEffect } from 'react';

export const useMediaQuery = (mediaQuery) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleEvent = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleEvent);
    return () => {
      window.removeEventListener('resize', handleEvent);
    };
  }, [width]);

  return Boolean(width <= mediaQuery);
};
