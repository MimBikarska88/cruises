import tableData from "./TableData/test_data.json";
import { columns } from "./TableData/Columns";
import Table from "../../BaseComponents/Table/Table";
import styles from "../CruiseForm.module.css";
const ParametersAndInstruments = () => {
  return (
    <>
      <div className={`${styles["cruise-table"]}`}>
        <Table cols={columns} data={tableData} />
      </div>
    </>
  );
};
export default ParametersAndInstruments;
