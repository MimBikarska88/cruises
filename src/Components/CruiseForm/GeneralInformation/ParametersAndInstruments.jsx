import tableData from "./TableData/test_data.json";
import { columns } from "./TableData/Columns";
import Table from "../../BaseComponents/Table/Table";
import { useState } from "react";
import styles from "../CruiseForm.module.css";
const ParametersAndInstruments = () => {
  const [parameters, setParameters] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const updateSelectedRows = (values) => {
    console.log(values);
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
          setDisplayRows={setParameters}
        ></Table>
        <Table
          cols={columns}
          data={tableData}
          title="Instruments"
          displayFields={["code", "name"]}
          displayRows={instruments}
          setDisplayRows={setInstruments}
        ></Table>
      </div>
    </>
  );
};
export default ParametersAndInstruments;
