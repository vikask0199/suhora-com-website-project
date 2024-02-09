import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicOutlet from './outlets/PublicOutlet';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';

import Navbar from './components/reusable/Navbar';
// import Tabs from './components/Tabs';
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
      <Routes>
        <Route path='/' element={<PublicOutlet />}>
          <Route index element={<HomePage />} />
          <Route path='/contact-us' element={<ContactPage />} />
          <Route path='/team' element={<TeamsPage />} />
        </Route>
      </Routes>
      {/* <Navbar toggleTheme={toggleTheme} currentTheme={theme} /> */}
      {/* <HomeCarousel></HomeCarousel> */}
      {/* <Tabs toggleTheme={toggleTheme} currentTheme={theme}></Tabs> */}

    </>
  )
}

export default App
