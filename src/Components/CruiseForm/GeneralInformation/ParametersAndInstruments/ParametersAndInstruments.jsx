import tableData from "./TableData/test_data.json";
import { columns } from "./TableData/Columns";
import Table from "../../../BaseComponents/Table/Table";
import { useState, useEffect } from "react";
import styles from "../../CruiseForm.module.css";
import { useFormContext } from "react-hook-form";

const ParametersAndInstruments = () => {
  const [parameters, setParameters] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const { setValue } = useFormContext();

  const updateParameters = (rows) => {
    setParameters(rows);
    setValue(
      "general.parameters",
      rows.map((row) => row.values)
    );
  };

  const updateInstruments = (rows) => {
    setInstruments(rows);
    setValue(
      "general.instruments",
      rows.map((row) => row.values)
    );
  };

  return (
    <>
      <div className={`${styles["cruise-table"]}`}>
        <Table
          cols={columns}
          data={tableData}
          title="Parameters"
          displayFields={["code", "name"]}
          displayRows={parameters}
          setDisplayRows={updateParameters}
        ></Table>
        <Table
          cols={columns}
          data={tableData}
          title="Instruments"
          displayFields={["code", "name"]}
          displayRows={instruments}
          setDisplayRows={updateInstruments}
        ></Table>
      </div>
    </>
  );
};
export default ParametersAndInstruments;
