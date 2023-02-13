import tableData from "./TableData/persons.json";
import { columns } from "./TableData/Columns";
import Table from "../../../BaseComponents/Table/Table";
import { useState } from "react";
import styles from "../../CruiseForm.module.css";
import OrganizationCenters from "../OrganizationCenter/OrganizationCenters";
import names from "../GeneralInformation.constants";
const ResponsibleParty = () => {
  const [chiefScientists, setChiefScientists] = useState([]);
  const [cruiseLeaders, setCruiseLeaders] = useState([]);
  const [originatorCenters, setOriginatorCenters] = useState([]);

  return (
    <>
      <div className={`${styles["cruise-table"]}`}>
        <Table
          cols={columns}
          data={tableData}
          title="Chief Scientists"
          displayFields={["first_name", "last_name"]}
          displayRows={chiefScientists}
          setDisplayRows={setChiefScientists}
          delimeter={" "}
        ></Table>
        <Table
          cols={columns}
          data={tableData}
          title="Cruise Leaders"
          displayFields={["first_name", "last_name"]}
          displayRows={cruiseLeaders}
          setDisplayRows={setCruiseLeaders}
          delimeter={" "}
        ></Table>
        <OrganizationCenters
          organizations={originatorCenters}
          setOrganizations={setOriginatorCenters}
          availableOrganizations={names}
        />
      </div>
    </>
  );
};
export default ResponsibleParty;
