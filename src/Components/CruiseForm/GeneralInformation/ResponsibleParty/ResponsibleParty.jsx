import tableData from "./TableData/persons.json";
import { columns } from "./TableData/Columns";
import Table from "../../../BaseComponents/Table/Table";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import styles from "../../CruiseForm.module.css";
import OrganizationCenters from "../OrganizationCenter/OrganizationCenters";
import names from "../GeneralInformation.constants";

const ResponsibleParty = () => {
  const [chiefScientists, setChiefScientists] = useState([]);
  const [cruiseLeaders, setCruiseLeaders] = useState([]);
  const [originatorCenters, setOriginatorCenters] = useState([]);

  const { setValue } = useFormContext();
  const updateChiefScientists = (rows) => {
    setChiefScientists(rows);
    setValue(
      "responsibleParty.chiefScientists",
      rows.map((r) => r.values)
    );
  };
  const updateCruiseLeaders = (rows) => {
    setCruiseLeaders(rows);
    setValue(
      "responsibleParty.cruiseLeaders",
      rows.map((r) => r.values)
    );
  };
  useEffect(() => {
    setValue("responsibleParty.originatorCentres", originatorCenters);
  }, [originatorCenters]);
  return (
    <>
      <div className={`${styles["cruise-table"]}`}>
        <Table
          cols={columns}
          data={tableData}
          title="Chief Scientists"
          displayFields={["first_name", "last_name"]}
          displayRows={chiefScientists}
          setDisplayRows={updateChiefScientists}
          delimeter={" "}
        ></Table>
        <Table
          cols={columns}
          data={tableData}
          title="Cruise Leaders"
          displayFields={["first_name", "last_name"]}
          displayRows={cruiseLeaders}
          setDisplayRows={updateCruiseLeaders}
          delimeter={" "}
        ></Table>
        <OrganizationCenters
          organizations={originatorCenters}
          setOrganizations={setOriginatorCenters}
          availableOrganizations={names}
          title="Originator Centers"
        />
      </div>
    </>
  );
};
export default ResponsibleParty;
