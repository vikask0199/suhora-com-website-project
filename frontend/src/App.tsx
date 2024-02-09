import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicOutlet from './outlets/PublicOutlet';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';

import './App.css';
import PrinciplePage from './pages/PrinciplePage';
import JourneyPage from './pages/JourneyPage';

function App() {
  // const [theme, setTheme] = useState<'theme-dark' | 'theme-white'>('theme-dark');

  // const toggleTheme = () => {
  //   const newTheme = theme === 'theme-dark' ? 'theme-white' : 'theme-dark';
  //   setTheme(newTheme);
  //   localStorage.setItem('theme', newTheme);
  // };

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme') as 'theme-dark' | 'theme-white' | null;
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //   }
  // }, []);

  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);



  return (
    <>
      <Routes>
        <Route path='/' element={<PublicOutlet />}>
          <Route index element={<HomePage />} />
          <Route path='contact-us' element={<ContactPage />} />
          <Route path='our-teams' element={<TeamsPage />} />
          <Route path='our-principles' element={<PrinciplePage />} />
          <Route path='our-journey' element={<JourneyPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
