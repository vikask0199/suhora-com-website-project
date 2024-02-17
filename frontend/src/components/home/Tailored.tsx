// import ProductsCard from './ProductsCard'; 
import TailoredCards from './TailoredCards';
import dark1 from '../../assets/img/dark_bg.jpg';
import light1 from '../../assets/img/light_bg.png';
const Tailored = () => {
  return (
    <section className="py-12 md:px-14 px-5 root-container-separator">
      <div className="container mx-auto">
        <div className=" flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto text-center">
              {/* <span className="mb-2 block text-3xl font-semibold text-primary">
                Our Services
              </span> */}
              <h2 className="mb-8 text-3xl font-bold">
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
            <TailoredCards image={dark1} name="Hydrology" description="/" link="/services/hydrology" />
            <TailoredCards image={light1} name="Terrain Mapping" description="/" link="/services/terrain-mapping" />
            <TailoredCards image={dark1} name="Land Deformation Monitoring" description="/" link="/services/land-deformation-monitoring" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tailored;
