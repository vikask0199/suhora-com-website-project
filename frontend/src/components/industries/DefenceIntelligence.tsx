import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import produt1 from "../../assets/img/download2.jfif"
import IndustryCard from "./IndustryCard";
import dark1 from "../../assets/img/defense - Copy.jpg"
import { useState } from "react";

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

    const [selectedTab, setSelectedTab] = useState(0);
    const tabs = ['key heighlights'];

    const renderTabContent = () => {
        switch (selectedTab) {
            case 0:
                return (
                    <div className='md:mx-14 mx-5 root-container'>
                        <div className='flex gap-4'>
                            <div className="p-5 md:w-1/2">
                                <a href="#">
                                    <h5 className="mb-5 text-2xl font-bold tracking-tight ">Igniting Purpose</h5>
                                </a>
                                <>
                                    <ul className="space-y-4 text-left ">
                                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span>Data Insight & Analytics As-a-Service through Platform & API</span>
                                        </li>
                                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span>Multi Mission Planning & Tasking & Visualization Platform</span>
                                        </li>
                                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span>Guaranteed collection, Fastest tasking, Secure downlink</span>
                                        </li>
                                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span>24/7 all weather Surveillance using Optical and SAR Constellation</span>
                                        </li>
                                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            <span>Most Cost-Effective Solution available in Market</span>
                                        </li>
                                    </ul>
                                </>
                            </div>
                            <div className="w-1/2 md:flex items-center justify-center hidden p-5 hover:transform hover:scale-105 duration-300">
                                <img className="rounded-lg h-full w-full object-cover" src={produt1} alt="" />
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
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

            {/* heighlights */}
            <section className="root-container-separator">
                <div className="">
                    <div className="flex  md:px-14 px-5 pt-10">
                        {tabs.map((tab, index) => (
                            <button key={index}
                                className={`py-2 px-2 text-lg font-semibold ${selectedTab === index ? 'root-container' : 'text-gray-500'}`}
                                onClick={() => setSelectedTab(index)}>
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="root-container-separator pb-10">{renderTabContent()}</div>
                </div>
            </section>

            {/* use case */}
            <section className="root-container md:px-14 px-5 py-10">
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