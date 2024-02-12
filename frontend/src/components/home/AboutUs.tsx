


const AboutUs = () => {
    return (
        <section className={`py-16 root-container-separator px-14 `}>
            <div className={`absolute top-0 left-0 w-full h-full  transform `}>
            </div>
            <div className="container mx-auto text-center relative">
                <h2 className={`text-4xl font-bold mb-8 text-center font-century-gothic `}>About Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-normal">
                    <div className="flex flex-col justify-center items-center px-4">
                        <p className={` font-century-gothic text-justify m-2`}>
                            At SUHORA, we're driven by a passion to make the universe's data accessible and actionable for those who need it most. Founded on the principle that space analytics should empower, not overwhelm, we've dedicated ourselves to demystifying satellite data for practical, everyday applications. </p>
                        <p className={` font-century-gothic text-justify m-2`}>
                            Our team, a blend of seasoned experts and innovative thinkers, is committed to breaking down complex information into clear, actionable insights that drive decision-making across various sectors. Suhora Technologies stands at the intersection of innovation and utility, reshaping how industries leverage the untapped potential of space data.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
