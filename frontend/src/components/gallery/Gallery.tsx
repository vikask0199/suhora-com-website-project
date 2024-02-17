// import { useState, useEffect } from 'react';
// import { Lightbox, initTE } from 'tw-elements';




function Gallery() {
  // const [images, setImages] = useState<{ name: string; url: string }[]>([]);

  // useEffect(() => {
  //   initTE({ Lightbox });
  //   const fetchImages = async () => {
  //     const imagesObject = await import.meta.glob('../../assets/img/*.{png,jpg,svg}');
  //     const imageList: { name: string; url: string }[] = [];

  //     for (const imagePath in imagesObject) {
  //       const imageUrl = await imagesObject[imagePath]();
  //       const imageName = imagePath.split('/').pop()?.split('.')[0] || '';
  //       imageList.push({ name: imageName, url: imageUrl.default });
  //     }

  //     setImages(imageList);
  //   };

  //   fetchImages();
  // }, []);



  return (
    <div className='px-14 py-12 root-container'>
      <div
        data-te-lightbox-init
        className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0 ">
        <div className="h-full w-full">
          <img
            src="../../assets/satellite/agra_iceye_SLH.png"
            data-te-img="../../assets/satellite/agra_iceye_SLH.png"
            alt="Table Full of Spices"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full">
          <img
            src="../../assets/satellite/city_saocom_olf.png"
            data-te-img="../../assets/satellite/city_saocom_olf.png"
            alt="Winter Landscape"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full">
          <img
            src="../../assets/satellite/rotterdam_iceye_SL.png"
            data-te-img="../../assets/satellite/rotterdam_iceye_SL.png"
            data-te-lightbox-disabled
            alt="Disabled image"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/rotterdam_iceye_SL_colorized_resized.png"
            data-te-img="../../assets/satellite/rotterdam_iceye_SL_colorized_resized.png"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/sar_chennai_floods_iceye_SM_colorized_resized.jpg"
            data-te-img="../../assets/satellite/sar_chennai_floods_iceye_SM_colorized_resized.jpg"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/sar_chennai_floods_iceye_SM_colorized_resized.jpg"
            data-te-img="../../assets/satellite/sar_chennai_floods_iceye_SM_colorized_resized.jpg"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/sar_chennai_floods_iceye_SM_colorized_resized.jpg"
            data-te-img="../../assets/satellite/sar_chennai_floods_iceye_SM_colorized_resized.jpg"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/sar_rotterdam_iceye_SL_colorized.png"
            data-te-img="../../assets/satellite/sar_rotterdam_iceye_SL_colorized.png"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/sar_lhonak_new_iceye-nez_colorized2.png"
            data-te-img= "../../assets/satellite/sar_lhonak_new_iceye-nez_colorized2.png"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/sar_lhonak_new_iceye-nez_colorized2.png"
            data-te-img= "../../assets/satellite/sar_lhonak_new_iceye-nez_colorized2.png"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/Taj Mahal_ICEYE_Dwell.jpg"
            data-te-img= "../../assets/satellite/Taj Mahal_ICEYE_Dwell.jpg"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/defense - Copy.jpg"
            data-te-img= "../../assets/satellite/defense - Copy.jpg"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/defense.jpg"
            data-te-img= "../../assets/satellite/defense.jpg"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/disaster.jpg"
            data-te-img= "../../assets/satellite/disaster.jpg"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/hero-1.png"
            data-te-img= "../../assets/satellite/hero-1.png"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/hero-4.jpg"
            data-te-img= "../../assets/satellite/hero-4.jpg"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/hero-5.jpg"
            data-te-img= "../../assets/satellite/hero-5.jpg"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/infra.jpg"
            data-te-img= "../../assets/satellite/infra.jpg"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/optical-1_Turkey.jpg"
            data-te-img= "../../assets/satellite/optical-1_Turkey.jpg"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/optical-2_Dubai.png"
            data-te-img= "../../assets/satellite/optical-2_Dubai.png"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full ">
          <img
            src="../../assets/satellite/optical-3_Bhama_askhed_reservoir.jpg"
            data-te-img= "../../assets/satellite/optical-3_Bhama_askhed_reservoir.jpg"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>

      </div>
    </div>
  );
}

export default Gallery;
