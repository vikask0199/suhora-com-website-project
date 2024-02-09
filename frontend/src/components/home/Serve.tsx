import React from 'react';
import './Custome.css'
const Serve = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] root-container-alt">
    <div className="container mx-auto ">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-3xl font-semibold text-primary">
             Industry We Serve
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Our Services
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
    <div className="flex justify-center items-center h-screen root-container-alt">
      <div className="relative w-64 h-64">
        {/* Top */}
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-0"> */}
        <div className='hex pos0 hover:transform hover:scale-110 duration-200'>
        <div className="absolute inset-0 flex justify-center items-center opacity-0  hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-center">Defense & Intelligence</p>
    </div>
        </div>
        {/* Bottom */}
        <div className="hex1 pos1 hover:transform hover:scale-110 duration-200">
        <div className="absolute inset-0 flex justify-center items-center opacity-0  hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-center flex-wrap">Disaster & Insurance</p>
    </div>
        </div>
        <div className="hex2 pos2 hover:transform hover:scale-110 duration-200">
        <div className="absolute inset-0 flex justify-center items-center opacity-0  hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-center">Renewable Energy</p>
    </div>
        </div>
        <div className="hex3 pos3 hover:transform hover:scale-110 duration-200">
        <div className="absolute inset-0 flex justify-center items-center opacity-0  hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-center">Forestry</p>
    </div>
        </div>
        <div className="hex4 pos4 hover:transform hover:scale-110 duration-200">
        <div className="absolute inset-0 flex justify-center items-center opacity-0  hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-center">Mining</p>
    </div>
        </div>
        <div className="hex5 pos5 hover:transform hover:scale-110 duration-200">
        <div className="absolute inset-0 flex justify-center items-center opacity-0  hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-center">Agriculture</p>
    </div>
        </div>
        <div className="hex6 pos6 hover:transform hover:scale-110 duration-200">
        <div className="absolute inset-0 flex justify-center items-center opacity-0  hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-center">Infrastructure</p>
    </div>
        </div>
        {/* <div className="hex7 pos7">
        </div> */}
        {/* Left top */}
       
      </div>
    </div>
    </div>
    </section>
  );
}

export default Serve;
