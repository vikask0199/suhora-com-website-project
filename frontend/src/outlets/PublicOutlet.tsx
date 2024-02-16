import { Outlet } from "react-router-dom";
import Footer from "../components/reusable/Footer";
import Navbar from "../components/reusable/Navbar";

interface PublicOutletProps {
    toggleTheme: () => void;
    currentTheme: 'theme-white' | 'theme-dark';
}

const PublicOutlet = (props: PublicOutletProps) => {

    return (
        <>
            <Navbar toggleTheme={props.toggleTheme} currentTheme={props.currentTheme} />
            <Outlet />
            <Footer currentTheme={props.currentTheme} />
        </>
    )
}

export default PublicOutlet