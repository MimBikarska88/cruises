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
import HorizontalTabs from "../BaseComponents/Tabs/HorizontalTabs";

const CruiseForm = () => {
  const form = useForm({
    shouldUnregister: false,
    mode: 'onChange',
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
          startDate: '',
          endDate: '',
          countryName: '',
          countryCode: '',
          portName: '',
          portCode: '',
          returnCountryName: '',
          returnCountryCode: '',
          returnPortName: '',
          returnPortCode: '',
          dataAccessRestrictionCode: '',
          dataAccessRestrictionName: '',
          dataAccessRestrictionDefinition: '',
        },
        objectives: {
          purpose: '',
          project: '',
        }
      }
    }
  })

  return (
    <FormProvider {...form}>
      <div className="d-block p-5">
        <Tabs
          title={"Tabs"}
          tabs={[
            {
              name: "Identification",
              content: (
                <Identification />
              ),
            },
            {
              name: "General Information",
              content: <GeneralInformation />,
            },
            {
              name: "Mooring",
              content: (
                <HorizontalTabs
                  title="Horizontal Tabs"
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
    </FormProvider>
  );
};
export default CruiseForm;
