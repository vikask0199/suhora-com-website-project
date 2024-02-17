import { useState } from "react";
import optical1 from '../../assets/img/optical-1_Turkey.jpg'
import optical2 from '../../assets/img/optical-2_Dubai.png'
import optical3 from '../../assets/img/optical-3_Bhama_askhed_reservoir.jpg'
// import sar1 from '../../assets/img/rotterdam_iceye_SL.png'
// import sar2 from '../../assets/img/agra_iceye_SLH.png'
// import sar3 from '../../assets/img/city_saocom_olf.png'
import sar1 from '../../assets/img/sar_chennai_floods_iceye_SM_colorized_resized.jpg'
import sar2 from '../../assets/img/sar_lhonak_new_iceye-nez_colorized2.png'
import sar3 from '../../assets/img/rotterdam_iceye_SL_colorized_resized.png'
// import sar4 from '../../assets/img/Taj Mahal_ICEYE_Dwell.jpg'
import thermal1 from '../../assets/img/Jamnagar_oilrefinery.png'
import thermal2 from '../../assets/img/Tenchhekha.png'
import thermal3 from '../../assets/img/padkhvab-e-Shaneh.png'
import { Link } from "react-router-dom";
const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  return (
    <div className="root-container px-14 py-12">
      <section className="">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto text-center">
                {/* <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Capabilities
                </span> */}
                <h2 className="text-dark mb-8 text-3xl  font-bold">
                  Imaging Capabilities
                </h2>
                {/* <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p> */}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-6 space-x-1">
                <li className="mb-1 ">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 hover:bg-[#1266a0] hover:text-white ${showCard === "all"
                      ? "activeClasses bg-[#174773] text-white"
                      : "inactiveClasses "
                      }`}
                  >
                    All
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("optical")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 hover:bg-[#1266a0] hover:text-white ${showCard === "optical"
                      ? "activeClasses  bg-[#174773] text-white"
                      : "inactiveClasses "
                      }`}
                  >
                    Optical
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("sar")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 hover:bg-[#1266a0] hover:text-white ${showCard === "sar"
                      ? "activeClasses  bg-[#174773] text-white"
                      : "inactiveClasses "
                      }`}
                  >
                    SAR
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("thermal")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 hover:bg-[#1266a0] hover:text-white ${showCard === "thermal"
                      ? "activeClasses  bg-[#174773] text-white "
                      : "inactiveClasses "
                      }`}
                  >
                    Thermal
                  </button>
                </li>
                {/* <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-primary"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary "
                    }`}
                  >
                    Development
                  </button>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 justify-center">
            <PortfolioCard
              ImageHref={optical1}
              category="Optical"
              title="Kahramanmaraş, Turkey"
              button="Optical (0.5m SkySat)"
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={optical2}
              category="Optical"
              title="Dubai, UAE"
              button="Optical (0.7m Satellogic)"
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={optical3}
              category="Optical"
              title="Bhama Askhed Reservoir"
              button="Optical (3.5m PlanetScope) "
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={sar1}
              category="SAR"
              title="Chennai (Floods), India"
              button="SAR (25cm ICEYE)"
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={sar2}
              category="SAR"
              title="South Lhonak Lake, India"
              button="SAR (25cm ICEYE)"
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={sar3}
              category="SAR"
              title="Rotterdam, Netherlands"
              button="SAR (25cm ICEYE)"
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={thermal1}
              category="Thermal"
              title="Oil Refinery, Jamnagar"
              button="Thermal (3.5m Hotsat-1)"
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={thermal2}
              category="Thermal"
              title="Tenchhekha, Bhutan"
              button="Thermal (3.5m Hotsat-1)"
              // buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={thermal3}
              category="Thermal"
              title="Lowgar, Afghanistan"
              button="Thermal (3.5m Hotsat-1)"
              // buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
      <Link to="/open-gallery">
        <button >View Gallery</button>
      </Link>
    </div>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  // buttonHref,
}: {
  showCard: string,
  category: string,
  ImageHref: string,
  title: string,
  button: string,
  // buttonHref: string,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 root-container ${showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
          }`}
      >
        <div className="relative mb-12 hover:transform hover:scale-105 duration-300">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-10 rounded-lg cards dark:bg-dark-2 py-[10px] px-2 text-center shadow-portfolio dark:shadow-box-dark">
            {/* <span className="text-primary mb-1 block text-sm font-medium">
              {category}
            </span> */}
            <span
              className=" inline-block pb-2 text-sm font-medium transition "
            >
              {button}
            </span>
            <h3 className=" mb-2 text-xl font-bold">{title}</h3>


          </div>
        </div>
      </div>
    </>
  );
};
