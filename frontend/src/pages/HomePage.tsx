import { useEffect, useState } from "react"
import AboutUs from "../components/home/AboutUs"
import HomeHeader from "../components/home/HomeHeader"
import Imaging from "../components/home/Imaging"
import PartnersCarousel from "../components/home/PartnersCarousel"
import Products from "../components/home/Products"
import SliderAndTabs from "../components/home/SliderAndTabs"
import Tailored from "../components/home/Tailored"

const HomePage = () => {
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
      <HomeHeader />
      <AboutUs />
      <Imaging />
      <SliderAndTabs />
      <Products />
      <Tailored />
      <PartnersCarousel toggleTheme={toggleTheme} currentTheme={theme} />
    </>
  )
}

export default HomePage