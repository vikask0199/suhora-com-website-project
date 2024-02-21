import { IoMdArrowDropright } from "react-icons/io";
import LogoLight from "../../assets/img/suhora_logo.png";
import LogoDark from '../../assets/img/suhora_white.png';
import { FaPhone , FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface footerProps {
  currentTheme: 'theme-dark' | 'theme-white';
}
const Footer = (props: footerProps) => {

  const dateTime = new Date();
  const year = dateTime.getFullYear();

  return (
    <div className="root-container-separator px-5 md:px-14 py-10">
      <div className="flex justify-between flex-wrap gap-8">
        <div className="flex flex-col gap-3">
          <div className="gap-1 w-fit">
            <img className="h-14" src={props.currentTheme === 'theme-dark' ? LogoDark : LogoLight} alt="" />
          </div>
          <p className="md:w-72 pl-4">
            313, Tower-B, Noida One, Sector-62, Noida, Uttar Pradesh-201309, India
            <br />
            <div className="flex flex-row p-1">
            <FaPhone className="text-sm mr-2" /> 0120-3113029, 3501889
            </div>
          </p>
        </div>
        <div className="flex flex-col gap-4 pl-4">
          <h1 className="text-[#1266A0] font-bold tracking-wide">WHO WE ARE</h1>
          <ul className="flex flex-col gap-3">
         
            <Link to={"/our-principles"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              Our Principles
            </li>
            </Link>
            <Link to={"/our-teams"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              Our Team
            </li>
            </Link>
            <Link to={"/our-journey"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              Our Journey
            </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4 pl-4">
          <h1 className="text-[#1266A0] font-bold tracking-wide">PRODUCTS</h1>
          <ul className="flex flex-col gap-3">
          <Link to={"/products/spade"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
             SPADE
            </li>
            </Link>
            <Link to={"/products/lance"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              LANCE
            </li>
            </Link>
            <Link to={"/products/sid"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              SID
            </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4 pl-4">
          <h1 className="text-[#1266A0] font-bold tracking-wide">SERVICES</h1>
          <ul className="flex flex-col gap-3">
          <Link to={"/services/hydrology"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              Hydrology
            </li>
            </Link>
            <Link to={"/products/terrain-mapping"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              Terrain Mapping
            </li>
            </Link>
            <Link to={"/products/land-deformation-monitoring"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              Land Deformation Monitoring
            </li>
            </Link>
            {/* <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              Land Deformation Monitoring
            </li> */}
           
          </ul>
        </div>
        <div className="flex flex-col gap-4  pl-2">
          <h1 className="text-[#1266A0] font-bold tracking-wide">Resources</h1>
          <ul className="flex flex-col gap-3">
          
          <Link to={"/blogs"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              Blogs
            </li>
            </Link>
            <Link to={"/events-news"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              Events & News
            </li>
            </Link>
            <Link to={"/careers"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              Careers
            </li>
            </Link>
            <Link to={"/open-gallery"} className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
            <li className="flex items-center gap-1 cursor-pointer ease-in-out duration-300 hover:translate-x-2 hover:text-[#1266A0]">
              <IoMdArrowDropright />
              Gallery
            </li>
            </Link>
           
          </ul>
        </div>
      </div>
      <hr className="m-2"/>
      <div className="sm:flex sm:items-center sm:justify-between p-2">
        <span className="text-sm"> {year} © Suhora. All Rights Reserved. | <a href="#" className="hover:underline">Privacy Policy</a>
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0">
          {/* <a href="#" className="hover:text-[#1266A0] ">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a> */}
           <Link to={"https://twitter.com/suhoratech/"} target={"_blank"} className="hover:text-[#1266A0] ms-5">
           <FaXTwitter className="text-xl"/>
            <span className="sr-only">X page</span>
          </Link>
          {/* <a href="#" className="hover:text-[#1266A0] ms-5">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a> */}
          <Link to={"https://www.linkedin.com/company/suhora/mycompany/"} target={"_blank"} className="hover:text-[#1266A0] ms-5">
            <FaLinkedin className="text-xl"/>
            <span className="sr-only">LinkedIn account</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Footer