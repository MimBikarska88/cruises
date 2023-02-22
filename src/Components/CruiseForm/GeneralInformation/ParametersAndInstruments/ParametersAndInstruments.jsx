import { columns } from "./TableData/Columns";
import Table from "../../../BaseComponents/Table/Table";
import Spinner from "../../../BaseComponents/Spinner/Spinner";
import { useState, useEffect } from "react";
import styles from "../../CruiseForm.module.css";
import { useFormContext, Controller } from "react-hook-form";
import StaticDataService from "../../../../api/StaticDataService";

const ParametersAndInstruments = () => {
  const [parameters, setParameters] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const [staticParameters, setStaticParameters] = useState([]);
  const [staticInstruments, setStaticInstruments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { setValue } = useFormContext();
  const service = StaticDataService();

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

  const loadTableData = async () => {
    await service
      .loadAllSeaScapeParameters()
      .then((res) => {
        const params = res.data.data.map((p) => {
          return {
            id: p.id,
            code: p.code,
            label: p.label,
          };
        });
        setStaticParameters(params);
      })
      .catch((err) => {
        console.log(err.message);
      });
    await service.loadAllInstruments().then((res) => {
      const params = res.data.data.map((p) => {
        return {
          id: p.id,
          code: p.code,
          label: p.label,
        };
      });
      setStaticInstruments(params);
    });
    setIsLoaded(true);
  };
  useEffect(() => {
    loadTableData();
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Spinner />
      ) : (
        <div className={`${styles["cruise-table"]}`}>
          <Table
            cols={columns}
            data={staticParameters}
            title="Parameters"
            displayFields={["code", "label"]}
            displayRows={parameters}
            setDisplayRows={updateParameters}
          ></Table>
          <Table
            cols={columns}
            data={staticInstruments}
            title="Instruments"
            displayFields={["code", "label"]}
            displayRows={instruments}
            setDisplayRows={updateInstruments}
          ></Table>
        </div>
      )}
    </>
  );
};
export default ParametersAndInstruments;
