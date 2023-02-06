import styles from "../CruiseForm.module.css";
const Objectives = () => {
  return (
    <>
      <div className={`mt-2 container-fluid ${styles["organizations-info"]}`}>
        <label className={`d-inline-block ${styles.label}`} for="cruiseId">
          Objective/Purpose of the cruise *
        </label>
        <div className="mt-10">
          <textarea
            className={`single-textarea btn-outline-dark ${styles["single-input"]}`}
            required
            name="purpose"
          ></textarea>
        </div>
        <div className="mt-10">
          <label className={`d-inline-block ${styles.label}`} for="cruiseId">
            Project Name
          </label>
          <input
            type="text"
            name="projectName"
            className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
          />
        </div>
      </div>
    </>
  );
};
export default Objectives;
