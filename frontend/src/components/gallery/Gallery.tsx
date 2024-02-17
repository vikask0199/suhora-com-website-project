import { useState, useEffect } from 'react';
import { Lightbox, initTE } from 'tw-elements';




function Gallery() {
  const [images, setImages] = useState<{ name: string; url: string }[]>([]);

  useEffect(() => {
    initTE({ Lightbox });
    const fetchImages = async () => {
      const imagesObject = await import.meta.glob('../../assets/img/*.{png,jpg,svg}');
      const imageList: { name: string; url: string }[] = [];

      for (const imagePath in imagesObject) {
        const imageUrl = await imagesObject[imagePath]();
        const imageName = imagePath.split('/').pop()?.split('.')[0] || '';
        imageList.push({ name: imageName, url: imageUrl.default });
      }

      setImages(imageList);
    };

    fetchImages();
  }, []);



  return (
    <>
      <div
        data-te-lightbox-init
        className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
        <div className="h-full w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
            data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
            alt="Table Full of Spices"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
            data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp"
            alt="Winter Landscape"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
            data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
            data-te-lightbox-disabled
            alt="Disabled image"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
        <div className="h-full w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp"
            data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/4.webp"
            alt="Place Royale Bruxelles"
            className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
        </div>
      </div>
    </>
  );
}

export default Gallery;
