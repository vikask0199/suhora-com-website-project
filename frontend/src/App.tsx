import { Route, Routes } from 'react-router-dom';
import PublicOutlet from './outlets/PublicOutlet';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import JourneyPage from './pages/JourneyPage';
import PrinciplePage from './pages/PrinciplePage';
import SpadePage from './pages/SpadePage';
import SidPage from './pages/SidPage';
import LancePage from './pages/LancePage';
import HydrologyPage from './pages/HydrologyPage';
import TerrainMappingPage from './pages/TerrainMappingPage';
import LandDeformationPage from './pages/LandDeformationPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PublicOutlet />}>
          <Route index element={<HomePage />} />
          <Route path='contact-us' element={<ContactPage />} />
          <Route path='our-teams' element={<TeamsPage />} />
          <Route path='our-principles' element={<PrinciplePage />} />
          <Route path='our-journey' element={<JourneyPage />} />
          <Route path='products/spade' element={<SpadePage />} />
          <Route path='products/sid' element={<SidPage />} />
          <Route path='products/lance' element={<LancePage />} />
          <Route path='services/hydrology' element={<HydrologyPage />} />
          <Route path='services/terrain-mapping' element={<TerrainMappingPage />} />
          <Route path='services/land-deformation' element={<LandDeformationPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
