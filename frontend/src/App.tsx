import { useEffect, useState } from 'react';

import Navbar from './components/reusable/Navbar';
// import Tabs from './components/Tabs';
import AboutUs from './components/home/AboutUs';
import Tailored from './components/home/Tailored';
import Products from './components/home/Products';
// import WhomWeServe from './components/home/WhomWeServe';
import Serve from './components/home/Serve';
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
      {/* <WhomWeServe></WhomWeServe> */}
      
     
      <Serve></Serve>
       <Products></Products>
       <Tailored ></Tailored>
 
    </>
  )
}

export default App
