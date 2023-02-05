import styles from ".././CruiseForm.module.css";
import Button from "../../BaseComponents/Button/Button";
const OrganizationList = ({
  Organizations = [],
  currentOrganization,
  setCurrentOrganization,
  closeList,
}) => {
  return (
    <>
      <h3 className="mb-3 p-1 text-center">List of organizations</h3>
      <div className="container">
        <div className={`row`}>
          <div className="col">
            <div className="d-grid table-row">
              <div className="p-1 col">
                <div
                  className={`progress-table ${styles["organizations"]} ${styles["organizations-info"]}`}
                >
                  <div className="p-1 table-head">
                    <div className="country p-1">Name</div>
                  </div>
                  {Organizations.map((o, index) => (
                    <div
                      className={`p-1 table-row ${styles["organization-names"]} `}
                      onClick={() =>
                        setCurrentOrganization(Organizations[index])
                      }
                    >
                      {o.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`col ${styles["organizations-info"]}`}>
            <div className="ml-4">
              <h4 className="pb-2">Cited Responsible party</h4>
              <div className="mt-10">
                <label className={`d-inline-block ${styles.label}`}>
                  Organization Name
                </label>
                <input
                  type="text"
                  name="organizationName"
                  disabled
                  value={currentOrganization.name}
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
              <div className="mt-10">
                <label className={`d-inline-block ${styles.label}`}>Code</label>
                <input
                  type="text"
                  name="code"
                  disabled
                  value={currentOrganization.code}
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
              <h4 className="pb-2">Contact Information</h4>
              <div className="mt-10">
                <label className={`d-inline-block ${styles.label}`}>
                  Phone
                </label>
                <input
                  type="text"
                  name="organizationPhone"
                  disabled
                  value={currentOrganization.phone}
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
              <div className="mt-10">
                <label className={`d-inline-block ${styles.label}`}>Fax</label>
                <input
                  type="text"
                  name="organizationName"
                  disabled
                  value={currentOrganization.fax}
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
              <h4 className="pb-2">Address</h4>
              <div className="mt-10">
                <label className={`d-inline-block ${styles.label}`}>
                  Delivery point
                </label>
                <input
                  type="text"
                  name="organizationName"
                  disabled
                  value={currentOrganization.deliveryPoint}
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
              <div className="mt-10">
                <label className={`d-inline-block ${styles.label}`}>City</label>
                <input
                  type="text"
                  name="organizationName"
                  disabled
                  value={currentOrganization.city}
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
              <div className="mt-10">
                <label className={`d-inline-block ${styles.label}`}>
                  Postal Code
                </label>
                <input
                  type="text"
                  name="organizationName"
                  disabled
                  value={currentOrganization.postalCode}
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
              <div className="mt-10">
                <label className={`d-inline-block ${styles.label}`}>
                  Country
                </label>
                <input
                  type="text"
                  name="organizationName"
                  disabled
                  value={currentOrganization.country}
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
              <div className="mt-10">
                <label className={`d-inline-block ${styles.label}`}>
                  Email
                </label>
                <input
                  type="text"
                  name="organizationName"
                  disabled
                  value={currentOrganization.email}
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
              <div className="mt-20">
                <label className={`d-inline-block ${styles.label}`}>
                  Web Site
                </label>
                <input
                  type="text"
                  name="organizationName"
                  disabled
                  value={currentOrganization.website}
                  className={`single-input d-inline-block btn-outline-dark ${styles["single-input"]}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          type="button"
          className="m-2"
          onClick={() => closeList()}
          value="Save"
        />
        <Button
          type="button"
          className="m-2"
          onClick={() => closeList()}
          value="Cancel"
        />
      </div>
    </>
  );
};

export default OrganizationList;
