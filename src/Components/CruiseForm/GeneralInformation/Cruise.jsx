import styles from "../CruiseForm.module.css";
import TextInput from "../../BaseComponents/TextInput/TextInput";
import Select from "../../BaseComponents/Select/Select";
import TextArea from "../../BaseComponents/TextArea/TextArea";
const Cruise = () => {
  return (
    <>
      <div className={`container ${styles["cruise-info"]}`}>
        <div className="row mb-5">
          <h4 className="mt-3 mb-1 text-left">Period</h4>
          <div className="col">
            <TextInput
              type="datetime-local"
              label="Start Date"
              name="startDate"
            />
          </div>
          <div className="col">
            <TextInput type="datetime-local" label="End Date" name="endDate" />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <Select name="countries" title="Country of Departure" />
            <div className="d-flex pt-1">
              <div className="mr-2">
                <TextInput
                  type="text"
                  label="Country"
                  name="cruiseCountryName"
                  disabled={true}
                />
              </div>
              <div className="mr-2">
                <TextInput
                  type="text"
                  label="Code"
                  name="cruiseCountryCode"
                  disabled={true}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <Select name="countries" title="Port of Departure" />
            <div className="d-flex pt-1">
              <div className="mr-2">
                <TextInput
                  type="text"
                  label="Port"
                  name="cruisePortName"
                  disabled={true}
                />
              </div>

              <div>
                <TextInput
                  type="text"
                  label="Code"
                  name="cruisePortCode"
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <Select name="countries" title="Country of Return" />
            <div className="d-flex pt-1">
              <div className="mr-2">
                <TextInput
                  label="Country"
                  disabled={true}
                  name="cruiseReturnCountryName"
                />
              </div>
              <div>
                <TextInput
                  disabled={true}
                  label="Code"
                  name="cruiseReturnCountryCode"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <Select name="ports" title="Port of Return" />
            <div className="d-flex pt-1">
              <div className="mr-2">
                <TextInput
                  disabled={true}
                  label="Port"
                  name="cruiseReturnPortName"
                />
              </div>
              <div>
                <TextInput
                  disabled={true}
                  label="Code"
                  name="cruiseReturnPortCode"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <Select name="countries" title="Data Access Restriction *" />
          </div>
          <div className="col">
            <div className="mt-10 pt-2">
              <TextInput
                disabled="true"
                name="dataAccessRestrictionCode"
                label="Code"
              />
            </div>
            <div className="mt-10">
              <TextInput
                disabled="true"
                name="dataAccessRestrictionName"
                label="Name"
              />
            </div>
            <TextArea
              name="dataAccessRestrictionDefinition"
              label="Definition"
              disabled={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Cruise;
