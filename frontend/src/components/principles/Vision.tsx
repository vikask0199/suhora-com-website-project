import rrr from '../../assets/img/vision1.jpg'

const Vision = () => {
    return (
        <>
            <div className='root-container md:mx-14 mx-5 '>
                <div className='flex gap-4'>
                    <div className="p-5 md:w-1/2">
                        <a href="#">
                            <h5 className="mb-3 text-2xl font-bold tracking-tight ">Unveiling Tomorrow</h5>
                        </a>
                        <p className="mb-3 font-normal text-justify ">Suhora imagines a future where space analytics are woven into the fabric of our world,
                            transforming satellite insights into powerful tools that enhance lives, promote global safety,
                            sustainability, and drive strategic advancement. We aim to make space data universally
                            accessible, establishing it as a key element in shaping a more informed and improved future.</p>
                        {/* <a href="#" className=" mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                        </a> */}
                    </div>

                    <div className="w-1/2 md:flex items-center hidden justify-center p-5 hover:transform hover:scale-105 duration-300">
                        {/* <a href="#" className='h-full w-full'> */}
                            <img className="rounded-lg h-full w-full object-cover" src={rrr} alt="" />
                        {/* </a> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vision