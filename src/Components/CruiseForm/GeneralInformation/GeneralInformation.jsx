import HorizontalTabs from "../../BaseComponents/Tabs/HorizontalTabs";
import CollateCenter from "./CollateCenter";
import Objectives from "./Objectives";
import Cruise from "./Cruise";
const GeneralInformation = () => {
  return (
    <>
      <HorizontalTabs
        title={"General  Information"}
        tabs={[
          {
            name: "Cruise",
            content: <Cruise />,
          },
          {
            name: "Objectives and Brief of cruise",
            content: <Objectives />,
          },
          {
            name: "Platform",
            content: <p>Platform</p>,
          },
          {
            name: "Parameters and insturments",
            content: "Parameters and Instruments",
          },
          {
            name: "Responsible Party",
            content: "Responsible party",
          },
          { name: "Collate Center", content: <CollateCenter /> },
        ]}
      />
    </>
  );
};

export default GeneralInformation;
