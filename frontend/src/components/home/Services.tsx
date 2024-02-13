import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Services = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const elements = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % elements.length);
        }, 2000); // Change slide every 2 seconds
        return () => clearInterval(interval);
    }, [elements.length]);

    const handleButtonClick = (index: any) => {
        setCurrentSlide(index);
    };

    return (
        // <div className="flex flex-col items-center justify-center h-screen ">
           
        //     <div className="flex justify-center items-center h-48 overflow-hidden">
        //         {elements.map((element, index) => (
        //             <div
        //                 key={index}
        //                 className={`w-full h-full flex items-center justify-center absolute transform transition-transform duration-500 ${index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
        //                     }`}
        //                 style={{ left: `${index * 100}%` }}
        //             >
        //                 {element}
        //             </div>
        //         ))}
        //     </div>

            
        //     <div className="flex mt-4">
        //         {elements.map((_, index) => (
        //             <button
        //                 key={index}
        //                 onClick={() => handleButtonClick(index)}
        //                 className={`mx-1 px-4 py-2 bg-blue-500 text-white rounded ${currentSlide === index ? "opacity-50" : ""
        //                     }`}
        //             >
        //                 Button {index + 1}
        //             </button>
        //         ))}
        //     </div>
        // </div>
        <></>
    );
};
export default Services;
