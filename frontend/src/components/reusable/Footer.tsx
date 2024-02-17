import { AiFillHome } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LogoLight from "../../assets/img/suhora_logo.png";
import LogoDark from '../../assets/img/suhora_white.png';
import { Link } from "react-router-dom";
interface footerProps {
  currentTheme: 'theme-dark' | 'theme-white';
}
const Footer = (props: footerProps) => {

  const dateTime = new Date();
  const year = dateTime.getFullYear();

  return (
    <div className={`root-container px-8 border-t  ${props.currentTheme === 'theme-dark' ? 'border-slate-800' : 'border-slate-200'}`}>
      <footer className="">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="flex justify-between px-8 py-10 flex-wrap">
            <div>
              <div className="h-10 w-44 flex items-center justify-start relative right-[10.2vh] bottom-[0.4vh] min-[375px]:ml-[5vh] mb-[3vh] sm:ml-[5.3vh] md:ml-0 lg:ml-0 mb-0 xl:ml-0 mb-0 2xl:0 mb-0">
                <Link to="/" className='h-10 w-44 '>
                  <img src={props.currentTheme === 'theme-white' ? LogoLight : LogoDark} alt="logo" className="cursor-pointer h-full w-full object-center object-cover" />
                </Link>
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold  uppercase">Who We Are</h2>
              <ul className="font-medium">
                <li className="mb-2">
                  <Link to="/our-principles" className="hover:underline hover:text-blue-800">Our Principles</Link>
                </li>
                <li className="mb-2">
                  <Link to="/our-teams" className="hover:underline hover:text-blue-800">Our Team</Link>
                </li>
                <li className="mb-2">
                  <Link to="/our-journey" className="hover:underline hover:text-blue-800">Our Journey</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold  uppercase">Products</h2>
              <ul className="font-medium">
                <li className="mb-2">
                  <Link to="/products/spade" className="hover:underline hover:text-blue-800">SPADE</Link>
                </li>
                <li className="mb-2">
                  <Link to="/products/lance" className="hover:underline hover:text-blue-800">LANCE</Link>
                </li>
                <li className="mb-2">
                  <Link to="/products/sid" className="hover:underline hover:text-blue-800">SID</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase">Services</h2>
              <ul className="font-medium">
                <li className="mb-2">
                  <Link to="/services/hydrology" className="hover:underline hover:text-blue-800">Hydrology</Link>
                </li>
                <li className="mb-2">
                  <Link to="/services/terrain-mapping" className="hover:underline hover:text-blue-800">Terrain Mapping</Link>
                </li>
                <li className="mb-2">
                  <Link to="/services/land-deformation" className="hover:underline hover:text-blue-800">Land Deformation Monitoring</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase ">Contact us</h2>
              <div className="flex items-center mb-2">
                <div className="mr-[0.4vh] mb-[3vh] "><AiFillHome /></div>
                <div className="hover:text-blue-800">313, Tower-B, Noida One, Sector-62,
                  <div> Noida, Uttar Pradesh, India</div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="mr-[0.4vh]"><MdMail /></div>
                <a href="mailto:hello@suhora.com" target="_blank" className="hover:text-blue-800"><div>hello@suhora.com</div></a>
              </div>
              <div className="flex items-center mb-2">
                <div className="mr-[0.4vh]"><FaPhoneAlt /></div>
                <div className="hover:text-blue-800">+91 9999664437</div>
              </div>
            </div>
          </div>
          <div className={`px-4 py-6 border-t ${props.currentTheme === 'theme-dark' ? 'border-slate-800' : 'border-slate-200'} md:flex md:items-center md:justify-between`}>
            <div className="invisible">nothing</div>
            <span className="text-sm  sm:text-center">© {year} <a href="#">Suhora™</a>. All Rights Reserved. | Privacy Policy
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a href="https://www.linkedin.com/company/suhora/" target="blank">
                <div><FaLinkedinIn /></div>
              </a>
              <a href="https://twitter.com/suhoratech?lang=en" target="blank"  >
                <div><FaXTwitter /></div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer