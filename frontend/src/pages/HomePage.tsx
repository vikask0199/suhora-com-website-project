import AboutUs from "../components/home/AboutUs"
import HomeHeader from "../components/home/HomeHeader"
import Imaging from "../components/home/Imaging"
import PartnersCarousel from "../components/home/PartnersCarousel"
import Products from "../components/home/Products"
import SliderAndTabs from "../components/home/SliderAndTabs"
import Tailored from "../components/home/Tailored"

interface homeProps {
  currentTheme: string,
}

const HomePage = (props: homeProps) => {

  return (
    <>
      <HomeHeader />
      <AboutUs />
      <Imaging />
      <SliderAndTabs />
      <Products />
      <Tailored />
      <PartnersCarousel currentTheme={props.currentTheme} />
    </>
  )
}

export default HomePage