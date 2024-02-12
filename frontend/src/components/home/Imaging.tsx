import React, { useState } from "react";
import optical1 from '../../assets/img/optical-1_Turkey.jpg'
import optical2 from '../../assets/img/optical-2_Dubai.png'
import sar1 from '../../assets/img/rotterdam_iceye_SL.png'
import sar2 from '../../assets/img/agra_iceye_SLH.png'
import thermal1 from '../../assets/img/Jamnagar_oilrefinery.png'
import thermal2 from '../../assets/img/Tenchhekha.png'
const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  return (
    <div className="root-container px-14">
      <section className="pt-10 pb-12 lg:pt-[120px] lg:pb-[90px] ">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Capabilities
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Imaging Services
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-6 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary"
                        : "inactiveClasses "
                    }`}
                  >
                    All
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("optical")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "optical"
                        ? "activeClasses bg-primary"
                        : "inactiveClasses "
                    }`}
                  >
                    Optical
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("sar")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "sar"
                        ? "activeClasses "
                        : "inactiveClasses "
                    }`}
                  >
                    SAR
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("thermal")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "thermal"
                        ? "activeClasses "
                        : "inactiveClasses text-body-color "
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
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref={optical1}
              category="Optical"
              title="Kahramanmaraş, Turkey"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={optical2}
              category="Optical"
              title="Dubai, UAE"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={sar2}
              category="SAR"
              title="Agra"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={sar1}
              category="SAR"
              title="Rotterdam"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={thermal1}
              category="Thermal"
              title="Oil Refinery, Jamnagar"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={thermal2}
              category="Thermal"
              title="Tenchhekha, Bhutan"
              button="View Details "
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
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
  buttonHref,
}:{ showCard: string,
  category: string,
  ImageHref: string,
  title: string,
  button: string,
  buttonHref: string,}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 root-container ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12 hover:transform hover:scale-105 duration-300">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg cards dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className=" mb-5 text-xl font-bold">{title}</h3>
            {/* <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};
