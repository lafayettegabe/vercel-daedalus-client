'use client'
import { useEffect } from 'react';

const setDarkModePreference = () => {
  if (typeof window !== 'undefined') {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode) {
      document.documentElement.classList.add('dark');
      const footerElement = document.querySelector("footer");
      const headerElement = document.querySelector("header");
      footerElement?.classList.add('dark');
      headerElement?.classList.add('dark');
    }
  }
};

const DarkModeScript: React.FC = () => {
  useEffect(() => {
    setDarkModePreference();
  }, []);

  return null;
};

export default DarkModeScript;
