import React from 'react';
import ProductsCard from './ProductsCard'; // Adjust the path as per your project structure
//create interface for products
// import SPADE from '../../assets/img/dark_bg.jpg';
const Products = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] root-container-alt">
    <div className="container mx-auto ">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-3xl font-semibold text-primary">
              Our Products
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              What We Offer
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
    <div className='flex flex-wrap mx-auto'>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 root-container-alt">
      <ProductsCard image = "src/assets/img/dark_bg.jpg" name = "SAPDE" description = "/" link =  "/" />
      <ProductsCard image = "src/assets/img/light_bg.png" name = "LANCE" description = "/" link =  "/" />
      
      <ProductsCard image = "src/assets/img/dark_bg.jpg" name = "SID" description = "/" link =  "/" />
      
      {/* Add more ServiceCard components as needed */}
    </div>
    </div>
    </div>
    </section>
  );
}

export default Products;
