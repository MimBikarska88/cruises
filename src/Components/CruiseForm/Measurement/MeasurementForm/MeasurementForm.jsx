import { useState } from "react";

import TextInput from "../../../BaseComponents/TextInput/TextInput";
import TextArea from "../../../BaseComponents/TextArea/TextArea";
import Select from "react-select";
const MeasurementForm = (props) => {
  const { dataTypes, organizations, individuals, units } = props;

  const [quantity, setQuantity] = useState(0);

  const [selectedUnit, setSelectedUnit] = useState({
    id: 0,
    code: "",
    name: "",
    description: "",
    label: "",
    alternative_label: "",
  });

  const [selectedDataType, setSelectedDataType] = useState({
    id: 0,
    code: "",
    label: "",
  });

  return (
    <>
      <div style={{ color: "black" }} className="d-block pl-4">
        <h4 className="text-center">Measurements</h4>
        <div className="d-grid w-100 mt-4">
          <div className="row">
            <div className="col">
              <div className="row">
                <label className="pt-2">Units</label>
                <Select
                  isSearchable={true}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "#007bffed",
                      primary: "black",
                    },
                  })}
                  options={units.map((unit) => {
                    return { value: unit, label: unit.label };
                  })}
                  onChange={(e) => setSelectedUnit(e.value)}
                />
              </div>
              <div className="row">
                <TextInput
                  label="Quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="row">
                <TextInput
                  label="Unit Name"
                  type="text"
                  value={selectedUnit.label}
                  disabled
                />
              </div>
              <div className="row">
                <TextArea
                  label="Unit Definition"
                  disabled
                  value={selectedUnit.description}
                />
              </div>
            </div>
            <div className="col ml-4">
              <div className="row mt-2">
                <label>Data Type</label>
                <Select
                  isSearchable={true}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "#007bffed",
                      primary: "black",
                    },
                  })}
                  options={dataTypes.map((dataType) => {
                    return { value: dataType, label: dataType.label };
                  })}
                  onChange={(e) => setSelectedDataType(e.value)}
                />
              </div>
              <div className="row">
                <TextInput
                  label="Data Type Code"
                  disabled
                  value={selectedDataType.code}
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-4">
              <TextInput type="datetime-local" label="Date Time" />
            </div>
          </div>
          <div className="row">
            <div className="mt-4 col-sm-6">
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
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col mt-2">
              <label className="pb-1">Organization List</label>
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
              />
            </div>
            <div className="col">
              <TextInput
                disabled
                name="organizationName"
                label="OrganizationName"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MeasurementForm;
