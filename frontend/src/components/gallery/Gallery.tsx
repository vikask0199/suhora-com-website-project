
// import { useState, useEffect } from 'react';
import { Lightbox, initTE } from 'tw-elements';


// import img1 from "../../assets/satellite/agra_iceye_SLH.png"
import img3 from "../../assets/satellite/rotterdam_iceye_SL_colorized_resized.png"
import img2 from "../../assets/satellite/city_saocom_olf.png"
import img1 from '../../assets/satellite/optical-1_Turkey.jpg'
import img4 from '../../assets/satellite/optical-3_Bhama_askhed_reservoir.jpg'
import img5 from '../../assets/satellite/optical-2_Dubai.png'
import img6 from '../../assets/satellite/hero-5.jpg'
import img8 from '../../assets/satellite/city_saocom_olf.png'
import img10 from '../../assets/satellite/rotterdam_iceye_SL_colorized_resized.png'
// import img4 from "../../assets/satellite/rotterdam_iceye_SL.png"
// import img5 from "../../assets/satellite/sar_chennai_floods_iceye_SM_colorized_resized.jpg"
// import img6 from "../../assets/satellite/sar_chennai_floods_iceye_SM_colorized_resized.jpg"
import img7 from "../../assets/satellite/sar_chennai_floods_iceye_SM_colorized_resized.jpg"
// import img8 from "../../assets/satellite/sar_rotterdam_iceye_SL_colorized.png"
import img9 from "../../assets/satellite/sar_lhonak_new_iceye-nez_colorized2.png"
// import img10 from "../../assets/satellite/sar_lhonak_new_iceye-nez_colorized2.png"
import img11 from "../../assets/satellite/Taj Mahal_ICEYE_Dwell.jpg"
// import img12 from "../../assets/satellite/defense - Copy.jpg"
import { useEffect } from "react"
function Gallery() {
  // const [images, setImages] = useState<{ name: string; url: string }[]>([]);

  // useEffect(() => {
  //   initTE({ Lightbox });
  //   const fetchImages = async () => {
  //     const imagesObject = await import.meta.glob('../../assets/img/*.{png,jpg,svg}');
  //     const imageList: { name: string; url: string }[] = [];

  //     for (const imagePath in imagesObject) {

  //       const imageUrl = await imagesObject[imagePath]();
  //       const imageUrl = await imagesObject[imagePath]() as any;
  //       const imageName = imagePath.split('/').pop()?.split('.')[0] || '';
  //       imageList.push({ name: imageName, url: imageUrl.default });
  //     }

  //     setImages(imageList);
  //   };

  //   fetchImages();
  // }, []);

  useEffect(()=>{
    initTE({ Lightbox });
  },[])



const getImageName = (imageUrl:any) => {
  return imageUrl.split('/').pop().split('.')[0];
};
  return (
    <div className='px-14 py-12 root-container min-h-96'>
          <div className="relative flex flex-col items-center">
                  
                  <h1 className="md:text-3xl text-2xl font-bold leading-tight"> Our <span
                          className="text-[#1266a0]"> Gallery
                      </span> </h1>
                  <div className="flex w-28 mt-1 mb-10 overflow-hidden rounded">
                      <div className="flex-1 h-2 bg-blue-200">
                      </div>
                      <div className="flex-1 h-2 bg-[#1266a0]">
                      </div>
                      <div className="flex-1 h-2 bg-[#174773]">
                      </div>
                  </div>
              </div>
      <div
        data-te-lightbox-init
        className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0 ">
        <div className="h-full w-full">
          <img
            src={img1}
            data-te-img={img1}
            alt={getImageName(img1)}
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full">
          <img
            src={img2}
            data-te-img={img2}
            alt={getImageName(img2)}
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full">
          <img
            src={img3}
            data-te-img={img3}
            data-te-lightbox-disabled
            alt={getImageName(img3)}
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src={img4}
            data-te-img={img4}
            alt={getImageName(img4)}
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src={img5}
            data-te-img={img5}
            alt={getImageName(img5)}
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src= {img6}
            data-te-img={img6}
            alt={getImageName(img6)}
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src= {img7}
            data-te-img={img7}
            alt={getImageName(img7)}
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src={img8}
            data-te-img={img8}
            alt={getImageName(img8)}
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src={img9}
            data-te-img= {img9}
            alt={getImageName(img9)}
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src={img10}
            data-te-img= {img10}
            alt={getImageName(img10)}
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src={img11}
            data-te-img= {img11}
            alt={getImageName(img11)}
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        {/* <div className="h-full w-full ">
          <img
            src={img12}
            data-te-img= {img12}
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div> */}
        
      </div>
    </div>
  );
}

export default Gallery;
