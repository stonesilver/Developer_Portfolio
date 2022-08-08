import { useState, useEffect } from 'react';

export const useMediaQuery = (mediaQuery) => {
  const [width, setWidth] = useState(0);
  const [widthTocheck] = useState(mediaQuery);

  useEffect(() => {
    const handleEvent = () => {
      setWidth(window.innerWidth);
      console.log(window.innerWidth);
    };

    window.addEventListener('resize', handleEvent);
    // return window.removeEventListener('resize', handleEvent);
  }, [width]);

  return Boolean(width <= widthTocheck);
};
