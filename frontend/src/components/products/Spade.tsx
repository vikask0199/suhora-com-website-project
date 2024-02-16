import { useState } from "react";
import Mission from "./MainContent";
import ProductsPageCards from './ProdcutsPageCards';
// import { BadgeCheckIcon } from '@heroicons/react/solid';
// import TailoredCards from '../home/TailoredCards';
import dark1 from '../../assets/img/dark_bg.jpg';
// import multisensor from '../../assets/img/multi-sensor.png'
import { MdSatelliteAlt, MdOutlineSecurity  } from "react-icons/md";
import { AiFillBuild } from "react-icons/ai";
import { GrDeploy } from "react-icons/gr";
import { PiStrategy } from "react-icons/pi";
import light1 from '../../assets/img/light_bg.png';
import bg_spade from '../../assets/img/planet-2087558_1920.jpg';
const Spade = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const tabs = ['SPADE'];

    const renderTabContent = () => {
        switch (selectedTab) {
            case 0:
                return <div><Mission name='About SPADE' image={dark1} description='
<ul class="space-y-4 text-left ">
<li class="flex items-center space-x-3 rtl:space-x-reverse">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-700"  viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
    <span>Data As-a-Service through Platform & API</span>
</li>
<li class="flex items-center space-x-3 rtl:space-x-reverse">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-700"  viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
    <span>Multi Mission Planning & Tasking & Visualization Platform</span>
</li>
<li class="flex items-center space-x-3 rtl:space-x-reverse">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-700"  viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
    <span>Guaranteed collection, Secure tasking, Secure downlink</span>
</li>
<li class="flex items-center space-x-3 rtl:space-x-reverse">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-700"  viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
    <span>24/7 all weather Surveillance using Optical and SAR Constellation</span>
</li>
<li class="flex items-center space-x-3 rtl:space-x-reverse">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-700"  viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
    <span>Most Cost-Effective Solution available in Market</span>
</li>
</ul>  
                '/>
                </div>;

            default:
                return null;
        }
    };



    return (
        <section className="root-container">


            <div className="container mx-auto">
                <div className="flex flex-wrap relative">
                    <div className="h-72 w-full" >
                        <img src={bg_spade} className="h-full w-full object-cover" />
                    </div>
                    <div className='absolute text-5xl h-full w-full bg-black bg-opacity-50 font-bold text-white'>
                        <h2 className="flex item-center h-full w-full justify-center items-center">SPADE</h2>
                    </div>
                </div>

                <div className="flex root-container-separator px-14 pt-10">
                    {tabs.map((tab, index) => (
                        <button key={index}
                            className={`py-2 w-28 text-lg font-semibold ${selectedTab === index ? 'root-container' : 'text-gray-500'}`}
                            onClick={() => setSelectedTab(index)}>
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="root-container-separator pb-10">{renderTabContent()}</div>


                <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24 root-container">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <p className="text-lg font-bold uppercase tracking-widest ">How SPADE Works</p>
                            <h2 className="mt-6 text-xl font-bold tracking-tight  sm:text-2xl lg:text-4xl">Get Satellite Data in 4 easy steps
                            </h2>
                            {/* <p className="mx-auto mt-4 max-w-2xl text-lg font-normal  lg:text-xl lg:leading-8">
                Create your own blog with us and launch it with just 4 easy steps
            </p> */}
                        </div>
                        <ul className="mx-auto mt-12 grid  max-w-md grid-cols-1 gap-10   p-3 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
                            <li className="flex-start group relative flex lg:flex-col">
                                <span
                                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                                    aria-hidden="true"></span>
                                <div
                                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl  transition-all duration-200 detailspage-hover shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
</svg>
                                </div>
                                <div className="ml-6 lg:ml-0 lg:mt-10">
                                    <h3
                                        className="text-xl font-bold  before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                        Search
                                    </h3>
                                    <h4 className="mt-2 text-base ">Search your location by place name or Lat,Long.</h4>
                                </div>
                            </li>
                            <li className="flex-start group relative flex lg:flex-col">
                                <span
                                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                                    aria-hidden="true"></span>
                                <div
                                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-200 detailspage-hover shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
</svg>
                                </div>
                                <div className="ml-6 lg:ml-0 lg:mt-10">
                                    <h3
                                        className="text-xl font-bold  before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                        Draw
                                    </h3>
                                    <h4 className="mt-2 text-base ">Draw AOI/POI by clicking on the map.</h4>
                                </div>
                            </li>
                            <li className="flex-start group relative flex lg:flex-col">
                                <span
                                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                                    aria-hidden="true"></span>
                                <div
                                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 detailspage-hover shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>
                                </div>
                                <div className="ml-6 lg:ml-0 lg:mt-10">
                                    <h3
                                        className="text-xl font-bold  before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                        Select
                                    </h3>
                                    <h4 className="mt-2 text-base ">Select parameters like date, sensor, collection parameters.</h4>
                                </div>
                            </li>
                            <li className="flex-start group relative flex lg:flex-col">
                                <div
                                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 detailspage-hover shadow">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg>
                                </div>
                                <div className="ml-6 lg:ml-0 lg:mt-10">
                                    <h3
                                        className="text-xl font-bold  before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                                        Order
                                    </h3>
                                    <h4 className="mt-2 text-base">
Pick best scenes from Archive or Auto-select for new collection request.</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>


                <h2 className='text-center text-2xl font-bold pt-1 hover:text-pretty'>Features of SPADE</h2>

                <div className='flex flex-wrap justify-center py-10'>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <ProductsPageCards image={dark1} name="Integrated Multi-Sensor Platform" description="SPADE provides an integrated platform for constant monitoring using a robust optical and SAR satellite constellation" />
                        <ProductsPageCards image={light1} name="Reliability and Security" description="Ensures secure data transmission with guaranteed collection, offering dependable insights round-the-clock" />
                        <ProductsPageCards image={dark1} name="Cost-Effectiveness and Accessibility" description="Offers the most cost-effective satellite data service in the market with easy B2B API integration and strategic expansion plans" />
                        <ProductsPageCards image={dark1} name="Integrated Multi-Sensor Platform" description="SPADE provides an integrated platform for constant monitoring using a robust optical and SAR satellite constellation" />
                        <ProductsPageCards image={light1} name="Reliability and Security" description="Ensures secure data transmission with guaranteed collection, offering dependable insights round-the-clock" />
                        <ProductsPageCards image={dark1} name="Cost-Effectiveness and Accessibility" description="Offers the most cost-effective satellite data service in the market with easy B2B API integration and strategic expansion plans" />
                    </div>

                </div>
                <div className="root-container-separator py-10">
                    <h2 className='text-center text-2xl font-bold '>Industries</h2>
                    <div className='flex flex-wrap justify-center py-10 '>
                        {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <ProductsPageCards image={dark1} name="Hydrology" description="" />
                        <ProductsPageCards image={light1} name="Terrain Mapping" description="" />
                        <ProductsPageCards image={dark1} name="Land Deformation Monitoring" description="" />
                    </div> */}
                        <div className="p-4">

                            <ul className="grid place-content-center sm:grid-cols-2 gap-8">
                                <li className="flex">
                                    <div className="px-4 text-5xl font-extralight "><MdOutlineSecurity /></div>
                                    <div>
                                        <div className="text-xl font-bold ">Research</div>
                                        <p className="max-w-xs py-2 text-sm ">We love numbers! We collect data and insights, analyze
                                            them then take the time to learn about your objectives, ask the right questions to understand your
                                            business.</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="px-4 text-5xl font-extralight "><PiStrategy /></div>
                                    <div>
                                        <div className="text-xl font-bold ">Strategey</div>
                                        <p className="max-w-xs py-2 text-sm ">Solutions are born from proper research, hard work, and
                                            strong strategy. We build data-driven roadmaps for every project to make pave the way to success.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="px-4 text-5xl font-extralight "><MdSatelliteAlt /></div>
                                    <div>
                                        <div className="text-xl font-bold ">Design</div>
                                        <p className="max-w-xs py-2 text-sm ">We design the right solution for your business. We
                                            craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="px-4 text-5xl font-extralight "><AiFillBuild /></div>
                                    <div>
                                        <div className="text-xl font-bold ">Development</div>
                                        <p className="max-w-xs py-2 text-sm ">We build the right solution for your business. We
                                            craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="px-4 text-5xl font-extralight "><GrDeploy /></div>
                                    <div>
                                        <div className="text-xl font-bold ">Deployment</div>
                                        <p className="max-w-xs py-2 text-sm ">We build the right solution for your business. We
                                            craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




        </section>
    )
}

export default Spade