import rrr from '../../assets/img/mission2.jpg'
import { ArrowRightIcon } from '@heroicons/react/solid';
// import cc from '../../assets/img/mission.jpg'

const Mission = () => {
    return (
        <>
            <div className='mx-14 root-container'>
                <div className='flex gap-4 h-96'>
                    <div className="p-5 w-1/2">
                        <a href="#">
                            <h5 className="mb-5 text-2xl font-bold tracking-tight ">Igniting Purpose</h5>
                        </a>
                        <p className="mb-3 font-normal flex justify-center items-center  ">Our mission is to empower decision-makers with precise, timely space analytics,
                            transforming multi-sensor satellite data into actionable insights for defense, disaster
                            management, and beyond, fostering a safer, well-informed, and resilient world.</p>
                        <div className='flex justify-end'>
                        <a href="#" className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1266a0] rounded-lg hover:bg-[#174773] focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Request a Demo <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </a>
                        </div>
                    </div>

                    <div className="w-1/2 flex items-center justify-center p-5 hover:transform hover:scale-105 duration-300">
                        {/* <a href="#" className='h-full w-full'> */}
                            <img className="rounded-lg h-full w-full object-cover" src={rrr} alt="" />
                        {/* </a> */}
                        {/* <div className="">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">.</p>
                        </div> */}
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Mission