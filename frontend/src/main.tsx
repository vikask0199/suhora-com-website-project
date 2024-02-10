import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import FlotingIcon from './components/flotingIcons/FlotingIcon.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <FlotingIcon />
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
)
