import img1 from "../../assets/img/hero-1.jpg"
import img2 from "../../assets/img/hero-4.jpg"
import img3 from "../../assets/img/hero-5.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeHeader = () => {
    const settings = {
        dots: true,
        lazyLoad: true as any,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        pauseOnHover: false
    };


    return (
        <div className="overflow-hidden">
            <Slider {...settings} >
                <div className="relative text-center">
                    <img className="h-[80vh] w-[100vw]" src={img3} />
                    <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white">Project Going On</div>
                    <div className="mt-[3vh] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white">Ok this is good</div>

                </div>
                <div className="relative text-center ">
                    <img className="h-[80vh] w-[100vw]" src={img2} />
                    <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white">Project Going On</div>
                    <div className="mt-[3vh] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white">Ok this is good</div>
                </div>
                <div className="relative text-center ">
                    <img className="h-[80vh] w-[100vw]" src={img1} />
                    <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white">Project Going On</div>
                    <div className="mt-[3vh] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white">Ok this is good</div>
                </div>
            </Slider>
        </div>

    )
}
export default HomeHeader