import styles from "../CruiseForm.module.css";
const Identification = ({ identification, setIdentification }) => {
  return (
    <>
      <div className="mt-10">
        <label className={`d-inline-block ${styles.label}`} for="cruiseId">
          Cruise Id
        </label>
        <input
          type="text"
          name="cruiseId"
          disabled
          value={identification.cruiseId}
          className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
        />
      </div>
      <div className="mt-10">
        <label className={`d-inline-block ${styles.label}`} for="cruiseId">
          Cruise Name
        </label>
        <input
          type="text"
          name="cruiseId"
          required
          value={identification.cruiseName}
          onChange={(e) => {
            console.log(e.target.value);
          }}
          className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
        />
      </div>
      <div className="mt-10">
        <label className={`d-inline-block ${styles.label}`} for="cruiseId">
          Creation date
        </label>
        <input
          type="text"
          name="creationDate"
          required
          disabled
          value={identification.creationDate}
          onChange={(e) => {
            console.log(e.target.value);
          }}
          className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
        />
      </div>
      <div className="mt-10">
        <label className={`d-inline-block ${styles.label}`} for="cruiseId">
          Revision Date
        </label>
        <input
          type="text"
          name="revisionDate"
          required
          disabled
          value={identification.revisionDate}
          onChange={(e) => {
            console.log(e.target.value);
          }}
          className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
        />
      </div>
      <div className="mt-10">
        <label className={`d-inline-block ${styles.label}`} for="cruiseId">
          Author
        </label>
        <input
          type="text"
          name="author"
          required
          value={identification.author}
          onChange={(e) => {
            console.log(e.target.value);
          }}
          className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
        />
      </div>
    </>
  );
};

export default Identification;
