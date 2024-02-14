interface ProductsCardProps {
  image: string;
  name: string;
  description: string;
  link: string;
}

const TailoredCards = (props: ProductsCardProps) => {
  return (
    <div className="max-w-sm  rounded-lg shadow cards hover:transform hover:scale-105 duration-300">
      <a href="#">
        <img className="rounded-t-lg w-full" src={props.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold">{props.name}</h5>
        </a>
        <p className="mb-3 font-normal">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <div className="flex justify-end pr-3">
        <a
          href={props.link}
          className="inline-flex float-right items-center px-3 py-2 w-fit text-sm font-medium text-center text-white bg-[#1266a0] rounded-lg hover:bg-[#174773] focus:ring-4 focus:outline-none"
        >
          Read more
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
        </a>
        </div>
      </div>
    </div>
  );
}

export default TailoredCards;
