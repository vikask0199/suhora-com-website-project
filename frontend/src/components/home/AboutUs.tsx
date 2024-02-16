


const AboutUs = () => {
    return (
        <section className={`py-12 root-container-separator px-14 scroll-smooth focus:scroll-auto`}>
            <div className="mx-auto text-center relative">
                <h2 className={`text-3xl font-bold mb-6 text-center font-century-gothic scroll-smooth focus:scroll-auto `}>About Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-normal">
                    <div className="flex flex-col justify-center items-center px-4">
                        <p className={` font-century-gothic text-justify`}>
                            At SUHORA, we're driven by a passion to make the universe's data accessible and actionable for those who need it most. Founded on the principle that space analytics should empower, not overwhelm, we've dedicated ourselves to demystifying satellite data for practical, everyday applications. </p>
                        <p className={` font-century-gothic text-justify mt-4`}>
                            Our team, a blend of seasoned experts and innovative thinkers, is committed to breaking down complex information into clear, actionable insights that drive decision-making across various sectors. Suhora Technologies stands at the intersection of innovation and utility, reshaping how industries leverage the untapped potential of space data.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
