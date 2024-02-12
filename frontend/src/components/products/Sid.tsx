

const Sid = () => {
  return (
    <div className="root-container px-0 py-0">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat text-center"
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
              <h2 className="mb-4 text-3xl font-semibold text-white">Sid</h2>
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
           
          >
            Sid
          </h5>
          <br />
          <p className="font-century-gothic mb-4 text-base var(--text-color) text-justify mr-10 ">
          SID revolutionizes disaster management and insurance processes through the strategic use
of near real-time satellite data. This innovative platform is designed to empower communities
and industries with advanced analytical tools, enhancing preparedness and resilience
against natural catastrophes.
</p>
<p className="font-century-gothic mb-4 text-base var(--text-color) text-justify mr-10 ">
SID harnesses satellite technology to provide continuous observation of Earth&#39;s surface,
delivering crucial data on environmental changes and potential disaster zones. SID
comprises of two Dashboard: </p>
<ul>
  <li className="list-disc text-justify mr-10 ml-10">
  <b>Disaster Dashboard:</b> This dashboard serves as a critical tool for emergency response
teams, government agencies, and humanitarian organizations. It provides real-time data on
natural disasters such as storms, floods, wildfires, and earthquakes.
</li>
<li className="list-disc text-justify mr-10 ml-10">
<b>Insurance Dashboard:</b> Tailored for the insurance sector, this dashboard leverages satellite
data to revolutionize risk assessment, claims processing, and policy management.
</li>
</ul>
<p className="font-century-gothic mb-4 text-base var(--text-color) text-justify mr-10 mt-3">
Beyond immediate disaster response, SID offers invaluable insights for the insurance &amp;
Bank sector, enhancing risk evaluation and policy customization based on dynamic
environmental data. It stands as a testament to the power of technology in building a safer,
more prepared world.
          </p>
        </div>
        {/* <div style={{ width: "50%", marginLeft: "50px", alignItems: "center" }}>  */}

        <img
          className="flex-grow mt-15   "
          src="https://images.unsplash.com/photo-1682687219612-b12805df750d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{ width: "500px", height: "500px", marginRight: "5px" }}
        />
        {/* </div> */}
      </div>

      {/* *** second component**** */}

      {/* <div className="flex mt-20">
     
        <img
          className="flex-grow m-1"
          src="https://images.unsplash.com/photo-1682687219612-b12805df750d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{ width: "500px", height: "400px", marginRight: "5px" }}
        />

        <div className="flex-grow" style={{ width: "50%" }}>
          <h5
            className=" mt-10 mb-2 text-4xl font-semibold text-center"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 10)" }}
          >
            Sid
          </h5>
          <br />
          <p className="font-century-gothic mb-4 text-base var(--text-color) text-justify mr-5 ml-10" style={{ textShadow: "0px 0.2px 0.5px rgba(0, 0, 0, 5)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas
            libero voluptatibus quae dolorem porro consectetur voluptates
            doloribus ipsa maxime ad distinctio quia obcaecati corporis
            explicabo enim ea placeat vitae.lorem ipsum dolor sit amet
            consectetur adipis Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor, quas libero voluptatibus quae dolorem porro
            consectetur voluptates doloribus ipsa maxime ad distinctio quia
            obcaecati corporis explicabo enim ea placeat vitae.lorem ipsum dolor
            sit amet consectetur adipis Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor, quas libero voluptatibus quae dolorem porro
            consectetur voluptates doloribus ipsa maxime ad distinctio quia
            obcaecati corporis explicabo enim ea placeat vitae.lorem ipsum dolor
            sit amet consectetur adipis
          </p>
        </div>
      </div> */}
      <a 
        href="/contact-us"
        className="mt-0 mb-10 mx-12 inline-flex items-center px-6 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg "
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

export default Sid