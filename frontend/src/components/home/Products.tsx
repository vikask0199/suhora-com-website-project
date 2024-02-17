import ProductsCard from './ProductsCard';
import dark1 from '../../assets/img/dark_bg.jpg';
import light1 from '../../assets/img/light_bg.png';
const Products = () => {
  return (
    <section className="py-12 md:px-14 px-5 root-container">
      <div className="container mx-auto">
        <div className=" flex flex-wrap">
          <div className="w-full px-4">
            <div className=" text-center mb-8">
              {/* <span className="mb-2 block text-3xl font-semibold text-primary">
                Our Products
              </span> */}
              <h2 className=" text-3xl font-bold">
                Our Products
              </h2>
              {/* <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p> */}
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* <ProductsCard image={dark1} name="SPADE" description="A seamless SaaS platform delivering comprehensive access to multi-sensor satellite
data for a spectrum of commercial applications." link="/products/spade" /> */}
            <ProductsCard image={dark1} name="SPADE" description="A seamless SaaS platform delivering comprehensive access to multi-sensor satellite
data for a spectrum of commercial applications." link="/products/spade" />
            <ProductsCard image={light1} name="LANCE" description="Advanced, near real-time ISR solutions, elevating maritime and land surveillance
for defense and intelligence sectors." link="/products/lance" />
            <ProductsCard image={dark1} name="SID" description="Integrated space analytics and rapid satellite data converge to enhance disaster response
and streamline insurance management." link="/products/sid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
