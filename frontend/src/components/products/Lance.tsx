

const Lance = () => {
  return (
    <div className="root-container px-14 py-10">
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
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold text-center">Lance</h2>
              {/* Additional content */}
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT US */}
      <div className={"absolute top-0 left-0 w-full h-full  transform "}></div>
      <div className="container mx-auto text-center relative mt-20 mb-40">
        <h1
          className="font-century-gothic  mt-10 mb-2 text-4xl font-semibold var(--text-color)"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 10)" }}
        >
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 justify-normal">
          <div className="flex flex-col justify-center items-center px-4" style={{ textShadow: "0px 0.2px 0.5px rgba(0, 0, 0, 5)" }}>
            <p className={` font-century-gothic text-justify m-5`}>
              At SUHORA, we're driven by a passion to make the universe's data
              accessible and actionable for those who need it most. Founded on
              the principle that space analytics should empower, not overwhelm,
              we've dedicated ourselves to demystifying satellite data for
              practical, everyday applications.
            </p>
            <p className={" font-century-gothic text-justify m-5"}>
              Our team, a blend of seasoned experts and innovative thinkers, is
              committed to breaking down complex information into clear,
              actionable insights that drive decision-making across various
              sectors. Suhora Technologies stands at the intersection of
              innovation and utility, reshaping how industries leverage the
              untapped potential of space data.
            </p>
          </div>
        </div>
      </div>
      {/* **** About us with img   ****** */}
      {/* first component */}
      <div className="flex">
        <div className="flex-grow" style={{ width: "50%" }}>
          <h5
            className=" mt-10 mb-2 text-4xl font-semibold text-center"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 10)" }}
          >
            Lance
          </h5>
          <br />
          <p className="mb-4 text-base var(--text-color) text-justify ml-5 mr-10" style={{ textShadow: "0px 0.2px 0.5px rgba(0, 0, 0, 5)" }}>
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

      <div className="flex mt-20">
        {/* <div style={{ width: "50%", marginLeft: "50px", alignItems: "center" }}> */}

        <img
          className="flex-grow m-1  border-2 border-gray-800"
          src="https://images.unsplash.com/photo-1682687219612-b12805df750d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{ width: "500px", height: "400px", marginRight: "5px" }}
        />
        {/* </div> */}

        <div className="flex-grow" style={{ width: "50%" }}>
          <h5
            className="mt-10 mb-2 text-4xl font-semibold text-center"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 10)" }}
          >
            Lance
          </h5>
          <br />
          <p className="mb-4 text-base var(--text-color) text-justify mr-5 ml-10" style={{ textShadow: "0px 0.2px 0.5px rgba(0, 0, 0, 5)" }}>
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
      </div>
      <a
        href="#"
        className="mt-40 mb-10 inline-flex items-center px-6 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    // ***********************************************************************************
    // <div className="root-container w-100">

    //   <div
    //     className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
    //     style={{
    //       backgroundImage:
    //         "url('https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?size=626&ext=jpg')",
    //       height: "400px",
    //       width: "100%",
    //     }}
    //   >
    //     <div
    //       className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed "
    //       style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    //     >
    //       <div className="flex h-full items-center justify-center">
    //         <div className="text-white">
    //           <h2 className="mb-8 text-4xl font-semibold">Lance</h2>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex m-20 ">
    //     <div className=" flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
    //       <div className="">
    //       <h1 className="text-left text-black mt-5 ml-10 mb-8 text-4xl font-semibold">Lance</h1>
    //         <p className="flex-start text-black mt-5">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas libero voluptatibus quae dolorem
    //           porro consectetur voluptates doloribus ipsa maxime ad distinctio quia obcaecati corporis explicabo enim
    //           ea placeat vitae.lorem ipsum dolor sit amet consectetur adipis   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas libero voluptatibus quae dolorem
    //           porro consectetur voluptates doloribus ipsa maxime ad distinctio quia obcaecati corporis explicabo enim
    //           ea placeat vitae.lorem ipsum dolor sit amet consectetur adipis  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas libero voluptatibus quae dolorem
    //           porro consectetur voluptates doloribus ipsa maxime ad distinctio quia obcaecati corporis explicabo enim
    //           ea placeat vitae.lorem ipsum dolor sit amet consectetur adipis
    //         </p>
    //       </div>
    //       <div className="flex border-blue-600  w-100 h-100 p-2 ml-20">

    //           <img className="rounded-b-lg " src="https://images.unsplash.com/photo-1706859450087-e95c93646b94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex m-20 ">
    //     <div className=" flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
    //       <div className="">
    //       <h1 className="text-left text-black mt-5 ml-10 mb-8 text-4xl font-semibold">Lance</h1>

    //         <p className="flex-start text-black mt-5 ml-5">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas libero voluptatibus quae dolorem
    //           porro consectetur voluptates doloribus ipsa maxime ad distinctio quia obcaecati corporis explicabo enim
    //           ea placeat vitae.lorem ipsum dolor sit amet consectetur adipis   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas libero voluptatibus quae dolorem
    //           porro consectetur voluptates doloribus ipsa maxime ad distinctio quia obcaecati corporis explicabo enim
    //           ea placeat vitae.lorem ipsum dolor sit amet consectetur adipis  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quas libero voluptatibus quae dolorem
    //           porro consectetur voluptates doloribus ipsa maxime ad distinctio quia obcaecati corporis explicabo enim
    //           ea placeat vitae.lorem ipsum dolor sit amet consectetur adipis
    //         </p>
    //       </div>
    //       <div className="flex border-blue-600  w-100 h-100 p-2 ml-20">

    //           <img className="rounded-b-lg " src="https://images.unsplash.com/photo-1707129901265-c5bfee67a60b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
    //       </div>
    //     </div>
    //   </div>
    //   <button className="px-7 py-2 border-transparent rounded-lg bg-gradient-to-br from-blue-500 via-purple-600 to-red-500 transition duration-300 text-white text-sm font-normal text-center text-shadow-md inline-block h-12 leading-12 tracking-wider mb-5"> Request for Demo</button>
    //     </div>
  )
}

export default Lance