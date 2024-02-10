
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
                return <div><Mision /></div>;
            case 1:
                return <div><Vision /></div>;
            case 2:
                return <div><Vaalue /></div>;
            default:
                return null;
        }
    };

    return (
        <div className="">
            <div>
                <WhatWeStandFor />
            </div>
            <div className="flex root-container-separator px-14 pt-10">
                {tabs.map((tab, index) => (
                    <button key={index}
                        className={`py-2 w-28 text-lg font-semibold ${selectedTab === index ? 'root-container' : 'text-gray-500'}`}
                        onClick={() => setSelectedTab(index)}>
                        {tab}
                    </button>
                ))}
            </div>
            <div className="root-container-separator pb-10">{renderTabContent()}</div>
        </div>


    )
}


export default Princples