

const WhatWeStandFor = () => {
    return (
        // <div className="relative bg-cover bg-center md:h-60 h-32 root-container">
        //     <div className="absolute inset-0 opacity-50"></div>

        //     <div className="absolute inset-0 flex items-center justify-center">
        //         <div className="text-center">
        //             <h1 className="md:text-4xl text-3xl font-bold mb-4">What We Stand For</h1>
        //         </div>
                
        //     </div>
            
        // </div>
        <div className="mx-auto md:px-14 px-5 py-10 root-container items-center">
        <div className="justify-center ">
            <div className="relative flex flex-col items-center">
              
                <h1 className="md:text-3xl text-2xl font-bold leading-tight"> What <span
                        className="text-[#1266a0]"> We Stand For
                    </span> </h1>
                <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded">
                    <div className="flex-1 h-2 bg-blue-200">
                    </div>
                    <div className="flex-1 h-2 bg-[#1266a0]">
                    </div>
                    <div className="flex-1 h-2 bg-[#174773]">
                    </div>
                </div>
            </div>
            <div className="flex text-xl items-center justify-center ">
            {/* <p className="flex text-xl items-center ">
            We’re a dynamic group of individuals who are passionate about what we do.
            </p> */}
            </div>
        </div>
    </div>
    );
};



export default WhatWeStandFor