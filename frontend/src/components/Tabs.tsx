// import { TabsProps } from '@material-tailwind/react';
import { useState } from 'react';

interface TabsProps {
  toggleTheme: () => void;
  currentTheme: 'theme-dark' | 'theme-white';
}
const Tabs = (props:TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Tab 1',
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className={`p-4 ${props.currentTheme === 'theme-dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg`}>
            <h2>Column 1</h2>
            <p>Content goes here...</p>
          </div>
          <div className={`p-4 ${props.currentTheme === 'theme-dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg`}>
            <h2>Column 2</h2>
            <p>Content goes here...</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Tab 2',
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className={`p-4 ${props.currentTheme === 'theme-dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg`}>
            <h2>Column 1</h2>
            <p>Content goes here...</p>
          </div>
          <div className={`p-4 ${props.currentTheme === 'theme-dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg`}>
            <h2>Column 2</h2>
            <p>Content goes here...</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Tab 3',
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className={`p-4 ${props.currentTheme === 'theme-dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg`}>
            <h2>Column 1</h2>
            <p>Content goes here...</p>
          </div>
          <div className={`p-4 ${props.currentTheme === 'theme-dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg`}>
            <h2>Column 2</h2>
            <p>Content goes here...</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-end mb-4">
        <button className="bg-transparent text-gray-600 hover:text-gray-800" onClick={props.toggleTheme}>
          {props.currentTheme === 'theme-dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </button>
      </div>
      <div className="border border-gray-300 rounded-lg">
        <div className="flex">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-2 px-4 ${activeTab === index ? 'bg-gray-200' : 'bg-gray-100'} hover:bg-gray-200 focus:outline-none`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="p-4">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
