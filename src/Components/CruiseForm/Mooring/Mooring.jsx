import SimpleTable from "../../BaseComponents/SimpleTable/SimpleTable";
import MooringForm from "./MooringForm/MooringForm";
import { useState } from "react";

const Mooring = () => {
  const [moorings, setMoorings] = useState([]);

  return (
    <>
      <div className="d-block">
        <SimpleTable
          headers={[
            "Description",
            "Latitude",
            "Longitude",
            "DataType",
            "Individual Name",
            "Organization",
            "Date Time",
          ]}
        />
      </div>
      <div className="d-block">
        <MooringForm />
      </div>
    </>
  );
};
export default Mooring;
// mooring table
