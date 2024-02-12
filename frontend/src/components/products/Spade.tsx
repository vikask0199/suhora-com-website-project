
const Spade = () => {
  return (
    <div className="root-container px-0 py-0">
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?size=626&ext=jpg')",
          height: "400px",
          width: "100%",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="">
              <h2 className="mb-4 text-4xl text-white font-semibold">Spade</h2>
              {/* Additional content */}
            </div>
          </div>
        </div>
      </div>

      {/* **** About us with img   ****** */}
      {/* first component */}
      <div className="flex px-12 py-10">
        <div className="flex-grow" style={{ width: "50%" }}>
          <h5
            className=" mt-10 mb-2 text-4xl font-semibold"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 10)" }}
          >
            Spade
          </h5>
          <br />
          <p className="mb-4font-century-gothic text-base var(--text-color) text-justify ml-5 mr-10" style={{ textShadow: "0px 0.2px 0.5px rgba(0, 0, 0, 5)" }}>
          {/* <p className=" mb-4 text-base text-justify mr-5 ml-10" style={{ textShadow: "0px 0.2px 0.5px rgba(0, 0, 0, 5)" }}> */}
            <ul className="list-disc">
              <li >Multi Sensor Mission Planning</li>
              <li>Smart Tip & Cue</li>
              <li>Satellite Imagery Marketplace</li>
              <li>New Imagery Tasking Planning, Acquisition and Order Management</li>
              <li>Archive image Search and Order Management</li>
              <li>Fast, Secure & encrypted access of platform</li>
              <li>Advanced AI based Satellite Data Agnostic Image Visualization, Analysis and Insight gathering</li>
              <li>SATC Catalog Support</li>
              <li>User specific project/workspace management</li>
              <li>Save,Export and Download of user specific workspace items</li>
              <li>Contextual Analysis based Search</li>
            </ul>
          {/* </p> */}
          </p>
        </div>
        {/* <div style={{ width: "50%", marginLeft: "50px", alignItems: "center" }}>  */}

        <img
          className="flex-grow m-1  border-2 border-gray-800 "
          src="https://images.unsplash.com/photo-1682687219612-b12805df750d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{ width: "500px", height: "400px", marginRight: "5px" }}
        />
        {/* </div> */}
      </div>

      {/* *** second component**** */}
{/* 
      <div className="flex mt-20">
        <div style={{ width: "50%", marginLeft: "50px", alignItems: "center" }}>

        <img
          className="flex-grow m-1  border-2 border-gray-800"
          src="https://images.unsplash.com/photo-1682687219612-b12805df750d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{ width: "500px", height: "400px", marginRight: "5px" }}
        />
       

        <div className="flex-grow" style={{ width: "50%" }}>
          <h5
            className="text-center mt-10 mb-2 text-4xl font-semibold"
          >
            Spade
          </h5>
          <br />
          <p className=" mb-4 text-base text-justify mr-5 ml-10" style={{ textShadow: "0px 0.2px 0.5px rgba(0, 0, 0, 5)" }}>
            <ul className="list-disc">
              <li >Multi Sensor Mission Planning</li>
              <li>Smart Tip & Cue</li>
              <li>Satellite Imagery Marketplace</li>
              <li>New Imagery Tasking Planning, Acquisition and Order Management</li>
              <li>Archive image Search and Order Management</li>
              <li>Fast, Secure & encrypted access of platform</li>
              <li>Advanced AI based Satellite Data Agnostic Image Visualization, Analysis and Insight gathering</li>
              <li>SATC Catalog Support</li>
              <li>User specific project/workspace management</li>
              <li>Save,Export and Download of user specific workspace items</li>
              <li>Contextual Analysis based Search</li>
            </ul>
          </p>
        </div>
      </div> */}
      <a
        href="/contact-us"
        className="mt-10 mb-10 mx-12 inline-flex items-center px-6 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Request A Demo
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  )
}

export default Spade