// import ProductsCard from './ProductsCard'; 
import TailoredCards from './TailoredCards';

const Tailored = () => {
  return (
    <section className="py-10 px-14 root-container-separator">
      <div className="container mx-auto">
        <div className=" flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 text-center lg:mb-20">
              {/* <span className="mb-2 block text-3xl font-semibold text-primary">
                Our Services
              </span> */}
              <h2 className="mb-3 text-3xl font-bold leading-[1.2]  sm:text-4xl md:text-[40px]">
                Tailored Services
              </h2>
              {/* <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p> */}
            </div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TailoredCards image="src/assets/img/dark_bg.jpg" name="Hydrology" description="/" link="/" />
            <TailoredCards image="src/assets/img/light_bg.png" name="Terrain Mapping" description="/" link="/" />
            <TailoredCards image="src/assets/img/dark_bg.jpg" name="Land Deformation Monitoring" description="/" link="/" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tailored;
