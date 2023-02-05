import Button from "../Button/Button";
import styles from "../../CruiseForm/CruiseForm.module.css";
import { useState } from "react";
const HorizontalTabs = ({ title, tabs = {} }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <ul className="nav nav-tabs">
      {Object.keys(tabs).length > 0 && (
        <>
          <li>
            {tabs.map((tab, index) => (
              <Button
                onClick={() => activateTab(index)}
                className={` m-1 nav-item text-wrap w-10 ${
                  index === activateTab ? "active" : ""
                }`}
                value={tab.name}
              ></Button>
            ))}
          </li>
          <div
            className={`tab-content ml-4 col-lg-9 ${styles["tabs-border"]}`}
            id="v-pills-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              {tabs[activeTabIndex].content}
            </div>
          </div>
        </>
      )}
    </ul>
  );
};
export default HorizontalTabs;
