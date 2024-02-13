import AboutUs from "../components/home/AboutUs"
import HomeHeader from "../components/home/HomeHeader"
import PartnersCarousel from "../components/home/PartnersCarousel"
import Products from "../components/home/Products"
import Serve from "../components/home/Serve"
import Tailored from "../components/home/Tailored"
import Imaging from "../components/home/Imaging"
import Services from "../components/home/Services"

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <AboutUs />
      <Imaging />
      <Services />
      <Serve />
      <Products />
      <Tailored />
      <PartnersCarousel />
    </>
  )
}

export default HomePage