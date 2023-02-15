import SimpleTable from "../../../BaseComponents/SimpleTable/SimpleTable";
const Mooring = () => {
  return (
    <>
      <div>
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
    </>
  );
};
export default Mooring;
// mooring table
