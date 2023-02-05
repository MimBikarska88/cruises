import Tabs from "../BaseComponents/Tabs/Tabs";
import Identification from "./Identification/Identification";
import GeneralInformation from "./GeneralInformation/GeneralInformation";
import HorizontalTabs from "../BaseComponents/Tabs/HorizontalTabs";
import { useState, useEffect } from "react";
const CruiseForm = () => {
  const [identification, setIdentification] = useState({
    cruiseId: "",
    cruiseName: "",
    creationDate: new Date().toUTCString(),
    revisionDate: new Date().toUTCString(),
    author: "",
  });
  const [collateCenters, setCollateCenters] = useState([]);

  return (
    <>
      <div className="d-block p-5">
        <Tabs
          title={"Tabs"}
          tabs={[
            {
              name: "Identification",
              content: (
                <Identification
                  identification={identification}
                  setIdentification={setIdentification}
                ></Identification>
              ),
            },
            {
              name: "General Information",
              content: <GeneralInformation></GeneralInformation>,
            },
            {
              name: "Mooring",
              content: (
                <HorizontalTabs
                  title={"Horizontal Tabs"}
                  tabs={[
                    { name: "Tab 1", content: "hey" },
                    { name: "Tab 2", content: "Hey hey" },
                  ]}
                />
              ),
            },
            {
              name: "Measurement",
              content: <p>Hello there again again again</p>,
            },
            {
              name: "Geographical Area",
              content: <p>Hello there again again again</p>,
            },
            {
              name: "Documentation",
              content: <p>Hello there again again again</p>,
            },
          ]}
        />
      </div>
    </>
  );
};
export default CruiseForm;
