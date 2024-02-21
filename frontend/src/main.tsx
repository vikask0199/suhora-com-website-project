import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import ScrollToTop from './constant/ScrollToTop.tsx'
import FlotingIcon from './components/flotingIcons/FlotingIcon.tsx'
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true)


//import { Route, Routes } from 'react-router-dom';
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
//import { useEffect, useState } from 'react';
import BlogsPage from './pages/BlogsPage';
import CareersPage from './pages/CareersPage';
import NewsEventsPage from './pages/EventsNewsPage';
import GalleryPage from './pages/GalleryPage';
import DefenceIntelligence from './components/industries/DefenceIntelligence';
import Navbar from './components/reusable/Navbar.tsx'
import Footer from './components/reusable/Footer.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <FlotingIcon />
      <ScrollToTop />
      <Navbar toggleTheme={()=>{"unde"}} currentTheme={'theme-dark'} />
      <Routes>
            
            
        {/* <Route path='/*' element={<App />} /> */}
        
        {/* <Route path='/'> */}
          <Route index path='/' element={<HomePage currentTheme={"undefined"} />} />
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
          <Route path='open-gallery' element={<GalleryPage />} />
          <Route path='defence-intelligence' element={<DefenceIntelligence />} />
          <Route path='*' element={<Navigate to={'/'} />} />

        {/* </Route> */}
      </Routes>
        <Footer currentTheme={'theme-dark'} />
    </BrowserRouter>
  </>
)
