import { useEffect, useState } from 'react';
import "@/styles/globals.css";
// import i18n  from "./i18n";

export default function App({ Component, pageProps }) {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') ?? 'light';
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove(theme); // Remove the current theme class
    document.documentElement.classList.add(newTheme); // Add the new theme class
  };

  return (<Component {...pageProps} toggleTheme={toggleTheme}/>
  );
}
