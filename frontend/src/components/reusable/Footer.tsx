import { AiFillHome } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LogoLight from '../../assets/img/suhora_logo.png';
import LogoDark from '../../assets/img/suhora_white.png';
interface footerProps {
  currentTheme: 'theme-dark' | 'theme-white';
}
const Footer = (props: footerProps) => {

  const dateTime  = new Date();
  const year = dateTime.getFullYear();

  return (
    <div className={`root-container px-8 border-t  ${props.currentTheme === 'theme-dark' ? 'border-slate-800' : 'border-slate-200'}`}>
      <footer className="">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="flex justify-between p-[5vh]">
            <div>
              <div  className='h-10 w-40 mb-2 flex justify-start items-center relative right-[1vh] bottom-[0.6vh]'>
            <img src={props.currentTheme === 'theme-dark' ? LogoDark : LogoLight} alt="Logo" className="w-full object-cover" />
          </div>
              <ul className=" font-sm">
                <li className="mb-2">
                  <a href="#about" className=" hover:underline hover:text-blue-800">About</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline hover:text-blue-800">Careers</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline hover:text-blue-800">Brand Center</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline hover:text-blue-800">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase">Who We Are</h2>
              <ul className="font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline hover:text-blue-800">Our Principles</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline hover:text-blue-800">Our Team</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline hover:text-blue-800">Our Journey</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase">Products</h2>
              <ul className="font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline hover:text-blue-800">SPADE</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline hover:text-blue-800">LANCE</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline hover:text-blue-800">SID</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline hover:text-blue-800">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline hover:text-blue-800">Licensing</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline hover:text-blue-800">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase ">Contact us</h2>
               <div className="flex items-center mb-2">
                <div className="mr-[0.4vh] mb-[3vh] "><AiFillHome/></div>
                <div className="hover:text-blue-800">313, Tower-B, Noida One, Sector-62,
                  <div> Noida, Uttar Pradesh, India</div>
                </div>
               </div>
               <div className="flex items-center mb-2">
                <div className="mr-[0.4vh]"><MdMail/></div>
                <a href="mailto:someone@example.com" target="_blank" className="hover:text-blue-800"><div>hello@suhora.com</div></a>
               </div>
               <div className="flex items-center mb-2">
                <div className="mr-[0.4vh]"><FaPhoneAlt/></div>
                <div className="hover:text-blue-800">+91 9999664437</div>
               </div>
            </div>
          </div>
          <div className={`px-4 py-6 border-t ${props.currentTheme === 'theme-dark' ? 'border-slate-800' : 'border-slate-200'} md:flex md:items-center md:justify-between`}>
            <div className="invisible">nothing</div>
            <span className="text-sm  sm:text-center">© {year} <a href="#">Suhora™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a href="https://www.linkedin.com/company/suhora/" target="blank">
                <div><FaLinkedinIn/></div>
              </a>
              <a href="https://twitter.com/suhoratech?lang=en"  target="blank"  >
                <div><FaXTwitter  /></div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer