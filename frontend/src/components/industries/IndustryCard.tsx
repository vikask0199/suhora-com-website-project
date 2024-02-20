import { Link } from "react-router-dom";

interface ProductsCardProps {
  image: string;
  name: string;
  description: string;
  link: string;
}

const IndustryCard = (props: ProductsCardProps) => {
  return (
    <div className="md:w-1/3 rounded-lg shadow cards flex flex-col justify-between hover:transform hover:scale-105 duration-300">
      {/* <a href="#"> */}
        <img className="rounded-t-lg w-full" src={props.image} alt="" />
      {/* </a> */}
      <div className="flex justify-between flex-col pt-3 px-3 pb-5 ">
        {/* <a href="#"> */}
          <h5 className="mb-3 text-xl font-bold">
            {props.name}
          </h5>
        {/* </a> */}

        <p className="mb-3 font-normal">
          {props.description}
        </p>
        <div className="flex justify-end pr-3">
        <Link
          to={props.link}
          className="font-bold inline-flex float-right items-center px-3 py-2 w-fit text-sm  text-[#1266a0] hover:text-[#174773]"
        >
          Learn more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
