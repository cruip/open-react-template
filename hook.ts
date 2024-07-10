import { useState, useEffect, useRef } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const darkModeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    darkModeRef.current = document.getElementById('background-sh');
  }, []);

  useEffect(() => {
    const darkModes = darkModeRef.current;
    if (darkModes) {
      if (isDarkMode) {
        darkModes.classList.add('shekhar');
        darkModes.classList.remove('metre-sh');
      } else {
        darkModes.classList.add('metre-sh');
        darkModes.classList.remove('shekhar');
      }
    }
  }, [isDarkMode]);

  return { isDarkMode, setIsDarkMode };
};
