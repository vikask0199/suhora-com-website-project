import classNames from "classnames";
import { useEffect, useState } from 'react';
import agreicu from "../../assets/img/agri.jpg"
import forest from "../../assets/img/forest.jpg"
import infra from "../../assets/img/infra.jpg"
import defence from "../../assets/img/defense.jpg"
import mining from "../../assets/img/mining.jpg"
import enegy from "../../assets/img/energy.jpg"
import disaster from "../../assets/img/disaster.jpg"
// import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdOutlineSecurity  } from "react-icons/md";

const slides = [
    {
        image:  defence ,
        heading: "Defense & Intelligence",
        content: [['Advanced Surveillance','Harness cutting-edge satellite imagery for comprehensive maritime and land surveillance'],['Real-Time Intelligence','Utilize real-time Earth Observation (EO) and Signals Intelligence (SIGINT) for prompt tracking and insights'],['Multi-Sensor Data Fusion','Merge data from optical, SAR, thermal, AIS, and RF sources to create an integrated view'],['Custom Analytical Tools','Engineer specialized analytical tools integrating various data streams ']]
    },
    {
        image:  disaster ,
        heading: "Disaster & Insurance",
        content: [["Advanced Surveillance",''],["Real-Time Intelligence",''],["Multi-Sensor Data Fusion",''],["Secure Communication",'']]
    },
    {
        image:  enegy ,
        heading: "Renewable Energy",
        content: [["Suhora",''],"SUHORA provides solutions based on the customers’ needs and the site situation. With a thorough understanding of the customers’ needs, every project starts with an analysis of the individual situation – The Case Study – allowing us to offer and implement the right solution for the right project. SUHORA’s renewable energy portfolio covers Feasibility Studies, Topographic Survey to system design automation and O&M support. Suhora provides an intuitive platform for construction monitoring of Solar PV installations."]
    },
    {
        image:  mining ,
        heading: "Mining",
        content: [["Suhora",''],"Intelligence, surveillance, and reconnaissance (ISR) is the collection and analysis of information about an adversary or target. At Suhora we provide requisite inputs, data processing and fusion  for generation of ISR reports.  Both SAR and Optical imagery are used to support a wide range of ISR missions such as IMINT."]
    },
    {
        image:  infra ,
        heading: "Infrastructure",
        content: [["Suhora",''],"Suhora provides valuable tools and data for government organizations to enable them in making informed decisions about a variety of issues. Among various facets of government decision making such as compliance, internal security, natural resource planning and sustainability. With multi-mission and big data analytics approach, seemingly infeasible problems can be solved with relative ease."]
    },
    {
        image:  forest ,
        heading: "Forestry",
        content: [["Suhora",''],"Around 30 percent of earth landmass is covered by forests. Constant monitoring and conservation of the green areas is the only way we hand down the planet to the next generation without compromising the quality of our environment. With reliable partners SUHORA can monitor large swaths of forest for health, encroachment and deforestation. With intelligence deep learning algorithms, we provide insights from large volumes of remote sensing data. "]
    },
    {
        image:  agreicu ,
        heading: "Agriculture",
        content: [["Suhora",''],"SUHORA provides important inputs for accurate assessment of Crop health, Acreage, Yield estimation and damage assessment. With diversity of satellite data available with Suhora, you can be assured of robust coverage with respect to temporal and spectral characteristics. Insurance companies have immense use of SUHORA’s accurate damage assessment maps and historical damage analytics."]
    },
];

const SliderAndTabs = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    // const [direction, setDirection] = useState<"forward" | "backward">("forward");

    useEffect(() => {
        const interval = setInterval(() => {
            // setDirection("forward");
            setCurrentSlideIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 10000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleTabClick = (index: number) => {
        // const isForward = index > currentSlideIndex;
        // setDirection(isForward ? "forward" : "backward");
        setCurrentSlideIndex(index);
    };

    return (
        <div className="root-container-separator md:px-14 py-10 flex flex-col">
            {/* <h2 className={`text-3xl font-bold mb-6 text-center font-century-gothic scroll-smooth focus:scroll-auto `}>Industries We Serve</h2> */}
           
            <div className="relative flex flex-col items-center">
              
              <h1 className="md:text-3xl text-2xl font-bold leading-tight"> Industries <span
                      className="text-[#1266a0]"> We Serve
                  </span> </h1>
              <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-blue-200">
                  </div>
                  <div className="flex-1 h-2 bg-[#1266a0]">
                  </div>
                  <div className="flex-1 h-2 bg-[#174773]">
                  </div>
              </div>
          </div>           
           
            <div className="overflow-hidden root-container shadow">
                <div className={classNames("flex", { "transition-transform duration-500 ease-in-out": true, })} style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }} >
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0 w-full flex items-center flex-col md:flex-row justify-center">
                            <div className="md:w-1/2 flex flex-col h-full p-7 pt-10 gap-5">
                                <h2 className="font-bold text-2xl">{slide.heading}</h2>

                                <ul className="grid place-content-center sm:grid-cols-2 gap-8">
                                {slide.content.map((content, index) => (
                                <li className="flex" key={index}>
                                    <div className="px-4 md:text-xl text-lg font-extralight "><MdOutlineSecurity /></div>
                                    <div>
                                        
                                        <div className="md:text-xl text-lg font-bold ">{content[0]}</div>
                                        <p className="max-w-xs py-1 text-sm ">{content[1]}</p>
                                    </div>
                                </li>
                                ))}
                                </ul>

                            </div>
                            <div className="md:w-1/2 h-full hidden md:block hover:transform hover:scale-105 duration-300 rounded-lg p-6 mr-1">
                                <img src={slide.image} alt={`Slide ${index + 1}`} className="h-full w-full object-cover rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center flex-wrap">
                {slides.map((slide, index) => (
                    <div key={index} className={classNames("px-4 flex-grow py-2 cursor-pointer text-center text-sm text-bold ", { "root-container border-l border-r": index === currentSlideIndex, "servicetabs": index !== currentSlideIndex, })} onClick={() => handleTabClick(index)}>
                        <h3>{slide.heading}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderAndTabs;
