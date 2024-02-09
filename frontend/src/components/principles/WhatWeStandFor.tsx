

const WhatWeStandFor = () => {
    return (
        <div className="relative bg-cover bg-center h-screen">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">What We Stand For</h1>
                   
                </div>
            </div>
        </div>
    );
};



export default WhatWeStandFor