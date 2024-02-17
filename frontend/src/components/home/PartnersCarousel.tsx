import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/img/1.png"
import img2 from "../../assets/img/2.png"
import img3 from "../../assets/img/3.png"
import img4 from "../../assets/img/4.png"
import img5 from "../../assets/img/5.png"
import img6 from "../../assets/img/6.png"
import iceYe from "../../assets/img/ICEYE_white.png"
// import veng_white from "../../assets/img/veng_white.png"
import planet_white from "../../assets/img/planet_white.png"
import Satellogic_white from "../../assets/img/Satellogic_white.png"
import restec_white from "../../assets/img/restec_white.png"  

interface PartnerProps {
  currentTheme: string;
}

function PartnersCarousel(props: PartnerProps) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




  return (
    <div className="align-middle root-container px-14 py-10">
      <h3 className=" text-4xl mb-2">Our Amazing Partners</h3>
      <div className="border-t-2 border-blue-900 "></div>

      <Slider {...settings} className="py-6 flex justify-center md:flex">

        <div className="w-full blue-border h-[24vh] hover:transform hover:scale-110 duration-300 md:flex justify-center">
          <img src={props.currentTheme === 'theme-white' ? img1 : planet_white} alt="img" className="ml-[12vh] mt-[6vh] h-2/4  green-border mb-1" />
        </div>
        <div className="w-full blue-border h-[24vh] hover:transform hover:scale-110 duration-300  md:flex justify-center">
          <img src={props.currentTheme === 'theme-white' ? img2 : iceYe} alt="img" className="ml-[9vh] mt-[6vh] h-2/4 green-border" />
        </div>
        <div className="w-full blue-border h-[24vh] hover:transform hover:scale-110 duration-300  md:flex justify-center">
          <img src={ img3 } alt="img" className="ml-[9vh] mt-[6vh] h-2/4 green-border " />
        </div>
        <div className="w-full blue-border  h-[24vh] hover:transform hover:scale-110 duration-300  md:flex justify-center">
          <img src={img4} alt="img" className="ml-[11vh] mt-[6vh] h-2/4 green-border " />
        </div>
        <div className="w-full blue-border h-[24vh] hover:transform hover:scale-110 duration-300  md:flex justify-center">
          <img src={props.currentTheme === 'theme-white' ? img5 : Satellogic_white} alt="img" className="ml-[9vh] mt-[8vh] h-1/3 green-border" />
        </div >
        <div className="w-full blue-border h-[24vh] hover:transform hover:scale-110 duration-300   md:flex justify-center">
          <img src={props.currentTheme === 'theme-white' ? img6 : restec_white} alt="img" className="ml-24 mt-9 h-2/4 green-border " />
        </div>
      </Slider>

    </div>
  )
}

export default PartnersCarousel