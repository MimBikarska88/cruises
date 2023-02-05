import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Tabs.module.css";
const Tabs = ({ title, tabs = {} }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activateTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="d-flex pt-3 align-items-start">
      {Object.keys(tabs).length > 0 && (
        <>
          <div>
            {tabs.map((tab, index) => (
              <Button
                onClick={() => activateTab(index)}
                className={`form-btn m-3 nav-link ${
                  index === activateTab ? "active" : ""
                }`}
                value={tab.name}
              ></Button>
            ))}
          </div>
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
    </div>
  );
};

export default Tabs;
