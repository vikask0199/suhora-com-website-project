import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import produt1 from "../../assets/img/download2.jfif"
import IndustryCard from "./IndustryCard";
import dark1 from "../../assets/img/defense - Copy.jpg"

const DefenceIntelligence = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    };

    return (
        <div className="">
            <section className="items-center relative md:px-14 px-5 py-10 root-container">
                <div className="justify-center  px-4 mx-auto  md:px-6">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center ">
                            <div className="relative flex flex-col items-center">
                                <h1 className="md:text-3xl text-2xl font-bold leading-tight"><span
                                    className="text-[#1266a0]"> Defence
                                </span> And <span
                                    className="text-[#1266a0]"> Intelligence
                                    </span> </h1>
                                <div className="flex w-28 mt-1 mb-10 overflow-hidden rounded">
                                    <div className="flex-1 h-2 bg-blue-200">
                                    </div>
                                    <div className="flex-1 h-2 bg-[#1266a0]">
                                    </div>
                                    <div className="flex-1 h-2 bg-[#174773]">
                                    </div>
                                </div>
                            </div>
                            <p className="mb- text-base text-center ">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni eius eaque?
                                Pariatur
                                numquam, odio quod nobis ipsum ex cupiditate?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-20 md:px-14 px-5">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <div className="flex justify-center items-center ">
                                <div className="w-full max-w-screen-lg relative ">
                                    <div className="relative w-full h-80vw">
                                        <img src={produt1} className="object-contain w-full h-full" alt="" />
                                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                            <p className="text-white text-center">Info one</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center items-center ">
                                <div className="w-full max-w-screen-lg relative ">
                                    <div className="relative w-full h-80vw">
                                        <img src={produt1} className="object-contain w-full h-full" alt="" />
                                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                            <p className="text-white text-center">Info one</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Repeat similar structure for other slides */}
                    </Slider>
                </div>
            </section>
            
            {/* use case */}
            <section className="root-container-separator md:px-14 px-5 py-10">
                <div className='w-full '>
                    <div className="flex  justify-center flex-col md:flex-row gap-6 ">
                        <IndustryCard image={dark1} name="SPADE" description="A seamless SaaS platform delivering comprehensive access to multi-sensor satellite
                    data for a spectrum of commercial applications." link="/products/spade" />
                        <IndustryCard image={dark1} name="LANCE" description="Advanced, near real-time ISR solutions, elevating maritime and land surveillance
                for defense and intelligence sectors." link="/products/lance" />
                        <IndustryCard image={dark1} name="SID" description="Integrated space analytics and rapid satellite data converge to enhance disaster response
                        and streamline insurance management." link="/products/sid" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DefenceIntelligence