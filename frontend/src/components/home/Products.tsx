import ProductsCard from './ProductsCard';
import dark1 from '../../assets/img/dark_bg.jpg';
import light1 from '../../assets/img/light_bg.png';
const Products = () => {
  return (
    <section className="py-12 md:px-14 px-5 root-container flex flex-col w-full items-center justify-center ">
      <div className="w-full">
        <div className=" flex flex-wrap ">
          <div className="w-full">
            <div className=" text-center mb-8">

              <div className="relative flex flex-col items-center">

                <h1 className="md:text-3xl text-2xl font-bold leading-tight"> Our <span
                  className="text-[#1266a0]"> Products
                </span> </h1>
                <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-blue-200">
                  </div>
                  <div className="flex-1 h-2 bg-[#1266a0]">
                  </div>
                  <div className="flex-1 h-2 bg-[#174773]">
                  </div>
                </div>
              </div>


              {/* <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p> */}
            </div>
          </div>
        </div>
        <div className='w-full '>
          <div className="flex  justify-center flex-col md:flex-row gap-6 ">
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
