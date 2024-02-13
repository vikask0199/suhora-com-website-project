

import { FaLinkedin } from "react-icons/fa6"
import bb from "../../assets/img/carddImage.jpg"

const Card = () => {
  return (
    <div className="w-[50vh] mt-[10vh] h-[60vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">

      </a>
      <div className="pt-[30vh ] mt-[10vh] ">
        <div className="flex justify-center item-center">
          <img src={bb} alt="" className="rounded-full h-20 w-20 flex justify-center item-center" />
        </div>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Name</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Desination</p>
        <a href="#" className=" flex justify-center items-center">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Card