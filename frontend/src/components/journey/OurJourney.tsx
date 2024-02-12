import './Journey.css'

const OurJourney = () => {
  return (
    <div className="root-container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20   h-full border" style={{ left: '50%' }}></div>


        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1  shadow-xl w-14 h-14 rounded-full time-line">
            <h1 className="mx-auto font-semibold text-lg ">2018</h1>
          </div>
          <div className="order-1  rounded-lg shadow-xl w-5/12 px-6 py-4 cards">
            <h3 className="mb-3 font-bold text-xl">Lorem Ipsum</h3>
            <p className="text-sm leading-snug tracking-wide text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 shadow-xl w-14 h-14 rounded-full time-line">
            <h1 className="mx-auto font-semibold text-lg">2019</h1>
          </div>
          <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 cards">
            <h3 className="mb-3 font-bold text-xl">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 shadow-xl w-14 h-14 rounded-full time-line">
            <h1 className="mx-auto font-semibold text-lg">2020</h1>
          </div>
          <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 cards">
            <h3 className="mb-3 font-bold text-xl">Lorem Ipsum</h3>
            <p className="text-sm leading-snug tracking-wide text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center shadow-xl order-1 w-14 h-14 rounded-full time-line">
            <h1 className="mx-auto font-semibold text-lg">2021</h1>
          </div>
          <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 cards">
            <h3 className="mb-3 font-bold text-xl">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurJourney