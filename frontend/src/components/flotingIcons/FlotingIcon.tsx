import { FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

const FlotingIcon = () => {
    return (
        <div className="flex text-4xl justify-center items-center flex-col z-20 root-container  bg-opacity-20 fixed bottom-[50%] pt-1 pr-1 left-0">
           <Link to="https://www.linkedin.com/company/suhora/mycompany/" target={"_blank"}><FaLinkedin className="cursor-pointer hover:text-[#0077B5]"/></Link>
           <Link to="mailto:hello@suhora.com" target={"_blank"}><MdMail className="cursor-pointer hover:text-blue-900"/></Link>
            
        </div>
    )
}

export default FlotingIcon