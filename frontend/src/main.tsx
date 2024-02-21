import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Carousel, initTE } from "tw-elements"
import App from './App.tsx'
import FlotingIcon from './components/flotingIcons/FlotingIcon.tsx'
import ScrollToTop from './constant/ScrollToTop.tsx'
import './index.css'
initTE({ Carousel }, true)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <HashRouter>
      <FlotingIcon />
      <ScrollToTop />
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </HashRouter>
  </>
)
