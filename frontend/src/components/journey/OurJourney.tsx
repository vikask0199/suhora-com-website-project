import './Journey.css'

const OurJourney = () => {
  return (
    <div>
    <div className="root-card-container  mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className=" journey border-2-2 absolute border-opacity-20 border-gray-700 h-full border" ></div>
      
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-blue-300  shadow-xl w-10 h-10 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">2019</h1>
          </div>
          <div className="order-1  contact-card rounded-lg shadow-xl w-5/12 px-6 py-4 hover:bg-blue-300">
            <h3 className="mb-3 cards font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
            <p className="text-sm cards leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
    
      
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-blue-300 shadow-xl w-10 h-10 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2019</h1>
          </div>
          <div className="order-1    contact-card rounded-lg shadow-xl w-5/12 px-6 py-4 hover:bg-blue-300">
            <h3 className="mb-3 cards font-bold  text-xl">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide   cards text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        
       
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1  shadow-xl w-10 h-10 rounded-full bg-blue-300 ">
            <h1 className="mx-auto font-semibold text-lg text-white">2019</h1>
          </div>
          <div className="order-1  contact-card rounded-lg shadow-xl w-5/12 px-6 py-4 hover:bg-blue-300">
            <h3 className="mb-3 font-bold cards text-xl">Lorem Ipsum</h3>
            <p className="text-sm leading-snug tracking-wide cards text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
    
       
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1  shadow-xl w-10 h-10 rounded-full bg-blue-300">
            <h1 className="mx-auto text-white font-semibold text-lg">2019</h1>
          </div>
          <div className="order-1 contact-card rounded-lg shadow-xl w-5/12 px-6 py-4 hover:bg-blue-300">
            <h3 className="mb-3 font-bold cards text-xl">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide cards text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default OurJourney