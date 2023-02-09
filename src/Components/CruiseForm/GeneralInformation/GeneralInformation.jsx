import HorizontalTabs from "../../BaseComponents/Tabs/HorizontalTabs";
import CollateCenter from "./CollateCenter";
import Objectives from "./Objectives";
import Cruise from "./Cruise";
import Platform from "./Platform";
import ParametersAndInstruments from "./ParametersAndInstruments";
const GeneralInformation = () => {
  return (
    <>
      <HorizontalTabs
        title="General Information"
        tabs={[
          {
            name: "Cruise",
            content: <Cruise />,
            path: "cruise",
          },
          {
            name: "Objectives and Brief of cruise",
            content: <Objectives />,
            path: "purpose-and-objectives",
          },
          {
            name: "Platform",
            content: <Platform />,
            path: "platform",
          },
          {
            name: "Parameters and Insturments",
            content: <ParametersAndInstruments />,
            path: "parameters-and-instruments",
          },
          {
            name: "Responsible Party",
            content: <p>Responsible party</p>,
            path: "reasonable-party",
          },
          {
            name: "Collate Center",
            content: <CollateCenter />,
            path: "collate-center",
          },
        ]}
      />
    </>
  );
};

export default GeneralInformation;
