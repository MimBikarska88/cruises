import tableData from "./TableData/test_data.json";
import { columns } from "./TableData/Columns";
import Table from "../../BaseComponents/Table/Table";
import { useState } from "react";
import styles from "../CruiseForm.module.css";
const ParametersAndInstruments = () => {
  const [parameters, setParameters] = useState([]);

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
          callback={updateSelectedRows}
        ></Table>
      </div>
    </>
  );
};
export default ParametersAndInstruments;
