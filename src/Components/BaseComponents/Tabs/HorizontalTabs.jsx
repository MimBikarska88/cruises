/**
 * External Dependencies.
 */
import { useState } from "react";

/**
 * Internal Dependencies.
 */
import Button from "../Button/Button";
import styles from "../../CruiseForm/CruiseForm.module.css";

const HorizontalTabs = (props) => {
  const { tabs = [] } = props;

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <ul className="nav nav-tabs">
      {tabs.length > 0 && (
        <>
          <li>
            {tabs.map((tab, index) => (
              <Button
                key={index}
                onClick={() => setActiveTabIndex(index)}
                className={` m-1 nav-item text-wrap w-10 ${
                  index === activeTabIndex ? "active" : ""
                }`}
                value={tab.name}
              />
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
