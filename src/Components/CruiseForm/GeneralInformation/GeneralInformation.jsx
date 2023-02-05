import HorizontalTabs from "../../BaseComponents/Tabs/HorizontalTabs";
import CollateCenter from "./CollateCenter";

const GeneralInformation = () => {
  return (
    <>
      <HorizontalTabs
        title={"General  Information"}
        tabs={[
          {
            name: "Cruise",
            content: <p>Cruise</p>,
          },
          {
            name: "Objectives and Brief of cruise",
            content: <p>Objectives</p>,
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
          { name: "Collate Center", content: <CollateCenter></CollateCenter> },
        ]}
      />
    </>
  );
};

export default GeneralInformation;
