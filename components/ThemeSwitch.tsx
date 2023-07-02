import React, { useState, useEffect } from 'react';
import Switch from 'antd/lib/switch';

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

  //if the checkDark marks
  //if (window.matchMedia('(prefers-color-scheme: dark)').matches) {setIsDarkMode(true)}


  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleClick = () => {
    const root = document.documentElement;
    const footerElement = document.querySelector("footer")
    const headerElement = document.querySelector("header");

    root.classList.add('img');
    if (root.classList.contains('dark')) {

      root.classList.add('light')
      footerElement?.classList.add('light');
      headerElement?.classList.add('light');
      
      root.classList.remove('dark');
      footerElement?.classList.remove('dark');
      headerElement?.classList.remove('dark');
      
    } else {
    
      root.classList.add('dark');
      footerElement?.classList.add('dark');
      headerElement?.classList.add('dark');
      
      root.classList.remove('light');
      footerElement?.classList.remove('light');
      headerElement?.classList.remove('light');

    }
  }

  return (
    <div className="switch flex justify-center items-center mt-1">
      <Switch
        onChange={handleClick}
        unCheckedChildren="Dark"
        checkedChildren="Light"
      />
    </div>
  );
};

export default ThemeSwitch;
