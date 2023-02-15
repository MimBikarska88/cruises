import Select from "../../../BaseComponents/Select/Select";
import TextInput from "../../../BaseComponents/TextInput/TextInput";
import TextArea from "../../../BaseComponents/TextArea/TextArea";
import styles from "../../../CruiseForm/CruiseForm.module.css";
const Platform = () => {
  return (
    <>
      <div className={`container ${styles["cruise-info"]}`}>
        <div className="row mb-5">
          <div className="col">
            <Select name="platforms" title="Platform Name*" />
          </div>
          <div className="col pt-3">
            <div className="d-flex">
              <div className="w-25 d-inline-block mr-3">
                <TextInput label="Code" name="platformCode" />
              </div>
              <div className="w-75 d-inline-block">
                <TextInput label="Name" name="platformName" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-7">
          <div className="col">
            <Select title="Platform Category*" />
          </div>
          <div className="col">
            <div className="pt-3">
              <TextInput
                name="platformCategoryCode"
                label="Code"
                disabled={true}
              />
            </div>
            <div className="pt-3">
              <TextInput
                name="platformCategoryName"
                label="Name"
                disabled={true}
              />
            </div>
            <div className="pt-3">
              <TextArea
                name="platformCategoryDefinition"
                label="Definition"
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Platform;
