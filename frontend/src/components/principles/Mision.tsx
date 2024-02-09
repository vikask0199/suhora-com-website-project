import rrr from '../../assets/img/mission2.jpg'
// import cc from '../../assets/img/mission.jpg'

const Mision = () => {
  return (
   <>
   <div className='principle p-4'>
   <div className=' ml-[10vh] mr-[10-vh] flex gap-4 ' >
   <div className="p-5 w-[50%] mt-[20vh]">
        <a href="#">
            <h5 className="mb-5 text-2xl font-bold tracking-tight ">Igniting Purpose</h5>
        </a>
        <p className="mb-3 font-normal flex justify-center items-center  ">Our mission is to empower decision-makers with precise, timely space analytics,
              transforming multi-sensor satellite data into actionable insights for defense, disaster
             management, and beyond, fostering a safer, well-informed, and resilient world.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             
        </a>
    </div>
   


<div className="w- [50%]  p-10 dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={rrr} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">.</p>
        {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             
        </a> */}
    </div>
</div>
{/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={cc} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            
        </a>
    </div>
</div> */}

    </div>
   </div>
  
   </>
  )
}

export default Mision