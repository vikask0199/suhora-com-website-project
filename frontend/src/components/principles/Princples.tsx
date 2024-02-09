
import Vision from "./Vision"
import Vaalue from "./Vaalue"
import Mision from "./Mision"
import { useState } from "react"
import WhatWeStandFor from "./WhatWeStandFor"

const Princples = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = ['Mission', 'Vision', 'Value'];

    const renderTabContent = () => {
        switch (selectedTab) {
            case 0:
                return <div><Mision/></div>;
            case 1:
                return <div><Vision/></div>;
            case 2:
                return <div><Vaalue/></div>;
            default:
                return null;
        }
    };

  return (
    <div>
       <div>
        <WhatWeStandFor/>
       </div>
            <div className="flex">

                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 pt-10 mr-4 text-lg font-semibold ${
                            selectedTab === index ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                        }`}
                        onClick={() => setSelectedTab(index)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="mt-4">{renderTabContent()}</div>
        </div>

 
  )
}


export default Princples