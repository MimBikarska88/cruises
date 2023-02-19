import SimpleTable from "../../BaseComponents/SimpleTable/SimpleTable";
import MooringForm from "./MooringForm/MooringForm";
import { useState } from "react";

const Mooring = () => {
  const [moorings, setMoorings] = useState([]);

  const [formVisible, setFormVisible] = useState(false);

  const Cancel = () => {
    setFormVisible(false);
  };

  const SubmitForm = (formData) => {
    setFormVisible(false);
  };
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
      {formVisible && (
        <div className="d-block">
          <MooringForm Cancel={Cancel} SubmitForm={SubmitForm} />
        </div>
      )}
    </>
  );
};
export default Mooring;
// mooring table
