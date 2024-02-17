import img1 from "../../assets/img/hero-1.png"
import img2 from "../../assets/img/hero-4.jpg"
import img3 from "../../assets/img/hero-5.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TypeWriterText from "./TypeWriterText";

const ImageSlider = () => {
  const settings = {
    dots: false,
    lazyLoad: true as any,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    pauseOnHover: false,
    arrows: true,
    autoplaySpeed: 3500

  };

  return (
    <div className="relative overflow-hidden ">
      <div className="absolute z-10 top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white">
        <div className="mt-[3vh] text-5xl font-semibold">
          <span>Space </span>
          <TypeWriterText text="Analytics" />
          <span> Simplified</span>
        </div>
      </div>
      <Slider {...settings} >
        <div className="relative text-center">
          <img className="" src={img3} />
        </div>
        <div className="relative text-center">
          <img className="" src={img2} />
        </div>
        <div className="relative text-center">
          <img className="" src={img1} />
        </div>
      </Slider>
    </div>
  )
}
export default ImageSlider