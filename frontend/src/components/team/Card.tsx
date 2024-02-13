
import { FaLinkedin } from "react-icons/fa6"

interface CardProps {
  employee: EmployeeData;
}

interface EmployeeData {
  name: string;
  designation: string;
  img: string;
  links: {
    [key: string]: string;
  };
}



const Card = ({ employee }: CardProps) => {

  return (
    <>
      <div className="cards items-center flex-col w-80 h-90 mr-5 mb-9 ml-5 rounded-lg justify-center p-10  flex gap-3 hover:transform hover:scale-105 duration-300">
        <div className="h-60 w-60">
          <img src={employee.img} alt="" className="rounded-full h-full w-full object-cover filter grayscale" />
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
          
        </div>
      </div>
    </>



  )
}

export default Card