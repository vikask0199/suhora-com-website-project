import './Custome.css';
const Serve = () => {
  return (
    <section className="py-10 px-14 root-container">
      <div className="container mx-auto flex">
        <div className=" flex flex-wrap w-1/2">
          <div className="w-full px-4">
            <div className="mx-auto mb-12  text-center lg:mb-20">
              <span className="mb-2 block text-3xl font-semibold text-primary">
                Industry We Serve
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Services
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[70vh] pb-14 flex items-center justify-center">
          <div className="relative w-64 h-64">
            <div className='hex pos0 hover:transform hover:scale-110 duration-200'>
              <div className="absolute inset-0 flex justify-center items-center opacity-0  hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center">Defense & Intelligence</p>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Serve;
