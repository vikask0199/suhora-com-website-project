import { Outlet } from "react-router-dom"
import Navbar from "../components/reusable/Navbar"
import Footer from "../components/reusable/Footer"
import { useEffect, useState } from "react";

const PublicOutlet = () => {
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
            <Outlet />
            <Footer />
        </>
    )
}

export default PublicOutlet