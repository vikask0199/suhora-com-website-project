import { useState } from 'react'
import { links } from "../../constant/navData"
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from 'react-router-dom';

interface Link {
    name: string;
    subLinks?: { name: string; link: string; }[];
}
type CloseNavbarType = () => void;

interface SubLinkNavProps {
    closeNavbar: CloseNavbarType;
}


const SubLinkNav = ({ closeNavbar }: SubLinkNavProps) => {
    const [heading, setHeading] = useState<string>("");

    return (
        <>
            {
                links.map((link) => (
                    <div>
                        <div className=" text-left md:cursor-pointer group">
                            <h1 className='py-7 flex justify-between items-center md:pr-0 pr-5 group  hover:text-blue-500' onClick={() => { heading !== link.name ? setHeading(link.name) : setHeading("") }}>
                                {link.name}
                                <span className='md:hidden inline'>
                                    {
                                        heading === link.name ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
                                    }
                                </span>
                                <span className='text-xl md:mt-1 md:block hidden'>
                                    <MdKeyboardArrowDown />
                                </span>
                            </h1>
                            {
                                link.subLinks && (
                                    <div>
                                        <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                                            <div className='root-container px-7 flex flex-col gap-3 pb-5 shadow-2xl'>
                                                {
                                                    link.subLinks.map((sLink) => (
                                                        <li className='hover:text-blue-500 '>
                                                            <Link to={sLink.link}>
                                                                {sLink.name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        {/* Mobile view */}
                        <div className={`${heading === link.name ? 'md:hidden' : 'hidden'} flex flex-col gap-10 px-10`}>
                            {
                                link.subLinks.map((sLink) => (
                                    <Link to={sLink.link} onClick={closeNavbar}>
                                        {sLink.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default SubLinkNav;