import { Route, Routes } from 'react-router-dom';
import PublicOutlet from './outlets/PublicOutlet';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
// import CardContainer from './components/team/CardContainer';
// import PrinciplePage from './pages/PrinciplePage';


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
          <Route path='/contact-us' element={<ContactPage />} />
          <Route path='/team' element={<TeamsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
