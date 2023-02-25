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
import Measurement from "./Measurement/Measurement";
import Button from "../BaseComponents/Button/Button";
const CruiseForm = () => {
  const form = useForm({
    shouldUnregister: false,
    mode: "onChange",
    defaultValues: {
      identification: {
        cruiseId: "",
        cruiseName: "",
        creationDate: new Date().toLocaleString(),
        revisionDate: new Date().toLocaleString(),
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
      measurement: [],
    },
  });

  const values = form.watch();
  console.log(values);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="d-grid p-4">
          <div className="row">
            <div className="col-1" style={{ marginTop: "2rem" }}>
              <Button className="ml-3" type="submit" value={"Submit"} />
            </div>
            <div className="col-11">
              <div className="d-block">
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
                      content: <Measurement />,
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
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
export default CruiseForm;
