/**
 * External Dependencies.
 */
import { useForm, FormProvider } from "react-hook-form";

/**
 * Internal Dependencies.
 */
import Tabs from "../BaseComponents/Tabs/Tabs";
import Identification from "./Identification/Identification";
import GeneralInformation from "./GeneralInformation/GeneralInformation";
import Mooring from "./Mooring/Mooring";
const CruiseForm = () => {
  const form = useForm({
    shouldUnregister: false,
    mode: "onChange",
    defaultValues: {
      identification: {
        cruiseId: "",
        cruiseName: "",
        creationDate: new Date().toUTCString(),
        revisionDate: new Date().toUTCString(),
        author: "",
      },
      general: {
        cruise: {
          startDate: "",
          endDate: "",
          countryOfDeparture: {},
          portOfDeparture: {},
          countryOfReturn: {},
          portOfReturn: {},
          dataAccessRestriction: {},
        },
        objectives: {
          purpose: "",
          project: "",
        },
        platformCategory: {},
        platform: {},
        parameters: [],
        instruments: [],
        collateCenters: [],
        responsibleParty: {
          cruiseLeaders: [],
          chiefScientists: [],
          originatorCenters: [],
        },
      },
      mooring: [],
    },
  });

  const values = form.watch();
  console.log(values);
  return (
    <FormProvider {...form}>
      <div className="d-block p-5">
        <Tabs
          title={"Tabs"}
          tabs={[
            {
              name: "Identification",
              content: <Identification />,
              path: "identification",
            },
            {
              name: "General Information",
              content: <GeneralInformation />,
              path: "general-information/*",
            },
            {
              name: "Mooring",
              content: <Mooring />,
              path: "mooring",
            },
            {
              name: "Measurement",
              content: <p>Hello there again again again</p>,
              path: "measurement",
            },
            {
              name: "Geographical Area",
              content: <p>Hello there again again again</p>,
              path: "geographical-area",
            },
            {
              name: "Documentation",
              content: <p>Hello there again again again</p>,
              path: "documentation",
            },
          ]}
        />
      </div>
    </FormProvider>
  );
};
export default CruiseForm;
