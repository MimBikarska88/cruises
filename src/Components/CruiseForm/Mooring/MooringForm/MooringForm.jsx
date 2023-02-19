/**
 * External Dependencies.
 */
import { useState, useEffect } from "react";

/**
 * Internal Dependencies.
 */
import Select from "react-select";
import TextInput from "../../../BaseComponents/TextInput/TextInput";
import Spinner from "../../../BaseComponents/Spinner/Spinner";
import StaticDataService from "../../../../api/StaticDataService";
import TextArea from "../../../BaseComponents/TextArea/TextArea";
import Button from "../../../BaseComponents/Button/Button";

const MooringForm = (props) => {
  const service = StaticDataService();
  const { SubmitMooringForm, Cancel } = props;

  const [dataTypes, setDataTypes] = useState([]);

  const [selectedDataType, setSelectedDataType] = useState({
    value: { id: 0, code: "" },
    label: "",
  });
  const [dateTime, setDateTime] = useState("");

  const [selectedIndividual, setSelectedIndividual] = useState({});

  const [individuals, setIndividuals] = useState([]);

  const [organizations, setOrganizations] = useState([]);

  const [selectedOrganization, setSelectedOrganization] = useState({});

  const [isLoaded, setIsLoaded] = useState(false);

  const [coordinates, setCoordinates] = useState({
    latitude: 0.0,
    longitude: 0.0,
  });

  const updateDateTime = (e) => {
    setDateTime(e.target.value.toString());
  };

  useEffect(() => {
    service
      .loadAllBioIndicators()
      .then((res) => {
        setDataTypes(Object.values(res.data)[0]);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Spinner />
      ) : (
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
                  options={dataTypes.map((dataType) => {
                    return { value: dataType, label: dataType.label };
                  })}
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
            <div className="row">
              <div className="col-sm-4 mt-3">
                <TextInput
                  value={dateTime}
                  name="cruiseReportMooringDateTime"
                  label="Date Time"
                  onChange={updateDateTime}
                  type="datetime-local"
                />
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
                  onChange={setSelectedIndividual}
                  options={individuals.map((individual) => {
                    return {
                      value: individual,
                      label: individual.name,
                    };
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
                  options={organizations.map((organization) => {
                    return { value: organization, label: organization.label };
                  })}
                  onChange={setSelectedOrganization}
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
            <div className="row mt-4">
              <div className="col">
                <TextInput
                  type="number"
                  step="0.0001"
                  label="Latitude"
                  value={coordinates.latitude}
                  onChange={(e) =>
                    setCoordinates((prevState) => ({
                      ...prevState,
                      latitude: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="col">
                <TextInput
                  type="number"
                  step="0.0001"
                  label="Latitude"
                  value={coordinates.longitude}
                  onChange={(e) =>
                    setCoordinates((prevState) => ({
                      ...prevState,
                      longitude: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <TextArea label="Description" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="d-flex justify-content-center">
                <Button
                  value="Save"
                  className="mr-2"
                  onClick={SubmitMooringForm}
                />
                <Button value="Cancel" onClick={Cancel} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MooringForm;
