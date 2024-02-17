import { Route, Routes } from 'react-router-dom';
import PublicOutlet from './outlets/PublicOutlet';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import HydrologyPage from './pages/HydrologyPage';
import JourneyPage from './pages/JourneyPage';
import LancePage from './pages/LancePage';
import LandDeformationPage from './pages/LandDeformationPage';
import PrinciplePage from './pages/PrinciplePage';
import SidPage from './pages/SidPage';
import SpadePage from './pages/SpadePage';
import TeamsPage from './pages/TeamsPage';
import TerrainMappingPage from './pages/TerrainMappingPage';
// import Careers from './components/Careers';
import BlogsPage from './pages/BlogsPage';
import CareersPage from './pages/CareersPage';
import NewsEventsPage from './pages/EventsNewsPage';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'theme-dark' | 'theme-white'>('theme-white');

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
        <Route path='/' element={<PublicOutlet toggleTheme={toggleTheme} currentTheme={theme}/>}>
          <Route index element={<HomePage currentTheme={theme} />} />
          <Route path='contact-us' element={<ContactPage />} />
          <Route path='our-teams' element={<TeamsPage />} />
          <Route path='our-principles' element={<PrinciplePage />} />
          <Route path='our-journey' element={<JourneyPage />} />
          <Route path='products/spade' element={<SpadePage />} />
          <Route path='products/sid' element={<SidPage />} />
          <Route path='products/lance' element={<LancePage />} />
          <Route path='services/hydrology' element={<HydrologyPage />} />
          <Route path='services/terrain-mapping' element={<TerrainMappingPage />} />
          <Route path='services/land-deformation-monitoring' element={<LandDeformationPage />} />
          <Route path='careers' element={<CareersPage />} />
          <Route path='blogs' element={<BlogsPage />} />
          <Route path='events-news' element={<NewsEventsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
