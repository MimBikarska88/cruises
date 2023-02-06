import styles from "../CruiseForm.module.css";
import TextArea from "../../BaseComponents/TextArea/TextArea";
import TextInput from "../../BaseComponents/TextInput/TextInput";
const Objectives = () => {
  return (
    <>
      <div className={`mt-2 container-fluid ${styles["organizations-info"]}`}>
        <TextArea
          label="Objective/Purpose of the cruise *"
          name="cruisePurpose"
        />
        <TextInput name="cruiseProjectName" label="Project" />
      </div>
    </>
  );
};
export default Objectives;
