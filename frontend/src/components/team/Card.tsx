
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
  console.log(employee)
  return (
    <>
      <div className="cards items-center flex-col  shadow-md w-80 h-90 mr-10 mb-9 ml-10 rounded-lg justify-center p-10  flex gap-3">
        <div className="h-60 w-60">
          <img src={employee.img} alt="" className="rounded-full h-full w-full object-cover" />
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