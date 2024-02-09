import React, { useState } from 'react';
import { MoonIcon, SunIcon, ChevronDownIcon } from '@heroicons/react/solid';
import LogoLight from '../../assets/img/suhora_logo.png'; // Import your light theme logo image file
import LogoDark from '../../assets/img/suhora_white.png'; // Import your dark theme logo image file

interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: 'theme-dark' | 'theme-white';
}

const Navbar = (props: NavbarProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className={`py-4 ${props.currentTheme === 'theme-dark' ? 'bg-gray-900 text-white border-b-2' : 'bg-white text-gray-900 border-b-2' } sticky top-0 left-0 right-0 z-20`}>
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <img src={props.currentTheme === 'theme-dark' ? LogoDark : LogoLight} alt="Logo" className="h-8 mr-4 sm:mr-10" />
          <button onClick={toggleMobileNav} className="block sm:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <nav className={`absolute top-full left-0  w-full sm:relative sm:top-auto sm:left-auto sm:w-auto sm:flex sm:items-center ${mobileNavOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <li><a href="./" className={`hover:text-${props.currentTheme === 'theme-dark' ? 'gray-400' : 'gray-800'}`}>Home</a></li>
              <li>
                <div className="relative">
                  <a onClick={toggleDropdown} className={` flex hover:text-${props.currentTheme === 'theme-dark' ? 'gray-400' : 'gray-800'}`}>Who We Are
                  <ChevronDownIcon className={`w-5 h-5 ${dropdownOpen ? 'transform rotate-180' : ''}`} />
                  </a>
                  {dropdownOpen && (
                    <div className={`absolute top-full left-0 py-2 rounded shadow-lg mt-2 sm:mt-0 sm:right-auto sm:bg-transparent sm:text-gray-900 sm:shadow-none inset-0 h-full w-full cursor-default` }>
                      <a href="#" className={`block px-4 py-2 ${props.currentTheme === 'theme-dark' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}>Our Principles</a>
                      <a href="#" className={`block px-4 py-2 ${props.currentTheme === 'theme-dark' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}>Our Team</a>
                      <a href="#" className={`block px-4 py-2 ${props.currentTheme === 'theme-dark' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}>Our Journey</a>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div className="relative">
                  <a onClick={toggleDropdown1} className={`flex hover:text-${props.currentTheme === 'theme-dark' ? 'gray-400' : 'gray-800'}`}>Products 
                  <ChevronDownIcon className={`w-5 h-5 ${dropdownOpen1 ? 'transform rotate-180' : ''}`} /></a>
                  {dropdownOpen1 && (
                    <div className={`absolute top-full left-0 bg-white text-gray-900 py-2 rounded shadow-lg mt-2 sm:mt-0 sm:right-auto sm:bg-transparent sm:text-gray-900 sm:shadow-none`}>
                      <a href="#" className={`block px-4 py-2 ${props.currentTheme === 'theme-dark' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}>SPADE</a>
                      <a href="#" className={`block px-4 py-2 ${props.currentTheme === 'theme-dark' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}>LANCE</a>
                      <a href="#" className={`block px-4 py-2 ${props.currentTheme === 'theme-dark' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'}`}>SID</a>
                    </div>
                  )}
                </div>
              </li>
              <li><a href="#" className={`hover:text-${props.currentTheme === 'theme-dark' ? 'gray-400' : 'gray-800'}`}>Services</a></li>
              <li><a href="#" className={`hover:text-${props.currentTheme === 'theme-dark' ? 'gray-400' : 'gray-800'}`}>Blog</a></li>
              <li><a href="#" className={`hover:text-${props.currentTheme === 'theme-dark' ? 'gray-400' : 'gray-800'}`}>Contact Us</a></li>
            </ul>
          </nav>
        </div>
        <button className={`float-right bg-${props.currentTheme === 'theme-dark' ? 'gray-800' : 'gray-200'} hover:${props.currentTheme === 'theme-dark' ? 'bg-gray-700' : 'bg-gray-300'} px-4 py-2 rounded-lg`} onClick={props.toggleTheme}>
          {props.currentTheme === 'theme-dark' ? <SunIcon className="h-5 w-5 text-yellow-500" /> : <MoonIcon className="h-5 w-5 text-gray-900" />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
