
import rrr from '../../assets/img/vision1.jpg'
// import tt from '../../assets/img/vission2.jpg'
const Vision = () => {
  return (
    <>
    <div className='principle p-4'>
    <div className='ml-[10vh] mr-[10-vh]  flex gap-4  '>
    {/* <div className="max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-[10vh]"> */}
   
    <div className="p-5 w-[50%] mt-[17vh]">
        <a href="#">
            <h5 className="mb-3 text-2xl font-bold tracking-tight ">Unveiling Tomorrow</h5>
        </a>
        <p className="mb-3 font-normal  ">Suhora imagines a future where space analytics are woven into the fabric of our world,
transforming satellite insights into powerful tools that enhance lives, promote global safety,
sustainability, and drive strategic advancement. We aim to make space data universally
accessible, establishing it as a key element in shaping a more informed and improved future.</p>
        <a href="#" className=" mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             
        </a>
    {/* </div> */}
</div>

<div className="w- [50%]   p-10 dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={rrr} alt="" />
    </a>
    <div className="p-5">
        {/* <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
        {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            
        </a> */}
    </div>
</div>


    </div>
    </div>
    


    </>
  )
}

export default Vision