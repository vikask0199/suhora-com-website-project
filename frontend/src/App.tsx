import { useEffect, useState } from 'react';
import Navbar from './components/reusable/Navbar';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import CardContainer from './components/team/CardContainer';
import ContactPage from './pages/ContactPage';

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
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <CardContainer /> */}
      <ContactPage />
    </>
  )
}

export default App
