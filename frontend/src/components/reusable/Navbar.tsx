import { Link } from 'react-router-dom';
import LogoDark from "../../assets/img/suhora_logo.png";
import logoWhite from "../../assets/img/suhora_white.png";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import SubLinkNav from './SubLinkNav';
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: 'theme-white' | 'theme-dark';
}

const Navbar = (props: NavbarProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleThemeButton = () => {
    setOpen(!open);
    props.toggleTheme();
  };

  const handleCloseNavbar = () => {
    setOpen(!open);
  };


  return (
    <nav className="sticky top-0 left-0 z-[99999] md:px-14 root-container nav-shadow">
      <div className="flex items-center justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to="/" className='h-10 w-44'>
            <img src={props.currentTheme === 'theme-white' ? LogoDark : logoWhite} alt="logo" className="cursor-pointer h-full w-full object-center object-cover" />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoClose /> : <IoMenu />}
          </div>
        </div>
        <ul className="md:flex hidden text-md items-center gap-4">
          <li className=''>
            <Link to="/" className="py-7 inline-block hover:text-blue-500">
              Home
            </Link>
          </li>
          <SubLinkNav closeNavbar = {handleCloseNavbar}/>
          <li className=''>
            <Link to="/contact-us" className="py-7 inline-block hover:text-blue-500">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <button className="bg-primary px-1 py-1 cursor-pointer rounded-full" onClick={toggleThemeButton}>
            {props.currentTheme === 'theme-white' ? (<div className='text-lg'><IoMoon /></div>) : (<div className='text-yellow-400 text-xl'><IoSunny /></div>)}
          </button>
        </div>

        {/* Mobile nav */}
        <ul className={`md:hidden root-container fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
          <li>
            <Link to="/" className="py-6 inline-block hover:text-blue-500" onClick={()=>setOpen(!open)}>
              Home
            </Link>
          </li>
          <SubLinkNav closeNavbar = {handleCloseNavbar}/>
          <li className='' onClick={()=>setOpen(!open)}>
            <Link to="/contact-us" className="py-6 inline-block hover:text-blue-500">
              Contact Us
            </Link>
          </li>
          <button className="py-2" onClick={toggleThemeButton}>
          {props.currentTheme === 'theme-white' ? (<div className='text-lg'><IoMoon /></div>) : (<div className='text-yellow-400 text-xl'><IoSunny /></div>)}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
