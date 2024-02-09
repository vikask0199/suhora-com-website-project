
import { FaLinkedin } from "react-icons/fa6"
import bb from "../../assets/img/carddImage.jpg"
interface CardProps {
  employee: EmployeeData;
}

interface EmployeeData {
  name: string;
  designation: string;
  links: {
    [key: string]: string;
  };
}



const Card = ({ employee }: CardProps) => {
  return (
    <>
      <div className="cards flex items-center flex-col bg-white shadow-md w-80 h-90 mr-10 mb-9 ml-10 rounded-lg justify-center p-10  flex gap-3">
        <div className="h-60 w-60">
          <img src={bb} alt="" className="rounded-full h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-center ">
          <p className="font-bold ">
            {employee.name}
          </p>
          <p className="">
           {employee.designation}
          </p>
        </div>
        <div className="flex gap-6 text-xl">
          <FaLinkedin />
          <FaLinkedin />
        </div>
      </div>
    </>



  )
}

export default Card