
// import rrr from '../../assets/img/value.jpg'
import cc from '../../assets/img/value4.jpg'
const Vaalue = () => {
    return (
        <>
            <div className='root-container mx-14'>
                <div className='flex gap-4 h-96' >
                    <div className="p-5 w-1/2">
                        <a href="#">
                            <h5 className="mb-3 text-2xl font-bold tracking-tight ">Empowering Collective Progress</h5>
                        </a>
                        <p className="mb-3 font-normal ">We at Suhora are united by a shared commitment to
                            collective progress, where every individual effort contributes to our common goal: harnessing
                            space analytics for the greater good, ensuring sustainable growth, a safer world, and the
                            fulfilment of our team and the communities we serve.</p>
                        <a href="#" className="  mb-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                        </a>
                    </div>

                    <div className="w-1/2 flex items-center justify-center p-5">
                        <a href="" className='h-full w-full'>
                            <img className="rounded-lg h-full w-full object-cover" src={cc} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vaalue