import { FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import whatsapp from "../../assets/img/whatsapp.png"


const FlotingIcon = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '9999664437';
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    };
    return (
        <div className="flex text-4xl justify-center items-center flex-col z-20 root-container  bg-opacity-20 fixed bottom-0 pt-1 pr-1 right-0">
            {/* <Link to="https://www.linkedin.com/company/suhora/mycompany/" target={"_blank"}><FaLinkedin className="cursor-pointer hover:text-[#0077B5]"/></Link>
           <Link to="mailto:hello@suhora.com" target={"_blank"}><MdMail className="cursor-pointer hover:text-blue-900"/></Link> */}
            <button onClick={handleWhatsAppClick} className="z-20 fixed right-3 bottom-3 h-10 w-10">
                <img src={whatsapp} alt="" />
            </button>
        </div>
    )
}

export default FlotingIcon