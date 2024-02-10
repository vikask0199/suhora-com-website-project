import { FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const FlotingIcon = () => {
    return (
        <div className="flex text-4xl justify-center items-center flex-col z-20 root-container  bg-opacity-20 fixed bottom-[50%] pt-1 pr-1 left-0">
            <FaLinkedin className="cursor-pointer"/>
            <MdMail className="cursor-pointer"/>
        </div>
    )
}

export default FlotingIcon