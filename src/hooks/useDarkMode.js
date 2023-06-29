import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState(getOSPreference);

  function getOSPreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    const osDarkEnabled =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    return osDarkEnabled ? 'dark' : 'light';
  }

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(theme);
    root.classList.remove(colorTheme);
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};
export default useDarkMode;
