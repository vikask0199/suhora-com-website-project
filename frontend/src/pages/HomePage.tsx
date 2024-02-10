import AboutUs from "../components/home/AboutUs"
import HomeHeader from "../components/home/HomeHeader"
import PartnersCarousel from "../components/home/PartnersCarousel"
import Products from "../components/home/Products"
import Serve from "../components/home/Serve"
import Tailored from "../components/home/Tailored"


const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <AboutUs />
      <Serve />
      <Products />
      <Tailored />
      <PartnersCarousel />
    </>
  )
}

export default HomePage