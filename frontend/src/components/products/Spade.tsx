import { useState } from "react";
import Mission from "./MainContent";
import ProductsPageCards from './ProdcutsPageCards';
// import { BadgeCheckIcon } from '@heroicons/react/solid';
// import TailoredCards from '../home/TailoredCards';
import dark1 from '../../assets/img/dark_bg.jpg';
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
            <img src={bg_spade} className="h-full w-full object-cover"/>
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7  group-hover:text-white">
                        <path
                            d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.6569 16.9706 22 12 22C7.02944 22 3 20.6569 3 19V5"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        className="text-xl font-bold  before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Add your databases
                    </h3>
                    <h4 className="mt-2 text-base ">Use your own Notion databases or duplicate ours.</h4>
                </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
                <span
                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                <div
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-200 detailspage-hover shadow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 ">
                        <path
                            d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        className="text-xl font-bold  before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Map your fields
                    </h3>
                    <h4 className="mt-2 text-base ">Map your Notion fields with Feather fields.</h4>
                </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
                <span
                    className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                <div
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 detailspage-hover shadow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7">
                        <path
                            d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        className="text-xl font-bold  before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Choose your domain
                    </h3>
                    <h4 className="mt-2 text-base ">Choose a domain or a subdomain for your blog.</h4>
                </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
                <div
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 detailspage-hover shadow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7">
                        <path
                            d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        className="text-xl font-bold  before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Get your blog
                    </h3>
                    <h4 className="mt-2 text-base">That's it. You will get back a professional blog.</h4>
                </div>
            </li>
        </ul>
    </div>
</section>


<h2 className='text-center text-2xl font-bold pt-1 hover:text-pretty'>Features of SPADE</h2>
    
            <div className='flex flex-wrap justify-center py-10'>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* <ProductsCard image={dark1} name="SPADE" description="A seamless SaaS platform delivering comprehensive access to multi-sensor satellite
  data for a spectrum of commercial applications." link="/products/spade" /> */}
  <ProductsPageCards image={dark1} name="Integrated Multi-Sensor Platform" description="SPADE provides an integrated platform for constant monitoring using a robust optical and SAR satellite constellation"  />
              <ProductsPageCards image={light1} name="Reliability and Security" description="Ensures secure data transmission with guaranteed collection, offering dependable insights round-the-clock" />
              <ProductsPageCards image={dark1} name="Cost-Effectiveness and Accessibility" description="Offers the most cost-effective satellite data service in the market with easy B2B API integration and strategic expansion plans"  />
            </div>
          </div>
          <h2 className='text-center text-2xl font-bold '>Industries</h2>
          <div className='flex flex-wrap justify-center py-10'>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductsPageCards image={dark1} name="Hydrology" description="" />
            <ProductsPageCards image={light1} name="Terrain Mapping" description=""  />
            <ProductsPageCards image={dark1} name="Land Deformation Monitoring" description=""  />
          </div>
        </div>
      </div>

  


          </section>
  )
}

export default Spade