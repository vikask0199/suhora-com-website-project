import React from 'react';



const Services = () => {
    // Determine gradient colors based on the theme
    // const gradientColors = props.currentTheme === 'theme-dark' ? 'from-black to-blue-800' : 'from-white to-blue-300';

    return (
        <section className={`py-16 root-container-alt`}>
            {/* 3D Background Effect */}
            <div className={`absolute top-0 left-0 w-full h-full  transform `}></div>

            <div className="container mx-auto text-center relative">
                <h2 className={`text-4xl font-bold mb-8 text-center font-century-gothic `}>Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-normal">
                    <div className="flex flex-col justify-center items-center px-4">
                        {/* <img src="/path/to/image" alt="About Us" className="w-full md:max-w-md rounded-lg shadow-lg mb-4" /> */}
                        <p className={` font-century-gothic text-justify m-2`}>
                        At SUHORA, we specialize in earth observation, remote sensing, and SAR image processing. With a passion for understanding our planet and leveraging cutting-edge advancements in remote sensing, we strive to provide important insights and solutions to address customer needs across the globe.
                        </p>
                        <p className={` font-century-gothic text-justify m-2 weigh`}>
Our mission is to harness the power of Earth observation and SAR data to drive positive change and promote sustainable development across various industries and sectors. We firmly believe that by exploring, monitoring, and analyzing the Earth’s surface from above, we can unlock a wealth of knowledge that empowers decision-makers, researchers, and organizations worldwide.
</p>
<p className={` font-century-gothic text-justify m-2`}>
At the core of our services, we offer comprehensive Earth observation solutions tailored to specific needs. Whether it’s energy industry, environmental monitoring, disaster management, agriculture, or climate change analysis, our data-driven insights and advanced analytics enable informed decision-making and foster sustainable practices.
</p><p className={` font-century-gothic text-justify m-2`}>
Our expertise in Synthetic Aperture Radar technology sets us apart. SAR enables us to penetrate atmospheric conditions, such as cloud cover and darkness, providing high-resolution, all-weather imaging capabilities. By utilizing SAR data, we deliver detailed and accurate information about the Earth’s surface, including terrain topography, vegetation distribution, and even subtle changes in land features over time.
</p>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
