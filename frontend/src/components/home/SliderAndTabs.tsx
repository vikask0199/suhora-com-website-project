import classNames from "classnames";
import { useEffect, useState } from 'react';
import agreicu from "../../assets/img/agri.jpg"
import forest from "../../assets/img/forest.jpg"
import infra from "../../assets/img/infra.jpg"
import defence from "../../assets/img/defense.jpg"
import mining from "../../assets/img/mining.jpg"
import enegy from "../../assets/img/energy.jpg"
import disaster from "../../assets/img/disaster.jpg"



interface SliderProps {
    slides: string[];
}

const slides = [
    {
        image:  defence ,
        heading: "Defense & Intelligence",
        content: "Intelligence, surveillance, and reconnaissance (ISR) is the collection and analysis of information about an adversary or target. At Suhora we provide requisite inputs, data processing and fusion  for generation of ISR reports.  Both SAR and Optical imagery are used to support a wide range of ISR missions such as IMINT."
    },
    {
        image:  disaster ,
        heading: "Disaster & Insurance",
        content: "Suhora provides valuable tools and data for government organizations to enable them in making informed decisions about a variety of issues. Among various facets of government decision making such as compliance, internal security, natural resource planning and sustainability. With multi-mission and big data analytics approach, seemingly infeasible problems can be solved with relative ease."
    },
    {
        image:  enegy ,
        heading: "Renewable Energy",
        content: "SUHORA provides solutions based on the customers’ needs and the site situation. With a thorough understanding of the customers’ needs, every project starts with an analysis of the individual situation – The Case Study – allowing us to offer and implement the right solution for the right project. SUHORA’s renewable energy portfolio covers Feasibility Studies, Topographic Survey to system design automation and O&M support. Suhora provides an intuitive platform for construction monitoring of Solar PV installations."
    },
    {
        image:  mining ,
        heading: "Mining",
        content: "Intelligence, surveillance, and reconnaissance (ISR) is the collection and analysis of information about an adversary or target. At Suhora we provide requisite inputs, data processing and fusion  for generation of ISR reports.  Both SAR and Optical imagery are used to support a wide range of ISR missions such as IMINT."
    },
    {
        image:  infra ,
        heading: "Infrastructure",
        content: "Suhora provides valuable tools and data for government organizations to enable them in making informed decisions about a variety of issues. Among various facets of government decision making such as compliance, internal security, natural resource planning and sustainability. With multi-mission and big data analytics approach, seemingly infeasible problems can be solved with relative ease."
    },
    {
        image:  forest ,
        heading: "Forestry",
        content: "Around 30 percent of earth landmass is covered by forests. Constant monitoring and conservation of the green areas is the only way we hand down the planet to the next generation without compromising the quality of our environment. With reliable partners SUHORA can monitor large swaths of forest for health, encroachment and deforestation. With intelligence deep learning algorithms, we provide insights from large volumes of remote sensing data. "
    },
    {
        image:  agreicu ,
        heading: "Agriculture",
        content: "SUHORA provides important inputs for accurate assessment of Crop health, Acreage, Yield estimation and damage assessment. With diversity of satellite data available with Suhora, you can be assured of robust coverage with respect to temporal and spectral characteristics. Insurance companies have immense use of SUHORA’s accurate damage assessment maps and historical damage analytics."
    },
];

const SliderAndTabs = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const [direction, setDirection] = useState<"forward" | "backward">("forward");

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection("forward");
            setCurrentSlideIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleTabClick = (index: number) => {
        setDirection(index > currentSlideIndex ? "forward" : "backward");
        setCurrentSlideIndex(index);
    };

    return (
        <div className="root-container root-container-separator md:px-14 py-10 flex flex-col">
            <div className="overflow-hidden root-container">
                <div className={classNames("flex", { "transition-transform duration-500 ease-in-out": direction === "forward", "transition-none": direction === "backward", })} style={{ transform: `translateX(-${currentSlideIndex * 100}%)`, }} >
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0 w-full flex items-center flex-col md:flex-row justify-center">
                            <div className="md:w-1/2 flex flex-col h-full p-7 gap-5">
                                <h2 className="font-bold">{slide.heading}</h2>
                                <p>{slide.content}</p>
                            </div>
                            <div className="md:w-1/2 h-full">
                                <img src={slide.image} alt={`Slide ${index + 1}`} className="h-full w-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center flex-wrap">
                {slides.map((slide, index) => (
                    <div key={index} className={classNames("px-4 flex-grow py-2 cursor-pointer text-center text-sm ", { "root-container border-l border-r": index === currentSlideIndex, "bg-blue-900": index !== currentSlideIndex, })} onClick={() => handleTabClick(index)}>
                        <h3>{slide.heading}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderAndTabs;
