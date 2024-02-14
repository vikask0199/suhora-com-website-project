import ProductsPageCards from './ProdcutsPageCards'; 
import Mission from "./MainContent";
import { useState } from "react";
// import { BadgeCheckIcon } from '@heroicons/react/solid';
// import TailoredCards from '../home/TailoredCards';
import dark1 from '../../assets/img/dark_bg.jpg'
import light1 from '../../assets/img/light_bg.png'
const Spade = () => {
  const [selectedTab, setSelectedTab] = useState(0);
    const tabs = ['Land Deformation Monitoring'];

    const renderTabContent = () => {
        switch (selectedTab) {
            case 0:
                return <div><Mission name='About Land Deformation Monitoring' image={dark1} description='
                
                
<ul class="space-y-4 text-left ">
<li class="flex items-center space-x-3 rtl:space-x-reverse">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-700"  viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
    <span>Individual configuration</span>
</li>
<li class="flex items-center space-x-3 rtl:space-x-reverse">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-700"  viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
    <span>No setup, or hidden fees</span>
</li>
<li class="flex items-center space-x-3 rtl:space-x-reverse">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-700"  viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
    <span>Team size: <span class="font-semibold">1 developer</span></span>
</li>
<li class="flex items-center space-x-3 rtl:space-x-reverse">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-700"  viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
    <span>Premium support: <span class="font-semibold">6 months</span></span>
</li>
<li class="flex items-center space-x-3 rtl:space-x-reverse">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-700"  viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
    <span>Free updates: <span class="font-semibold ">6 months</span></span>
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
    <div className="flex flex-wrap">
      <div
        className="relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?size=626&ext=jpg')",
          height: "300px",
          width: "100%",
        }}
      >
<div className='text-5xl font-bold  text-white align-middle justify-center'>
        <h2>Land Deformation Monitoring</h2>
        </div>
      </div>
  
   </div>
   
   <div className="flex root-container-separator px-14 pt-10">
                {tabs.map((tab, index) => (
                    <button key={index}
                        className={`py-2 px-2 w-55 text-lg font-semibold ${selectedTab === index ? 'root-container' : 'text-gray-500'}`}
                        onClick={() => setSelectedTab(index)}>
                        {tab}
                    </button>
                ))}
            </div>
            <div className="root-container-separator pb-10">{renderTabContent()}</div>



   <h2 className='text-center text-2xl font-bold pt-10 hover:text-pretty hover:underline'>Features of Land Deformation Monitoring</h2>
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