import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import ScrollToTop from './constant/ScrollToTop.tsx'
import FlotingIcon from './components/flotingIcons/FlotingIcon.tsx'
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <FlotingIcon />
      <ScrollToTop />
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
)
