import { useEffect, useState } from 'react';

import Navbar from './components/reusable/Navbar';
// import Tabs from './components/Tabs';
import AboutUs from './components/home/AboutUs';
import Services from './components/home/Services';
// import HomeCarousel from './components/home/HomeCarousel';


function App() {
  const [theme, setTheme] = useState<'theme-dark' | 'theme-white'>('theme-dark');

  const toggleTheme = () => {
    const newTheme = theme === 'theme-dark' ? 'theme-white' : 'theme-dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'theme-dark' | 'theme-white' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);



  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      {/* <HomeCarousel></HomeCarousel> */}
      {/* <Tabs toggleTheme={toggleTheme} currentTheme={theme}></Tabs> */}
      <AboutUs ></AboutUs>
      <Services ></Services>
 
    </>
  )
}

export default App
