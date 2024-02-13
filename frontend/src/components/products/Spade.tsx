import ProductsPageCards from './ProdcutsPageCards'; 
import Mission from "./MainContent";
import { useState } from "react";
// import TailoredCards from '../home/TailoredCards';
import dark1 from '../../assets/img/dark_bg.jpg'
import light1 from '../../assets/img/light_bg.png'
const Spade = () => {
  const [selectedTab, setSelectedTab] = useState(0);
    const tabs = ['SPADE'];

    const renderTabContent = () => {
        switch (selectedTab) {
            case 0:
                return <div><Mission /></div>;
      
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
          height: "400px",
          width: "100%",
        }}
      >

      </div>

      {/* **** About us with img   ****** */}
      {/* first component */}
     

     
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



   <h2 className='text-center text-2xl font-bold pt-10'>Features of SPADE</h2>
            <div className='flex flex-wrap justify-center py-10'>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* <ProductsCard image={dark1} name="SPADE" description="A seamless SaaS platform delivering comprehensive access to multi-sensor satellite
  data for a spectrum of commercial applications." link="/products/spade" /> */}
  <ProductsPageCards image={dark1} name="Integrated Multi-Sensor Platform" description="SPADE provides an integrated platform for constant monitoring using a robust optical and SAR satellite constellation"  />
              <ProductsPageCards image={light1} name="Reliability and Security" description="Ensures secure data transmission with guaranteed collection, offering dependable insights round-the-clock" />
              <ProductsPageCards image={dark1} name="Cost-Effectiveness and Accessibility" description="Offers the most cost-effective satellite data service in the market with easy B2B API integration and strategic expansion plans"  />
            </div>
          </div>
          <h2 className='text-center text-2xl font-bold '>Industires</h2>
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