import { useState, useEffect } from 'react';
import { Lightbox, initTE } from 'tw-elements';

// Initialize tw-elements
initTE({ Lightbox });




function Gallery() {
  const [images, setImages] = useState<{ name: string; url: string }[]>([]);

  useEffect(() => {
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
      <div className='flex gap-6 px-14 py-10 flex-wrap'>
        {images.map((image, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='h-40 w-52 border relative'>
              <img src={image.url} alt={`image-${index}`} className='absolute inset-0 w-full h-full object-cover object-center' />
            </div>
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
