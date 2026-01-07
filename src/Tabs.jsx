import { useState } from "react";
import Accordion from "./Accordion";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}>
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {currentTab.accordions.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}/>
        ))}
      </div>
    </>
  );
}
