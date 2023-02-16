import { useState } from "react";
import Select from "react-select";
import TextInput from "../../../BaseComponents/TextInput/TextInput";
import OrganizationList from "../../GeneralInformation/OrganizationList/OrganizationList";
import styles from "./MooringForm.module.css";
const MooringForm = (props) => {
  const options = [
    { value: { id: 1, code: "B19" }, label: "Demersal fish" },
    { value: { id: 2, code: "B20" }, label: "Molluscs" },
    { value: { id: 3, code: "B21" }, label: "Crustaceons" },
  ];

  const [selectedDataType, setSelectedDataType] = useState({
    value: { id: 0, code: "" },
    label: "",
  });
  const [dateTime, setDateTime] = useState("");

  const [individualName, setIndividualName] = useState({});

  const updateDateTime = (e) => {
    setDateTime(e.target.value.toString());
  };
  return (
    <>
      <div style={{ color: "black" }} className="d-block">
        <h4 className="text-center">Moorings</h4>
        <div className="d-grid">
          <div className="row">
            <div className="col mt-2">
              <label className="pb-1">Data Type</label>
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
                isSearchable
                options={options}
                defaultValue={selectedDataType}
                onChange={setSelectedDataType}
              />
            </div>
            <div className="col">
              <TextInput
                value={selectedDataType.value.code}
                name="cruiseReportMooringDataType"
                label="Code"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="d-grid col-sm-4 p-0">
          <TextInput
            value={dateTime}
            name="cruiseReportMooringDateTime"
            label="Date Time"
            onChange={updateDateTime}
            type="datetime-local"
          />
        </div>
        <div className="d-grid p-0 mt-4 col-md-8">
          <h5 className="mt-3 mb-2">Principal Investigator</h5>
          <label>Individual Name</label>
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
            onChange={setIndividualName}
          />
        </div>
        <div className="d-grid p-0 mt-2 col-md-8">
          <TextInput
            disabled
            name="organizationName"
            label="OrganizationName"
          />
        </div>
      </div>
    </>
  );
};
export default MooringForm;
