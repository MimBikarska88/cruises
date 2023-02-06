import styles from "../CruiseForm.module.css";
const Cruise = () => {
  return (
    <>
      <div className={`container ${styles["cruise-info"]}`}>
        <div className="row mb-5">
          <h4 className="mt-3 mb-1 text-left">Period</h4>
          <div className="col">
            <div className="mt-10">
              <label
                className={`d-inline-block ${styles.label}`}
                htmlFor="startDate"
              >
                Start Date
              </label>
              <input
                type="datetime-local"
                name="startDate"
                className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
              />
            </div>
          </div>
          <div className="col">
            <div className="mt-10">
              <label
                className={`d-inline-block ${styles.label}`}
                htmlFor="endDate"
              >
                End Date
              </label>
              <input
                type="datetime-local"
                name="startDate"
                className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
              />
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <div className="pt-3">
              <h4 className="mt-3 mb-1 text-left">Country of Departure</h4>
              <select
                className={`btn-outline-dark rounded-0 custom-select single-input ${styles["single-input"]} ${styles["select"]}`}
              >
                <option className={`${styles["option"]}`}>English</option>
              </select>
            </div>
            <div className="d-flex pt-3">
              <div className="mr-2">
                <label
                  className={`d-inline-block ${styles.label}`}
                  htmlFor="name"
                >
                  Country
                </label>
                <input
                  disabled
                  type="text"
                  name="name"
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>

              <div>
                <label
                  className={`d-inline-block ${styles.label}`}
                  htmlFor="code"
                >
                  Code
                </label>
                <input
                  disabled
                  type="text"
                  name="code"
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="pt-3">
              <h4 className="mt-3 mb-1 text-left">Port of Departure</h4>
              <select
                className={`btn-outline-dark rounded-0 custom-select single-input ${styles["single-input"]} ${styles["select"]}`}
              >
                <option className={`${styles["option"]}`}>English</option>
              </select>
            </div>
            <div className="d-flex pt-3">
              <div className="mr-2">
                <label
                  className={`d-inline-block ${styles.label}`}
                  htmlFor="port"
                >
                  Port
                </label>
                <input
                  disabled
                  type="text"
                  name="port"
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>

              <div>
                <label
                  className={`d-inline-block ${styles.label}`}
                  htmlFor="code"
                >
                  Code
                </label>
                <input
                  disabled
                  type="text"
                  name="code"
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <div className="pt-3">
              <h4 className="mt-3 mb-1 text-left">Country of Return</h4>
              <select
                className={`btn-outline-dark rounded-0 custom-select single-input ${styles["single-input"]} ${styles["select"]}`}
              >
                <option className={`${styles["option"]}`}>English</option>
              </select>
            </div>
            <div className="d-flex pt-3">
              <div className="mr-2">
                <label
                  className={`d-inline-block ${styles.label}`}
                  htmlFor="returnCountryName"
                >
                  Country
                </label>
                <input
                  disabled
                  type="text"
                  name="returnCountryName"
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>

              <div>
                <label
                  className={`d-inline-block ${styles.label}`}
                  htmlFor="returnCountryCode"
                >
                  Code
                </label>
                <input
                  disabled
                  type="text"
                  name="returnCountryCode"
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="pt-3">
              <h4 className="mt-3 mb-1 text-left">Port of Return</h4>
              <select
                className={`btn-outline-dark rounded-0 custom-select single-input ${styles["single-input"]} ${styles["select"]}`}
              >
                <option className={`${styles["option"]}`}>English</option>
              </select>
            </div>
            <div className="d-flex pt-3">
              <div className="mr-2">
                <label
                  className={`d-inline-block ${styles.label}`}
                  htmlFor="returnPortName"
                >
                  Port
                </label>
                <input
                  disabled
                  type="text"
                  name="returnPortName"
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>

              <div>
                <label
                  className={`d-inline-block ${styles.label}`}
                  htmlFor="returnPortCode"
                >
                  Code
                </label>
                <input
                  disabled
                  type="text"
                  name="returnPortCode"
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <div className="pt-3">
              <h4 className="mt-3 mb-1 text-left">Data Access Restriction</h4>
              <select
                className={`btn-outline-dark rounded-0 custom-select single-input ${styles["single-input"]} ${styles["select"]}`}
              >
                <option className={`${styles["option"]}`}>academic</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="mt-10 pt-3">
              <label
                className={`d-inline-block ${styles.label}`}
                htmlFor="dataAccessRestrictionCode"
              >
                Code
              </label>
              <input
                type="text"
                disabled
                name="dataAccessRestrictionCode"
                className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
              />
            </div>
            <div className="mt-10">
              <label
                className={`d-inline-block ${styles.label}`}
                htmlFor="dataAccessRestrictionName"
              >
                Name
              </label>
              <input
                type="text"
                disabled
                name="dataAccessRestrictionName"
                className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
              />
            </div>
            <div className="mt-10">
              <label
                className={`d-inline-block ${styles.label}`}
                htmlFor="dataAccessRestictionDefinition"
              >
                Definition
              </label>
              <textarea
                className={`single-textarea btn-outline-dark ${styles["single-input"]}`}
                disabled
                name="dataAccessRestictionDefinition"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cruise;
