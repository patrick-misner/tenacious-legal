import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from '../hooks/useDarkMode';

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(colorTheme === 'light');

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={darkMode}
      sunColor="white"
      onChange={toggleDarkMode}
      size={20}
    />
  );
};
export default Switcher;
