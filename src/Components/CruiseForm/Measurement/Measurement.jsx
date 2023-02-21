import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import SimpleTable from "../../BaseComponents/SimpleTable/SimpleTable";
import StaticDataService from "../../../api/StaticDataService";
import Button from "../../BaseComponents/Button/Button";
import MeasurementForm from "./MeasurementForm/MeasurementForm";

const Measurement = (props) => {
  const service = StaticDataService();

  const [visibleTable, setVisibleTable] = useState(true);

  const [visibleForm, setVisibleForm] = useState(true);

  const [measurements, setMeasurements] = useState([]);

  const [units, setUnits] = useState([]);

  const [dataTypes, setDataTypes] = useState([]);

  useEffect(() => {
    service
      .loadAllUnits()
      .then((res) => {
        setUnits(Object.values(res.data)[0]);
      })
      .catch((err) => console.log(err));
    service
      .loadAllBioIndicators()
      .then((res) => {
        setDataTypes(Object.values(res.data)[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="d-block">
        {visibleTable && (
          <>
            <div className="d-block mb-5 text-center">
              {measurements.length === 0 ? (
                <h5>No measurement data inserted.</h5>
              ) : (
                <h5>Measurement</h5>
              )}
              <Button value={"Add new record"} className="d-block" />
            </div>
            <SimpleTable
              headers={[
                "",
                "Description",
                "Data Type",
                "Individual Name",
                "Organization",
                "Date Time",
                "Quantity",
                "Unit",
              ]}
            />
          </>
        )}
      </div>
      {visibleForm && <MeasurementForm units={units} dataTypes={dataTypes} />}
    </>
  );
};
export default Measurement;
