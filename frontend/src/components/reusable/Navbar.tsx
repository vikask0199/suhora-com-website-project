import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import LogoLight from '../../assets/img/suhora_logo.png'; // Import your light theme logo image file
import LogoDark from '../../assets/img/suhora_white.png'; // Import your dark theme logo image file
import  { useState } from 'react';
interface NavbarProps {
    toggleTheme: () => void;
    currentTheme: 'theme-dark' | 'theme-white';
}


const Navbar = (props: NavbarProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
 
    console.log(props.currentTheme)
    // const [isDarkMode, setIsDarkMode] = useState(true);
    // const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    // const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    // const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);
    return (
        <header className={`py-4 ${props.currentTheme === 'theme-dark' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'} sticky top-0 z-50`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
     
            <img src={props.currentTheme === 'theme-dark' ? LogoDark : LogoLight} alt="Logo" className="h-8 mr-10" />
            <nav className="ml-4">
              <ul className="flex">
                {/* <li className="mr-4"><a href="#" className={`hover:${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>Home</a></li> */}
                <li className="mr-4"><a href="#">Home</a></li> 
                <li className="mr-4 relative">
                  <a href="#" >
                    Who We Are
                  </a>
                  {isSubMenuOpen && (
                    <ul className={`absolute top-full left-0  shadow-md rounded-lg mt-2`}>
                      <li className="py-2 px-4"><a href="#">Our Principles</a></li>
                      <li className="py-2 px-4"><a href="#">Team</a></li>
                      <li className="py-2 px-4"><a href="#">Journey</a></li>
                    </ul>
                  )}
                </li>
                <li className="mr-4"><a href="#" className={`hover:${props.currentTheme === 'theme-dark' ? 'text-gray-400' : 'text-gray-800'}`}>Services</a></li>
                <li className="mr-4"><a href="#" className={`hover:${props.currentTheme === 'theme-dark' ? 'text-gray-400' : 'text-gray-800'}`}>Blog</a></li>
                <li className="mr-4"><a href="#" className={`hover:${props.currentTheme === 'theme-dark' ? 'text-gray-400' : 'text-gray-800'}`}>Contact</a></li>
              </ul>
            </nav>
          </div>
          
          <div className="flex items-center">
            <button className="mr-4" onClick={toggleDropdown}>Who We Are</button>
            {isDropdownOpen && (
              <div className="relative">
                <button onClick={toggleDropdown} className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"></button>
                <ul className={`absolute top-full right-0 ${props.currentTheme === 'theme-dark' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'} shadow-md rounded-lg mt-2`}>
                  <li className="py-2 px-4 flex"><a href="#">Item 1</a></li>
                  <li className="py-2 px-4 flex"><a href="#">Item 2</a></li>
                  <li className="py-2 px-4 flex"><a href="#">Item 3</a></li>
                </ul>
              </div>
            )}
            <button className={`bg-${props.currentTheme === 'theme-dark' ? 'gray-800' : 'gray-200'} hover:${props.currentTheme === 'theme-dark' ? 'bg-gray-700' : 'bg-gray-300'} px-4 py-2 rounded-lg`} onClick={props.toggleTheme}>
              {props.currentTheme === 'theme-dark' ? <SunIcon className="h-5 w-5 text-yellow-500" /> : <MoonIcon className="h-5 w-5 text-gray-900" />}
            </button>
            <button className={`bg-${props.currentTheme === 'theme-dark' ? 'gray-800' : 'gray-200'} hover:${props.currentTheme === 'theme-dark' ? 'bg-gray-700' : 'bg-gray-300'} px-4 py-2 rounded-lg ml-4`}>Sign In</button>
          </div>
        </div>
      </header>
  
    );
  };
  

export default Navbar