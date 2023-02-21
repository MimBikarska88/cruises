/**
 * External Dependencies.
 */
import { Controller, useFormContext } from "react-hook-form";
import { useState, useEffect } from "react";

/**
 * Internal Dependencies.
 */
import styles from "../../CruiseForm.module.css";
import TextInput from "../../../BaseComponents/TextInput/TextInput";
import Select from "react-select";
import TextArea from "../../../BaseComponents/TextArea/TextArea";
import StaticDataService from "../../../../api/StaticDataService";
import Spinner from "../../../BaseComponents/Spinner/Spinner";

const Cruise = () => {
  const form = useFormContext();

  const service = StaticDataService();

  const [countries, setCountries] = useState([]);

  const [selectedCountryOfDeparture, setSelectedCountryOfDeparture] = useState({
    id: null,
    code: null,
    name: null,
    label: null,
  });

  const [selectedCountryOfReturn, setSelectedCountryOfReturn] = useState({
    id: null,
    code: null,
    name: null,
    label: null,
  });

  const [selectedPortOfDeparture, setSelectedPortOfDeparture] = useState({
    id: null,
    code: null,
    name: null,
    label: null,
  });

  const [selectedPortOfReturn, setSelectedPortOfReturn] = useState({
    id: null,
    code: null,
    name: null,
    label: null,
  });

  const [isLoading, setIsLoading] = useState(true);

  const mapToSelectOptions = (data) => {
    return data.map((d) => {
      return {
        value: d,
        label: d.label,
      };
    });
  };

  useEffect(() => {
    service
      .loadAllCountries()
      .then((res) => {
        setCountries(Object.values(res.data)[0]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    form.setValue(
      "general.cruise.countryOfDeparture",
      selectedCountryOfDeparture
    );
  }, [selectedCountryOfDeparture]);

  useEffect(() => {
    form.setValue("general.cruise.countryOfReturn", selectedCountryOfReturn);
  }, [selectedCountryOfReturn]);

  return (
    <>
      {isLoading ? (
        <>
          <div className="d-block m-auto w-100 h-100">
            <Spinner />
          </div>
        </>
      ) : (
        <div className={`container ${styles["cruise-info"]}`}>
          <div className="row mb-5">
            <h4 className="mt-3 mb-1 text-left">Period</h4>

            <div className="col">
              <Controller
                control={form.control}
                name="general.cruise.startDate"
                render={({ field }) => (
                  <TextInput
                    type="datetime-local"
                    label="Start Date"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="col">
              <Controller
                control={form.control}
                name="general.cruise.endDate"
                render={({ field }) => (
                  <TextInput
                    type="datetime-local"
                    label="End Date"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <label>Country of Departure</label>
              <Select
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#007bffed",
                    primary: "black",
                  },
                })}
                options={mapToSelectOptions(countries)}
                onChange={(e) => setSelectedCountryOfDeparture(e.value)}
              />

              <div className="d-flex pt-1">
                <div className="mr-2">
                  <TextInput
                    label="Country"
                    disabled
                    value={selectedCountryOfDeparture.label}
                  />
                </div>

                <div className="mr-2">
                  <TextInput
                    label="Code"
                    disabled
                    value={selectedCountryOfDeparture.code}
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <label>Port of Departure</label>
              <Select
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#007bffed",
                    primary: "black",
                  },
                })}
              />

              <div className="d-flex pt-1">
                <div className="mr-2">
                  <TextInput label="Port" disabled />
                </div>

                <div>
                  <TextInput label="Code" disabled />
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <label>Country of Return</label>
              <Select
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#007bffed",
                    primary: "black",
                  },
                })}
                options={mapToSelectOptions(countries)}
                onChange={(e) => setSelectedCountryOfReturn(e.value)}
              />

              <div className="d-flex pt-1">
                <div className="mr-2">
                  <TextInput
                    label="Country"
                    disabled
                    value={selectedCountryOfReturn.label}
                  />
                </div>

                <div>
                  <TextInput
                    label="Code"
                    disabled
                    value={selectedCountryOfReturn.code}
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <label>Port of Return</label>
              <Select
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#007bffed",
                    primary: "black",
                  },
                })}
              />

              <div className="d-flex pt-1">
                <div className="mr-2">
                  <TextInput
                    label="Port"
                    disabled
                    value={selectedPortOfReturn.label}
                  />
                </div>

                <div>
                  <TextInput
                    label="Code"
                    disabled
                    value={selectedPortOfReturn.code}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col pt-2">
              <label>Data Access Restriction</label>
              <Select
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#007bffed",
                    primary: "black",
                  },
                })}
              />
            </div>

            <div className="col">
              <div className="mt-10">
                <TextInput label="Code" disabled />
              </div>

              <div className="mt-10">
                <TextInput label="Name" disabled />
              </div>

              <TextArea label="Definition" disabled />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cruise;
